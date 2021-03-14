import styled from 'styled-components';
import { fromTheme } from '../../utils';

export const SuccessContainer = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${fromTheme('secondary')};

  display: flex;
  width: 100vw;
  height: 100vh;

  color: ${fromTheme('surface')};

  line-height: 30px;

  h1 {
    margin: 0;
    font-family: 'Inter';
    font-weight: 500;
    font-size: 96px;
  }

  h3 {
    margin: 8.75rem 0;
    font-weight: 500;
    font-size: 64px;

    span {
      color: ${fromTheme('primary')};
    }
  }
`;

export const SuccessBackButton = styled.button``;
