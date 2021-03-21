import { ifProp, prop, switchProp } from 'styled-tools';
import styled, { css } from 'styled-components';

import { fromTheme } from '../../utils';

interface ButtonProps {
  w?: string;
  p?: string;
}

export const StyledButton = styled.button<ButtonProps>`
  padding: ${ifProp('p', prop('p'), '10px 0px')};
  width: ${prop('w')};
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
