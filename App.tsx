import React from 'react';
import GameBoard from './components/GameBoard';
import FinalJeopardy from './components/FinalJeopardy';
import Question from './components/Question';
import {Scene} from './types/scenes';
import {useAtom} from 'jotai';
import {sceneAtom} from './atoms/atoms';
import SplashScreen from './android/displays/SplashScreen';

export default function App() {
  const [scene] = useAtom(sceneAtom);

  return (
    <>
      {scene === Scene.SPLASHSCREEN && <SplashScreen />}
      {scene === Scene.GAMEBOARD && <GameBoard />}
      {scene === Scene.QUESTION && <Question />}
      {scene === Scene.FINALJEOPARDY && <FinalJeopardy />}
    </>
  );
}
