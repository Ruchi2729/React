/**
 * Created by ruchirapatil on 4/9/17.
 */

angular.module('RegisterCtrl', []).controller('RegisterController',function($scope,UserSer) {

    $scope.tagline = 'Register and enter your details';

//var user=require("./UserService")();


    $scope.create = function(firstname,lastname,email,username,password,mobile) {

        var User = {
            firstname:firstname,
            lastname:lastname,
            email:email,
            username: username,
            password: password,
            mobile: mobile,
            usertype:"user"

        };
        console.log("User created"+User.firstname);

    UserSer.createU(User).then(function (response) {
             var user = response.data;
        //console.log(response.statusCode);
             if(user){
                 //alert("User Created");
                 $scope.registrationStatus="Regisration is successfull. Now Login to begin";
                // $scope.successmessage=false;
             }
             else
             {
                 $scope.registrationStatus="Registration failed. Try again Later";
                 //$scope.failuremessage=false;
             }
         });

       //console.log(res);

    };

});
