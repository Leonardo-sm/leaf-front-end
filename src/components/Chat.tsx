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

  function onMessage(content: string) {
    if (chat.selectedUser) {
      socket.emit('privateMessage', { content, to: chat.selectedUser });
    }

    chat.selectedUser.messages.push({
      content,
      fromSelf: true,
    });
  }

  return (
    <ChatContainer>
      <MessagesContainer>
        <LeftMessages>
          <p>Como estão as coisas?</p>
        </LeftMessages>

        <RightMessages>
          <p>Está tudo certo por aqui.</p>
        </RightMessages>

        <LeftMessages>
          <p>Ok</p>
        </LeftMessages>

        <RightMessages>
          <p>
            Acredito que por enquanto não iremos precisar de nada, porém alguns
            dados vieram estranhos aqui e precisarei reenviar à central, para
            eles averiguarem a situação e mandarem o retorno.
          </p>
        </RightMessages>
      </MessagesContainer>

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
    </ChatContainer>
  );
}
