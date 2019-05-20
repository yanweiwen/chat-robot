
module.exports = {
    configureWebpack: config => {
        require('vux-loader').merge(config, {
            options: {},
            plugins: ['vux-ui']
        })
    },
    devServer: {
	    proxy: {
	        '/chatapi': {
	            target: 'http://openapi.tuling123.com',
	            changeOrigin: true,
	            ws: true,
	            pathRewrite: {
					'^/chatapi': ''
	            }
	        }
	    },
	}
}