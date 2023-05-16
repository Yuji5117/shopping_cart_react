import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styled from "styled-components";

import { FieldWrapper } from "./FieldWrapper";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  type: "text";
  registration?: UseFormRegisterReturn;
  label?: string;
};

export const InputField = ({
  type,
  registration,
  label,
  ...props
}: InputFieldProps) => (
  <FieldWrapper label={label}>
    <StyledInput type={type} {...registration} {...props} />
  </FieldWrapper>
);

const StyledInput = styled.input``;
