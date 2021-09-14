import Scene from '../../components/Scene';
import PropTypes from 'prop-types';
import { GameContainer, Topic, GameButton, GameContent } from './style';

import erminepc from '../../assets/game/ermine_landscape.png';
import erminemobile from '../../assets/game/ermine_portrait.png';

const Game = ({ isMobile }) => {
  return (
    <Scene>
      <GameContainer>
        <GameContent>
          <Topic>GAME</Topic>
          <a href="#" target='_blank' rel='noreferrer' onClick={() => isMobile && false}>
            <GameButton src={ isMobile ? erminemobile : erminepc} />
          </a>
        </GameContent>
      </GameContainer>
    </Scene>
  );
};

Game.propTypes = {
  isMobile: PropTypes.bool
};

export default Game;
