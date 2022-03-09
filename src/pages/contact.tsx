import Head from 'next/head';
import { useState } from 'react';
import { Input } from '../components/Form/Input';
import { Textarea } from '../components/Form/Textarea';
import { Title } from '../components/Title';
import styles from '../styles/pages/contact.module.scss';
export default function Services() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <>
      <Head>
        <title>Contato - Contábil Vitória </title>
        <meta name="title" content="Contato - Contábil Vitória" />
      </Head>
      <main className={`${styles.contact} container content`}>
        <Title
          title="Entre em Contato Conosco"
          description="geralmente respondemos em até 24h"
        />
        <div>
          <form action="" className={styles.form}>
            <Input
              required
              name="name"
              type="text"
              value={name}
              label="Nome Completo"
              onChange={({ target }) => setName(target.value)}
            />
            <Input
              required
              name="email"
              label="E-mail"
              value={email}
              type="email"
              onChange={({ target }) => setEmail(target.value)}
            />
            <Textarea
              required
              name="textarea"
              value={message}
              label="Mensagem"
              onChange={({ target }) => setMessage(target.value)}
            />
          </form>
        </div>
      </main>
    </>
  );
}
