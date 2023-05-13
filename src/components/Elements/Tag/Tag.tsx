import { ButtonHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

const BaseTag = styled.button`
  padding: 5px 5px;
  border-radius: 5px;
  border: 1px solid #bbb;
  outline: none;
  cursor: pointer;

  :focus {
    outline: 0;
  }
`;

const DefaultTag = styled(BaseTag)`
  color: black;
  background-color: white;
`;

const SelectedTag = styled(BaseTag)`
  color: white;
  background-color: #5bb166;
`;

const tagStyleLists = {
  default: DefaultTag,
  selected: SelectedTag,
};

type PropsType = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  styleType: "default" | "selected";
};

export const Tag = ({ styleType, children, onClick }: PropsType) => {
  const Component = tagStyleLists[styleType] || tagStyleLists.default;
  return <Component onClick={onClick}>{children}</Component>;
};
