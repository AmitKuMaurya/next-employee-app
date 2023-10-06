import React from "react";
import styles from "./UserCard.module.scss";
const UserCard = () => {
    const loggedInUser = localStorage.getItem("user");

    const parsedData: IOAuth | null = JSON.parse(loggedInUser || 'null');

    return (
        <>
            <div className={styles.userInfo}>
                <img src={parsedData?.data?.user.image} alt={`${parsedData?.data?.user.name} logo`} />
                <p>Name : {parsedData?.data?.user.name}</p>
            </div>
            <div className={styles.userDetails}>
                <p>Email : {`${parsedData?.data?.user.email}`}</p>
                <p>Expiry : {`${parsedData?.data?.expires}`}</p>
            </div>
        </>
    );
};

export default UserCard;
