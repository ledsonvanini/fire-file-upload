// "use client";
// import Link from "next/link";

// export default function SigninButton() {
//   return (
//     <div>
//       <Link href={`/sign-in`}>Login</Link>
//     </div>
//   );
// }
'use client'

import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"
import { SiGoogle } from "react-icons/si"

export default function GoogleLogin() {
  return (
    <Button
      onClick={() => {
        // Remove async/await here since signIn returns a Promise
        // and we're not using headers API
        signIn("google", { 
          callbackUrl: `/upload`
        })
      }}
    >
      <SiGoogle />
      Entrar com Google
    </Button>
  )
}
