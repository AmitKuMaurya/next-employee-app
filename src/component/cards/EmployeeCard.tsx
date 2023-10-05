import React from 'react'
import styles from "./EmployeeCard.module.scss"
const EmployeeCard = ({ _id, avatar, email, gender, phone, status, username }: IEmployeee) => {
  // console.log('avatar: ', avatar.url);

  return (
    
    <>
       <div className={styles.container}>
        <img src={avatar.url} height={65} width={72} alt={avatar.public_id} />
        <p>{username}</p>
        <p>{email}</p>{"   "}
        <div>{phone}</div>
        <p>{gender}</p>
        <div>{status}</div>

      </div>
     </>

  )
}

export default EmployeeCard;