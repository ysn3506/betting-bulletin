import axios from 'axios';

const _Etag = localStorage.getItem('ETag');
const Etag = _Etag ? _Etag : '';

export default axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		'cache-control': 'public, must-revalidate',
		'If-none-match': Etag,
	},
});
