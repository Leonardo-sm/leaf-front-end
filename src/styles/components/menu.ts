import styled from 'styled-components';
import { fromTheme } from '../../utils';
import Tabs, { TabPane } from 'rc-tabs';

export const TabContainer = styled(Tabs)`
  flex-direction: column;
  display: flex;

  width: 30.3rem;

  background-color: ${fromTheme('surface')};

  font-family: 'Inter';
  font-weight: 500;

  overflow-y: auto;

  .rc-tabs-nav-list {
    justify-content: space-between;

    display: flex;

    color: ${fromTheme('text')};

    font-size: 20px;

    margin-top: 74px;
  }

  .rc-tabs-content {
    display: flex;
    flex-direction: column;
    flex: 1;

    background-color: ${fromTheme('menu')};
  }
`;

export const TabPaneContacts = styled(TabPane)`
  .box-container {
    flex-direction: column;
    display: flex;

    h2 {
      font-size: 24px;
      font-weight: 400;

      margin: 42px 37px 35px 28px;

      color: ${fromTheme('placeholder')};
    }

    &:hover {
      cursor: pointer;
      background-color: ${fromTheme('selected')};

      h2 {
        color: ${fromTheme('text')};
      }
  }
`;

export const TabPaneMessages = styled(TabPane)`
  .box-container {
    flex-direction: column;
    display: flex;

    h2 {
      font-size: 24px;
      font-weight: 400;

      margin-top: 22px;
      margin-left: 23px;

      color: ${fromTheme('placeholder')};
    }

    div {
      justify-content: space-between;
      flex-direction: row;

      display: flex;

      p {
        margin: 16px 16px 23px 29px;

        font-size: 18px;

        color: ${fromTheme('lightPurple')};
      }
    }

    &:hover {
      cursor: pointer;
      background-color: ${fromTheme('selected')};

      h2 {
        color: ${fromTheme('text')};
      }

      p {
        color: ${fromTheme('secondary')};
      }
    }
  }
`;
