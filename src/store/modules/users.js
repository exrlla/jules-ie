// this file will hold the centralized store state for user 
// objects and profiles. 

import { api, setToken, clearToken } from '../api';
export default {
    namespaced: true,
    state: {
        // 2 store states, user object to contain user info and 
        // profile object to contain profile info
        user: null,
        profile: null
    },
    getters: {
        username(state) {
            return (state.user && state.user.username) || null;
        }
    },
    mutations: {
        // set the user object in the store
        setUser(state, payload) {
            state.user = payload;
        }
    },
    actions: {
        loginUser: async function({ commit }, { email, password}) {
            clearToken();
            try {
                const response = await api.post('/users/login', {
                    user: {
                        email,
                        password
                    }
                });
                // using axios post request, we have requested an 
                // auth token and user object from the server.
                if (response.data.user) {
                    setToken(response.data.user.token);
                    commit('setUser', response.data.user);
                }
            } catch (error) {
                console.error(error);
                throw error;
            }
        }
    }
}