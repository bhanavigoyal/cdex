import axios from "axios";
import { SUPPORTED_TOKENS } from "./tokens";
import { Connection } from "@solana/web3.js";

let LAST_UPDATED:number|null = null;
let prices:{[key:string]:{
    price:string
}} = {}

export const connection = new Connection("https://api.devnet.solana.com/")

const TOKEN_PRICE_REFRESH_INTERVAL = 60 * 1000;

export async function getSupportedTokens(){
    if(!LAST_UPDATED || new Date().getTime() - LAST_UPDATED < TOKEN_PRICE_REFRESH_INTERVAL ){
        try{
            const response = await axios.get("https://price.jup.ag/v6/price?ids=SOL,USDC,USDT");
            prices = response.data.data,
            LAST_UPDATED = new Date().getTime()

        }catch(e){
            console.error(e)
        }
    }

    return SUPPORTED_TOKENS.map(token=>({
        ...token,
        price: prices[token.name].price
    }))
}

getSupportedTokens();