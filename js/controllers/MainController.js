app.controller('MainController', ['$scope', '$http', function($scope, $http) {
    $scope.todo = {
        title: "Things I need to do:",
        list: ['clean', 'store', 'study']
    };
    $scope.books = {
        title: "Books I need to buy:",
        list: []
    };
    $scope.addItem = function(itemList, item) {
        // ISBN: 10 or 13 in length and consist of only numbers
        if((item.length === 10 || item.length === 13) && (/^[0-9]+$/).test(item)) {
            console.log("ISBN");
            $http.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${item}`)
                .then(function(response) {
                    itemList.push(`Title: ${response.data.items[0].volumeInfo.title} // Author(s): ${response.data.items[0].volumeInfo.authors}`);
                }, function(error) {
                    console.log(error);
                });
        } else {
            console.log("Not an ISBN");
            itemList.push(item);
        }
        
        
    };
}]);