import Scene from '../../components/Scene';
import { GameContainer, Topic, GameButton, GameContent } from './style';

import erminepc from '../../assets/game/ermine_landscape.png';
import erminemobile from '../../assets/game/ermine_portrait.png';
import { useEffect, useState } from 'react';

const Game = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      setIsMobile(true);
    }
  }, []);

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

export default Game;
