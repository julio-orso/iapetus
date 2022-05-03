import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import styles from './styles.module.scss';
import { Title } from '../../components/Title';
import { getPrismicClient } from '../../services/prismic';
type Post = {
  slug: string;
  title: string;
  excerpt: string;
  createdAt: string;
};
interface PostsProps {
  posts: Post[];
}
export default function News({ posts }: PostsProps) {
  return (
    <>
      <Head>
        <title>Notícias - Contábil Vitória</title>
        <meta name="title" content="Notícias - Contábil Vitória" />
      </Head>
      <main className="container content">
        <Title title="Notícias" />
        <div className={styles.posts}>
          {posts.map((post) => (
            <Link href={`/news/${post.slug}`} key={post.slug}>
              <a>
                <div>
                  <time>{post.createdAt}</time>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
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
    },
  );
  const posts = response.results.map((post) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt:
        post.data.content.find((content: any) => content.type === 'paragraph')
          ?.text ?? '',
      createdAt: new Date(post.first_publication_date!).toLocaleString(
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
