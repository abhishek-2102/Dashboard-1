demo.controller('DashboardController', ['angularAPI','$scope','$location','$cookies',
                                        function(angularAPI,$scope,$location,$cookies){
	cont=this;
	cont.autToken=$cookies.get('autToken');
	
	cont.Init=function(){
		cont.chartData();
	}
	
	cont.chartData=function() {
		angularAPI.chartData(cont.autToken).then(function(response){
			
			console.log(response);
		},function(err){
			console.log(err);
		})//end angularAPI Call
	};//end chartData
}])
	
	
