import styled from 'styled-components';
import { fromTheme } from '../../utils';

export const HomeContainer = styled.div`
  flex-direction: row;

  display: flex;
`;

export const HomeImages = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;

  display: flex;
  width: 100vw;
  height: 100vh;

  background-color: ${fromTheme('background')};
`;
