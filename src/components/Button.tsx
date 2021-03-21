import { ReactNode } from 'react';
import { StyledButton } from '../styles/components/Button';

type buttonType = 'button' | 'submit' | 'reset' | undefined;

interface ButtonProps {
  children: ReactNode;
  idType?: string;
  type?: buttonType;
  onClick?: () => void;
  w?: string;
  p?: string;
}

function Button({
  children,
  idType = 'solid',
  onClick,
  type,
  w,
  p,
}: ButtonProps) {
  return (
    <StyledButton id={idType} onClick={onClick} type={type} w={w} p={p}>
      {children}
    </StyledButton>
  );
}

export default Button;
