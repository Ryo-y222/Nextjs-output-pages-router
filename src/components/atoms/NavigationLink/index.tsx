import styles from "./style.module.css";
// import { Link } from "react-router-dom";
import { FC } from "react";
import Link from "next/link";

type Props = {
  title: string;
  linkPath: string;
};

export const NavigationLink: FC<Props> = ({ title, linkPath }) => {
  return (
    <li className={styles.li}>
      <Link href={linkPath}>{title}</Link>
    </li>
  );
};
