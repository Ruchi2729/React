/**
 * Created by ruchirapatil on 4/18/17.
 */


angular.module('CartCtrl', []).controller('CartController', function($scope,$rootScope) {

    $scope.tagline="Hello";
    $scope.carts= $rootScope.cart;
    $scope.carlength=$scope.carts.length;

});