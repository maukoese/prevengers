import axios from "axios";

const http = axios.create({
	baseURL: process.env.VUE_APP_API,
});

if (localStorage.token) {
	http.defaults.headers.common = {
		Authorization: `Bearer ${localStorage.token}`,
		Accept: "Application/json",
		"Content-Type": "Application/json",
		"X-Requested-With": "XMLHttpRequest",
	};
	http.defaults.withCredentials = true;
}

export default http;