module.exports={
	devServer:{
		proxy:{
			'/':{
				target:"http://172.18.118.19:8211",
				// changeOrigin:true
			}
		}
	}
}