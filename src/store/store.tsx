/* eslint-disable no-fallthrough */
import create, { StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';
import { LetterState, getRandomWord, MatchingGuess } from '../utils/gameUtil';
interface GuessRow {
  guess: string;
  result?: LetterState[];
}

interface StoreState {
  answer: string;
  rows: GuessRow[];
  gameState: 'playing' | 'won' | 'lost';
  keyboardLetterState: { [letter: string]: LetterState };
  addGuess(guess: string): void;
  newGame(initialGuess?: string[]): void;
}

type MyPersist = (config: StateCreator<StoreState>, options: PersistOptions<StoreState>) => StateCreator<StoreState>;

export const useStore = create<StoreState>(
	(persist as MyPersist)(
		(set, get) => {
			const addGuess = (guess: string) => {
				const result = MatchingGuess(guess, get().answer);

				const rows = get().rows.concat({
					guess,
					result,
				});

				const didWin = result.every((r) => r === LetterState.Correct);

				const keyboardLetterState = get().keyboardLetterState;
				result.forEach((r, index) => {
					const resultGuessLetter = guess[index];

					const currentLetterState = keyboardLetterState[resultGuessLetter];
					switch (currentLetterState) {
					case LetterState.Correct:
						break;
					case LetterState.Exist:
						if (r === LetterState.Miss) {
							break;
						}
					default:
						keyboardLetterState[resultGuessLetter] = r;
						break;
					}
				});

				set({
					rows,
					keyboardLetterState,
					gameState: didWin ? 'won' : rows.length === 6 ? 'lost' : 'playing',
				});
			};

			return {
				answer: getRandomWord(),
				rows: [['g']],
				gameState: 'playing',
				keyboardLetterState: {},
				addGuess,
				newGame(initialRows = []) {
					set({
						gameState: 'playing',
						answer: getRandomWord(),
						rows: [],
						keyboardLetterState: {},
					});

					initialRows.forEach(addGuess);
				},
			};
		},
		{
			name: 'wordle',
			getStorage: () => localStorage,
		},
	),
);

// useStore.persist.clearStorage();

export const answerSelector = (state: StoreState) => state.answer;
