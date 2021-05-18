import { HomeContainer, HomeImages } from '../styles/pages/home';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import Graphics from './Graphics';
import { Menu } from '../components/Menu';
import { RootState } from '../stores/store';
import { Sidebar } from '../components/Sidebar';
import { asyncSignOut } from '../stores/sessionSlice';
import { useHistory } from 'react-router-dom';
import { useValidateLogin } from '../hooks/query/useSession';

export function Home() {
  const session = useSelector((state: RootState) => state.session);
  const history = useHistory();
  const dispatch = useDispatch();
  const [selectedMenu, setSelectedMenu] = useState(true);

  useEffect(() => {
    if (!session.isLogged) {
      history.push('/login');
      dispatch(asyncSignOut());
    }
  }, [session.isLogged, dispatch, history]);

  return (
    <HomeContainer>
      <Sidebar setSelectedMenu={(value: boolean) => setSelectedMenu(value)} />
      {selectedMenu ? (
        <>
          <Menu />
          <HomeImages>
            <img src="images/LeafHome.svg" alt="Leaf home logo" />

            <img src="images/Leaf.svg" alt="Leaf" />
          </HomeImages>
        </>
      ) : (
        <Graphics />
      )}
    </HomeContainer>
  );
}
