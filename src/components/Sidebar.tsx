import { useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SidebarContainer } from '../styles/components/sidebar';
import { setIsLogged } from '../stores/sessionSlice';

export function Sidebar() {
  const dispatch = useDispatch();

  return (
    <SidebarContainer>
      <div>
        <button>
          <FontAwesomeIcon icon={['far', 'comment-alt']} size="2x" />
        </button>

        <button>
          <FontAwesomeIcon icon={['fas', 'chart-bar']} size="2x" />
        </button>
      </div>

      <button onClick={() => dispatch(setIsLogged(false))}>
        <FontAwesomeIcon icon={['fas', 'sign-out-alt']} size="2x" />
      </button>
    </SidebarContainer>
  );
}
