import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import { signOut } from "next-auth/react";
import Logo from "../../../public/images/CARTOON_NETWORK_logo.png";
export const Navbar = () => {
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
        <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
          <ul>
            <li>
              <Link href={"/"}>
                <button className={styles.logout}
                  onClick={() => {
                    localStorage.clear();
                    signOut("google");
                  }}
                >
                  Logout
                </button>
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
  );
};
