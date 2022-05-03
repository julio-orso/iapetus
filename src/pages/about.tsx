import Head from 'next/head';
import { Title } from '../components/Title';
import styles from '../styles/pages/about.module.scss';
export default function About() {
  return (
    <>
      <Head>
        <title>Sobre nós - Contábil Vitória</title>
        <meta name="title" content="Sobre nós - Contábil Vitória" />
      </Head>
      <main className={`${styles.about} container content`}>
        <Title title="Sobre nós" description="conheça a nossa história" />
        <div className={styles.texts}>
          <p>
            A Contábil Vitória iniciou em 2017 atividades voltadas a prestação
            de serviços na área contábil. O cliente é a prioridade da Contábil
            Vitória, que visa mantê-lo informado e buscando soluções rápidas e
            seguras, para que no mundo acelerado as avaliações e decisões
            aconteçam com velocidade, a fim de que o cliente não perca tempo nem
            dinheiro. Além das atividades inerentes a área contábil, a empresa
            presta serviços na área financeira, cálculos revisionais de
            financiamentos, trabalhistas e imobiliários, emitindo parecer;
            declaração de imposto de renda de pessoas físicas e jurídicas. A
            Contábil Vitória tem como lema: Soluções descomplicadas e eficazes.
            A orientação ao cliente sobre as mudanças que acontecem no dia a
            dia, é uma constante. Trabalha de forma diferente, junto aos
            colaboradores, buscando assim uma maior aproximação com os clientes,
            além de visitas periódicas para orientação.
          </p>
          <i>
            Os sócios: Severino Camilo Giacomini (CRC-SC 16.794/O-3) e Rossilane
            Fatima Joaquim Neves (CRC-SC 029268/O-3)
          </i>
        </div>
      </main>
    </>
  );
}
