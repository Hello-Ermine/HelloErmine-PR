import Scene from '../../components/Scene';
import { GameContainer , Topic , GameButtom , GameContent} from './style';
import erminepc from '../../assets/game/Copy-of-ermine-ver-PC.png';

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
