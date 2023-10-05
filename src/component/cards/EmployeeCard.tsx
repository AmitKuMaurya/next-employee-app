import React from 'react'
import styles from "./EmployeeCard.module.scss"
  const EmployeeCard = ({ _id, avatar,email, gender,phone,status,username} : IEmployeee) => {
    // console.log('avatar: ', avatar.url);

    return (
      <div className={styles.container} >
        <div >
          <img src={avatar.url} alt={avatar.public_id}/>
          <h2>{username}</h2>
          <h3>{email}</h3>
          <h3>{phone}</h3>
          <span>{gender}</span>{"  "}<span>{status}</span>
        </div>
      </div>
    )
  }

export default EmployeeCard;