import { AppContainer } from './App.style';

import Navbar from './components/Navbar';

import Home from './containers/Home';
import About from './containers/About';
import Team from './containers/Team';
import FAQs from './containers/FAQs';
import Game from './containers/Game';

const App = () => {
  return (
    <AppContainer>
      <Navbar/>
      <Home/>
      <About/>
      <Team/>
      <FAQs/>
      <Game/>
    </AppContainer>
  );
};

export default App;
