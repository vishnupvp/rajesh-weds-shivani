import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { useEffect, useState } from 'react'


export default function Home() {
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 3000)
  })
  return (
    <div className={styles.container}>
      <Head>
        <title>Shivani &amp; Rajesh</title>
        <meta name="description" content="Wedding Invitation" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c"></meta>
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      {loader ? <div className={styles.loader}>

        <div className={styles.spinner}>
          <div className={`${styles.Loaderheart} ${styles.heart1}`}></div>
          <div className={`${styles.Loaderheart} ${styles.heart2}`}></div>
          <div className={`${styles.Loaderheart} ${styles.heart3}`}></div>
        </div>
        loading...

      </div> : null}

      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <section className={styles.contentSection}>
            <div>
              <img className={`${styles.flower} ${styles.flowerTop}`} src="/images/frame.png" alt="Frame" />
            </div>
            <div className={styles.body}>
              <img className={styles.divider} src="/images/divider.png" alt="Divider" />
              <div className={styles.welcomeText}>
                Together with their families
              </div>
              <div className={styles.imgContainer}>
                <img className={styles.mainImg} src="/images/rajesh-shivani.png" alt="Caricature" />
                <div className={styles.heartWrap}>
                  <div className={styles.heart}></div>
                </div>
              </div>
              <div className={styles.welcomeText2}>
                request the honor of your presence on the auspicious occasion of the wedding ceremony of
              </div>
              <div className={styles.leadText}>
                <div>Shivani</div>
                <small>&amp;</small>
                <div>Rajesh</div>
              </div>
              <div className={styles.timings}>
                <div>
                  <h4>Wedding </h4>
                  <div>
                    Thursday, 09th September 2021
                  </div>
                  <div>
                    between 7.30am and 9.00am
                  </div>
                </div>
                <div>
                  <h4>Reception </h4>
                  <div>
                    Wednesday, 08th September 2021
                  </div>
                  <div>
                    6.30pm onwards
                  </div>
                </div>
                <div>
                  <h4>Venue </h4>
                  <div>
                    Hotel Green Park - Vijaya hall, <br />
                    <small>Vadapalani (Near Forum Mall)</small>
                  </div>
                </div>
              </div>
              <div className="mt-4"></div>
              <div className="ratio ratio-16x9">
                <iframe className={styles.iframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7574271775884!2d80.2061123152703!3d13.05110651665881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266c2215d05b1%3A0xc998f6b89098b46f!2sHotel%20Green%20Park!5e0!3m2!1sen!2sin!4v1630072027115!5m2!1sen!2sin" allowFullScreen loading="lazy"></iframe>
              </div>
            </div>
            <div className="mt-4">
              <img className={`${styles.flower} ${styles.flowerBottom}`} src="/images/frame.png" alt="Frame" />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
