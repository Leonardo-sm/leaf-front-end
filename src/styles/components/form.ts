import { fromTheme } from '../../utils';
import styled from 'styled-components';

export const LoginButtonWrapper = styled.div`
  justify-content: space-between;
  display: flex;
`;

export const LoginFormWrapper = styled.form`
  flex-direction: column;
  display: flex;

  max-width: 19rem;
`;

export const LoginInput = styled.input`
  padding: 18px;
  margin-bottom: 15px;
  border: none;
  border-radius: 8px;

  font-family: 'Roboto';
  font-size: 20px;

  outline: none;

  &::placeholder {
    color: ${fromTheme('placeholder')};
  }
`;

export const LoginInputWrapper = styled.div`
  flex-direction: column;
  display: flex;

  margin: 80px 0 15px 0;
`;
