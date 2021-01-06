app.controller('MainController', ['$scope', function($scope) {
    $scope.todo = {
        list: ['clean', 'store', 'study']
    };
    $scope.books = {
        list: ['test']
    };
    $scope.addItem = function(itemList, item) {
        itemList.push(item);
    };
}]);