import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Introduction of Jin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
        <h1 className={styles.title}>
          <p>Hello, This is Jin.</p>
          <img className={styles.me_img} src = "/me.jpg"> 
            </img>
        </h1>

        <div className={styles.grid}>
          <a href="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EC%A0%84%EC%A7%84" 
            className={styles.card}>
            <img className={styles.info_img} src="/intro.jpg"></img>
            <h2>Self Introduction</h2>
            <p>
              Student of Handong Univ. 
              <br></br>
              Interest lies in NLP(STT).
            </p>
          </a>

          <a className={styles.card}>
            <img className={styles.info_img} src="/contact.jpg"></img>
            <h2>
              Contact
            </h2>
            <p>
              E-mail : 21700645@handong.ac.kr  
              <br></br>
              phone : 010-6309-1142 
            </p>
          </a>
          <a
            href="https://github.com/Onseted"
            className={styles.card}
          >
            <img className={styles.info_img} src="/code.jpg"></img>
            <h2>Git Repository as Developer</h2>
            <p> Click this card to move Jin`s Repository. </p>
          </a>
        </div>
      </main>


      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copywrite : VERCEL
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
