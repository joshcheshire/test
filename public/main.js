
 angular.module('app', [])


var mainControllerFunc = function($scope){
    // console.log('Hello world!')
$scope.greeting = "The Indomitable Freedom Quest"
}

angular.module('app')
    .controller('mainController', ['$scope','$sce', mainControllerFunc])


    var homeControllerFunc = function($scope, $sce){
    		$scope.$sce= $sce;

    	// $scope.greeting = "The Indomitable Freedom Quest: Honoring America's Sacred Trust"
    	$scope.author = "About the Author"
    	$scope.imageSource="./test/pics/rdc.jpg"
    

    }

    angular.module('app')
    	.controller('homeController',['$scope','$sce', homeControllerFunc])



