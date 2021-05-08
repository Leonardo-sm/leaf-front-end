import { fromTheme } from '../../utils';
import styled from 'styled-components';

export const MenuContainer = styled.div`
  flex-direction: column;

  display: flex;
  width: 30.31rem;
  height: 100vh;

  text-align: center;

  background-color: ${fromTheme('surface')};

  h2 {
    margin: 2rem 0;
  }
`;

export const GraphicsItemsList = styled.div``;

export const GraphicsItemsButton = styled.button`
  width: 100%;
  border: none;
  outline: none;
  padding: 1rem 3rem;
  font-family: 'Inter', sans-serif;
  background-color: ${fromTheme('menu')};
  cursor: pointer;
  line-height: 1.5rem;
  transition: all ease 0.3s;

  &:hover {
    background-color: ${fromTheme('lightPurple')};
  }

  h3 {
    font-size: 1rem;
  }

  h4 {
    font-size: 0.9rem;
  }

  p {
    font-size: 0.8rem;
    text-overflow: ellipsis;
    max-width: 80ch;
    overflow: hidden;
    white-space: nowrap;
  }
`;
