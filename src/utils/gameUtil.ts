import wordList from './wordList.json';

export enum LetterState {
  Miss,
  Exist,
  Correct,
}

// export function MatchingGuess(guess: string, answerString: string): LetterState[] {
// 	const result: LetterState[] = [];

// 	if (guess.length !== answerString.length) {
// 		return result;
// 	}

// 	const answer = answerString.split('');
// 	const guessAsArray = guess.split('');
// 	const answerLetterCount: Record<string, number> = {};

// 	guessAsArray.forEach((letter, index) => {
// 		const currentAnswerLetter = answer[index];

// 		answerLetterCount[currentAnswerLetter] = answerLetterCount[currentAnswerLetter]
// 			? answerLetterCount[currentAnswerLetter] + 1
// 			: 1;

// 		if (currentAnswerLetter === letter) {
// 			result.push(LetterState.Correct);
// 		} else if (answer.includes(letter)) {
// 			result.push(LetterState.Exist);
// 		} else {
// 			result.push(LetterState.Miss);
// 		}
// 	});

// 	result.forEach((curResult, resultIndex) => {
// 		if (curResult !== LetterState.Correct) {
// 			return;
// 		}

// 		const guessLetter = guessAsArray[resultIndex];

// 		answer.forEach((currentAnswerLetter, answerIndex) => {
// 			if (currentAnswerLetter !== guessLetter) {
// 				return;
// 			}

// 			if (result[answerIndex] === LetterState.Correct) {
// 				result[resultIndex] = LetterState.Miss;
// 			}

// 			if (answerLetterCount[guessLetter] <= 0) {
// 				result[resultIndex] = LetterState.Miss;
// 			}
// 		});

// 		answerLetterCount[guessLetter]--;
// 	});

// 	return result;
// }

// export const getRandomWord = () => {
// 	const random = Math.floor(Math.random() * wordList.valid.length);
// 	return wordList.valid[random];
// };

// export const isValidWord = (word: string): boolean => {
// 	return wordList.valid.concat(wordList.valid).includes(word);
// };

export function MatchingGuess(guess: string, answerString: string): LetterState[] {
	const result: LetterState[] = [];

	if (guess.length !== answerString.length) {
		return result;
	}

	const answer = answerString.split('');

	const guessAsArray = guess.split('');

	const answerLetterCount: Record<string, number> = {};

	guessAsArray.forEach((letter, index) => {
		const currentAnswerLetter = answer[index];

		answerLetterCount[currentAnswerLetter] = answerLetterCount[currentAnswerLetter]
			? answerLetterCount[currentAnswerLetter] + 1
			: 1;

		if (currentAnswerLetter === letter) {
			result.push(LetterState.Correct);
		} else if (answer.includes(letter)) {
			result.push(LetterState.Exist);
		} else {
			result.push(LetterState.Miss);
		}
	});

	result.forEach((curResult, resultIndex) => {
		if (curResult !== LetterState.Correct) {
			return;
		}

		const guessLetter = guessAsArray[resultIndex];

		answer.forEach((currentAnswerLetter, answerIndex) => {
			if (currentAnswerLetter !== guessLetter) {
				return;
			}

			if (result[answerIndex] === LetterState.Correct) {
				result[resultIndex] = LetterState.Miss;
			}

			if (answerLetterCount[guessLetter] <= 0) {
				result[resultIndex] = LetterState.Miss;
			}
		});

		answerLetterCount[guessLetter]--;
	});

	return result;
}

export function getRandomWord(): string {
	return wordList.valid[Math.floor(Math.random() * wordList.valid.length)];
}

export function isValidWord(word: string): boolean {
	return wordList.valid.concat(wordList.invalid).includes(word);
}