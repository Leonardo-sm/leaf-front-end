import { useState } from 'react';
import { useSelector } from 'react-redux';
import socket from '../services/socket';
import { RootState } from '../stores/store';

import {
  ChatContainer,
  LeftMessages,
  MessagesContainer,
  RightMessages,
  TextareaBox,
} from '../styles/components/chat';

export function Chat() {
  const [content, setContent] = useState('');
  const chat = useSelector((state: RootState) => state.chat);

  function displaySender(index: number) {
    return (
      index === 0 ||
      chat.selectedUser.messages[index - 1].fromSelf !==
        chat.selectedUser.messages[index].fromSelf
    );
  }

  function onMessage(content: string) {
    if (chat.selectedUser) {
      socket.emit('privateMessage', { content, to: chat.selectedUser.userID });
    }

    chat.selectedUser.messages.push({
      content,
      fromSelf: true,
    });
  }

  return (
    <ChatContainer>
      {chat.selectedUser.messages.map((message, index) => {
        if (displaySender(index)) {
          return (
            <MessagesContainer key={index}>
              {message.fromSelf ? (
                <RightMessages>
                  <p>{message.content}</p>
                </RightMessages>
              ) : (
                <LeftMessages>
                  <p>{message.content}</p>
                </LeftMessages>
              )}
            </MessagesContainer>
          );
        } else return <></>;
      })}

      <TextareaBox
        placeholder="Digite Aqui..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onSubmit={(e) => {
          e.preventDefault();
          onMessage(content);
          setContent('');
        }}
        maxRows={6}
      />
      <button
        type="button"
        onClick={() => {
          onMessage(content);
          setContent('');
        }}
      >
        Enviar
      </button>
    </ChatContainer>
  );
}
