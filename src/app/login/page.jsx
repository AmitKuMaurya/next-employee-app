'use client'
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
const Login = () => {
    const session = useSession();
    console.log(session);
    // if() {

    // }
    const s = session.status === "authenticated"
    return (
        <div>
            <>
                <button onClick={() => signIn('google')}>Login with Google</button>
            </>
            <>
                <button onClick={()=>signOut('google')}>Logout</button>
            </>
        </div>
    )
}

export default Login