const Button = ({ className, disabled, onClick }) => {
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      ยืนยัน
    </button>
  );
};

export default Button;
