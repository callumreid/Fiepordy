import React, {useState} from 'react';
import GameBoard from './components/GameBoard';
import FinalJeopardy from './components/FinalJeopardy';
import Question from './components/Question';

export enum Scene {
  GAMEBOARD,
  QUESTION,
  FINALJEOPARDY,
}

export default function App() {
  const [scene, setScene] = useState<Scene>(Scene.GAMEBOARD);

  return (
    <>
      {scene === Scene.GAMEBOARD && <GameBoard setScene={setScene} />}
      {scene === Scene.QUESTION && <Question setScene={setScene} />}
      {scene === Scene.FINALJEOPARDY && <FinalJeopardy />}
    </>
  );
}
