import { TokenDetails } from "@/app/lib/tokens";
import axios from "axios";
import { useEffect, useState } from "react";

export interface TokenWithBalance extends TokenDetails{
    balance:string,
    usdBalance:string
}

export function useTokens(address:string){
    const [tokenBalances, setTokenBalances] = useState<{
        totalBalance:number,
        tokens: TokenWithBalance[]
    }| null>(null);

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        try{
            axios.get(`/api/tokens?address=${address}`)
                .then(res=>{
                    setTokenBalances(res.data);
                    setLoading(false)
                })
        }catch(e){
            console.error(e)
        }
    },[])

    return {
        loading, tokenBalances
    }
}