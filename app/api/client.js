import { create } from "apisauce";

const client = create({
	baseURL: "https://task-bak.herokuapp.com/",
});

export default client;
