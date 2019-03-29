import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const INDEX_STORAGE = "INDEX_STORAGE";
const store = new Vuex.Store({
    state: {
        count: 1,
        options: [
            {
                value: 1,
                name: 'United States'
            }, {
                value: 2,
                name: 'United Kingdom'
            }
        ],
        items: ['abc', 'abcd', '123', '12345', '12345', '12345', '12345', '中文'],
        indexStorage : JSON.parse(localStorage.getItem(INDEX_STORAGE)) || [],
        menu : [],
        tables: [],
        localStorageSupport: typeof localStorage === "object"
    },
    // Vuex 允许我们在 store 中定义『getters』（可以认为是 store 的计算属性）。就像计算属性一样，getters的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
    getters: {
        searchItems: state => {
            return state.items
        },
        getIndexStorage: state => {
            return state.indexStorage
        },
        getStorageSupport: state => {
            return state.localStorageSupport;
        },
        getTables: state => {
            return state.tables;
        }

    },
    mutations: {
        changeIndexStorage (state, payload) {
            state.indexStorage = payload.indexStorage
        },
        clickTable (state, payload) {
            // 需要比较复杂的算法来计算MostUsed和lastedUsed
        },
        changeSelfIndexStorage (state, payload) {
            state.indexStorage.selfConfig = payload.selfConfig;
            localStorage.setItem(INDEX_STORAGE, JSON.stringify(state.indexStorage));
        },
        init (state) {
            if (typeof localStorage === "object") {
                try {
                   state.indexStorage = JSON.parse(localStorage.getItem(INDEX_STORAGE))
                } catch (err) {
                    state.indexStorage = {
                        selfConfig: [],
                        mostUsed:[],
                        lastedUsed: []
                    }
                }
            }
            let randomLen = Math.floor((Math.random() * 20) + 1);
            for (let i=0; i < randomLen; i++) {
                state.tables.push("table-" + i);
            }
        }
    },
    actions : {
        init (context) {
            context.commit("init");
        }
    }

});
store.dispatch('init');
export  default store
