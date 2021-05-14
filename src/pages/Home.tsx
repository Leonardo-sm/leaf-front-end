import { HomeContainer, HomeImages } from '../styles/pages/home';
import { Sidebar } from '../components/Sidebar';
import { useValidateLogin } from '../hooks/query/useSession';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../stores/store';
import { asyncSignOut } from '../stores/sessionSlice';
import { setConnectedUsers as setUsersIntoStore } from '../stores/chatSlice';
import { Chat } from '../components/Chat';
import socket from '../services/socket';
import { connected } from 'node:process';

export type MessagesProps = {
  content: string;
  fromSelf: boolean;
};

export type UserProps = {
  self: boolean;
  userID: string;
  name: string;
  connected: boolean;
  messages: MessagesProps[];
  hasNewMessages: boolean;
};

export function Home() {
  const session = useSelector((state: RootState) => state.session);
  const chat = useSelector((state: RootState) => state.chat);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!session.isLogged) {
      history.push('/login');
      dispatch(asyncSignOut());
    }
  }, [session.isLogged, dispatch, history]);

  useEffect(() => {
    (() => {
      socket.auth = { name: session.name };
      socket.connect();
    })();
  }, [session.name]);

  useValidateLogin();

  socket.on('users', (users: any) => {
    let usersList: UserProps[] = [];
    users.forEach((user: UserProps) => {
      let newUser: UserProps = {
        userID: user.userID,
        name: user.name,
        connected: true,
        self: user.userID === socket.id,
        messages: [],
        hasNewMessages: false,
      };
      usersList.push(newUser);
    });

    usersList = usersList.sort((a: UserProps, b: UserProps) => {
      if (a.self) return -1;
      if (b.self) return 1;
      if (a.name < b.name) return -1;
      return a.name > b.name ? 1 : 0;
    });

    dispatch(setUsersIntoStore(usersList));
  });

  socket.on('userConnected', (user: UserProps) => {
    let newUser: UserProps = {
      userID: user.userID,
      name: user.name,
      self: false,
      connected: true,
      messages: [],
      hasNewMessages: false,
    };
    dispatch(setUsersIntoStore([...chat.connectedUsers, newUser]));
  });

  return (
    <HomeContainer>
      <Sidebar />

      {chat.isChatActive ? (
        <Chat />
      ) : (
        <HomeImages>
          <img src="images/LeafHome.svg" alt="Leaf home logo" />

          <img src="images/Leaf.svg" alt="Leaf" />
        </HomeImages>
      )}
    </HomeContainer>
  );
}
