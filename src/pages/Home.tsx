import { HomeContainer, HomeImages } from '../styles/pages/home';
import {
  setConnectedUsers,
  setConnectedUsers as setUsersIntoStore,
} from '../stores/chatSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useLayoutEffect, useMemo, useState } from 'react';

import { Chat } from '../components/Chat';
import { RootState } from '../stores/store';
import { Sidebar } from '../components/Sidebar';
import { asyncSignOut } from '../stores/sessionSlice';
import { connected } from 'node:process';
import socket from '../services/socket';
import update from 'immutability-helper';
import { useHistory } from 'react-router-dom';
import { useValidateLogin } from '../hooks/query/useSession';

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
  // const session = useSelector((state) => state.session);
  const chat = useSelector((state: RootState) => state.chat);
  // const chat = useSelector((state) => state.chat);
  const history = useHistory();
  const dispatch = useDispatch();

  const [cloneUsers, setcloneUsers] = useState<any[]>([]);

  useEffect(() => {
    setcloneUsers(chat.connectedUsers);
    console.log(chat.connectedUsers);
  }, [chat.connectedUsers]);

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

  // socket.on('privateMessage', ({ content, from }: ReceivedMessages) => {
  //   let userListClone: UserProps[] = [];
  //   chat.connectedUsers.forEach((user: UserProps) => {
  //     if (user.userID === from) {
  //       let newUser: UserProps = {
  //         userID: user.userID,
  //         name: user.name,
  //         self: user.self,
  //         connected: user.connected,
  //         hasNewMessages: user.hasNewMessages,
  //         messages: [...user.messages, { content, fromSelf: false }],
  //       };

  //       console.log(user.messages);

  //       if (user !== chat.selectedUser) {
  //         newUser.hasNewMessages = true;
  //       }
  //       userListClone.push(newUser);
  //       console.log(user.hasNewMessages);
  //     } else {
  //       let newUser: UserProps = {
  //         userID: user.userID,
  //         name: user.name,
  //         self: user.self,
  //         connected: user.connected,
  //         hasNewMessages: user.hasNewMessages,
  //         messages: user.messages,
  //       };

  //       userListClone.push(newUser);
  //     }
  //   });
  //   dispatch(setConnectedUsers(userListClone));
  // });

  socket.on('privateMessage', ({ content, from }: ReceivedMessages) => {
    console.log('chegou menssagems');
    console.log(content);
    let userListClone: UserProps[] = [];
    chat.connectedUsers.map((user: UserProps, index: number) => {
      // if (user.userID === from) {
      //   let newUser: UserProps = {
      //     userID: user.userID,
      //     name: user.name,
      //     self: user.self,
      //     connected: user.connected,
      //     hasNewMessages: user.hasNewMessages,
      //     messages: [...user.messages, { content, fromSelf: false }],
      //   };

      //   console.log(user.messages);

      //   if (user !== chat.selectedUser) {
      //     newUser.hasNewMessages = true;
      //   }
      //   userListClone.push(newUser);
      //   console.log(user.hasNewMessages);
      // } else {
      //   let newUser: UserProps = {
      //     userID: user.userID,
      //     name: user.name,
      //     self: user.self,
      //     connected: user.connected,
      //     hasNewMessages: user.hasNewMessages,
      //     messages: user.messages,
      //   };

      //   userListClone.push(newUser);
      // }

      if (user.userID === from) {
        console.log(cloneUsers[index]);
        // const newMessage = update(chat.connectedUsers[index].messages, {
        //   $push: [{ content, fromSelf: false }],
        // });

        const users = chat.connectedUsers.filter((item) =>
          item.userID !== from ? item : null
        );

        const newMessage = update(chat.connectedUsers[index], {
          hasNewMessages: { $set: true },
          messages: { $push: [{ content, fromSelf: false }] },
        });

        console.log('teste');
        console.log(newMessage);

        dispatch(setConnectedUsers([...users, newMessage]));

        // let users = cloneUsers;

        // users[0].hasNewMessages = true;

        // users[index].messages = [
        //   ...users[index].messages,
        //   { content, fromSelf: false },
        // ];

        // const selfUser = chat.connectedUsers.filter((item) =>
        //   item.userID === from ? item : null
        // );

        // dispatch(setConnectedUsers([...users, newMessage]));
      }
    });
    // dispatch(setConnectedUsers(userListClone));
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
