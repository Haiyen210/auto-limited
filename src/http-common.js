import axios from "axios";
export default axios.create({
    baseURL: "http://localhost:54195/api",
    headers: {
        "Content-type": "application/json",
    },
});