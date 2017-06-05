(function () {


	function headerCtrlFn() {
		var vm = this;
		vm.brandName = "GoodServices";
		vm.navBar = ["login", "register", "profile"];
		vm.loginTemplate = "app/login/login.tpl.html";
		vm.registerTemplate = "app/register/register.tpl.html";

		vm.loadView = function (param) {
			console.log(param);
			if (param == 'login') {

				vm.loadTemplate = vm.loginTemplate;
			} else if (param == 'register') {

				vm.loadTemplate = vm.registerTemplate;
			} else if (param == 'profile') {
				alert("prifile page clicked");
			}

		};


	}
	angular.module("header")
		.controller("headerCtrl", [headerCtrlFn]);
})();
