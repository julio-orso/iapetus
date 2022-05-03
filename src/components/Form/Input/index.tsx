import { InputHTMLAttributes } from 'react';
import styles from '../styles.module.scss';
interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  name?: string;
  label?: string;
}
export function Input({ label, name, ...rest }: IProps) {
  return (
    <div className={styles.wrapper}>
      {/* · */}
      {label && (
        <label htmlFor={name}>
          {label} <s>*</s>
        </label>
      )}
      <input id={name} className={styles.input} {...rest} />
    </div>
  );
}
