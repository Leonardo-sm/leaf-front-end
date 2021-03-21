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

interface SignupFormProps {
  setIsLogin: (state: boolean) => void;
}

interface FormInputsProps {
  idOrg: string;
  name: string;
  username: string;
  password: string;
}

const schema = yup.object().shape({
  idOrg: yup.string().required(),
  name: yup.string().required(),
  username: yup.string().max(100).required(),
  password: yup.string().max(100).required(),
});

function SignupForm({ setIsLogin }: SignupFormProps) {
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
    return console.log({
      ...data,
      password: toSHA512(data.password),
    });
  };

  return (
    <LoginFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <LoginInputWrapper>
        <LoginInput
          name="idOrg"
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
        <Button w="9rem" onClick={goBackHandle}>
          Voltar
        </Button>
        <Button w="9rem" type="submit" idType="outline" onClick={signinHandle}>
          Cadastrar
        </Button>
      </LoginButtonWrapper>
    </LoginFormWrapper>
  );
}

export default SignupForm;
