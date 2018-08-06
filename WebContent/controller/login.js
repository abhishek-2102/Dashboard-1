demo.controller('LoginController', ['angularAPI','$scope','$location','$cookies', 
                                    function(angularAPI,$scope,$location,$cookies) {
	var cont = this;
	cont.user={'email':'','passwd':''};
	
	cont.loginUser=function(user) {
		angularAPI.loginUser(user).then(function(response){
			if(response.status=='200'){
				$cookies.put('autToken', response.data.token);
				$location.path('/home');
			}
		},function(err){
			
		})//end angularAPI Call
	};//end login
	
	
	
	
} ])