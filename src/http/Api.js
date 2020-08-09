import axios from "axios";

export default axios.create({
    baseURL: process.env.NODE_ENV === "development" ? null : process.env.REACT_APP_API
});