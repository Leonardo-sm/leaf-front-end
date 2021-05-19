import {
  SidebarButton,
  SidebarContainer,
  SidebarWrapper,
  SignOutButton,
} from '../styles/components/sidebar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu } from './Menu';
import { setIsLogged } from '../stores/sessionSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { RootState } from '../stores/store';
import { setConnectedUsers } from '../stores/chatSlice';
import socket from '../services/socket';

interface SidebarProps {
  setSelectedMenu: (value: boolean) => void;
}

export function Sidebar({ setSelectedMenu }: SidebarProps) {
  const [isChatMenuActive, setIsChatMenuActive] = useState(false);
  const [isChartMenuActive, setIsChartMenuActive] = useState(false);
  const dispatch = useDispatch();
  const chat = useSelector((state: RootState) => state.chat);

  function disconnectSocket() {
    socket.on('disconnect', () => {
      chat.connectedUsers.forEach((user) => {
        if (user.self) {
          const users = chat.connectedUsers.filter((item) =>
            !item.self ? item : null
          );
          let disconnectedUser = user;
          disconnectedUser = { ...disconnectedUser, connected: false };
          dispatch(setConnectedUsers([...users, disconnectedUser]));
        }
      });
    });
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
