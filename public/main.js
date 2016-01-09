
 angular.module('app', [])


var mainControllerFunc = function($scope){
    // console.log('Hello world!')
$scope.greeting = "The Indomitable Freedom Quest"
}

angular.module('app')
    .controller('mainController', ['$scope','$sce', mainControllerFunc])


    var homeControllerFunc = function($scope, $sce){
    		$scope.$sce= $sce;

    	$scope.greeting = "To Keep Us Free"
    	$scope.author = "About the Author"
    	$scope.imageSource="./test/pics/rdc.jpg"
    

    }

    angular.module('app')
    	.controller('homeController',['$scope','$sce', homeControllerFunc])



