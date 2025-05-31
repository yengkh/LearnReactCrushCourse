import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  bg: string;
};

const Card = ({ children, bg = "bg-gray-100" }: CardProps) => {
  return (
    <div className={`${bg} rounded-lg p-6 shadow my-4 mx-6`}>{children}</div>
  );
};

export default Card;
