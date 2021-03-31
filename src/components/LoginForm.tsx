import * as yup from 'yup';

import {
  LoginButtonWrapper,
  LoginFormWrapper,
  LoginInput,
  LoginInputWrapper,
} from '../styles/components/form';

import { Button } from '.';
import { toSHA512 } from '../utils';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface LoginFormProps {
  isLogin: boolean;
  setIsLogin: (state: boolean) => void;
}

interface FormInputsProps {
  username: string;
  password: string;
}

const schema = yup.object().shape({
  username: yup.string().max(100).required(),
  password: yup.string().max(100).required(),
});

function LoginForm({ setIsLogin }: LoginFormProps) {
  const { register, handleSubmit, errors, watch } = useForm<FormInputsProps>({
    resolver: yupResolver(schema),
  });

  function signinHandle() {
    setIsLogin(false);
  }

  const onSubmit = (data: FormInputsProps) => {
    return console.log({
      ...data,
      password: toSHA512(data.password),
    });
  };

  return (
    <LoginFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <LoginInputWrapper>
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
        <Button w="9rem" type="submit">
          Logar
        </Button>
        <Button w="9rem" idType="outline" onClick={signinHandle}>
          Cadastrar
        </Button>
      </LoginButtonWrapper>
    </LoginFormWrapper>
  );
}

export default LoginForm;
