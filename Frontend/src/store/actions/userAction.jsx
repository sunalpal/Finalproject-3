import axios from "../../api/AxiousConfig";

import { loaduser } from "../reducers/userSlice";

export const asyncCurrentuser = () => async(dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(loaduser(user));
    } else console.log("user not loggedin ");
  } catch (err) {
    console.log(err);
  }
};
export const asynclogoutuser = () => async () => {
  try {
    localStorage.removeItem("user");
  } catch (err) {
    console.log(err);
  }
};

export const asyncloginuser = (user) => async () => {
  try {
    const res = await axios.get(
      `/users?email=${user.email}&password=${user.password}`
    );
    localStorage.setItem("user", JSON.stringify(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const asyncregisteruser = (user) => async () => {
  try {
    const res = await axios.post("/users", user);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
