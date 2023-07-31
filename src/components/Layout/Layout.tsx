import React from 'react';
import styles from './Layout.module.css';

const Layout = ({ children }: { children: any }) => {
  return (
    <div className={styles.container}>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
