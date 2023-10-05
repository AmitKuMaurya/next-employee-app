'use client'
import React, { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import styles from './Login.module.scss';


const Login = () => {
    const session = useSession();
    const loggedUser = localStorage.setItem("user",JSON.stringify(session));
    console.log('loggedUser: ', loggedUser);

    const isUserLoggedIn = session.status === "authenticated";


    return (
        < >

            {isUserLoggedIn ? <>

                {/* <div className={styles.profileDropdown}> */}
                    {/* <button onClick={toggleDropdown} className={styles.profileIcon}>
                        <img src={`${session.data.user.image}`} alt={`${session.data.user.name} logo`} />
                        <span>{session.data.user.name}</span>
                    </button> */}
                    {/* {isOpen && ( */}

                    {/* // )} */}
                {/* </div> */}

                {/* </nav> */}
            </> : <button onClick={() => signIn('google')}>Login with Google</button>}

        </>
    )
}

export default Login;