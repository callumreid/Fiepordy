import {atom} from 'jotai';
import {Scene} from '../types/scenes';

// Create your atoms and derivatives
export const sceneAtom = atom(Scene.SPLASH_SCREEN);
export const selectedCategoryAtom = atom('');
export const selectedValueAtom = atom(0);
