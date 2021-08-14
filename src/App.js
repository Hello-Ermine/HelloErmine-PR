import Home from './containers/Home';
import About from './containers/About';
import Team from './containers/Team';
import FAQs from './containers/FAQs';
import Game from './containers/Game';
import Wrapper from './components/Wrapper';

const App = () => {
  return (
    <Wrapper>
      <Home />
      <About />
      <Team />
      <FAQs />
      <Game />
    </Wrapper>
  );
};

export default App;
