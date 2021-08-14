import Home from './containers/Home';
import About from './containers/About';
import Team from './containers/Team';
import FAQs from './containers/FAQs';
import Game from './containers/Game';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import { AppSocial } from './App.style';

const App = () => {
  return (
    <Wrapper>
      <Home />
      <About />
      <Team />
      <FAQs />
      <Game />
      <AppSocial>
        <a href="https://www.facebook.com"><i className='fab fa-facebook fa-5x'/></a>
        <a href="https://www.instagram.com"><i className='fab fa-instagram fa-5x'/></a>
      </AppSocial>
      <Navbar />
    </Wrapper>
  );
};

export default App;
