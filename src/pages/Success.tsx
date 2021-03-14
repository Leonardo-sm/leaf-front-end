import { SuccessBackButton, SuccessContainer } from '../styles/pages/success';

export function Success() {
  return (
    <SuccessContainer>
      <h1>PARABÉNS</h1>

      <h3>
        Cadastro realizado com <span>sucesso</span>
      </h3>

      <SuccessBackButton type="button">
        Voltar à página de login
      </SuccessBackButton>
    </SuccessContainer>
  );
}
