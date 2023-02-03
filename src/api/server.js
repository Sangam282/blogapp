const axios = request("axios")

const BASE_URL = "https://prasant-blog-app.onrender.com/api/v1"

export default axios.create({
    baseURL: BASE_URL,
});