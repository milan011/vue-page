/*
 * 封装的Vuex
 * 各个模块的单独写在modules里，以模块名加以区分，如login.js
 */

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
