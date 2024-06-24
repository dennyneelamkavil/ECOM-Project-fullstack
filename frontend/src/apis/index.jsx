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

export const getAllProducts = async () => {
  try {
    let res = await axios.get(`${BASE_URL}/products`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    let res = await axios.get(`${BASE_URL}/products/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    let res = await axios.delete(`${BASE_URL}/products/${id}`);
    return res;
  } catch (error) {
    throw error;
  }
};

export const updateProduct = async (id, data) => {
  try {
    let res = await axios.put(`${BASE_URL}/products/${id}`, data);
    return res;
  } catch (error) {
    throw error;
  }
};
