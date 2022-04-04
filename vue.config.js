const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy: 'http://Apireststore-env.eba-herrbpkn.us-east-1.elasticbeanstalk.com'
  }
})

