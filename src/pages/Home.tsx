import { Sidebar } from '../components/Sidebar';
import { Menu } from '../components/Menu';
import { HomeContainer, HomeImages } from '../styles/pages/home';

export function Home() {
  const isMobile = window.innerWidth <= 1000;

  return (
    <HomeContainer>
      {!isMobile && <Sidebar isMobile={isMobile} />}
      <Menu />
      {!isMobile && (
        <HomeImages>
          <img src="images/LeafHome.svg" alt="Leaf home logo" />

          <img src="images/Leaf.svg" alt="Leaf" />
        </HomeImages>
      )}
      {isMobile && <Sidebar isMobile={isMobile} />}
    </HomeContainer>
  );
}
