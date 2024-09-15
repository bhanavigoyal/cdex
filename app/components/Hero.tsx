"use client"
import { signIn, useSession } from "next-auth/react"
import { PrimaryButton, SecondaryButton } from "./Button";
import { useRouter } from "next/navigation";

export const Hero=()=>{

    const session = useSession();
    const router = useRouter();
    return <div className="flex flex-col items-center">
        <div className="text-4xl font-semibold">
            <span>
                India's Cryptocurrency
            </span>
            <span className="text-sky-700 pl-2">
                Exchange
            </span>
            <span>
                !
            </span>
        </div>
        <div className="pt-5 font-medium flex flex-col items-center">
            <div >
                Your All-in-One Crypto Wallet & Exchange — Simple, Secure, and Google Sign-In Ready!
            </div>
            <div className="pt-2">
                Trade and manage crypto with ease.
            </div>
        </div>
        <div className="pt-5">
            {session.data?.user ? <PrimaryButton onClick={()=>{
                router.push("/dashboard")
            }}>Go to DashBoard</PrimaryButton>:<SecondaryButton onClick={()=>{
                signIn("google")
            }}>Sign In with Google</SecondaryButton>}
        </div>
    </div>
}