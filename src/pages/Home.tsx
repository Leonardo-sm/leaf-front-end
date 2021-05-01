import { HomeContainer, HomeImages } from '../styles/pages/home';
import { Sidebar } from '../components/Sidebar';
import { useValidateLogin } from '../hooks/query/useSession';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../stores/store';
import { asyncSignOut } from '../stores/sessionSlice';
import { Chat } from '../components/Chat';
import socket from '../services/socket';

type UserProps = {
  self: boolean;
  id: string;
  userID: string;
  name: string;
  connected: boolean;
};

export function Home() {
  const [chatIsActive, setChatIsActive] = useState(true);
  const [connectedUsers, setConnectedUsers] = useState<UserProps[]>([]);
  const session = useSelector((state: RootState) => state.session);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!session.isLogged) {
      history.push('/login');
      dispatch(asyncSignOut());
    }
  }, [session.isLogged, dispatch, history]);

  useValidateLogin();

  socket.on('users', (users: any) => {
    users.forEach((user: any) => {
      user.self = user.userID === socket.id;
      setInitialProps(user);

      users.sort((a: UserProps, b: UserProps) => {
        if (a.self) return -1;
        if (b.self) return 1;
        if (a.name < b.name) return -1;
        return a.name > b.name ? 1 : 0;
      });

      setConnectedUsers(users);
    });
  });

  socket.on('userConnected', (user: UserProps) => {
    setInitialProps(user);
    setConnectedUsers([...connectedUsers, user]);
  });

  function setInitialProps(user: UserProps) {
    user.id = user.userID;
    user.name = user.name;
    user.connected = true;
  }

  return (
    <HomeContainer>
      <Sidebar />

      {chatIsActive ? (
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
