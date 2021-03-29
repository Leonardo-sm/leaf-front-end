import {
  SidebarButton,
  SidebarContainer,
  SidebarWrapper,
  SignOutButton,
} from '../styles/components/sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu } from './Menu';
import { useState } from 'react';

export function Sidebar() {
  const [isChatMenuActive, setIsChatMenuActive] = useState(true);
  const [isChartMenuActive, setIsChartMenuActive] = useState(false);

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

      {isChatMenuActive && <Menu />}
    </SidebarWrapper>
  );
}
