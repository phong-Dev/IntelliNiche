const STYLES = ['btn--primary', 'btn--outline'];

export const Button = ({
  children,
  onClick,
  type,
  buttonStyle,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  return (
      <button
        className={`btn ${checkButtonStyle}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
  );
};