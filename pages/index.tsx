import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () =>
  <div className={styles.container}>
    <Head>
      <title>Hello, World!</title>
      <link rel="icon" href="/favicon.ico"/>
    </Head>

    <main className={styles.main}>
      <h1 role="heading" className={styles.title}>
        Hello, World!
      </h1>
    </main>
  </div>

export default Home
