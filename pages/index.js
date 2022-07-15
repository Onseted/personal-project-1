import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>전진의 자기소개 페이지</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EC%A0%84%EC%A7%84">Welcome to Jin`s pages:)</a>
        </h1>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <img className={styles.info_img} src="/me.jpeg"></img>
            <p>How do I look like</p>
          </a>

          <a href="" className={styles.card}>
            <img className={styles.info_img} src="/contact.jpg"></img>
            <p>E-mail : 21700645@handong.ac.kr <br/> phone : 010-6309-1142 </p> 

          </a>

          <a
            href=""
            className={styles.card}
          >
            <img className={styles.info_img} src="/code.jpg"></img>
            <p>Git Repository as Developer</p>
          </a>
        </div>
      </main>


      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Modified by jin
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
