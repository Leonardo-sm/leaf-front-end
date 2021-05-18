import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SidebarContainer } from '../styles/components/sidebar';
import { setIsLogged } from '../stores/sessionSlice';
import { useDispatch } from 'react-redux';

interface SidebarProps {
  setSelectedMenu: (value: boolean) => void;
}

export function Sidebar({ setSelectedMenu }: SidebarProps) {
  const dispatch = useDispatch();

  return (
    <SidebarContainer>
      <div>
        <button onClick={() => setSelectedMenu(true)}>
          <FontAwesomeIcon icon={['far', 'comment-alt']} size="2x" />
        </button>

        <button onClick={() => setSelectedMenu(false)}>
          <FontAwesomeIcon icon={['fas', 'chart-bar']} size="2x" />
        </button>
      </div>

      <button onClick={() => dispatch(setIsLogged(false))}>
        <FontAwesomeIcon icon={['fas', 'sign-out-alt']} size="2x" />
      </button>
    </SidebarContainer>
  );
}
