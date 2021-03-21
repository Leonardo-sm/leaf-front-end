import styled, { css } from 'styled-components';

import { fromTheme } from '../../utils';
import { switchProp } from 'styled-tools';

export const StyledButton = styled.button`
  padding: 10px 0px;
  width: 9rem;
  border: none;
  border-radius: 6px;

  transition: all ease 0.2s;

  cursor: pointer;

  font-family: 'Inter';
  font-weight: 500;

  color: ${fromTheme('surface')};
  outline: none;

  ${switchProp('id', {
    solid: css`
      background-color: ${fromTheme('primary')};

      &:hover {
        background-color: ${fromTheme('primaryHover')};
      }
    `,
    outline: css`
      border: 2px solid ${fromTheme('surface')};
      background-color: transparent;

      &:hover {
        color: ${fromTheme('primary')};
        background-color: ${fromTheme('surface')};
      }
    `,
  })};
`;
