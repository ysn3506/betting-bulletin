import * as React from 'react';
import { Match } from '../../types';
import BetButton from '../bet-button';

type Row = { row: Match };

function MatchRow({ row }: Row) {
	const [selectedBet, setSelectedBet] = React.useState(null);

	const selectABet = (ratio: string, index: number) => {
		const bet = {
			title: renderHeaders[index],
			ratio,
		};
		const isSelected =
			selectedBet &&
			selectedBet.title === bet.title &&
			selectedBet.ratio === bet.ratio;
		setSelectedBet(isSelected ? null : bet);
	};

	const renderHeaders: string[] = [
		`${row.D} ${row.DAY} ${row.LN}`,
		'Yorumlar',
		'MBS',
		row.OCG['1'].OC['0']?.N,
		row.OCG['1'].OC['1']?.N,
		row.OCG['1'].OC['2']?.N || '2',
		row.OCG['5'].OC['25']?.N,
		row.OCG['5'].OC['26']?.N,
		'H1',
		row.OCG['1'].OC['0']?.N,
		row.OCG['1'].OC['1']?.N,
		row.OCG['1'].OC['2']?.N || '2',
		'H2',
		row.OCG['2'].OC['3']?.N,
		row.OCG['2'].OC['4']?.N,
		row.OCG['2'].OC['5']?.N,
		'Var',
		'Yok',
	];

	const renderButtons = [
		row.OCG['1'].OC['0']?.O,
		row.OCG['1'].OC['1']?.O,
		row.OCG['1'].OC['2']?.O,
		row.OCG['5'].OC['25']?.O,
		row.OCG['5'].OC['26']?.O,
		'',
		'',
		'',
		'',
		'',
		row.OCG['2'].OC['3']?.O,
		row.OCG['2'].OC['4']?.O,
		row.OCG['2'].OC['5']?.O,
	];

	const randomKeyGenerator = () => (Math.random() * 100).toString();

	return (
		<div className="match">
			<div className="match-information">
				{renderHeaders.map((h, i) => (
					<div
						className={i === 1 && 'comments'}
						key={h + row.NID + randomKeyGenerator()}
					>
						{h}
					</div>
				))}
			</div>
			<div className="match-content">
				<div>{`${row.C} ${row.T} ${row.N}`}</div>
				<div className="comments">Yorumlar</div>
				<div>{row.OCG['1'].MBS}</div>
				{renderButtons.map((button, index) => {
					const isSelected =
						selectedBet?.ratio === button &&
						selectedBet?.title === renderHeaders[index];
					return (
						<BetButton
							key={row.NID + button + randomKeyGenerator()}
							content={button}
							selected={isSelected}
							row={row}
							betType={renderHeaders[index]}
							clickFunc={() => selectABet(button, index)}
						/>
					);
				})}
				<div></div>
				<div></div>
			</div>
		</div>
	);
}

export default MatchRow;
