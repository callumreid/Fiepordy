import {atom} from 'jotai';
import {Scene} from '../types/scenes';
import {SelectedQuestionsState} from '../types/state';
import {getRandomName} from '../utils/getRandomName';

export const sceneAtom = atom(Scene.SPLASH_SCREEN);
export const selectedCategoryAtom = atom('');
export const selectedValueAtom = atom(0);
export const selectedQuestionsAtom = atom<SelectedQuestionsState>({});
export const scoresAtom = atom([0, 0, 0]);
export const userResponseAtom = atom('');
export const opp1ResponseAtom = atom('');
export const opp2ResponseAtom = atom('');
export const currentPlayerIndexAtom = atom(1);

export const pregameGameBoardDisplayAtom = atom(true);
export const playerNamesAtom = atom<string[]>([
  getRandomName(),
  'You',
  getRandomName(),
]);
