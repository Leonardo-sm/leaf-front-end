import { AxiosError, AxiosResponse } from 'axios';
import {
  LoginContainer,
  LoginImage,
  LoginItemsWrapper,
  LoginRightSection,
  LogoImage,
} from '../styles/pages/login';
import { useDispatch, useSelector } from 'react-redux';

import { FormInputsProps } from '../types/login.types';
import LoginForm from '../components/LoginForm';
import { RootState } from '../stores/store';
import SignupForm from '../components/SignupForm';
import { api } from '../services/api';
import { asyncLogin } from '../stores/sessionSlice';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();

  const isMobile = window.innerWidth <= 1000;

  const session = useSelector((state: RootState) => state.session);

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

  function login(data: Pick<FormInputsProps, 'username' | 'password'>) {
    dispatch(asyncLogin(data));
  }

  return (
    <LoginContainer>
      <LoginItemsWrapper>
        {isLogin && !isMobile && (
          <LoginImage src="images/LeafLogo.svg" alt="leaf logo" />
        )}
        <LoginRightSection>
          <LogoImage src="images/Leaf.svg" alt="leaf" />
          {isLogin ? (
            <LoginForm
              isLogin={isLogin}
              setIsLogin={(state: boolean) => setIsLogin(state)}
              login={(data) => login(data)}
              isMobile={isMobile}
            />
          ) : (
            <SignupForm
              setIsLogin={(state: boolean) => setIsLogin(state)}
              createUser={(data) => createUser(data)}
              isMobile={isMobile}
            />
          )}
        </LoginRightSection>
      </LoginItemsWrapper>
    </LoginContainer>
  );
}

export default Login;
