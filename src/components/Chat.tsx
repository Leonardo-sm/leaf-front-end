import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import {
  ChatContainer,
  LeftMessages,
  MessagesContainer,
  RightMessages,
  TextareaBox,
} from '../styles/components/chat';

export function Chat() {
  const [isSending, setIsSending] = useState(false);

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

      <TextareaBox placeholder="Digite Aqui..." maxRows={6} />
    </ChatContainer>
  );
}
