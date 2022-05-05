import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { RichText } from 'prismic-dom';
import Prismic from '@prismicio/client';
import Notebook from '../assets/notebook.svg';
import ArrowLeft from '../assets/arrow-left.svg';
import styles from '../styles/pages/home.module.scss';
import { getPrismicClient } from '../services/prismic';
import { ListServices } from '../components/ListServices';
type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
};
interface PostsProps {
  posts: Post[];
}
export default function Home({ posts }: PostsProps) {
  return (
    <>
      <Head>
        <title>Soluções Contábeis - Contábil Vitória</title>
        <meta name="title" content="Soluções Contábeis - Contábil Vitória" />
      </Head>
      <main>
        <section className={styles.banner}>
          <div className={`${styles.content} container`}>
            <div className={styles.texts}>
              <h1>O que a Contabilidade pode fazer pela sua empresa?</h1>
              <blockquote>
                {`"Deixe a contabilidade fazer parte do sucesso da sua empresa,
                como ciência que lhe ensina a usar os números ao seu favor."`}
              </blockquote>
              <Link href="/contact">
                <a>
                  Fale Conosco
                  <ArrowLeft />
                </a>
              </Link>
            </div>
            <img
              alt="Hero Image"
              src="/image-banner.svg"
              className={styles.heroImage}
            />
          </div>
        </section>
        <section>
          <ListServices listServices />
        </section>
        <section className={`${styles.news} container`}>
          <h2 className={styles.subtitle}>Notícias</h2>
          <div className={styles.posts}>
            {posts.map((post) => (
              <Link href={`/news/${post.slug}`} key={post.slug}>
                <a>
                  <div>
                    <time>{post.updatedAt}</time>
                    <h2>{post.title}</h2>
                    <p>{post.excerpt}</p>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </section>
        <section className={`${styles.about} container`}>
          <h2 className={styles.subtitle}>Sobre</h2>
          <p>
            A Contábil Vitória iniciou em 2017 atividades voltadas a prestação
            de serviços na área contábil. O cliente é a prioridade da Contábil
            Vitória, que visa mantê-lo informado e buscando soluções rápidas e
            seguras, para que no mundo acelerado as avaliações e decisões
            aconteçam com velocidade, a fim de que o cliente não perca tempo nem
            dinheiro.
          </p>
        </section>
        <section className={`${styles.agenda} container`}>
          <Link href="/agenda">
            <a>
              <i>
                <Notebook />
              </i>
              <span>Confira a Agenda Tributária </span>
            </a>
          </Link>
        </section>
      </main>
    </>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'publication')],
    {
      fetch: ['publication.title', 'publication.content'],
      orderings: '[document.last_publication_date desc]',
      pageSize: 3,
    },
  );
  const posts = response.results.map((post) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt:
        post.data.content.find((content: any) => content.type === 'paragraph')
          ?.text ?? '',
      updatedAt: new Date(post.first_publication_date!).toLocaleString(
        'pt-BR',
        {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        },
      ),
    };
  });
  return { props: { posts }, revalidate: 60 * 30 };
};
