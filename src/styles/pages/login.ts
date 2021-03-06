import { fromTheme } from '../../utils';
import styled from 'styled-components';

export const LoginContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;

  height: 100vh;

  background: radial-gradient(
    256.07% 131.01% at 50% 18.85%,
    ${fromTheme('secondary')} 0%,
    ${fromTheme('blue')} 100%
  );
`;

export const LoginItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  margin-bottom: 15rem;
`;

export const LoginRightSection = styled.section`
  flex-direction: column;
  display: flex;

  margin: 0 10rem;
`;

export const LoginImage = styled.img`
  width: 35vw;
  height: 52vh;
`;
