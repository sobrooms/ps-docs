import Link from 'next/link'
import s from '../styles/fof.module.css'
export default function Custom404() {
  return (
    <>
      <div className={s.container}>
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