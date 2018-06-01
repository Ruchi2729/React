/**
 * Created by ruchirapatil on 4/9/17.
 */

angular.module('UserService', []).factory('UserSer', function ($http) {
    return {
        // call to get all nerds
        loginU : function(username,password) {
            console.log("success2");
            var userdata={
               username:username,
                password:password
            };
            return $http.post('/api/login',userdata);
        },


        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        createU : function(userData) {
            return $http.post('/api/users', userData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/nerds/' + id);
        }
    };
});
