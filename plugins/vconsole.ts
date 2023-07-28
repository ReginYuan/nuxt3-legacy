// plugins/vconsole.js
import vconsole from "vconsole";
console.log('vconsole',1122)
export default defineNuxtPlugin(() => {
  // if (process.env.NODE_ENV !== "production") {
    new vconsole();
    console.log("VConsole");
    // 在非生产环境下创建 vConsole 实例
    // eruda.init();
  // }
});
