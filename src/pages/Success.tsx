import { Button } from '../components';
import { SuccessContainer } from '../styles/pages/success';

export function Success() {
  return (
    <SuccessContainer>
      <h1>PARABÉNS</h1>

      <h3>
        Cadastro realizado com <span>sucesso</span>
      </h3>

      <Button idType="outline">Voltar à página de login</Button>
    </SuccessContainer>
  );
}
