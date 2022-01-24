import client from "./client";

const login = (userInfo) => client.post("/user/login", userInfo);

const register = (userInfo) => client.post("/user/register", userInfo);

export default { login, register };
