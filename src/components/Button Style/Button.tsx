import styles from "./Button.module.css";

interface Props {
  children: string;
  onClick: () => void;
}

function Button({ children, onClick }: Props) {
  return <button className={styles.button}>{children}</button>;
}

export default Button;
