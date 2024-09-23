import styles from "./style.module.css";
import { FC } from "react";

type Props = JSX.IntrinsicElements["textarea"];

export const TextArea: FC<Props> = ({
  disabled = false,
  value,
  placeholder,
  onChange,
}) => (
  <textarea
    disabled={disabled}
    className={styles.text}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);
