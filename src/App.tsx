import { BrowserRouter } from 'react-router-dom';
import { Root } from './pages/Root';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Root />
    </BrowserRouter>
  );
}

export default App;
