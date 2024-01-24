import GameBoard from './components/GameBoard';
import FinalJeopardy from './components/FinalJeopardy';
import Question from './components/Question';
import {Scene} from './types/scenes';
import {useAtom} from 'jotai';
import {sceneAtom} from './atoms/atoms';

export default function App() {
  const [scene] = useAtom(sceneAtom);

  return (
    <>
      {scene === Scene.GAMEBOARD && <GameBoard />}
      {scene === Scene.QUESTION && <Question />}
      {scene === Scene.FINALJEOPARDY && <FinalJeopardy />}
    </>
  );
}
