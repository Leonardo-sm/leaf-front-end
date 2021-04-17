import styled from 'styled-components';
import { fromTheme } from '../../utils';

export const ContentContainer = styled.div`
  flex-direction: column;

  display: flex;

  height: 100vh;

  background-color: ${fromTheme('menu')};

  h2 {
    color: ${fromTheme('placeholder')};

    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 24;
  }

  @media (max-width: 1000px) {
    height: 100%;
  }
`;

export const MessageContainer = styled.div`
  padding: 22px 18px 13px 23px;

  transition: 0.2s;

  h2 {
    color: ${fromTheme('placeholder')};

    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 24;
  }

  div {
    justify-content: space-between;
    display: flex;

    margin-top: 17px;

    color: ${fromTheme('lightPurple')};

    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 18px;
  }

  &:hover {
    background-color: ${fromTheme('selected')};

    cursor: pointer;

    h2 {
      color: ${fromTheme('text')};
    }
    p {
      color: ${fromTheme('secondary')};
    }
  }
`;

export const ContactContainer = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  padding: 35px 37px 35px 28px;

  span {
    color: ${fromTheme('green')};
  }

  div {
    color: ${fromTheme('placeholder')};
  }

  &:hover {
    background-color: ${fromTheme('selected')};

    cursor: pointer;

    h2 {
      color: ${fromTheme('text')};
    }
    p {
      color: ${fromTheme('secondary')};
    }
  }
`;
