import styled from 'styled-components';
import { fromTheme } from '../../utils';

export const SuccessContainer = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: radial-gradient(
    256.07% 131.01% at 50% 18.85%,
    ${fromTheme('secondary')} 0%,
    ${fromTheme('blue')} 100%
  );

  display: flex;
  width: 100vw;
  height: 100vh;

  color: ${fromTheme('surface')};

  line-height: 30px;

  font-family: 'Inter';

  h1 {
    margin: 0;

    font-size: min(15vw, 10vh);
  }

  h3 {
    margin: 8.75rem 0;

    font-weight: 500;
    font-size: min(7vw, 7vh);
    text-align: center;

    span {
      color: ${fromTheme('primary')};
    }
  }
`;
