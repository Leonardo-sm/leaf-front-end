import { HomeContainer, HomeImages } from '../styles/pages/home';
import { Menu } from '../components/Menu';
import { Sidebar } from '../components/Sidebar';
import { useValidateLogin } from '../hooks/query/useSession';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../stores/store';
import { asyncSignOut } from '../stores/sessionSlice';

export function Home() {
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
