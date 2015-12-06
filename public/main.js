
 angular.module('app', [])


var mainControllerFunc = function($scope){
    // console.log('Hello world!')
$scope.greeting = "To Keep Us Free"
}

angular.module('app')
    .controller('mainController', ['$scope', mainControllerFunc])


    var homeControllerFunc = function($scope){
    	$scope.greeting = "To Keep Us Free"
    	$scope.author = "About the Author"

    }

    angular.module('app')
    	.controller('homeController',['$scope', homeControllerFunc])



