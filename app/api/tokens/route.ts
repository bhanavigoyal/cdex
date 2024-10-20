import { connection, getSupportedTokens } from "@/app/lib/constants";
import { getAccount, getAssociatedTokenAddress, TokenAccountNotFoundError } from "@solana/spl-token";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const {searchParams} = new URL(req.url);
    const address = searchParams.get("address") as unknown as string;

    if(!address){
        return NextResponse.json({
            error: "address parameter missing"
        },{
            status: 400
        })
    }

    try{
        const supportedTokens = await getSupportedTokens();
        const balances = await Promise.all(supportedTokens.map(token=>getAccountBalance(token, address)));
    
        const tokens = supportedTokens.map((token,index)=>({
            ...token,
            balance: balances[index].toFixed(2),
            usdBalance: (balances[index] * Number(token.price)).toFixed(2)
        }));
    
        return NextResponse.json({
            tokens,
            totalBalance: tokens.reduce((acc, val)=> acc+Number(val.usdBalance),0).toFixed(2)
        })
    }catch(e){
        console.error("Error fetching token balances: ", e);
        return NextResponse.json({
            error: "Failed to fetch tokens"
        },{
            status: 500
        })
    }

}

async function getAccountBalance(token:{
    name:string,
    mint:string,
    image:string,
    native:boolean,
    decimals:number
}, address:string){

    try{

        if(token.native){
            let balance = await connection.getBalance(new PublicKey(address));
            return balance/LAMPORTS_PER_SOL;
        }

        const ata = await getAssociatedTokenAddress(new PublicKey(token.mint), new PublicKey(address));
        try{

            const account = await getAccount(connection, ata);
            return Number(account.amount)/(10 ** token.decimals)
        }catch(e){
            if (e instanceof TokenAccountNotFoundError) {
                console.warn(`No associated token account found for ${token.name} at ${address}.`);
                return 0;
            }

            console.error(`Error fetching balance for token ${token.name}:`, e);
            return 0;
        }

    }catch(e){
        console.error(`Error fetching balance for token ${token.name}:`, e);
        return 0;
    }
}