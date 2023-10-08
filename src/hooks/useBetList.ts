import { createContext, useState, useCallback } from 'react';
import { Match } from '../types';

export interface BetListContextData {
	matches: { match: Match; betType: string; ratio: string }[];
	addMatch: (match: Match, betType: string, ratio: string) => void;
	removeMatch: (match: Match) => void;
}

export const betListContextDefaultValue: BetListContextData = {
	matches: [],
	addMatch: () => null,
	removeMatch: () => null,
};

export const BetListContext = createContext<BetListContextData | undefined>(
	undefined
);

export function useBetsListContext(): BetListContextData {
	const [matches, setMatches] = useState<
		{ match: Match; ratio: string; betType: string }[]
	>([]);

	const addMatch = (match: Match, ratio: string, betType: string) => {
		const filteredList = matches.filter((m) => m.match.NID !== match.NID);
		setMatches([...filteredList, { match, betType, ratio }]);
	};

	const removeMatch = useCallback(
		(match: Match) => {
			const removedMatchList = matches.filter((m) => m.match.NID !== match.NID);
			setMatches(removedMatchList);
		},
		[setMatches, matches]
	);

	return {
		matches,
		addMatch,
		removeMatch,
	};
}
