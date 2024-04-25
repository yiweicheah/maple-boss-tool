import axios from "axios";

export const getContent = async ({ url = "", params = {}, timeout = 0 }) => {
  try {
    const config = {
      params,
      timeout,
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.get(url, config);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
