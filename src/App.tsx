import {useAtom} from 'jotai';
import {sceneAtom} from './atoms/atoms';
import Question from './components/Question';
import {CATEGORIES} from './constants/values';
import Category from './displays/Category';
import DailyDouble from './displays/DailyDouble';
import FinalJeopardy from './displays/FinalJeopardy';
import GameBoard from './displays/GameBoard';
import GameModeSelection from './displays/GameModeSelection';
import SplashScreen from './displays/SplashScreen';
import {Scene} from './types/scenes';
import React from 'react';

export default function App() {
  const [scene] = useAtom(sceneAtom);

  return (
    <>
      {scene === Scene.SPLASH_SCREEN && <SplashScreen />}
      {scene === Scene.GAME_MODE_SELECTION && <GameModeSelection />}
      {scene === Scene.GAME_BOARD && <GameBoard categories={CATEGORIES} />}
      {scene === Scene.QUESTION && <Question />}
      {scene === Scene.FINAL_JEOPARDY && <FinalJeopardy />}
      {scene === Scene.DOUBLE_JEOPARDY && <DailyDouble />}
      {scene === Scene.CATEGORY && <Category categories={CATEGORIES} />}
    </>
  );
}
