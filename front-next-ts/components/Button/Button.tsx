import styles from "./Button.module.scss";

interface ButtonProps {
  onClick?: () => any;
  type?: "primary" | "success";
  children?: JSX.Element | string;
}

const Button = ({ children, onClick, type = "primary" }: ButtonProps) => {
  return (
    <a className={`${styles.button} ${styles[type]}`} onClick={onClick}>
      {children}
    </a>
  );
};
export default Button;
