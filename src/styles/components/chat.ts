import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
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

export const RightMessages = styled.div`
  display: block;

  max-width: 40%;

  padding: 10px;
  margin-bottom: 10px;

  border-radius: 10px;

  background-color: ${fromTheme('lightPurple')};
`;

export const LeftMessages = styled.div`
  display: block;

  max-width: 40%;

  padding: 10px;

  margin-bottom: 10px;

  border-radius: 10px;

  background-color: ${fromTheme('surface')};
`;

export const MessagesContainer = styled.div`
  flex-direction: column;
  align-items: flex-start;

  display: flex;

  height: 100%;

  padding: 30px 70px;

  color: ${fromTheme('text')};

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 18;

  overflow-y: scroll;
`;

export const TextareaBox = styled(TextareaAutosize)`
  display: block;

  height: 55px;
  width: 23.7rem;
  max-width: 23.7rem;

  border-radius: 16px;

  margin-bottom: 60px;

  color: ${fromTheme('text')};

  padding: 10px;

  outline: none;
  border: none;
  resize: none;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 18;

  &::placeholder {
    color: ${fromTheme('placeholder')};
  }
`;
