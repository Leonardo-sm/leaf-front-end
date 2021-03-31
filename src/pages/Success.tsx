import { Button } from '../components';
import { SuccessContainer } from '../styles/pages/success';
import { useHistory } from 'react-router-dom';

export function Success() {
  const history = useHistory();

  return (
    <SuccessContainer>
      <h1>PARABÉNS</h1>

      <h3>
        Cadastro realizado com <span>sucesso</span>
      </h3>

      <Button
        p="10px 20px"
        idType="outline"
        onClick={() => history.push('/login')}
      >
        Voltar à página de login
      </Button>
    </SuccessContainer>
  );
}
