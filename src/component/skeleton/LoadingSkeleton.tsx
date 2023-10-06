import React from "react";
import styles from "./Loader.module.scss";
const LoadingSkeleton = () => {
  return (
    <div className={styles.loadingSkeleton}>
      <div></div>
    </div>
  );
};

export default LoadingSkeleton;
