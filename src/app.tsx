import * as React from 'react';
import Main from './pages/main-page';
import { BetListContext, useBetsListContext } from './hooks/useBetList';

function App() {
	const betListContextValue = useBetsListContext();
	return (
		<BetListContext.Provider value={betListContextValue}>
			<Main />
		</BetListContext.Provider>
	);
}

export default App;
