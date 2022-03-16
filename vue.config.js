const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy: 'http://Apirestzean-env.eba-pgvepdrt.us-east-1.elasticbeanstalk.com/'
  }
})

