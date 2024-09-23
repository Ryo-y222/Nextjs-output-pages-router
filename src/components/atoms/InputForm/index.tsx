import styles from "./style.module.css";
import { FC } from "react";

type Props = JSX.IntrinsicElements["input"];

/**
 * @param {*} props
 * @returns
 * @constructor
 */
export const InputForm: FC<Props> = ({
  disabled = false,
  value,
  placeholder,
  onChange,
  onKeyDown,
}) => (
  <input
    disabled={disabled}
    className={styles.input}
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
  />
);
