import {
  ContactContainer,
  ContentContainer,
} from '../styles/components/content';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function ContactsContent() {
  return (
    <ContentContainer>
      {connectedUsers.map((user) => (
        <ContactContainer key={user.id}>
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
