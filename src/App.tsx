import 'normalize.css';
import './setup/fontawesome';

import GlobalStyled from './styles/GlobalStyles';
import Routes from './routes';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyled />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
