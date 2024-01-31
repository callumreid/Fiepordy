import {commonFirstNames} from '../constants/names';

/**
 * Gets a random name from a validated list
 * @returns a random name from the common first names list
 */
export const getRandomName = (): string =>
  commonFirstNames[Math.floor(Math.random() * commonFirstNames.length)];
