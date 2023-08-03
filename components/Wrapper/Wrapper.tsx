import React, { ReactNode } from 'react';
import styles from './Wrapper.module.css';
import Link from 'next/link';

type WrapperProps = {
  children: ReactNode;
};
const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">World ranking🌎</Link>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Wrapper;
