import * as React from 'react';
import { BetListContext } from '../../hooks/useBetList';
import { Match } from '../../types';
import './style.scss';

type BetButton = {
	row: Match;
	selected: boolean;
	clickFunc: any;
	content: string | undefined;
	betType: string;
};

function BetButton({ selected, clickFunc, content, row, betType }: BetButton) {
	const { addMatch, removeMatch } = React.useContext(BetListContext);

	const clickButton = () => {
		if (content) {
			clickFunc();
			if (selected) {
				removeMatch(row);
				return;
			} else {
				addMatch(row, content, betType);
			}
		}
	};

	return (
		<button
			className={`bet-button ${selected && 'selected'}`}
			onClick={clickButton}
		>
			{content}
		</button>
	);
}

export default BetButton;
