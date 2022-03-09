import Head from 'next/head';
import { ListServices } from '../components/ListServices';
import { Title } from '../components/Title';
export default function Services() {
  return (
    <>
      <Head>
        <title>Serviços - Contábil Vitória </title>
        <meta
          name="description"
          content="Serviços O cliente é a prioridade da Contábil Vitória, que visa mantê-lo informado e buscando soluções rápidas e seguras, para que no mundo acelerado as avaliações e decisões aconteçam com velocidade, a fim de que o cliente não perca tempo nem dinheiro.s"
        />
        <meta name="title" content="Serviços - Contábil Vitória" />
      </Head>
      <main className="container content">
        <Title title="Serviços" description="conheça os nossos serviços" />
        <ListServices listServices desCalculator desDiagram desPersonalCard />
      </main>
    </>
  );
}
