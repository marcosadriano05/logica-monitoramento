import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import { Main } from './styles';

function App() {
  return (
    <div className="container">
      <Header />
      <Main>
        <Sidebar />
        <h1>Hello</h1>
      </Main>
    </div>
  );
}

export default App;
