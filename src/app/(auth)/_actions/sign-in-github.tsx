'use client'

import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"
import { SiGithub } from "react-icons/si"

export default function GithubLogin() {
  return (
    <Button
      onClick={() => {
        // Remove async/await here since signIn returns a Promise
        // and we're not using headers API
        signIn("github", { 
          callbackUrl: `/upload`
        })
      }}
    >
      <SiGithub />
      Entrar com Github
    </Button>
  )
}
