import {
  SidebarButton,
  SidebarContainer,
  SidebarWrapper,
  SignOutButton,
} from '../styles/components/sidebar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu } from './Menu';
import { asyncSignOut, setIsLogged } from '../stores/sessionSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import socket from '../services/socket';

interface SidebarProps {
  setSelectedMenu: (value: boolean) => void;
}

export function Sidebar({ setSelectedMenu }: SidebarProps) {
  const [isChatMenuActive, setIsChatMenuActive] = useState(false);
  const [isChartMenuActive, setIsChartMenuActive] = useState(false);
  const dispatch = useDispatch();

  function disconnectSocket() {
    dispatch(asyncSignOut());
    socket.disconnect();
  }

  return (
    <SidebarWrapper>
      <SidebarContainer>
        <div>
          <SidebarButton
            active={isChatMenuActive}
            onClick={() => setSelectedMenu(true)}
          >
            <FontAwesomeIcon
              icon={['far', 'comment-alt']}
              size="2x"
              onClick={() => {
                setIsChatMenuActive(!isChatMenuActive);
              }}
            />
          </SidebarButton>

          <SidebarButton
            active={isChartMenuActive}
            onClick={() => setSelectedMenu(false)}
          >
            <FontAwesomeIcon
              icon={['fas', 'chart-bar']}
              size="2x"
              onClick={() => {
                setIsChartMenuActive(!isChartMenuActive);
              }}
            />
          </SidebarButton>
        </div>

        <SignOutButton
          onClick={() => {
            dispatch(setIsLogged(false));
            disconnectSocket();
          }}
        >
          <FontAwesomeIcon icon={['fas', 'sign-out-alt']} size="2x" />
        </SignOutButton>
      </SidebarContainer>

      {isChatMenuActive && <Menu />}
    </SidebarWrapper>
  );
}
