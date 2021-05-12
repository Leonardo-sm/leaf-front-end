import { fromTheme } from '../../utils';
import styled from 'styled-components';

export const ContainerGraphics = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${fromTheme('chatBackground')};
`;

export const GraphicsWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  overflow-y: scroll;
`;

export const GraphicBox = styled.div`
  width: 100%;
  height: 85vh;
  text-align: center;

  h1 {
    font-family: 'Inter', sans-serif;
  }
`;

export const DescriptionWrapper = styled.div`
  padding: 0 1.5rem;
  padding-bottom: 1.5rem;
  text-align: left;
  font-family: 'Inter', sans-serif;
  line-height: 1.4rem;
`;
