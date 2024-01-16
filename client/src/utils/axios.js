//Author: Jainil Sevalia(jn498899@dal.ca) || Banner Id: B00925445

import Axios from "axios";

export const axios = Axios.create({
  baseURL: "https://trip-ease-server.onrender.com",
  // withCredentials: true,
});
