app.controller('MainController', ['$scope', function($scope) {
    $scope.list = ['clean', 'store', 'study'];
    $scope.addItem = function() {
        $scope.list.push($scope.addToDo);
    };
}]);