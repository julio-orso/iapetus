/* eslint-disable no-redeclare */
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { RichText } from 'prismic-dom'
import { getPrismicClient } from '../../services/prismic'
import styles from './post.module.scss'
interface Post {
  slug: string
  title: string
  content: string
}
interface PostProps {
  post: Post
}
export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>{post.title} - Contábil Vitória</title>
        <meta name="title" content={`${post.title} - Contábil Vitória`} />
      </Head>
      <main className="container content">
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
    </>
  )
}
export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const { slug }: any = params
  const prismic = getPrismicClient(req)
  const response = await prismic.getByUID('publication', String(slug), {})
  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
  }
  return { props: { post } }
}
