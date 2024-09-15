"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { PrimaryButton } from "./Button"

export const AppBar=()=>{
    const session = useSession()
    return <div className="flex justify-between items-center p-3 border-b">
        <div className="font-semibold text-2xl">
            CDEX
        </div>
        <div>
            {session.data?.user ? <PrimaryButton onClick={()=>{
                signOut()
            }}>Log Out</PrimaryButton>: <PrimaryButton onClick={()=>{
                signIn()
            }}>Log In</PrimaryButton>}
        </div>
    </div>
}