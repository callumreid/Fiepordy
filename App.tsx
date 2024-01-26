import React from 'react';
import GameBoard from './components/GameBoard';
import FinalJeopardy from './android/displays/FinalJeopardy';
import Question from './components/Question';
import {Scene} from './types/scenes';
import {useAtom} from 'jotai';
import {sceneAtom} from './atoms/atoms';
import GameModeSelection from './android/displays/GameModeSelection';
import SplashScreen from './android/displays/SplashScreen';
import DoubleJeopardy from './android/displays/DailyDouble';

export default function App() {
  const [scene] = useAtom(sceneAtom);

  return (
    <>
      {scene === Scene.SPLASH_SCREEN && <SplashScreen />}
      {scene === Scene.GAME_MODE_SELECTION && <GameModeSelection />}
      {scene === Scene.GAME_BOARD && <GameBoard />}
      {scene === Scene.QUESTION && <Question />}
      {scene === Scene.FINAL_JEOPARDY && <FinalJeopardy />}
      {scene === Scene.DOUBLE_JEOPARDY && <DoubleJeopardy />}
    </>
  );
}
