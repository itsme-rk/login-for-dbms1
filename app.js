var app = angular.module('myApp', []);

app.controller('authController', function ($scope) {
    $scope.isLogin = true;
    $scope.isAdmin = false;

    $scope.toggleAuth = function () {
        $scope.isLogin = !$scope.isLogin;
        $scope.isAdmin = false;
    };

    $scope.login = function () {
        // Implement login logic here
        console.log('User Login:', $scope.username, $scope.password);
    };

    $scope.signup = function () {
        // Implement signup logic here
        console.log('User Signup:', $scope.signupUsername, $scope.email, $scope.signupPassword, $scope.confirmPassword);
    };

    $scope.adminLogin = function () {
        // Implement admin login logic here
        console.log('Admin Login:', $scope.adminUsername, $scope.adminPassword);
        $scope.isAdmin = true; 
        $scope.isLogin = false; 
         // Only set isAdmin to true, not isLogin
    };
    
});
