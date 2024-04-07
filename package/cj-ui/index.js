import test from "./test.vue"
import test1 from "./test1.vue"

let obj = {
    test,
    test1
}

// 按需引入
export {
    test,
    test1
}

// 全局引入
export default {
    install(vue) {
        Object.keys(obj).forEach(key => {
            vue.component(key, obj[key]);
        });
    }
}