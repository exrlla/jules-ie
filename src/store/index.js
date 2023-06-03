import { createStore } from 'vuex'

// register the users.js module 
// The state and actions inside the users module will be accessible on any page of the project.

import users from './modules/users';

export default createStore({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        users
    }
})