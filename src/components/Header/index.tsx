import Link from 'next/link';
import styles from './styles.module.scss';
import Logo from '../../assets/logo.svg';
import { Nav } from '../Nav';

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <div className={styles.navContent}>
          <Nav />
        </div>
      </nav>
    </header>
  );
}
