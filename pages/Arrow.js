import React from "react";
import styles from '../styles/Arrow.module.scss'

export default Arrow () => {
    return (
        <div className={styles.container}>
            <div className={styles.chevron}></div>
            <div className={styles.chevron}></div>
            <div className={styles.chevron}></div>
        </div>
    )
}