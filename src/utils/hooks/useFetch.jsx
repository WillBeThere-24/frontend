import { useState } from 'react';
import axios from 'axios';

const useFetch = () => {
	const [loading, setLoading] = useState(true);

	const fetchData = async (url) => {
		setLoading(true);
		try {
			const { data } = await axios.get(url);
			return data;
		} catch (error) {
			throw new Error(error.response.data.message);
		} finally {
			setLoading(false);
		}
	};
	return { fetchData, loading };
};

export default useFetch;
