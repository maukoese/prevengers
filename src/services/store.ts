import { createStore } from "vuex";
import http from "./http";

const store = createStore({
	// modules: {
	//     users: usersModule
	// }
	state() {
		return {
			user: localStorage.getItem("imaniUser"),
			company: localStorage.getItem("imaniCompany"),
			token: localStorage.getItem("imaniToken"),
		};
	},

	getters: {
		currentUser: (state: any) => state.user,
		authenticated: (state: any) => !!state.token,
		authStatus: (state: any) => state.status,
	},

	mutations: {
		authRequest(state: any) {
			state.status = "loading";
		},
		authSuccess(state: any, data: any) {
			state.status = "success";
			state.token = data.token;
			state.user = data.user;
		},
		authError(state: any) {
			state.status = "error";
		},
		companySuccess(state: any, company: any) {
			state.company = company;
		},
		companyError(state: any) {
			state.status = "error";
		},
		authLogout(state: any) {
			state.status = "";
			state.token = "";
		},
	},

	actions: {
		loginUser({ commit }, user: {}) {
			return new Promise((resolve, reject) => {
				commit("authRequest");
				http.post("/auth/login", user)
					.then((res: any) => {
						const token = res.data.token;
						const user = res.data.user;
						localStorage.setItem("imaniToken", token);
						localStorage.setItem("imaniUser", user);

						commit("authSuccess", { token: token, user: user });
						resolve(res);
					})
					.catch((err) => {
						commit("authError");
						localStorage.removeItem("imaniToken");
						reject(err);
					});
			});
		},

		registerUser({ commit }, user: {}) {
			return new Promise((resolve, reject) => {
				commit("authRequest");
				http.post("/auth/register", user)
					.then((res: any) => {
						const token = res.data.token;
						const user = res.data.user;
						localStorage.setItem("imaniToken", token);
						localStorage.setItem("imaniUser", user);

						commit("authSuccess", { token: token, user: user });
						resolve(res);
					})
					.catch((err) => {
						commit("authError");
						localStorage.removeItem("imaniToken");
						reject(err);
					});
			});
		},

		setCompany({ commit }, company: number) {
			return new Promise((resolve, reject) => {
				commit("authRequest");
				http.post(`/companies/${company}`)
					.then((res: any) => {
						const currentCompany = res.data;
						localStorage.setItem("imaniCompany", currentCompany);

						commit("companySuccess", currentCompany);
						resolve(res);
					})
					.catch((err) => {
						commit("companyError");
						localStorage.removeItem("imaniCompany");
						reject(err);
					});
			});
		},

		logoutUser({ commit }) {
			return new Promise((resolve, reject) => {
				commit("authLogout");
				localStorage.removeItem("imaniToken");
				resolve();
			});
		},
	},
});

export default store;