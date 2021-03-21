import { ReactNode } from 'react';
import { StyledButton } from '../styles/components/Button';

interface ButtonProps {
  children: ReactNode;
  idType?: string;
  onClick?: () => void;
}

function Button({ children, idType = 'solid', onClick }: ButtonProps) {
  return (
    <StyledButton id={idType} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;
