import { useState } from 'react';
import { Chat } from '../components/Chat';
import { Sidebar } from '../components/Sidebar';
import { HomeContainer, HomeImages } from '../styles/pages/home';

export function Home() {
  const [chatIsActive, setChatIsActive] = useState(true);
  return (
    <HomeContainer>
      <Sidebar />

      {chatIsActive ? (
        <Chat />
      ) : (
        <HomeImages>
          <img src="images/LeafHome.svg" alt="Leaf home logo" />

          <img src="images/Leaf.svg" alt="Leaf" />
        </HomeImages>
      )}
    </HomeContainer>
  );
}
