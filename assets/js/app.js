/**
 * Created by Administrator on 2016/3/10 0010.
 */
var testApp = angular.module('testApp', ['ngRoute']);

testApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'assets/html/test.html',
            controller: 'testController'
        });
});

testApp.controller('testController', function($scope) {
    $scope.pageClass = 'test';
});