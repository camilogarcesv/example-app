import React, { ReactNode } from 'react';
import styles from './Layout.module.css';
import Head from 'next/head';
import Link from 'next/link';

type LayoutProps = {
  children: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'All Countries' }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Link href="/">World ranking🌎</Link>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
