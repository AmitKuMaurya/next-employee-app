"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import GOOGLE_LOGO from "../../../public/images/googleLogo.png";
import styles from "./Login.module.scss";

const Login = () => {
  const session = useSession();

  const loggedUser = localStorage.setItem("user", JSON.stringify(session));

  const isUserLoggedIn = session.status === "authenticated";
  return (
    <div>
      {isUserLoggedIn ? (
        <div className={styles.container}>
          <p>Plesae SignOut Here.</p>

          <p>SignOut</p>

          <button
            onClick={() => {
              localStorage.clear();
              signOut("google");
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className={styles.container}>
          <p>Please Login To Continue.</p>

          <p>SignIn</p>

          <button onClick={() => signIn("google")}>
            {" "}
            <Image src={GOOGLE_LOGO} height={45} width={45} alt="google_logo" />
            Login with Google
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
