import {
  ContentContainer,
  MessageContainer,
} from '../styles/components/content';

export function MessagesContent() {
  return (
    <ContentContainer>
      <MessageContainer>
        <h2>Renan Nunes</h2>

        <div>
          <p>Está tudo certo por...</p>
          <p>13/03/21</p>
        </div>
      </MessageContainer>

      <MessageContainer>
        <h2>Leonardo Michelluti</h2>

        <div>
          <p>Eu vi algo estranh...</p>
          <p>02/03/21</p>
        </div>
      </MessageContainer>
    </ContentContainer>
  );
}
