import styled from 'styled-components';
import { fromTheme } from '../../utils';

export const MenuContainer = styled.div`
  flex-direction: column;

  display: flex;
  width: 30.31rem;
  height: 100vh;

  background-color: ${fromTheme('surface')};
`;

export const ButtonsContainer = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  display: flex;

  margin-top: 74px;
`;

export const MenuButton = styled.button<{ active: boolean }>`
  transition: 0.2s;
  border: none;
  outline: none;

  padding: 5px 10px;

  background-color: transparent;

  color: ${(props) =>
    props.active ? fromTheme('primary') : fromTheme('text')};

  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 20px;

  cursor: pointer;

  &:first-child {
    margin-right: 3.75rem;
  }

  &:hover {
    color: ${fromTheme('primary')};
  }
`;

export const SelectionLine = styled.div`
  position: relative;

  height: 5px;
  width: 130px;
  left: 80px;
  border-radius: 10px;

  margin-bottom: 20px;

  background-color: ${fromTheme('primary')};
`;
