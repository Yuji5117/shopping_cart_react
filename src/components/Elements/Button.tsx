import { ReactNode } from "react";
import styled from "styled-components";

const BaseButton = styled.button`
  text-align: center;
  color: #fff;
  width: 100px;
  min-width: 100px;
`;

const ButtonPrimary = styled(BaseButton)`
  background: #5bb166;
  border: 1px solid#5bb166;
`;

const ButtonSecondary = styled(BaseButton)`
  background: transparent;
  color: black;
  border: 1px solid#5bb166;
`;

const buttonStyleLists = {
  default: BaseButton,
  primary: ButtonPrimary,
  secondary: ButtonSecondary,
};

type PropsType = {
  styleType: "default" | "primary" | "secondary";
  children: ReactNode;
};

const Button = ({ styleType, children }: PropsType) => {
  const Component = buttonStyleLists[styleType] || buttonStyleLists.default;
  return <Component>{children}</Component>;
};

export default Button;
