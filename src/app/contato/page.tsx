'use client';

import 'react-toastify/dist/ReactToastify.css';

import loadingIcon from '@public/bars-rotate-fade.svg';
import { Formik, FormikHelpers } from 'formik';
import Image from 'next/image';
import React, { useCallback } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import { FloatingMenu } from '@/components/floating-menu/floating-menu.component';
import { PageTitle } from '@/components/page-title/page-title.component';

import styles from './page.module.scss';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const send = useCallback(
    async (values: FormValues, formikHelpers: FormikHelpers<FormValues>) => {
      formikHelpers.setSubmitting(true);

      try {
        const result = await fetch(`${window.location.origin}/api/send-email`, {
          method: 'POST',
          body: JSON.stringify(values)
        });

        if (result.status === 201) {
          formikHelpers.resetForm();
          toast('Seu e-mail foi enviado', { type: 'success' });
        } else {
          toast('Falha ao enviar seu e-mail', { type: 'error' });
        }
      } catch (e) {
        toast('Falha ao enviar seu e-mail', { type: 'error' });
      }

      formikHelpers.setSubmitting(false);
    },
    []
  );

  const validate = useCallback((values: FormValues) => {
    const errors: Partial<FormValues> = {};

    if (values.name.length < 1) {
      errors.name = 'Favor preencher esse campo';
    }

    if (values.email.length < 1) {
      errors.email = 'Favor preencher esse campo';
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      errors.email = 'Endereço de e-mail inválido';
    }

    if (values.subject.length < 1) {
      errors.subject = 'Favor preencher esse campo';
    }

    if (values.message.length < 1) {
      errors.message = 'Favor preencher esse campo';
    }

    return errors;
  }, []);

  return (
    <div className={styles.page}>
      <PageTitle>Entre em Contato</PageTitle>
      <FloatingMenu />
      <ToastContainer position={'bottom-center'} autoClose={8000} />
      <div className={styles.formWrapper}>
        <Formik<FormValues>
          onSubmit={send}
          initialValues={{
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          }}
          validate={validate}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            handleChange,
            handleBlur,
            isSubmitting
          }) => (
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <label>Nome</label>
              <input
                name={'name'}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                type={'text'}
                placeholder={'Insira seu nome'}
              />
              <div
                className={`${styles.error} ${touched.name && errors.name ? styles.visible : ''}`}
              >
                {errors.name}
              </div>

              <label>E-mail</label>
              <input
                name={'email'}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type={'email'}
                placeholder={'Insira seu melhor e-mail'}
              />
              <div
                className={`${styles.error} ${touched.email && errors.email ? styles.visible : ''}`}
              >
                {errors.email}
              </div>

              <label>Telefone</label>
              <input
                name={'phone'}
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                type={'tel'}
                placeholder={'Insira seu telefone'}
              />
              <div
                className={`${styles.error} ${touched.phone && errors.phone ? styles.visible : ''}`}
              >
                {errors.phone}
              </div>
              <label>Assunto</label>
              <input
                name={'subject'}
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                type={'text'}
                placeholder={'Insira o assunto da mensagem'}
              />
              <div
                className={`${styles.error} ${touched.subject && errors.subject ? styles.visible : ''}`}
              >
                {errors.subject}
              </div>

              <label>Mensagem</label>
              <textarea
                name={'message'}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={'Escreva sua mensagem'}
              />
              <div
                className={`${styles.error} ${touched.message && errors.message ? styles.visible : ''}`}
              >
                {errors.message}
              </div>
              <p>
                Seus dados serão armazenados de maneira segura e serão usado
                apenas com o objetivo de entrar em contato.
              </p>
              <button type={'submit'}>
                {isSubmitting ? (
                  <Image src={loadingIcon} alt={'enviando...'} />
                ) : (
                  'Enviar'
                )}
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
