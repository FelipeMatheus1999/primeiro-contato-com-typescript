import { InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label?: string;
}

const Input = ({ placeholder, label, ...rest }: InputProps) => {
  return (
    <Container>
      <input className="input" placeholder={placeholder} {...rest} />
    </Container>
  );
};

export default Input;
