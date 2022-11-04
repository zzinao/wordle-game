export enum LetterState {
    Miss,
    Godd,
    Perfect,
}

export type GuessArrType = {
    currentGuess: string;
    state: LetterState;
  };