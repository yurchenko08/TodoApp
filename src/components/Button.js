import style from "./Button.module.css";
function Button({ onClick, children, title, disabled = false }) {
  return (
    <button
      className={style.button}
      onClick={onClick}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
export default Button;
