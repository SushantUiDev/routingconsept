(function(){
	
	
	function headerCtrlFn(){
		var vm=this ;
		vm.brandName="GoodServices";
		vm.navBar=["login","register","logout","profile"];
		
		
	}
	angular.module("header")
	.controller("headerCtrl",[headerCtrlFn]);
})();