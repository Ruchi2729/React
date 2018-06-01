/**
 * Created by ruchirapatil on 4/16/17.
 */



angular.module('VendorService', []).factory('VendorSer', function ($http) {
    return {


        getVendors:function(vendorType,vendorEvenType)
        {
            console.log(vendorType);
            var data=
            {
                vendorType:vendorType,
                vendorEvenType:vendorEvenType


            };

            return $http.post('/api/getVendors/vendortype/vendorEventType',data);

        },


        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        createV : function(userData) {
            return $http.post('/api/addVendors', userData);
        }


    };
});
