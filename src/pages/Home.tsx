import { HomeContainer, HomeImages } from '../styles/pages/home';
import {
  setConnectedUsers,
  setConnectedUsers as setUsersIntoStore,
} from '../stores/chatSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { Chat } from '../components/Chat';
import Graphics from './Graphics';
import { RootState } from '../stores/store';
import { Sidebar } from '../components/Sidebar';
import { asyncSignOut } from '../stores/sessionSlice';
import { setIsChatActive } from '../stores/chatSlice';
import socket from '../services/socket';
import update from 'immutability-helper';
import { useHistory } from 'react-router-dom';
import { useValidateLogin } from '../hooks/query/useSession';

type ReceivedMessages = {
  content: string;
  from: string;
  to: string;
};

export type MessagesProps = {
  sender: string;
  receiver: string;
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
  const [selectedMenu, setSelectedMenu] = useState(true);

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
  socket.on('privateMessage', ({ content, from, to }: ReceivedMessages) => {
    chat.connectedUsers.forEach((user: UserProps, index: number) => {
      if (user.userID === from) {
        const users = chat.connectedUsers.filter((item) =>
          item.userID !== from ? item : null
        );

        const newMessage = update(chat.connectedUsers[index], {
          hasNewMessages: { $set: true },
          messages: {
            $push: [{ sender: from, receiver: to, content, fromSelf: false }],
          },
        });
        dispatch(setConnectedUsers([...users, newMessage]));
      }
    });
  });

  if (selectedMenu) {
    return (
      <HomeContainer>
        <Sidebar setSelectedMenu={(value: boolean) => setSelectedMenu(value)} />

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
  } else {
    dispatch(setIsChatActive(false));
    return (
      <HomeContainer>
        <Sidebar setSelectedMenu={(value: boolean) => setSelectedMenu(value)} />
        <Graphics />
      </HomeContainer>
    );
  }
}
