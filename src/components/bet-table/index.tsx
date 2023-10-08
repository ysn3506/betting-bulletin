import * as React from 'react';
import './style.scss';
import MatchRow from '../bet-row';
import { Match } from '../../types';
import InfiniteScroll from 'react-infinite-scroll-component';
import loading from '../../assets/loading-nesine-icon.gif';
import scroll from '../../assets/scroll-up.png';
import { matchPerPage, scrollTopButonVisibilityStrict } from '../../constans';

type TablePropsType = {
	data: Match[];
};

export default function Table({ data }: TablePropsType) {
	const firstPage = data.slice(0, matchPerPage);
	const [visibleRows, setVisibleRows] = React.useState<Match[]>(firstPage);
	const [page, setPage] = React.useState(1);
	const [isLastPage, setIsLastPage] = React.useState(false);
	const [scrollAmount, setScrollAmount] = React.useState(0);
	const tableRef = React.useRef<HTMLDivElement>();
	const maxPage =
		data.length % 100 === 0
			? data.length / matchPerPage
			: Math.floor(data.length / matchPerPage) + 1;

	React.useEffect(() => {
		page === maxPage && setIsLastPage(true);
	}, [page]);

	// React.useEffect(() => {

	//     if (tableRef && tableRef.current?.scrollTop > 500) {
	//         setisScrollButtonVisible(true);
	//     }
	// }, [tableRef.current.sc]);

	const getMoreData = () =>
		new Promise((res): void => {
			if (page < maxPage) {
				const nextPage = data.slice(
					visibleRows.length,
					visibleRows.length * (page + 1)
				);
				setPage(page + 1);
				setVisibleRows([...visibleRows, ...nextPage]);
				res(true);
			}
		});

	const scrollTop = () =>
		tableRef.current.scrollTo({ top: 0, behavior: 'smooth' });

	const scrolledAmount = (e: any) => {
		setScrollAmount(e.target.scrollTop);
	};

	return (
		<div
			className="table-wrapper"
			id="bulletin-table"
			ref={tableRef}
			onScroll={scrolledAmount}
		>
			{scrollAmount > scrollTopButonVisibilityStrict && (
				<button className="go-to-top" onClick={scrollTop}>
					<img src={scroll} alt="top" />
				</button>
			)}
			<div className="header">
				<div>Tarih</div>
				<div className="comments">Yorumlar</div>
				<div></div>
				<div>1</div>
				<div>X</div>
				<div>2</div>
				<div>Alt</div>
				<div>Üst</div>
				<div>H1</div>
				<div>1</div>
				<div>X</div>
				<div>2</div>
				<div>H2</div>
				<div>1-X</div>
				<div>1-2</div>
				<div>X-2</div>
				<div>Var</div>
				<div>Yok</div>
			</div>
			<InfiniteScroll
				dataLength={visibleRows.length}
				next={getMoreData}
				hasMore={!isLastPage}
				loader={<img src={loading} alt="nesine-gif" />}
				scrollableTarget="bulletin-table"
			>
				{visibleRows.map((row: Match) => (
					<MatchRow key={row.NID} row={row} />
				))}
			</InfiniteScroll>
		</div>
	);
}

// const fetchMoreData = () => {
//     setTimeout(() => {
//         setItems(items.concat(makeData(2)));
//     }, 1500);
// };

// const data = React.useMemo(() => items, [items]);
