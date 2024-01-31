import {atom} from 'jotai';
import {Scene} from '../types/scenes';
import {SelectedQuestionsState} from '../types/state';
import {getRandomName} from '../utils/getRandomName';

export const sceneAtom = atom(Scene.SPLASH_SCREEN);
export const selectedCategoryAtom = atom('');
export const selectedValueAtom = atom(0);
export const selectedQuestionsAtom = atom<SelectedQuestionsState>({});
export const scoreAtom = atom(0);
export const userResponseAtom = atom('');
export const opp1ResponseAtom = atom('');
export const opp2ResponseAtom = atom('');

export const pregameGameBoardDisplayAtom = atom(true);
export const playerNamesAtom = atom<string[]>([
  getRandomName(),
  'You',
  getRandomName(),
]);
