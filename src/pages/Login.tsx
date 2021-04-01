import { AxiosError, AxiosResponse } from 'axios';
import {
  LoginContainer,
  LoginImage,
  LoginItemsWrapper,
  LoginRightSection,
} from '../styles/pages/login';

import Cookies from 'js-cookie';
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

  async function login(data: Pick<FormInputsProps, 'username' | 'password'>) {
    await api
      .post('/authenticate', data)
      .then((response: AxiosResponse) => {
        console.log('sucesso');
        console.log(response);
        Cookies.set(
          'uniqueSessionId',
          's%3A77e8cdcf-98af-487d-b5f2-1e6470d1fcd3.VKgkRjMpqCKOZkYaUnq5SAvVeNWHaPIUB3h49qs3nWk',
          {
            expires: 10,
          }
        );
      })
      .catch((reason: AxiosError) => {
        console.log('error');
      });

    setTimeout(async () => {
      await api
        .get('/login')
        .then((response: AxiosResponse) => {
          console.log(response);
        })
        .catch((reason: AxiosError) => {
          console.log('error');
        });
    }, 3000);
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
              login={(data) => login(data)}
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
