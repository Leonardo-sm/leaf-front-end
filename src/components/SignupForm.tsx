import * as yup from 'yup';

import {
  LoginButtonWrapper,
  LoginFormWrapper,
  LoginInput,
  LoginInputWrapper,
} from '../styles/components/form';

import { Button } from '.';
import { FormInputsProps } from '../types/login.types';
import { toSHA512 } from '../utils';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface SignupFormProps {
  setIsLogin: (state: boolean) => void;
  createUser: (data: FormInputsProps) => void;
  isMobile: boolean;
}
const schema = yup.object().shape({
  orgId: yup.string().required(),
  name: yup.string().required(),
  username: yup.string().max(100).required(),
  password: yup.string().max(100).required(),
});

function SignupForm({ setIsLogin, createUser, isMobile }: SignupFormProps) {
  const { register, handleSubmit, errors, watch } = useForm<FormInputsProps>({
    resolver: yupResolver(schema),
  });

  function signinHandle() {
    setIsLogin(false);
  }

  function goBackHandle() {
    setIsLogin(true);
  }

  const onSubmit = (data: FormInputsProps) => {
    createUser({
      ...data,
      username: data.username.toLowerCase(),
      password: toSHA512(data.password),
    });
  };

  return (
    <LoginFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <LoginInputWrapper>
        <LoginInput
          name="orgId"
          placeholder="ID Organização"
          type="text"
          ref={register}
        />
        <LoginInput
          name="name"
          placeholder="Nome Completo"
          type="text"
          ref={register}
        />

        <LoginInput
          name="username"
          placeholder="Username"
          type="text"
          ref={register}
        />
        <LoginInput
          name="password"
          placeholder="Password"
          type="password"
          ref={register}
        />
      </LoginInputWrapper>
      <LoginButtonWrapper>
        <Button w={isMobile ? '7.5rem' : '9rem'} onClick={goBackHandle}>
          Voltar
        </Button>
        <Button
          w={isMobile ? '7.5rem' : '9rem'}
          type="submit"
          idType="outline"
          onClick={signinHandle}
        >
          Cadastrar
        </Button>
      </LoginButtonWrapper>
    </LoginFormWrapper>
  );
}

export default SignupForm;
