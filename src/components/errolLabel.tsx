import React from "react";
import { ErrorMessage } from "@/utils/types";
import styles from '../styles/components/ErrorLabel.module.css';

type ErrorLabelProps ={
  errorMessage: ErrorMessage
}

const ErrorLabel = (props: ErrorLabelProps) => (
<>
{ props.errorMessage && 
  <div className={styles.errorContainer}>
    <label className={styles.errorLabel}>{props.errorMessage}</label>
  </div>
}
</>
)


export default ErrorLabel;