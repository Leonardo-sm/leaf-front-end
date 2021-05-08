import { HomeContainer, HomeImages } from '../styles/pages/home';
import { useDispatch, useSelector } from 'react-redux';

import Graphics from './Graphics';
import { Menu } from '../components/Menu';
import { RootState } from '../stores/store';
import { Sidebar } from '../components/Sidebar';
import { asyncSignOut } from '../stores/sessionSlice';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useValidateLogin } from '../hooks/query/useSession';

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

      {/* <Menu />
      <HomeImages>
        <img src="images/LeafHome.svg" alt="Leaf home logo" />

        <img src="images/Leaf.svg" alt="Leaf" />
      </HomeImages> */}
      <Graphics />
    </HomeContainer>
  );
}
