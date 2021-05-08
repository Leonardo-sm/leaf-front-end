import {
  ContainerGraphics,
  GraphicBox,
  GraphicsWrapper,
} from '../styles/pages/graphics';

import Graphic from '../components/Graphic';
import GraphicsMenu from '../components/GraphicsMenu';

function Graphics() {
  return (
    <ContainerGraphics>
      <GraphicsMenu />
      <GraphicsWrapper>
        <GraphicBox>
          <h1>Taxa de queimadas nos ultmos 10 anos</h1>
          <Graphic />
          <div style={{ textAlign: 'left' }}>
            <h3>Descrição: </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              ipsam provident eum quaerat minima molestias exercitationem
              accusantium eligendi ut nostrum consequuntur illum cumque sint
              error maiores eaque recusandae harum expedita? Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Vel vero rerum accusantium
              vitae fugiat nihil veritatis eius temporibus, alias rem qui
              cupiditate necessitatibus porro, et cumque consectetur dicta ad
              quis?
            </p>
          </div>
        </GraphicBox>
      </GraphicsWrapper>
    </ContainerGraphics>
  );
}

export default Graphics;
