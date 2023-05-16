import { ReactNode } from "react";
import { SubmitHandler, useForm, UseFormReturn } from "react-hook-form";

type FormProps = {
  onSubmit: SubmitHandler<any>;
  children: (formMethods: UseFormReturn) => ReactNode;
};

export const Form = ({ onSubmit, children }: FormProps) => {
  const formMethods = useForm();
  return (
    <form onSubmit={formMethods.handleSubmit(onSubmit)}>
      {children(formMethods)}
    </form>
  );
};
