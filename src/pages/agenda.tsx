import Link from 'next/link';
import Head from 'next/head';
import { Title } from '../components/Title';
import { TableBig } from '../components/TableBig';
import { TableSmall } from '../components/TableSmall';
import styles from '../styles/pages/agenda.module.scss';
export default function Agenda() {
  return (
    <>
      <Head>
        <title>Agenda Tributária - Contábil Vitória</title>
        <meta name="title" content="Agenda Tributária - Contábil Vitória" />
      </Head>
      <main className={`${styles.agenda} container content`}>
        <Title title="Agenda Tributária" />
        <div className={styles.tables}>
          <TableBig />
        </div>
        <div className={styles.link}>
          <p>
            Se preferir acesse o site da Receita Federal (escolha o Mês e clique
            em "Data de Vencimento")
          </p>
          <Link href="https://www.gov.br/pt-br">
            <a className={styles.a} target="_blank">
              Agenda Tributária da Receita Federal
            </a>
          </Link>
        </div>
        <div className={styles.tables}>
          <TableSmall />
        </div>
      </main>
    </>
  );
}
