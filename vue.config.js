module.exports={
	devServer:{
		proxy:{
			'/dataOrganization':{
				target:"http://172.18.110.209:8211",
				// changeOrigin:true
			},
			// '/contentProvider':{
			// 	target:"http://172.18.110.209:8211",
			// 	// changeOrigin:true
			// }
		}
	}
}