(function(){
	angular.module("header",[]);
	
	angular.module("header")
	.config(function(){
		console.log("i am header component config() method...");
	})
	.run(function(){
		console.log("i am header component run() method...");
	});
})();