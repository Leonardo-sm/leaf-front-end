import { Sidebar } from '../components/Sidebar';
import { Menu } from '../components/Menu';
import { HomeContainer, HomeImages } from '../styles/pages/home';

export function Home() {
  return (
    <HomeContainer>
      <Sidebar />
      <Menu />
      <HomeImages>
        <img src="images/LeafHome.svg" alt="Leaf home logo" />

        <img src="images/Leaf.svg" alt="Leaf" />
      </HomeImages>
    </HomeContainer>
  );
}
