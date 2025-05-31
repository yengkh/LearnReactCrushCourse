type ButtonProps = {
  title: string;
  bg?: string;
  color?: string;
  w?: boolean;
  onClickEvent?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({
  title,
  bg,
  color = "text-white",
  w = false,
  onClickEvent,
}: ButtonProps) => {
  return (
    <button
      className={`${bg} ${color} ${
        w === true ? "w-full" : "w-fit"
      } px-4 py-1 rounded cursor-pointer  `}
      type="button"
      onClick={onClickEvent}
    >
      {title}
    </button>
  );
};

export default Button;
