import { defineStore } from 'pinia';

import { useI18n } from "vue-i18n";

/**
 * 基础store,供首页以及大部分场景使用
 */
export const useBaseStore = defineStore({
    id: 'baseStore',
    state: () => {
        const { locale } = useI18n();
        const localeListLabel = {
            'zh-CN': '中文',
            'en-US': 'English'
        }
        let huanfengLocale: any = localStorage.getItem('huanfengLocale')
        if(huanfengLocale && Object.keys(localeListLabel).includes(huanfengLocale)){

        }else{
            huanfengLocale = navigator?.language || 'zh-CN'// 获取浏览器的语言【未测试】
            localStorage.setItem('huanfengLocale', huanfengLocale)

        }
        locale.value = huanfengLocale;
        return ({
            test: 0,
            huanfengLocale,
            localeListLabel,
            locale
        })
    },
    actions: {
        updateTest(newValue) {
            this.test = newValue;
        },
        updateLocale(newValue){// 使用处记得额外调用locale.value = newValue
            this.huanfengLocale = newValue;
            localStorage.setItem('huanfengLocale', newValue)
        }
    },
    getters: {
        getTestStr():string {
            return "" + this.test;
        },
    },
});