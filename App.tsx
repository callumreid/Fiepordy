import React, {useState} from 'react';
import GameBoard from './components/GameBoard';
import FinalJeopardy from './components/FinalJeopardy';
import Question from './components/Question';
import SplashScreen from './android/displays/SplashScreen';

export enum Scene {
  SPLASHSCREEN,
  GAMEBOARD,
  QUESTION,
  FINALJEOPARDY,
}

export default function App() {
  const [scene, setScene] = useState<Scene>(Scene.SPLASHSCREEN);

  return (
    <>
      {scene === Scene.SPLASHSCREEN && <SplashScreen setScene={setScene} />}
      {scene === Scene.GAMEBOARD && <GameBoard setScene={setScene} />}
      {scene === Scene.QUESTION && <Question setScene={setScene} />}
      {scene === Scene.FINALJEOPARDY && <FinalJeopardy />}
    </>
  );
}
