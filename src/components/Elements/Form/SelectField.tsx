import { SelectHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import { FieldWrapper } from "./FieldWrapper";

type Option = {
  label: string;
  value: string | number;
};

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: Option[];
  defaultValue: string | number;
  registration?: Partial<UseFormRegisterReturn>;
};

export const SelectField = ({
  label,
  options,
  defaultValue,
  registration,
  onChange,
}: SelectFieldProps) => {
  return (
    <FieldWrapper label={label}>
      <select defaultValue={defaultValue} {...registration} onChange={onChange}>
        {options.map(({ label, value }) => (
          <option key={label} value={value}>
            {label}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
};
