export type KeySizings =
  | "nano"
  | "micro"
  | "mini"
  | "base"
  | "large"
  | "huge"
  | "giant"
  | "3x"
  | "4x"
  | "5x"
  | "massive"
  | "10x"
  | "colossal"
  | "xl"
  | "xls"
  | "100"
  | "75"
  | "50"
  | "25";
export type Sizings = {
  [key in KeySizings]: string;
};
