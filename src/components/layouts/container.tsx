import * as React from "react";
import styles from '../../styles/layouts/container.module.css';

type ContainerProps = {
  children: React.ReactNode
}

const ContainerLayout = (props: ContainerProps) => {
 return (
  <div className={styles.container}>
    <div className={styles.content}>
    {props.children}
    </div>
  </div>
 )
}

export default ContainerLayout;