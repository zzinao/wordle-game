import create from 'zustand';
import { persist } from 'zustand/middleware';
import {LetterState, getRandomWord, MatchingGuess} from '../utils/gameLogic';

interface GuessRow {
  guess: string;
  result?: LetterState[];
}

interface StoreState {
  answer: string;
  rows: GuessRow[];
  gameState: 'playing' | 'win' | 'lost';
  keyboardLetterState: { [letter: string]: LetterState };
  addGuess(guess: string): void;
  newGame(initialGuess?: string[]): void;
}

export const useStore = create<StoreState>(
	persist(
		( set, get) => {
			const addGuess = (guess:string) => {
				const result = MatchingGuess(guess, get().answer);
				const rows = get().rows.concat({
					guess,
					result,
				});

				const didWin = result.every((result) => result === LetterState.Correct);
				const keyboardLetterState = get().keyboardLetterState;
				result.forEach((result, i) => {
					const resultGuessLetter = guess(i);
					const currentLetterState = keyboardLetterState[resultGuessLetter];
					switch (currentLetterState) {
					case LetterState.Correct:
						break;
					case LetterState.Exist:
						if( result === LetterState.Miss) {
							break;
						}
					// eslint-disable-next-line no-fallthrough
					default:
						keyboardLetterState[resultGuessLetter] = result;
						break;
					}
				});

				set({
					rows,
					keyboardLetterState,
					gameState: didWin ? 'wid' : rows.length === 6 ? 'lost' : 'playing',
				});
			};

			return {
				answer: getRandomWord(),
				rows: [],
				gameState: 'playing',
				KeyboardLetterState: {},
				addGuess,
				newGame(initialRows = []){
					set({
						gameState: 'playing',
						answer: getRandomWord(),
						rows: [],
						KeyboardLetterState: {},
					});

					initialRows.forEach(addGuess);
				},
			};
		},
		{
			name: 'wordle',
			getStorage: () => localStorage,
		}
	)
);