import {
  GraphicsItemsButton,
  GraphicsItemsList,
  MenuContainer,
} from '../styles/components/graphicsMenu';

import { GraphicScreenProps } from '../pages/Graphics';

interface GraphicsMenuProps {
  graphics: GraphicScreenProps;
}

function GraphicsMenu({ graphics, setGraphicSelected }: any) {
  return (
    <MenuContainer>
      <h2>Graficos</h2>
      <GraphicsItemsList>
        {graphics?.map((item: any, key: any) => (
          <GraphicsItemsButton
            key={key}
            onClick={() => setGraphicSelected(item)}
          >
            <h3>{item.graphic.title}</h3>
            <h4>Descrição: </h4>
            <p>{item.graphic.description}</p>
          </GraphicsItemsButton>
        ))}
      </GraphicsItemsList>
    </MenuContainer>
  );
}

export default GraphicsMenu;
