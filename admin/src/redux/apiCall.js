import { publicRequest, userRequest } from "../requestMethods";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductStart,
  updateProductFailure,
  updateProductSuccess,
  addProductStart,
  addProductFailure,
  addProductSuccess,
} from "./productSlice";
import { loginStart, loginSuccess, loginFailure } from "./userSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const response = await publicRequest.post("/auth/login", user);

    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());

  try {
    const response = await publicRequest.get("/products");

    dispatch(getProductSuccess(response.data));
  } catch (error) {
    dispatch(getProductFailure());
  }
};

export const deleteProducts = async (id, dispatch) => {
  dispatch(deleteProductStart());

  try {
    // const response = await userRequest.delete(`products/${id}`);

    dispatch(deleteProductSuccess(id));
  } catch (error) {
    dispatch(deleteProductFailure());
  }
};

export const updateProducts = async (id, product, dispatch) => {
  dispatch(updateProductStart());

  try {
    // const response = await userRequest.delete(`products/${id}`);

    dispatch(updateProductSuccess({ id, product }));
  } catch (error) {
    dispatch(updateProductFailure());
  }
};

export const addProducts = async (product, dispatch) => {
  dispatch(addProductStart());

  try {
    const response = await userRequest.post(`/products`, product);

    dispatch(addProductSuccess(response.data));
  } catch (error) {
    dispatch(addProductFailure());
  }
};
