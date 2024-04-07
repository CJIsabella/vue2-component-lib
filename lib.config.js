const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
//   build: {
//     lib: {
//         entry: "./package/cj-ui/index.js",
//         name: "cj-ui"
//     },
//     outDir: "lib"
//   },
  pages: {
    index: {
        entry:"./package/cj-ui/index.js"
    }
  },
  outputDir: "./lib",
  
  transpileDependencies: true
})