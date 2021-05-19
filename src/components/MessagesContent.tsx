import { useDispatch, useSelector } from 'react-redux';
import { UserProps } from '../pages/Home';
import { setIsChatActive, setSelectedUser } from '../stores/chatSlice';
import { RootState } from '../stores/store';
import {
  ContentContainer,
  MessageContainer,
} from '../styles/components/content';

export function MessagesContent() {
  const chat = useSelector((state: RootState) => state.chat);
  const dispatch = useDispatch();

  function selectUser(user: UserProps) {
    dispatch(setSelectedUser({ ...user, hasNewMessages: false }));
  }
  return (
    <ContentContainer>
      {chat.connectedUsers.map((user: UserProps) => (
        <MessageContainer
          key={user.userID}
          onClick={() => {
            dispatch(setIsChatActive(!chat.isChatActive));
            selectUser(user);
          }}
          self={user.self}
        >
          <h2>{user.name}</h2>

          <div>
            <p>eai?</p>
            <p>19/05/2021</p>
          </div>
        </MessageContainer>
      ))}
    </ContentContainer>
  );
}
