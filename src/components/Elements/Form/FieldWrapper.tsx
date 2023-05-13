import { ReactNode } from "react";

type FieldWrapperProps = {
  children: ReactNode;
  label: string;
};

export const FieldWrapper = ({ label, children }: FieldWrapperProps) => {
  return (
    <div>
      <label>{label}</label>
      {children}
    </div>
  );
};
