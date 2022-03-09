import styles from './styles.module.scss';
interface IProps {
  name?: string;
  value: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  onChange: (value: any) => void;
}
export function Textarea({
  label,
  value,
  required,
  name,
  placeholder,
  onChange,
}: IProps) {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label} <span>*</span>
        </label>
      )}
      <div>
        <textarea
          id={name}
          value={value}
          required={required}
          onChange={onChange}
          placeholder={placeholder}
          className={styles.textarea}
        ></textarea>
      </div>
    </div>
  );
}
