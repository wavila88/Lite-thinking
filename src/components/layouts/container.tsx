import Router from "next/router";
import * as React from "react";
import styles from '../../styles/layouts/container.module.css';


type ContainerProps = {
  children: React.ReactNode
}

const ContainerLayout = (props: ContainerProps) => {

  const closeSession = () => {
    localStorage.removeItem('ROL');
    localStorage.removeItem('ENTERPRISE');
    localStorage.removeItem('NIT');
    Router.push('/')
  };

 return (
  <>
    <div className={styles.sessionInfo}>
      <div className={styles.singOut} onClick={closeSession}>
      log out
      </div>
    </div>
    <div className={styles.container}>
      <div className={styles.content}>
      {props.children}
      </div>
    </div>
  </>
 )
}

export default ContainerLayout;