'use client'
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
const Login = () => {
    const session = useSession();
    console.log(session);

    const isUserLoggedIn = session.status === "authenticated";
    return (
        <div>
            {isUserLoggedIn ? <button onClick={() => signOut('google')}>Logout</button> : <button onClick={() => signIn('google')}>Login with Google</button>}

        </div>
    )
}

export default Login