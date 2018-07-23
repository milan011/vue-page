import Vue from 'vue';
import Vuex from 'vuex';
import demo from './modules/demo';

Vue.use(Vuex);

let modules = {
    demo
};

export default new Vuex.Store({
    modules
})
