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

export const MessagesContainer = styled.div`
  flex-direction: column;

  display: flex;

  height: 75%;
  width: 70%;

  padding: 30px 70px;

  color: ${fromTheme('text')};

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 18;

  overflow-y: scroll;
`;

export const Messages = styled.div<{ self: boolean }>`
  display: block;

  align-self: ${(props) => (props.self ? 'flex-end' : 'flex-start')};

  max-width: 40%;

  padding: 10px;
  margin-bottom: 10px;

  border-radius: 10px;

  background-color: ${(props) =>
    props.self ? fromTheme('lightPurple') : fromTheme('surface')};
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
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

export const SendButton = styled.button`
  width: 60px;
  height: 30px;

  margin-bottom: 60px;

  margin-left: 10px;

  background-color: ${fromTheme('primary')};
  color: ${fromTheme('surface')};

  outline: none;
  border: none;

  border-radius: 10px;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 18;

  &:hover {
    filter: brightness(92%);
    cursor: pointer;
  }
`;
