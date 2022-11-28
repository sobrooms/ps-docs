import Link from 'next/link'
import Head from 'next/head'
import s from '../styles/fof.module.css'
export default function Custom404() {
  return (
    <>
      <div className={s.container}>
        <Head>
          <title>404</title>
          <meta name="description" content="Omg nonexistent page 😭😍😱😱" />
          <meta name="theme-color" content="#c7a09d" />
          <link rel="shortcut icon" href="./public/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
        </Head>
        <main className={s.main}>
          <h1 className={s.title}>404</h1>
          That page of the documentation does not exist.
          <p />
          <Link href="/">Go back &larr;</Link>
        </main>
      </div>
    </>
  )
}