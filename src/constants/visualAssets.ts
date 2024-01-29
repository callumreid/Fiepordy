export const gameBoardBlueStageURI =
  'https://custom-skills-public.s3.amazonaws.com/Fiepordy/fiepordy.stageBGBlue.png';

export const dailyDoubleURI =
  'https://custom-skills-public.s3.amazonaws.com/Fiepordy/fiepordy.dailyDouble.png';

export const finalJeopardyURI =
  'https://custom-skills-public.s3.amazonaws.com/Fiepordy/fieoprdy.finealJeopardy.png';

export const jeopardyTitleTextURI =
  'https://custom-skills-public.s3.amazonaws.com/Fiepordy/fiepordy.jeopardyTitleText.png';

export const jeopardyLogoSmallURI =
  'https://custom-skills-public.s3.amazonaws.com/Fiepordy/fiepordy.boardLogoTopRow.png';

export const jeopardyLogoURI =
  'https://custom-skills-public.s3.amazonaws.com/Fiepordy/fiepordy.jeopardyLogo.png';

export const podiumWithYouURI =
  'https://custom-skills-public.s3.amazonaws.com/Fiepordy/fiepordy.podiumWithYou.png';

export const blueBGURI =
  'https://custom-skills-public.s3.amazonaws.com/Fiepordy/fiepordy.blueBG.png';

const BOARD_IMAGE_BASE_URL =
  'https://custom-skills-public.s3.amazonaws.com/Fiepordy/';

const generateBoardImageUri = (x: string, y: string) =>
  `${BOARD_IMAGE_BASE_URL}fiepordy.boardLogo.x${x}.y${y}.png`;

export const boardImageURIs: {[key: string]: {[key: string]: string}} = {
  1: {
    1: generateBoardImageUri('1', '1'),
    2: generateBoardImageUri('1', '2'),
    3: generateBoardImageUri('1', '3'),
  },
  2: {
    1: generateBoardImageUri('2', '1'),
    2: generateBoardImageUri('2', '2'),
    3: generateBoardImageUri('2', '3'),
  },
  3: {
    1: generateBoardImageUri('3', '1'),
    2: generateBoardImageUri('3', '2'),
    3: generateBoardImageUri('3', '3'),
  },
  4: {
    1: generateBoardImageUri('4', '1'),
    2: generateBoardImageUri('4', '2'),
    3: generateBoardImageUri('4', '3'),
  },
};
