const BASE_URI = process.env.REACT_APP_BASE_URI;
const API_KEY = process.env.REACT_APP_API_KEY;

const DEFAULT_HEADERS = {
	'Content-Type': 'application/json',
};

const interceptor = <T>(response: any): Promise<T> => {
	if (response.ok) {
		return response.json().then((data: T) => Promise.resolve(data));
	}
	return response.json().then((data: any) => Promise.reject(data));
};

const intercept = <T>(data: Promise<any>) =>
	data.then(data => interceptor<T>(data));

export const post = <T = any>(
	url: string,
	body: any,
	headers?: { [k: string]: string }
) =>
	intercept<T>(
		fetch(`${BASE_URI}/${url}`, {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				...DEFAULT_HEADERS,
				...headers,
			},
		})
	);

export const get = <T = any>(url: string, headers?: { [k: string]: string }) =>
	intercept<T>(
		fetch(`${BASE_URI}/2.0/?api_key=${API_KEY}&${url}`, {
			method: 'GET',
			headers: {
				...DEFAULT_HEADERS,
				...headers,
			},
		})
	);

export const getParsedParams = (params: { [k: string]: any }) =>
	new URLSearchParams(params).toString();
