import Scene from '../../components/Scene';
import { GameContainer , Topic , GameButtom , GameContent} from './style';

import erminepc from '../../assets/game/ermine_landscape.png';
// import erminemobile from '../../assets/game/ermine_portrait.png';

const Game = () => {
  return (
    <Scene>
      <GameContainer>
        <GameContent>
          <Topic>GAME</Topic>
          <GameButtom img src={erminepc}/>
        </GameContent>
      </GameContainer>
    </Scene>
  );
};

export default Game;
