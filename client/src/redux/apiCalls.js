import { publicRequest } from "../requestMethods";
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
