(function(){
	angular.module("register",[]);
	
	angular.module("register")
	.config(function(){
		console.log("i am register component config() method...");
	})
	.run(function(){
		console.log("i am register component run() method...");
	});
})();