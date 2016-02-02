
 angular.module('app', [])


var mainControllerFunc = function($scope){
    // console.log('Hello world!')
// $scope.greeting = "The Indomitable Freedom Quest:Honoring America's Sacred Trust"
}

angular.module('app')
    .controller('mainController', ['$scope', mainControllerFunc])


    var homeControllerFunc = function($scope){
    	$scope.greeting = "The Indomitable Freedom Quest: Honoring America's Sacred Trust"
    	$scope.author = "About the Author"
    	// $scope.imageSource="./test/pics/rdc.jpg"
    

    }

    angular.module('app').controller('homeController',['$scope', homeControllerFunc])



