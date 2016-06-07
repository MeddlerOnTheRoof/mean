var app = angular.module('mean', []);

app.controller('starterController', ['$scope', function($scope){
    $scope.title = 'Hello World!';

    $scope.data = [
        {   name: "Batman", alterEgo: "Bruce Wayne" },
        {   name: "Superman", alterEgo: "Clark Kent" }
    ];
}]);