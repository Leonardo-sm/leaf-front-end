import { useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  SidebarButton,
  SidebarContainer,
  SidebarWrapper,
  SignOutButton,
} from '../styles/components/sidebar';
import { setIsLogged } from '../stores/sessionSlice';
import { useState } from 'react';
import { Menu } from './Menu';

export function Sidebar() {
  const [isChatMenuActive, setIsChatMenuActive] = useState(false);
  const [isChartMenuActive, setIsChartMenuActive] = useState(false);
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
                setIsChatMenuActive(!isChatMenuActive);
              }}
            />
          </SidebarButton>

          <SidebarButton active={isChartMenuActive}>
            <FontAwesomeIcon
              icon={['fas', 'chart-bar']}
              size="2x"
              onClick={() => {
                setIsChartMenuActive(!isChartMenuActive);
              }}
            />
          </SidebarButton>
        </div>

        <SignOutButton onClick={() => dispatch(setIsLogged(false))}>
          <FontAwesomeIcon icon={['fas', 'sign-out-alt']} size="2x" />
        </SignOutButton>
      </SidebarContainer>

      {isChatMenuActive && <Menu />}
    </SidebarWrapper>
  );
}
