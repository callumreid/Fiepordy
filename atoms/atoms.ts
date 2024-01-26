import {atom} from 'jotai';
import {Scene} from '../types/scenes';
import {SelectedQuestionsState} from '../types/state';

// Create your atoms and derivatives
export const sceneAtom = atom(Scene.SPLASH_SCREEN);
export const selectedCategoryAtom = atom('');
export const selectedValueAtom = atom(0);
export const selectedQuestionsAtom = atom<SelectedQuestionsState>({});
export const scoreAtom = atom(0);
