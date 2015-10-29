var brewApp = angular.module('brewApp', ['ngRoute','ngTouch', 'ui.bootstrap', 'jkuri.gallery']);

var PATH = 'http://localhost:1337/';

brewApp.controller('BrewMasterCntrl', function ($scope, $http,$location) {

    console.log('master controller');

    $scope.changeURL = function (url) {
        console.log('changing URL to ' + url);
        $location.search('url', null); 
        $location.path(url);
    };


});