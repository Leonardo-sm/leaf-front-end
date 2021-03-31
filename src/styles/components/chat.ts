import styled from 'styled-components';
import { fromTheme } from '../../utils';

export const ChatContainer = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;

  display: flex;
  flex: 1;

  width: 100%;

  background-color: ${fromTheme('chatBackground')};
`;
