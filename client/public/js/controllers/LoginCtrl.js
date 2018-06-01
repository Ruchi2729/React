/**
 * Created by ruchirapatil on 4/9/17.
 */


angular.module('LoginCtrl', []).controller('LoginController', function($scope,$location,UserSer,$rootScope) {

    $scope.tagline = 'Login to begin';

    // $scope.login = function(username,password) {
    //     console.log(username);
      // var User1 = {
      //       username1: username,
      //       password1: password
      //   };

      // console.log(User1.username1);
      //   $scope.user1=User1;

    // };
    // $scope.isEmpty = function(obj) {
    //
    //
    // };

    $scope.logout = function() {
        $rootScope.user=null;
        $rootScope.isLoggedOut=yes;
        $location.url("/");
        // alert("You are Logged out");
    };

    $scope.login = function(username,password) {

        UserSer.loginU(username,password).then(function (response) {
            var user = response.data;
           //console.log("user is" +user.username);
            console.log(user);
            if (user) {
                $scope.loginStatus = "You are now logged in!! Welcome to Elite Events "+user.firstname+" "+user.lastname;
                $rootScope.user=user;
                $rootScope.cart=null;
                $location.url("/");
                //alert("You are Now Logged In"+user.firstname);
            }
            else {
                $scope.loginStatus = "Wrong username or password. Signup to login.";
                //$scope.failuremessage = false;
            }
        });

    };

});