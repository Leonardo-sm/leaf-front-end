import {
  ContactContainer,
  ContentContainer,
} from '../styles/components/content';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../stores/store';
import { UserProps } from '../pages/Home';
import { setIsChatActive, setSelectedUser } from '../stores/chatSlice';

export function ContactsContent() {
  const chat = useSelector((state: RootState) => state.chat);
  const dispatch = useDispatch();

  function selectUser(user: UserProps) {
    dispatch(setSelectedUser({ ...user, hasNewMessages: false }));
  }

  return (
    <ContentContainer>
      {chat.connectedUsers.map((user: UserProps) => (
        <ContactContainer
          onClick={() => {
            dispatch(setIsChatActive(!chat.isChatActive));
            selectUser(user);
          }}
          key={user.userID}
          self={user.self}
        >
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
