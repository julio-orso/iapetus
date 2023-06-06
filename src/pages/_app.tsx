import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import '../styles/globals.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Toaster position="bottom-right" />
      <Component {...pageProps} />
      <Analytics />
      <Footer />
    </>
  )
}
