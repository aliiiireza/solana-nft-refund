import styles from "./Button.module.scss";

interface ButtonProps {
  onClick?: () => any;
  type?: "primary" | "success";
  children?: JSX.Element | string;
  loading?: boolean;
}

const Button = ({
  children,
  onClick,
  type = "primary",
  loading = false,
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[type]}`}
      onClick={onClick}
      disabled={loading}
    >
      {loading ? "LOADING..." : children}
    </button>
  );
};
export default Button;
