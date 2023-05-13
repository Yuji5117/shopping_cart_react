import { UseFormRegisterReturn } from "react-hook-form";
import styled from "styled-components";

import { FieldWrapper } from "./FieldWrapper";

type InputFieldProps = {
  type: "text";
  registration: UseFormRegisterReturn;
  label: string;
};

export const InputField = ({ type, registration, label }: InputFieldProps) => (
  <FieldWrapper label={label}>
    <StyledInput type={type} {...registration} />
  </FieldWrapper>
);

const StyledInput = styled.input``;
