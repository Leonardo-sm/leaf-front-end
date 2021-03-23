import { useState } from 'react';
import {
  ButtonsContainer,
  MenuContainer,
  SelectionLine,
} from '../styles/components/menu';
import { ContactsContent } from './ContactsContent';
import { MessagesContent } from './MessagesContent';

export function Menu() {
  const [menuButton, setMenuButton] = useState('contacts');
  const [lineStart, setLineStart] = useState(0);

  function changeToContacts() {
    setMenuButton('contacts');
  }

  function changeToMessages() {
    setMenuButton('messages');
  }

  function lineAnimation(destination: number) {
    const line = document.getElementById('myline');

    if (line !== null && lineStart !== destination) {
      line.animate(
        [
          { transform: `translateX(${lineStart}px)` },
          { transform: `translateX(${destination}px)` },
        ],
        {
          duration: 250,
          easing: 'ease-out',
          fill: 'both',
        }
      );

      setLineStart(destination);
    }
  }

  return (
    <MenuContainer>
      <ButtonsContainer>
        <button
          type="button"
          onClick={() => {
            lineAnimation(0);
            changeToContacts();
          }}
        >
          Contatos
        </button>

        <button
          type="button"
          onClick={() => {
            lineAnimation(179);
            changeToMessages();
          }}
        >
          Mensagens
        </button>
      </ButtonsContainer>
      <SelectionLine id="myline" />

      {menuButton === 'contacts' && <ContactsContent />}
      {menuButton === 'messages' && <MessagesContent />}
    </MenuContainer>
  );
}
