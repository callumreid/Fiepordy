export type GameBoardProps = {
  categories: string[];
};

export type CategoryProps = {
  categories: string[];
};

export type DailyDoubleProps = {
  //todo
};

export type FinalJeopardyProps = {
  //todo
};

export type PodiumProps = {
  setUserResponse: any;
  name: string;
  score: number;
  isCurrentUser?: boolean;
};

export type ValueBoxProps = {
  isPregameBoard: boolean;
  isTitle: boolean;
  category: string;
  value: number;
  isSelected: boolean;
  onSelect: () => void;
  imageURI: string;
  disabled: boolean;
};
