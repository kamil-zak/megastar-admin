import { ChangeEvent, useLayoutEffect } from 'react';
import { useState } from 'react';
import { authCheck, authSignIn } from 'store/features/authSlice';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import Flex from 'components/Flex/Flex';
import { useAppDispatch, useAppSelector } from 'store/store';
import { Navigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import Form from 'components/Form/Form';
import LabelBox from 'components/LabelBox/LabelBox';
import LayoutItem from 'components/LayoutItem/LayoutItem';
import { StyledLoginTab, StyledLogo } from './LoginPage.styles';
import useAsyncThunk from 'hooks/useAsyncThunk';
import Spinner from 'components/Spinner/Spinner';

const LoginPage = () => {
  const [loginData, setLoginData] = useState({ login: '', password: '' });
  const auth = useAppSelector((store) => store.auth);

  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    if (!auth.isChecked) dispatch(authCheck());
  }, [auth.isChecked, dispatch]);

  const [signIn, { loading: isLogging }] = useAsyncThunk(authSignIn, loginData);

  const state = (useLocation().state || {}) as { pathname?: string };
  if (auth.user) return <Navigate to={state.pathname || '/'} />;

  const handleChange = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [currentTarget.name]: currentTarget.value });
  };

  if (!auth.isChecked) return <Spinner />;
  return (
    <>
      <StyledLogo />
      <StyledLoginTab title="Zaloguj się">
        <Form onSubmit={signIn}>
          <Flex gap={50}>
            <LabelBox text="Login">
              <Input value={loginData.login} name="login" onChange={handleChange} autoFocus />
            </LabelBox>
            <LabelBox text="Hasło">
              <Input type="password" name="password" value={loginData.password} onChange={handleChange} />
            </LabelBox>
            <LayoutItem align="center">
              <Button loading={isLogging} icon={faSignInAlt}>
                Zaloguj
              </Button>
            </LayoutItem>
          </Flex>
        </Form>
      </StyledLoginTab>
    </>
  );
};

export default LoginPage;
