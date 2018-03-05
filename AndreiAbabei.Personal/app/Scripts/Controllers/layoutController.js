var app = angular.module('andreiApp', []);

app.controller('layoutController',
    [
        '$scope',
        '$location',
        function ($scope, $location) {

            if ($location.absUrl().toLowerCase().endsWith('about'))
                $scope.activePage = 1;
            else if ($location.absUrl().toLowerCase().endsWith('posts'))
                $scope.activePage = 2;
            else if ($location.absUrl().toLowerCase().endsWith('contact'))
                $scope.activePage = 3;
        }
    ]);
