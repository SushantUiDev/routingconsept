(function(){
	//create module
	angular.module("goodService",["header","login","register"]);
	
	//consume module
	angular.module("goodService")
	.config(function(){
		console.log("I am goodService config method ...");
	})
	.run(function(){
		console.log("i am goodservice run method ...");
	});
})();