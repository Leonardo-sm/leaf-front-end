import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
  LoginContainer,
  LoginImage,
  LoginItemsWrapper,
  LoginRightSection,
} from '../styles/pages/login';

import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import { useState } from 'react';

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <LoginContainer>
      <LoginItemsWrapper>
        {isLogin && <LoginImage src="images/LeafLogo.svg" alt="Logo" />}
        <LoginRightSection>
          <img src="images/Leaf.svg" alt="" />
          {isLogin ? (
            <LoginForm
              isLogin={isLogin}
              setIsLogin={(state: boolean) => setIsLogin(state)}
            />
          ) : (
            <SignupForm setIsLogin={(state: boolean) => setIsLogin(state)} />
          )}
        </LoginRightSection>
      </LoginItemsWrapper>
    </LoginContainer>
  );
}

export default Login;
