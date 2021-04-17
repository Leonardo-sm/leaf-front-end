import styled from 'styled-components';
import { fromTheme } from '../../utils';

export const SidebarContainer = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  display: flex;
  width: 6.25rem;
  height: 100vh;

  background: linear-gradient(
    180deg,
    ${fromTheme('secondary')} 32.62%,
    ${fromTheme('primary')} 143.7%
  );

  div {
    display: flex;
    flex-direction: column;
  }

  button {
    width: 35px;
    height: 35px;

    border: none;
    outline: none;

    background-color: transparent;
    color: ${fromTheme('surface')};

    transition: 0.1s;

    cursor: pointer;

    &:hover {
      color: ${fromTheme('primary')};
    }

    &:first-child {
      margin-top: 77px;
      margin-bottom: 42px;
    }

    &:last-child {
      margin-bottom: 44px;
    }
  }

  @media (max-width: 1000px) {
    flex-direction: row;
    height: 6.25rem;
    width: 100vw;

    padding: 0 2rem;

    button {
    width: 35px;
    height: 35px;

    &:hover {
      color: ${fromTheme('primary')};
    }

    &:first-child {
       margin-top: 0px;
      margin-bottom: 0px;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
