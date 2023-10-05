import React from 'react';
import styles from "./Loader.module.scss";
const LoadingSkeleton = () => {
  return (
    <div className={styles.loadingSkeleton} >Fetching Data...</div>
  )
}

export default LoadingSkeleton;