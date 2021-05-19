import {
  ContainerGraphics,
  DescriptionWrapper,
  GraphicBox,
  GraphicsWrapper,
} from '../styles/pages/graphics';

import Graphic from '../components/Graphic';
import GraphicsMenu from '../components/GraphicsMenu';
import { api } from '../services/api';
import { useQuery } from 'react-query';
import { useState } from 'react';

export interface GraphicProps {
  graphicId: number;
  id: number;
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

function Graphics() {
  const [graphicSelected, setGraphicSelected] = useState<any>([]);

  const result = useQuery('graphics', () => api.get('/graphics')).data?.data;

  return (
    <ContainerGraphics>
      <GraphicsMenu
        graphics={result}
        setGraphicSelected={(data: GraphicProps) => setGraphicSelected([data])}
      />
      <GraphicsWrapper>
        {graphicSelected.length !== 0 && (
          <GraphicBox>
            <h1>{graphicSelected[0].graphic.title}</h1>
            <Graphic
              data={graphicSelected[0].data}
              type={graphicSelected[0].graphic.type}
            />
            <DescriptionWrapper>
              <h3>Descrição:</h3>
              <p>{graphicSelected[0].graphic.description}</p>
            </DescriptionWrapper>
          </GraphicBox>
        )}
      </GraphicsWrapper>
    </ContainerGraphics>
  );
}

export default Graphics;
