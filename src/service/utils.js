import apiBase from './constants';

const getResource = async (url) => {
	const res = await fetch(`${apiBase}${url}`);

	if (!res.ok) {
		throw new Error(`Could not fetch ${url}, received ${res.status}`);
	}
	return res.json();
};

export default getResource;
