import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Timer from './Timer'
import Arrow from "./Arrow"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rajesh &amp; Shivani</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.wrapper}>
          <div className={styles.inner}>
          {/* <Timer /> */}
          <img className={styles.divider} src="/images/divider.png" alt="Vercel Logo" />

            <div className={styles.welcomeText}>
              Together with their families
            </div>
            <div className={styles.leadText}>
              <div>Rajesh</div>
              <small>&amp;</small>
              <div>Shivani</div>
              </div>
              <div className={styles.welcomeText2}>
             request the honor of your presence and blessings on the auspicious occasion of the wedding ceremony
             </div>

              <div className={styles.arrowSection}>
              <Arrow />
                </div>
          </div>
        </div>
    <div>

      
    </div>
    </div>
  )
}