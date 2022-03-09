import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useMedia from '../../hooks/useMedia';
import { ActiveLink } from '../ActiveLink';
import { ButtonMenu } from '../ButtonMenu';
import styles from './styles.module.scss';

export function Nav() {
  const mobile = useMedia('(max-width: 768px)');
  const [mobileMenu, setMobileMenu] = useState(false);
  const { pathname } = useRouter();
  useEffect(() => setMobileMenu(false), [pathname]);
  return (
    <>
      {mobile && (
        <ButtonMenu onClick={() => setMobileMenu(!mobileMenu)} mobileMenu />
      )}
      {mobileMenu && (
        <div
          className={styles.outsideClick}
          onClick={() => setMobileMenu(false)}
        />
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
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
    </>
  );
}
