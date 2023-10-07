import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './global-styles/style.scss';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<div>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</div>
);
