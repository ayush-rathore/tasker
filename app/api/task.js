import client from "./client";

const getTask = (user) => client.get(`/task/get/${user._id}`);

const addTask = (taskInfo) => client.post("/task/add", taskInfo);

const removeTask = (taskID) => client.post(`/task/remove/${taskID}`);

export default { getTask, addTask, removeTask };
