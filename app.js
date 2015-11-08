var app = angular.module('uchat', ['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		controller: 'MainController',
		templateUrl: 'asuult.html'
	});
});

app.factory('uchat', ['$http', function($http){
	return $http.get('https://raw.githubusercontent.com/batnyam/batnyam.github.io/master/data.json')
	.success(function(data){
		return data;
	})
	.error(function(err){
		return err;
	})
}]);

app.controller('MainController', ['$scope', 'uchat', function($scope, uchat){
	uchat.success(function(data){
		$scope.uchat = data;
	});
}]);
