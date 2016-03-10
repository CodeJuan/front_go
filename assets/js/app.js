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
        })
        .when('/post', {
            templateUrl: 'assets/html/post.html',
            controller: 'postController'
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

testApp.controller('postController', function($scope) {
    $scope.pageClass = 'post';
    $scope.postdata = function() {
        $scope.input_age = '111'
        $scope.input_name = '111'
        var data = $.param({
            json: JSON.stringify({
                name: $scope.input_name,
                age: $scope.input_age,
            })
        });
        $scope.input_age = '222'
        $scope.input_name = '222'
        var config = {
            headers : {
                'Content-Type': 'application/json'
            }
        }
        $scope.input_age = '333'
        $scope.input_name = '333'
        $http.post('/v1/user', data, config)
            .success(function (data, status, headers, config) {
            })
            .error(function (data, status, header, config) {
            });
        $scope.input_age = '444'
        $scope.input_name = '444'
    };
});