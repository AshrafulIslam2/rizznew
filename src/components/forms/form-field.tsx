import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type BaseProps = {
  label: string;
};

type InputProps = BaseProps & {
  as?: "input";
  inputProps: InputHTMLAttributes<HTMLInputElement>;
};

type TextareaProps = BaseProps & {
  as: "textarea";
  textareaProps: TextareaHTMLAttributes<HTMLTextAreaElement>;
};

type Props = InputProps | TextareaProps;

export function FormField(props: Props) {
  return (
    <label className="block space-y-1">
      <span className="text-sm text-[var(--muted)]">{props.label}</span>
      {props.as === "textarea" ? (
        <textarea
          {...props.textareaProps}
          className={`tap-target w-full rounded border border-[var(--border)] bg-[var(--surface)] p-3 ${props.textareaProps.className ?? ""}`}
        />
      ) : (
        <input
          {...props.inputProps}
          className={`tap-target w-full rounded border border-[var(--border)] bg-[var(--surface)] p-3 ${props.inputProps.className ?? ""}`}
        />
      )}
    </label>
  );
}
