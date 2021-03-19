import { SidebarContainer } from '../styles/components/sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Sidebar() {
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

      <button>
        <FontAwesomeIcon icon={['fas', 'sign-out-alt']} size="2x" />
      </button>
    </SidebarContainer>
  );
}
