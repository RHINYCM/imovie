module.exports ={
    devServer:{
        open:true,
        host:"localhost",
        port:8080,
        https:false,
        proxy:{
            '/ajax':{
                target:'https://m.maoyan.com',
                changeOrigin:true
            }
        }
    }
}