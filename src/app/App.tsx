import { Container } from '@mui/material';

import Banner from '../components/banner';
import Board from '../components/board';
import Header from '../components/header';

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Banner />
        <Board />
      </Container>
    </div>
  );
}

export default App;
