import Head from 'next/head';
import { Title } from '../components/Title';
import { ListServices } from '../components/ListServices';
export default function Services() {
  return (
    <>
      <Head>
        <title>Serviços - Contábil Vitória</title>
        <meta name="title" content="Serviços - Contábil Vitória" />
      </Head>
      <main className="container content">
        <Title title="Serviços" description="conheça os nossos serviços" />
        <ListServices listServices desCalculator desDiagram desPersonalCard />
      </main>
    </>
  );
}
