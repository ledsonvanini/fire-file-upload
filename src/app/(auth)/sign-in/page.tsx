'use client'

import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"
import GoogleLogin from '@/app/(auth)/_actions/sign-in-google'
import GithubLogin from '@/app/(auth)/_actions/sign-in-github'

export default function LoginHandler() {
  return (
    <div className="flex flex-col 
        mt-12 text-center gap-4 
        w-full max-w-96 p-8 m-auto bg-white rounded-lg"
    >
      <h3 className="text-3xl font-bold">Área restrita</h3>
      <span className="text-xl">Faça Login para continuar</span>
      <div className="flex justify-center gap-4 text-center">
        <GoogleLogin />
        <GithubLogin />
      </div>
    </div>
    
  )
}

