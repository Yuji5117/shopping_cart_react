import { ButtonHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";

const getSizesStyle = ({ size = "md" }) => {
  switch (size) {
    case "sm":
      return css`
        padding: 5px 10px;
      `;

    case "lg":
      return css`
        padding: 15px 30px;
      `;

    default:
      return css`
        padding: 10px 20px;
      `;
  }
};

type BaseButtonProps = {
  size?: "sm" | "md" | "lg";
};

const BaseButton = styled.button<BaseButtonProps>`
  text-align: center;
  color: #fff;
  border-radius: 5px;
  ${(props) => getSizesStyle(props)}

  cursor: pointer;
`;

const ButtonPrimary = styled(BaseButton)`
  background: #5bb166;
  border: 1px solid#5bb166;
`;

const ButtonSecondary = styled(BaseButton)`
  background: #fff;
  color: black;
  border: 1px solid#5bb166;
`;

const buttonStyleLists = {
  default: BaseButton,
  primary: ButtonPrimary,
  secondary: ButtonSecondary,
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  styleType: keyof typeof buttonStyleLists;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
};

export const Button = ({
  styleType = "default",
  children,
  size,
  onClick,
}: ButtonProps) => {
  const Component = buttonStyleLists[styleType] || buttonStyleLists.default;
  return (
    <Component size={size} onClick={onClick}>
      {children}
    </Component>
  );
};
