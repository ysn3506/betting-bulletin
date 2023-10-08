import { AxiosResponse } from 'axios';
import baseApi from './base-api';

export const getBulletin = async (): Promise<any> => {
	try {
		const response: AxiosResponse = await baseApi.get('/bets');
		// In order to check cache, we need to store Etag value of response in localStorage; But it should be accessible from BE.
		localStorage.setItem('Etag', response.headers?.['eTag']);
		return response;
	} catch (error) {
		console.log(error);
	}
};
