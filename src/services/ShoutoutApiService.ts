import axios from "axios";

const baseUrl: string = process.env.REACT_APP_API_URL || "";

export const getAllShoutouts = () => {
  return axios.get(`${baseUrl}/shoutouts`).then((res) => {
    return res.data;
  });
};
