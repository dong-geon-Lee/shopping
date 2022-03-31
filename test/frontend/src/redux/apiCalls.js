import axios from "axios";
import {
  addProductFailure,
  addProductStart,
  addProductSuccess,
  getProductFailure,
  getProductStart,
  getProductSuccess,
} from "./productSlice.js";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerStart,
  registerSuccess,
  registerFailure,
  logoutSuccess,
  editSuccess,
  deleteSuccess,
} from "./userSlice";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;
const BASE_URL = "http://localhost:5000/api";

export const publicRequest = axios.create({ baseURL: BASE_URL });
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});

// export const productRequest = axios.create({
//   baseURL: BASE_URL,
// })

// User API
export const register = async (dispatch, payload) => {
  dispatch(registerStart());

  try {
    const response = await publicRequest.post("/users/register", payload);

    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerFailure());
  }
};

export const login = async (dispatch, payload) => {
  dispatch(loginStart());

  try {
    const response = await publicRequest.post("/users/login", payload);

    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch) => {
  localStorage.removeItem("persist:root");

  dispatch(logoutSuccess());
};

export const edit = async (dispatch, payload) => {
  const { id, username, email, password } = payload;

  try {
    const response = await userRequest.put(`/users/${id}`, {
      username,
      email,
      password,
    });

    dispatch(editSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (dispatch, payload) => {
  const { id } = payload;

  try {
    const response = await userRequest.delete(`/users/${id}`);

    dispatch(deleteSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = async (dispatch, category) => {
  dispatch(getProductStart());

  try {
    const response = category
      ? await publicRequest.get(`/products?category=${category}`)
      : await publicRequest.get(`/products`);

    dispatch(getProductSuccess(response.data));
  } catch (error) {
    dispatch(getProductFailure());
  }
};

export const addProducts = async (dispatch) => {
  dispatch(addProductStart());

  try {
    const response = await publicRequest.post(`/products`);

    dispatch(addProductSuccess(response.data));
  } catch (error) {
    dispatch(addProductFailure());
  }
};
