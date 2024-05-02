angular.module('loginApp', [])
.controller('loginController', function($scope, $http) {
    $scope.login = function() {
        var userData = {
            username: $scope.username,
            password: $scope.password
        };

        $http.post('/login', userData)
            .then(function(response) {
                // Handle successful login response
                console.log(response.data);
            })
            .catch(function(error) {
                // Handle login error
                console.error('Login failed:', error);
            });
    };
});