import * as types from '../mutation-types';

export default {
    namespaced: true,
    state: {
        str: 'abc'
    },
    getters: {
        getUpper: (state) => {
            let str = state.str;
            return str.toUpperCase();
        }
    },
    actions: {
        splitStr({commit, state}, {str, num}) {
            let splitStr = num + str;
            commit(types.UPPERCASE_SUCCESS, splitStr);
        },
    },
    mutations: {
        [types.UPPERCASE_SUCCESS](state, str) {
            state.str = str;
        }
    }
}
