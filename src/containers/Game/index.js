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
          <a 
            href={ !isMobile ? 'https://game.helloermine.com/' : 'javascript:void(0)' }
            className={ isMobile && 'disabled' }
            target={ !isMobile && '_blank' } 
            rel={ !isMobile && 'noreferrer' }>
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
