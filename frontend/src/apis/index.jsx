import axios from "axios";

const BASE_URL = "http://localhost:4528";

export const login = async (data) => {
  try {
    let res = await axios.post(`${BASE_URL}/users/login`, data);
    return res;
  } catch (error) {
    throw error;
  }
};

export const addProduct = async (data) => {
  try {
    let res = await axios.post(`${BASE_URL}/products`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};
