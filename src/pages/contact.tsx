import Head from 'next/head';
import { FormEvent, useState } from 'react';
import { Title } from '../components/Title';
import { Input } from '../components/Form/Input';
import { Textarea } from '../components/Form/Textarea';
import styles from '../styles/pages/contact.module.scss';
import Location from '../assets/location.svg';
import Clock from '../assets/clock.svg';
import Mail from '../assets/mail.svg';
import { sendContactMail } from '../services/sendMail';
import toast from 'react-hot-toast';

export default function Services() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (loading) return;
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast('Preencha todos os campos para enviar sua mensagem!', {
        style: {
          background: 'var(--green)',
          color: 'var(--white)',
        },
      });
      return;
    }

    try {
      setLoading(true);
      await sendContactMail(name, email, message);
      setName('');
      setEmail('');
      setMessage('');
      toast('Mensagem enviada com sucesso!', {
        style: {
          background: '#31aa39',
          color: 'var(--white)',
        },
      });
    } catch (error) {
      toast('Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!', {
        style: {
          background: '#f64540',
          color: 'var(--white)',
        },
      });
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <Head>
        <title>Contato - Contábil Vitória</title>
        <meta name="title" content="Contato - Contábil Vitória" />
      </Head>
      <main className={`${styles.contact} container content`}>
        <Title
          title="Entre em Contato Conosco"
          description="geralmente respondemos em até 24h"
        />
        <div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <Input
              name="name"
              type="text"
              value={name}
              label="Nome Completo"
              onChange={({ target }) => setName(target.value)}
            />
            <Input
              name="email"
              label="E-mail"
              value={email}
              type="email"
              onChange={({ target }) => setEmail(target.value)}
            />
            <Textarea
              name="textarea"
              value={message}
              label="Mensagem"
              onChange={({ target }) => setMessage(target.value)}
            />
            <button className={styles.button} disabled={loading} type="submit">
              Enviar
            </button>
          </form>
        </div>
        <section className={styles.wrapperInfo}>
          <div>
            <Clock />
            <p>
              De Segunda à Sexta, <br />
              08:00 às 12:00 - 13:30 às 18:00
            </p>
          </div>
          <div>
            <Mail />
            <p>
              (49) 3566-1014 / 99921-6037 <br />
            </p>
          </div>
          <div>
            <Location />
            <p>
              Rua Brasil nº120, Centro <br />
              Videira-SC CEP: 89.560-144
            </p>
          </div>
        </section>
        <section className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d888.6996841370211!2d-51.15391937076352!3d-27.004915698943005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e14f45ec6e6bbf%3A0x49c830f30edb408b!2sR.%20Brasil%2C%20120%20-%20Centro%2C%20Videira%20-%20SC%2C%2089560-144!5e0!3m2!1spt-BR!2sbr!4v1651586683414!5m2!1spt-BR!2sbr"
            aria-hidden="false"
          ></iframe>
        </section>
      </main>
    </>
  );
}
