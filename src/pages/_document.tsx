import Document, { Head, Html, Main, NextScript } from 'next/document';
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="Serviços O cliente é a prioridade da Contábil Vitória, que visa mantê-lo informado e buscando soluções rápidas e seguras, para que no mundo acelerado as avaliações e decisões aconteçam com velocidade, a fim de que o cliente não perca tempo nem dinheiro."
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
