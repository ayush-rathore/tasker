import client from "./client";

const get = (userID) => client.get(`/task/get/${userID}`);

const add = (taskInfo) => client.post("/task/add", taskInfo);

const remove = (taskID) => client.post(`/task/remove/${taskID}`);

export default { get, add, remove };
