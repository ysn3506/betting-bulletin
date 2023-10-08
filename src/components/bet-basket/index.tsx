import * as React from 'react';
import { BetListContext } from '../../hooks/useBetList';
import './style.scss';

function Basket() {
	const [basketamount, setBasketAmount] = React.useState('0');
	const { matches } = React.useContext(BetListContext);

	React.useEffect(() => {
		if (matches.length > 0) {
			const totalRatio = matches.reduce(
				(a, b): number => a * Number(b.ratio),
				1
			);

			setBasketAmount(totalRatio.toFixed(2));
		} else {
			setBasketAmount('0');
		}
	}, [matches]);

	return (
		<div className="basket-wrapper">
			{basketamount !== '0' && (
				<div className="selected-matches">
					{matches.map((m) => (
						<div className="selected-match" key={m.match.NID}>
							<span>{m.match.OCG['1'].MBS}</span> <span>Kod: {m.match.C}</span>
							<span>Maç: {m.match.N}</span>{' '}
							<span className="ratio">Oran: {m.ratio}</span>
						</div>
					))}
				</div>
			)}

			<p className="total">
				<span>Toplam Tutar:</span>
				<span>{basketamount} TL</span>
			</p>
		</div>
	);
}

export default Basket;
