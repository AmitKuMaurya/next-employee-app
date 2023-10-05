import React, { useState } from 'react'
import Link from 'next/link';
import styles from "./Navbar.module.scss"
import Login from '@/component/login/Login';
export const Navbar: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    return (
        // <div className={styles.navbar}>Navbar</div>
        <>
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href={"/"}>
                {/* <p> */}
                    Logo
                    {/* </p> */}
                </Link>
            </div>
            <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
                <ul>
                    <li>
                        <Link href={"/"}>
                        {/* <p> */}
                            <Login/>
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
