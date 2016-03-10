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

testApp.controller('getController', function($scope, $http) {
    $scope.pageClass = 'get';
    $scope.data = [];
    $http.get('v1/user/' + '123')
        .success(function(result) {
            $scope.datas = result
            assert(result)
        }
    );

    $scope.getdata = function() {
        $scope.data = [];
        $http.get('v1/user/' + $scope.input_name)
            .success(function(result) {
                $scope.datas = result
                assert(result)
            }
        );
    };
});