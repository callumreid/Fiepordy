import React from 'react';
import GameBoard from './android/displays/GameBoard';
import FinalJeopardy from './android/displays/FinalJeopardy';
import Question from './components/Question';
import {Scene} from './types/scenes';
import {useAtom} from 'jotai';
import {sceneAtom} from './atoms/atoms';
import GameModeSelection from './android/displays/GameModeSelection';
import SplashScreen from './android/displays/SplashScreen';
import DailyDouble from './android/displays/DailyDouble';
import Category from './android/displays/Category';

export default function App() {
  const [scene] = useAtom(sceneAtom);
  const categories = [
    'Myths & Legends',
    'TV Show',
    'Holidays Around The World',
    '19th Century America',
  ];
  return (
    <>
      {scene === Scene.SPLASH_SCREEN && <SplashScreen />}
      {scene === Scene.GAME_MODE_SELECTION && <GameModeSelection />}
      {scene === Scene.GAME_BOARD && <GameBoard categories={categories} />}
      {scene === Scene.QUESTION && <Question />}
      {scene === Scene.FINAL_JEOPARDY && <FinalJeopardy />}
      {scene === Scene.DOUBLE_JEOPARDY && <DailyDouble />}
      {scene === Scene.CATEGORY && <Category categories={categories} />}
    </>
  );
}
