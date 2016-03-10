/**
 * Created by Administrator on 2016/3/10 0010.
 */
var testApp = angular.module('testApp', ['ngRoute']);

testApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'assets/html/test.html',
            controller: 'testController'
        })
        .when('/get', {
            templateUrl: 'assets/html/get.html',
            controller: 'getController'
        });
});

testApp.controller('testController', function($scope) {
    $scope.pageClass = 'test';
});

testApp.controller('getController', function($scope) {
    $scope.pageClass = 'get';
});