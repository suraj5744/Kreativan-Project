import axios from "axios";


const API = axios.create({
  baseURL: "https://jsonplaceholder.typicodde.com/users",
});

export default API;