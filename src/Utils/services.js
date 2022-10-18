import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/api/";

export const getApi = async (url, params) => {
  try {
    const { data } = await axios.get(url, params);
    console.log(data);
    return { data: data.message };
  } catch (error) {
    return { error: error.message };
  }
};

// const { data, error } = await getApi(homePage);

export const postApi = async (url, req, params) => {
  try {
    const { data } = await axios.post(url, req, params);
    return { data: data.message };
  } catch (error) {
    if (error.response?.data?.message) return { error: error.response?.data?.message };
    return { error: error.message };
  }
};

// const { data, error } = await postApi(getTouch, req);