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
          <p>Safe</p>
        </LeftMessages>

        <RightMessages>
          <p>
            Gostaria de dizer que seu trabalho é deverás aperfeiçoado e tenho
            muito orgulho de ter um companheiro de equipe desses em minha área
            florestal, portanto, venho por meio desta agradeçer formalmente sua
            participação durante nossa jornada de trabalho.
          </p>
        </RightMessages>
      </MessagesContainer>

      <TextareaBox placeholder="Digite Aqui..." maxRows={6} />
    </ChatContainer>
  );
}
