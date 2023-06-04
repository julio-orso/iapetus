import Link from 'next/link'
import Image from 'next/image'
import styles from './styles.module.scss'
import { ActiveLink } from '../ActiveLink'
import Facebook from '../../assets/facebook.svg'
import IconButtonTop from '../../assets/top.svg'
import Instagram from '../../assets/instagram.svg'

import React from 'react'
export function Footer() {
  const [date, setDate] = React.useState(0)
  const getYear = () => setDate(new Date().getFullYear())
  React.useEffect(() => getYear(), [])
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <footer className={styles.footer}>
      <div className={`${styles.content} container`}>
        <div className={styles.logo}>
          <div>
            <Image
              src="/logo-footer.svg"
              alt="Logo footer"
              width={82}
              height={70}
            />
            <h1>
              Realizando sonhos<span>.</span>
            </h1>
          </div>
          <p>
            Contábil Vitória 2017 - {date}
            <br />
            Todos os direitos reservados <br />
            Desenvolvido com <b> ❤</b> por
            <Link href="https://pollarcode.com">
              <a target="_blank"> Pollar Code</a>
            </Link>
          </p>
        </div>
        <nav className={styles.navContent}>
          <h3>Mapa do Site</h3>
          <ul>
            <li>
              <ActiveLink activeClassName={styles.active} href="/agenda">
                <a>Agenda</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName={styles.active} href="/news">
                <a>Notícias</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName={styles.active} href="/services">
                <a>Serviços</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName={styles.active} href="/about">
                <a>Sobre</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName={styles.active} href="/contact">
                <a>Contato</a>
              </ActiveLink>
            </li>
          </ul>
        </nav>
      </div>
      <nav className={styles.nav}>
        <div className={`container ${styles.copyContent}`}>
          <div className={styles.social}>
            <Link href="https://www.facebook.com/">
              <a target="_blank">
                <Facebook />
              </a>
            </Link>
            <Link href="https://www.instagram.com/">
              <a target="_blank">
                <Instagram />
              </a>
            </Link>
          </div>
          <button onClick={scrollToTop}>
            <IconButtonTop />
          </button>
        </div>
      </nav>
    </footer>
  )
}
