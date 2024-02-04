import React from 'react';
import GameBoard from './displays/GameBoard';
import FinalJeopardy from './displays/FinalJeopardy';
import Question from './components/Question';
import {Scene} from './types/scenes';
import {useAtom} from 'jotai';
import {sceneAtom} from './atoms/atoms';
import GameModeSelection from './displays/GameModeSelection';
import SplashScreen from './displays/SplashScreen';
import DailyDouble from './displays/DailyDouble';
import Category from './displays/Category';
import {SocketContextWrapper} from './context/SocketContextWrapper';

export default function App() {
  const [scene] = useAtom(sceneAtom);
  const categories = [
    'Myths & Legends',
    'TV Show',
    'Holidays Around The World',
    '19th Century America',
  ];
  return (
    <SocketContextWrapper>
      {scene === Scene.SPLASH_SCREEN && <SplashScreen />}
      {scene === Scene.GAME_MODE_SELECTION && <GameModeSelection />}
      {scene === Scene.GAME_BOARD && <GameBoard categories={categories} />}
      {scene === Scene.QUESTION && <Question />}
      {scene === Scene.FINAL_JEOPARDY && <FinalJeopardy />}
      {scene === Scene.DOUBLE_JEOPARDY && <DailyDouble />}
      {scene === Scene.CATEGORY && <Category categories={categories} />}
    </SocketContextWrapper>
  );
}
