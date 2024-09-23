/**
 * CommonButton
 *
 * @package components
 */
import { FC } from "react";
import styles from "./styles.module.css";

type Props = JSX.IntrinsicElements["button"];

//CommonButtonボタンに渡すpropsを省略形で定義
/**
 * @param {*} title
 * @param {*} type
 * @param {*} onClick
 * @returns
 */
export const CommonButton: FC<Props> = ({ title, type, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {title}
  </button>
);
