import 'normalize.css';
import './setup/fontawesome';

import { QueryClient, QueryClientProvider } from 'react-query';

import GlobalStyled from './styles/GlobalStyles';
import { Provider } from 'react-redux';
import Routes from './routes';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import store from './stores/store';

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={light}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <GlobalStyled />
          <Routes />
        </Provider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
