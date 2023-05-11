import { ReactNode } from "react";
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
  background-color: transparent;
`;

const SelectedTag = styled(BaseTag)`
  color: white;
  background-color: #bbb;
`;

const tagStyleLists = {
  default: DefaultTag,
  selected: SelectedTag,
};

type PropsType = {
  children: ReactNode;
  styleType: "default" | "selected";
};

export const Tag = ({ styleType, children }: PropsType) => {
  const Component = tagStyleLists[styleType] || tagStyleLists.default;
  return <Component>{children}</Component>;
};
