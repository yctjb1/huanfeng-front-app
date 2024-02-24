import { defineStore } from 'pinia';

/**
 * 基础store,供首页以及大部分场景使用
 */
export const useBaseStore = defineStore({
    id: 'baseStore',
    state: () => ({
        test: 0,
    }),
    actions: {
        updateTest(newValue) {
            this.test = newValue;
        },
    },
    getters: {
        getTestStr():string {
            return "" + this.test;
        },
    },
});