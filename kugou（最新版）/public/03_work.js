onmessage=function(e){
	console.log("接受UI发送来的数据");
	console.log(e.data)
	postMessage("123");
}