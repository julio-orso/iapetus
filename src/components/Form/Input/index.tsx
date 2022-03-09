import styles from './styles.module.scss';
interface IProps {
  type: string;
  name?: string;
  value: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  onChange: (value: any) => void;
}
export function Input({
  label,
  value,
  type,
  required,
  name,
  placeholder,
  onChange,
}: IProps) {
  return (
    <div className={styles.wrapper}>
      {/* · */}
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label} <span>*</span>
        </label>
      )}
      <input
        id={name}
        type={type}
        value={value}
        required={required}
        onChange={onChange}
        className={styles.input}
        placeholder={placeholder}
      />
    </div>
  );
}
