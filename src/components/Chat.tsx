import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import socket from '../services/socket';
import { setConnectedUsers, setSelectedUser } from '../stores/chatSlice';
import { RootState } from '../stores/store';

import {
  ChatContainer,
  MessagesContainer,
  Messages,
  TextareaBox,
  SendButton,
  InputContainer,
} from '../styles/components/chat';

export function Chat() {
  const [content, setContent] = useState('');
  const chat = useSelector((state: RootState) => state.chat);
  const dispatch = useDispatch();

  function onMessage(content: string) {
    if (chat.selectedUser) {
      socket.emit('privateMessage', {
        content,
        to: chat.selectedUser.userID,
      });

      chat.connectedUsers.forEach((user, index) => {
        if (chat.selectedUser.userID === user.userID) {
          const users = chat.connectedUsers.filter((item) =>
            item.userID !== chat.selectedUser.userID ? item : null
          );

          let user = chat.connectedUsers[index];
          const messagesUpdated = user.messages.concat({
            sender: socket.id,
            receiver: chat.selectedUser.userID,
            content,
            fromSelf: true,
          });

          user = { ...user, messages: messagesUpdated };
          dispatch(setSelectedUser(user));
          dispatch(setConnectedUsers([...users, user]));
        }
      });
    }
  }

  return (
    <ChatContainer>
      <MessagesContainer>
        {chat.selectedUser.messages.map((message, index) => {
          return (
            <Messages key={index} self={message.fromSelf}>
              {message.content}
            </Messages>
          );
        })}
      </MessagesContainer>

      <InputContainer>
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
        <SendButton
          type="button"
          onClick={(e) => {
            e.preventDefault();
            onMessage(content);
            setContent('');
          }}
        >
          Enviar
        </SendButton>
      </InputContainer>
    </ChatContainer>
  );
}
