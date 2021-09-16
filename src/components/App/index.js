import { BrowserRouter } from 'react-router-dom';
import '../../assets/styles/global.scss';
import Routes from '../../Routes';

import Header from '../Header';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <Routes />
      </main>
    </BrowserRouter>
  );
}

export default App;
