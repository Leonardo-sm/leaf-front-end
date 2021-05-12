import {
  ContactContainer,
  ContentContainer,
} from '../styles/components/content';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { RootState } from '../stores/store';
import { UserProps } from '../pages/Home';

export function ContactsContent() {
  const chat = useSelector((state: RootState) => state.chat);

  return (
    <ContentContainer>
      {chat.connectedUsers.map((user: UserProps) => (
        <ContactContainer key={user.userID}>
          <h2>{user.name}</h2>

          {user.connected ? (
            <span>
              <FontAwesomeIcon icon={['fas', 'circle']} />
            </span>
          ) : (
            <div>
              <FontAwesomeIcon icon={['far', 'circle']} />
            </div>
          )}
        </ContactContainer>
      ))}
    </ContentContainer>
  );
}
