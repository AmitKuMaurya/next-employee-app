'use client'
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
const Login = () => {
    const session = useSession();
    console.log(session);
    
    const isUserLoggedIn = session.status === "authenticated";
    return (
        <div>
            {isUserLoggedIn ? <>
            <img style={{borderRadius : "50%"}} src={session.data.user.image} alt={`${session.data.user.name} logo`} />
            <p>{session.data.user.name}</p>
            <p>{session.data.user.email}</p>
            <p>{session.data.expires}</p>
            <button onClick={() => signOut('google')}>Logout</button>
            </> : <button onClick={() => signIn('google')}>Login with Google</button>}
            {/* <>
                <button onClick={() => signIn('google')}>Login with Google</button>
            </>
            <>
                <button onClick={()=>signOut('google')}>Logout</button>
            </> */}
        </div>
    )
}

export default Login;