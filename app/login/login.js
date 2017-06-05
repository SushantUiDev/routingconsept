(function(){
	angular.module("login",[]);
	
	angular.module("login")
	.config(function(){
		console.log("i am login component config() method...");
	})
	.run(function(){
		console.log("i am login component run() method...");
	});
})();