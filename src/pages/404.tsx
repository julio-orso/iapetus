import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/pages/pageNotFound.module.scss'
export default function PageNotFound() {
  return (
    <>
      <Head>
        <title>Página não encontrada - Contábil Vitória</title>
        <meta name="title" content="Página não encontrada - Contábil Vitória" />
      </Head>
      <main className="container content">
        <section className={styles.pageNotFound}>
          <img
            src="/image-page-not-found.svg"
            alt="Image Page Not Found"
            className={styles.hero}
          />
          <h2>Página não encontrada</h2>
          <p>Desculpe, página não encontrada</p>
          <Link href="/">
            <a>Voltar ao início</a>
          </Link>
        </section>
      </main>
    </>
  )
}
