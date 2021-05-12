import {
  ContainerGraphics,
  DescriptionWrapper,
  GraphicBox,
  GraphicsWrapper,
} from '../styles/pages/graphics';
import { useMemo, useState } from 'react';

import Graphic from '../components/Graphic';
import GraphicsMenu from '../components/GraphicsMenu';

export interface GraphicProps {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

export interface GraphicScreenProps {
  title: string;
  description: string;
  data: GraphicProps[];
}

const defaults: GraphicScreenProps = {
  title: '',
  description: '',
  data: [
    {
      name: '',
      uv: 0,
      pv: 0,
      amt: 0,
    },
  ],
};

function Graphics() {
  const [graphics, setGraphic] = useState<GraphicScreenProps[]>([]);
  const [graphicSelected, setGraphicSelected] = useState<GraphicScreenProps>(
    defaults
  );

  return (
    <ContainerGraphics>
      <GraphicsMenu graphics={graphics} />
      <GraphicsWrapper>
        <GraphicBox>
          <h1>{graphicSelected.title}</h1>
          <Graphic data={graphicSelected.data} />
          <DescriptionWrapper>
            <h3>Descrição: </h3>
            <p>{graphicSelected.description}</p>
          </DescriptionWrapper>
        </GraphicBox>
      </GraphicsWrapper>
    </ContainerGraphics>
  );
}

export default Graphics;
