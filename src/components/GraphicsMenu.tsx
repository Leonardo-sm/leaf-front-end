import {
  GraphicsItemsButton,
  GraphicsItemsList,
  MenuContainer,
} from '../styles/components/graphicsMenu';

import { GraphicScreenProps } from '../pages/Graphics';

interface GraphicsMenuProps {
  graphics: GraphicScreenProps[];
}

function GraphicsMenu({ graphics }: GraphicsMenuProps) {
  return (
    <MenuContainer>
      <h2>Graficos</h2>
      <GraphicsItemsList>
        {graphics.map((item, key) => (
          <GraphicsItemsButton key={key} onClick={() => null}>
            <h3>{item.title}</h3>
            <h4>Descrição: </h4>
            <p>{item.description}</p>
          </GraphicsItemsButton>
        ))}
      </GraphicsItemsList>
    </MenuContainer>
  );
}

export default GraphicsMenu;
