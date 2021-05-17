import { HomeContainer, HomeImages } from '../styles/pages/home';
import { Sidebar } from '../components/Sidebar';
import { useValidateLogin } from '../hooks/query/useSession';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../stores/store';
import { asyncSignOut } from '../stores/sessionSlice';
import {
  setConnectedUsers,
  setConnectedUsers as setUsersIntoStore,
} from '../stores/chatSlice';
import { Chat } from '../components/Chat';
import socket from '../services/socket';

type ReceivedMessages = {
  content: string;
  from: string;
};

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

  socket.on('privateMessage', ({ content, from }: ReceivedMessages) => {
    for (let i = 0; i < chat.connectedUsers.length; i++) {
      const user = chat.connectedUsers[i];
      if (user.userID === from) {
        user.messages.push({
          content,
          fromSelf: false,
        });

        if (user !== chat.selectedUser) {
          user.hasNewMessages = true;
        }
      }
    }
    /*let userListClone: UserProps[] = [];
    chat.connectedUsers.forEach((user: UserProps) => {
      if (user.userID === from) {
        let newUser: UserProps = {
          userID: user.userID,
          name: user.name,
          self: user.self,
          connected: user.connected,
          hasNewMessages: user.hasNewMessages,
          messages: [...user.messages, { content, fromSelf: false }],
        };

        console.log(user.messages);

        if (user !== chat.selectedUser) {
          newUser.hasNewMessages = true;
        }
        userListClone.push(newUser);
        console.log(user.hasNewMessages);
      } else {
        let newUser: UserProps = {
          userID: user.userID,
          name: user.name,
          self: user.self,
          connected: user.connected,
          hasNewMessages: user.hasNewMessages,
          messages: user.messages,
        };

        userListClone.push(newUser);
      }
    });
    dispatch(setConnectedUsers(userListClone));*/
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
