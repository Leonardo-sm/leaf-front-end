import { setIsLogged } from '../../stores/sessionSlice';
import { useDispatch, useSelector } from 'react-redux';

import { AxiosResponse } from 'axios';
import { RootState } from '../../stores/store';
import { api } from '../../services/api';
import { useQuery } from 'react-query';

export const CACHE_USER_KEY = 'users';

export function useValidateLogin() {
  const dispatch = useDispatch();
  const session = useSelector((state: RootState) => state.session);

  return useQuery(
    CACHE_USER_KEY,
    () =>
      api.get('/login').then((response: AxiosResponse) => {
        if (response.status !== 200) {
          dispatch(setIsLogged(false));
        }
      }),
    {
      refetchInterval: 900000,
      enabled: session.isLogged,
      onError: () => {
        dispatch(setIsLogged(false));
      },
    }
  );
}
