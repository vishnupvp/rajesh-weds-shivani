import React from "react";
import styles from '../styles/Arrow.module.scss'

 const Arrow = () => {
    return (
        <div className={styles.container}>
            <div className={styles.chevron}></div>
            <div className={styles.chevron}></div>
            <div className={styles.chevron}></div>
        </div>
    )
}

export default Arrow;