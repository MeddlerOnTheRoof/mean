var app = angular.module('mean', ['ngResource']);

// setting up our city resource
app.factory('City', function($resource){
    return $resource('/api/city');
});

app.controller('cityController', ['$scope', 'City', function($scope, City){

    // // get() returns a single city
    // var city = City.get({ id: $scope.id }, function() {
    //     console.log(city)
    // });

    // query() returns all the entries
    var cities = City.query(function(){
        
    });

    $scope.cities = cities;
    
    // // instantianting a resource class, saving
    // $scope.newCity = new City();
    // $scope.newCity.city = 'Philly';
    // City.save($scope.newCity, function(){
    //     // data saved. do something here
    // });
}]);