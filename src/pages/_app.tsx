import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Toaster } from 'react-hot-toast';
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Toaster position="bottom-right" />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
