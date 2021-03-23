import { useState } from 'react';
import { ContactsContent } from './ContactsContent';
import { MessagesContent } from './MessagesContent';

export function Menu() {
  const [isMessage, setIsMessage] = useState(false);

  function changeToContacts() {
    setIsMessage(false);
  }

  function changeToMessages() {
    setIsMessage(true);
  }

  return (
    <div>
      <div>
        <button type="button" onClick={changeToContacts}>
          Contatos
        </button>
        <button type="button" onClick={changeToMessages}>
          Mensagens
        </button>
      </div>

      {isMessage ? <MessagesContent /> : <ContactsContent />}
    </div>
  );
}
