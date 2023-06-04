import { TextareaHTMLAttributes } from 'react'
import styles from '../styles.module.scss'
interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name?: string
  label?: string
}
export function Textarea({ label, name, ...rest }: IProps) {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={name}>
          {label} <s>*</s>
        </label>
      )}
      <div>
        <textarea id={name} className={styles.textarea} {...rest}></textarea>
      </div>
    </div>
  )
}
