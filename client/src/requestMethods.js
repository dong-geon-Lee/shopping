import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzdmNDNlMTJjZjkwOTAwZjBmNjUzZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Nzg2MTA3OSwiZXhwIjoxNjQ4MTIwMjc5fQ.j5Y-7fXsvRt-tyAYnue4yNLomIYh7WfRpOJTNk0fLC0";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
