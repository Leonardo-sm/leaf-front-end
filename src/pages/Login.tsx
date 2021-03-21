import {
  LoginButtonWrapper,
  LoginContainer,
  LoginFormWrapper,
  LoginImage,
  LoginInput,
  LoginInputWrapper,
  LoginItemsWrapper,
  LoginRightSection,
} from '../styles/pages/login';

import { Button } from '../components';
import { useState } from 'react';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [isSignin, setIsSignin] = useState(false);

  function signinHandle() {
    setIsLogin(false);
    setIsSignin(true);
  }

  function goBackHandle() {
    setIsLogin(true);
    setIsSignin(false);
  }

  return (
    <LoginContainer>
      <LoginItemsWrapper>
        {isLogin && <LoginImage src="images/LeafLogo.svg" alt="" />}
        <LoginRightSection>
          <img src="images/Leaf.svg" alt="" />
          <LoginFormWrapper>
            <LoginInputWrapper>
              {isSignin && (
                <>
                  <LoginInput placeholder="ID Organização" type="text" />
                  <LoginInput placeholder="Nome Completo" type="text" />
                </>
              )}
              <LoginInput placeholder="Username" type="text" />
              <LoginInput placeholder="Password" type="text" />
            </LoginInputWrapper>
            <LoginButtonWrapper>
              {isLogin && <Button>Logar</Button>}
              {isSignin && <Button onClick={goBackHandle}>Voltar</Button>}
              <Button idType="outline" onClick={signinHandle}>
                Cadastrar
              </Button>
            </LoginButtonWrapper>
          </LoginFormWrapper>
        </LoginRightSection>
      </LoginItemsWrapper>
    </LoginContainer>
  );
}

export default Login;
