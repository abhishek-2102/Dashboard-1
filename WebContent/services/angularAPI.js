demo.service('angularAPI',['$http',function($http){
	var baseUrl='http://api.wynta.com/api/v1';
	
	return{
		loginUser:function(user){
			
			return $http({
				url: baseUrl+'/login',
		        method: 'POST',
		        data:user
			}).then(
					function(response){
						return response;
					},//end success
					function(err){
						return err;
					}
				)//end then 
		},//end login User
	
		chartData:function(token){
			
			return $http({
				url: baseUrl+'/chartdata',
		        method: 'GET',
		        headers:{ 'Authorization': 'Token '+token}
			}).then(
					function(response){
						return response;
					},//end success
					function(err){
						return err;
					}
				)//end then 
		},//end chartData
	}
	
}])