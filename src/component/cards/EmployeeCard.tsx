import React from 'react'
import styles from "./EmployeeCard.module.scss"
const EmployeeCard = ({ avatar, email, gender, phone, status, username }: IEmployeee) => {

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