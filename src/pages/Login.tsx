import { AxiosError, AxiosResponse } from 'axios';
import {
  LoginContainer,
  LoginImage,
  LoginItemsWrapper,
  LoginRightSection,
} from '../styles/pages/login';

import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import { api } from '../services/api';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

interface FormInputsProps {
  orgId: string;
  name: string;
  username: string;
  password: string;
}

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const history = useHistory();

  async function createUser(data: FormInputsProps) {
    await api
      .post('/users', data)
      .then((response: AxiosResponse) => {
        history.push('/success');
      })
      .catch((reason: AxiosError) => {
        console.log('error');
      });
  }

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
            <SignupForm
              setIsLogin={(state: boolean) => setIsLogin(state)}
              createUser={(data) => createUser(data)}
            />
          )}
        </LoginRightSection>
      </LoginItemsWrapper>
    </LoginContainer>
  );
}

export default Login;
