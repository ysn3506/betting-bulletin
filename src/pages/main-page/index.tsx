import * as React from 'react';
import Layout from '../../layouts/base-layout';
import Header from '../../components/header';
import './style.scss';
import LoadingScreen from '../../components/loading-screen';
import { getBulletin } from '../../connection-service/apis';
import Table from '../../components/bet-table';
import { Match } from '../../types';
import Basket from '../../components/bet-basket';

function Main() {
	const [bulletinData, setBulletinData] = React.useState<Match[]>([]);
	const [loading, setLoading] = React.useState<boolean>(true);

	React.useEffect(() => {
		getBulletinData().then((resp) => {
			if (resp) {
				setBulletinData(resp.data);
				setLoading(false);
			}
		});
	}, []);

	const getBulletinData = async () => {
		const data = await getBulletin();
		return data;
	};

	return (
		<div className="main-wrapper">
			<Header />
			<Layout>
				{loading || bulletinData.length <= 0 ? (
					<LoadingScreen />
				) : (
					<Table data={bulletinData} />
				)}
			</Layout>
			<Basket />
		</div>
	);
}

export default Main;
