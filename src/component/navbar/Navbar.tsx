import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from "./Navbar.module.scss"
import { signOut } from "next-auth/react";
import Logo from "../../../public/images/CARTOON_NETWORK_logo.png"
import Login from '@/app/login/page';
export const Navbar: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href={"/"}>
                    
                    <Image src={Logo} height={30} width={50} alt="cartoon_network" />
                </Link>
            </div>
            <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
                <ul>
                    <li>
                        <Link href={"/"}>
                        {/* <p> */}
                            {/* <Login/> */}
                            {/* <button onClick={} >Logout</button> */}
                            {/* </p> */}
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.menuIcon} onClick={toggleNavbar}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            </div>
        </nav>
        </>

    )

}
