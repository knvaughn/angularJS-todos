app.controller('MainController', ['$scope', function($scope) {
    $scope.todo = {
        title: "Things I need to do:",
        list: ['clean', 'store', 'study']
    };
    $scope.books = {
        title: "Books I need to buy:",
        list: ['test']
    };
    $scope.addItem = function(itemList, item) {
        itemList.push(item);
    };
}]);