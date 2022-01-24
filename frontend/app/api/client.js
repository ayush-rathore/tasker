import { create } from "apisauce";
import cache from "../utlility/cache";

const client = create({
	baseURL: "https://task-bak.herokuapp.com/",
});

const get = client.get;

client.get = async (url, params, axiosConfig) => {
	const response = await get(url, params, axiosConfig);

	if (response.ok) {
		cache.store(url, response.data);
		return response;
	}

	const data = await cache.get(url);
	return data ? { ok: true, data } : response;
};

export default client;
