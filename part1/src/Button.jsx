const Button = ({ buttonText, onSmash }) => {
  return (
    <>
      <button type='button' onClick={onSmash}>
        {buttonText}
      </button>
    </>
  );
};
export default Button;
