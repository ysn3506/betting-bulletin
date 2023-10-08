import * as React from 'react';
import loading from '../../assets/loading-nesine-icon.gif';
import './style.scss';

function LoadingScreen() {
	return (
		<div className="loading-spinner">
			<img src={loading} alt="nesine gif" />
		</div>
	);
}

export default LoadingScreen;
