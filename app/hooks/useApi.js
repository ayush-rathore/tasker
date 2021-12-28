import { useState } from "react";

const useApi = (apiFunc) => {
	const [loading, setLoading] = useState(false);

	const request = async (...args) => {
		setLoading(true);
		const response = await apiFunc(...args);
		setLoading(false);

		console.log(response.data);

		if (!response.ok) return response;
		return response;
	};

	return { loading, request };
};

export default useApi;
