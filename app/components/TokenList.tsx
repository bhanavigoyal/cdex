import { TokenWithBalance } from "../api/hooks/useTokens";

export function TokenList({tokens}:{
    tokens: TokenWithBalance[]
}){
    return <div>
        {tokens.map(token=><TokenRow key={token.name} token={token}/>)}
    </div>
}

function TokenRow({token}:{
    token:TokenWithBalance
}){
    return <div className="flex justify-between">
        <div className="flex">
            <div>
                <img src={token.image} className="h-10 w-10 rounded-full mr-2" />
            </div>
            <div>
                <div className="font-bold">
                    {token.name}
                </div>
                <div className="font-thin">
                    1 {token.name} = ~${token.price}
                </div>
            </div>

        </div>
        <div>
            <div className="font-bold flex justify-end">
                {token.blance}
            </div>
            <div className="font-thin flex justify-end">
                {token.usdBalance}
            </div>
        </div>
    </div>
}