import axios from "axios";

// const BASE_URL = "http://localhost:4528";
const BASE_URL = "https://ecom-project-fullstack-backend.onrender.com";

export const login = async (data) => {
  try {
    let res = await axios.post(`${BASE_URL}/users/login`, data);
    return res;
  } catch (error) {
    throw error;
  }
};

export const signup = async (data) => {
  try {
    let res = await axios.post(`${BASE_URL}/users/signup`, data);
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
        Authorization: `Bearer ${localStorage.getItem("user-token")}`,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const getAllProducts = async () => {
  try {
    let res = await axios.get(`${BASE_URL}/products`,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user-token")}`,
      },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    let res = await axios.get(`${BASE_URL}/products/${id}`,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user-token")}`,
      },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    let res = await axios.delete(`${BASE_URL}/products/${id}`,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user-token")}`,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const updateProduct = async (id, data) => {
  try {
    let res = await axios.put(`${BASE_URL}/products/${id}`, data,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user-token")}`,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};
