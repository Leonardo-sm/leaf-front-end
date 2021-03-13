import 'normalize.css';
import './setup/fontawesome';

import GlobalStyled from './styles/GlobalStyles';
import Routes from './routes';

function App() {
  return (
    <>
      <GlobalStyled />
      <Routes />
    </>
  );
}

export default App;
