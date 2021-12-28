import client from "./client";

const login = (userInfo) => client.post("/user/login", userInfo);

export default { login };
