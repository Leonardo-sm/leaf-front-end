import {
  ContactContainer,
  ContentContainer,
} from '../styles/components/content';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function ContactsContent() {
  return (
    <ContentContainer>
      <ContactContainer>
        <h2>Renan Nunes</h2>

        <span>
          <FontAwesomeIcon icon={['fas', 'circle']} />
        </span>
      </ContactContainer>

      <ContactContainer>
        <h2>Leonardo Michelluti</h2>

        <span>
          <FontAwesomeIcon icon={['fas', 'circle']} />
        </span>
      </ContactContainer>

      <ContactContainer>
        <h2>Nikita Klementiev</h2>

        <div>
          <FontAwesomeIcon icon={['far', 'circle']} />
        </div>
      </ContactContainer>
    </ContentContainer>
  );
}
