import styled from 'styled-components';
import { fromTheme } from '../../utils';

export const HomeContainer = styled.div`
  flex-direction: row;

  display: flex;
  background-color: ${fromTheme('background')};
`;

export const HomeImages = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;

  display: flex;
  width: 100vw;
  height: 100vh;
`;
