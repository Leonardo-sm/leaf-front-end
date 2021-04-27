import { useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SidebarContainer } from '../styles/components/sidebar';
import { setIsLogged } from '../stores/sessionSlice';

export function Sidebar() {
  const dispatch = useDispatch();

  return (
    <SidebarWrapper>
      <SidebarContainer>
        <div>
          <SidebarButton active={isChatMenuActive}>
            <FontAwesomeIcon
              icon={['far', 'comment-alt']}
              size="2x"
              onClick={() => {
                isChatMenuActive
                  ? setIsChatMenuActive(false)
                  : setIsChatMenuActive(true);
              }}
            />
          </SidebarButton>

          <SidebarButton active={isChartMenuActive}>
            <FontAwesomeIcon icon={['fas', 'chart-bar']} size="2x" />
          </SidebarButton>
        </div>

        <SignOutButton>
          <FontAwesomeIcon icon={['fas', 'sign-out-alt']} size="2x" />
        </SignOutButton>
      </SidebarContainer>

      <button onClick={() => dispatch(setIsLogged(false))}>
        <FontAwesomeIcon icon={['fas', 'sign-out-alt']} size="2x" />
      </button>
    </SidebarContainer>
  );
}
