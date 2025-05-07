const Button = (props) => {
  return (
    <button
      onClick={props.handleClick}
      className=" px-2 h-[40px] text-white bg-[#3C82F6] rounded-md"
    >
      {props.text}
    </button>
  );
};

export default Button;
