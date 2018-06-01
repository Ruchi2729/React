/**
 * Created by ruchirapatil on 4/16/17.
 */
angular.module('VendorCtrl', []).controller('VendorController', function($scope,VendorSer,$rootScope) {



    $scope.tagline = 'Inside vendor Controller';
    $scope.showWeddingPhotographer=false;
    $scope.showCaterer=false;
    $scope.showVenue=false;
    $scope.showDecoration=false;
    $scope.cartMsg=false;


    $rootScope.cart=[];
    $scope.carts= $rootScope.cart;



    $scope.showDetailsWP=function(vendor1)
    {
        $scope.cartMsg=false;
        $scope.showWeddingPhotographer=true;
        $scope.clickedVendor=vendor1;
        $rootScope.galVendor=vendor1;

    };

    $scope.showDetailsCP=function(vendor1)
    {
        $scope.cartMsg=false;
        $scope.showCaterer=true;
        $scope.clickedVendor=vendor1;
        $rootScope.galVendor=vendor1;

    };

    $scope.showDetailsV=function(vendor1)
    {
        $scope.cartMsg=false;
        $scope.showVenue=true;
        $scope.clickedVendor=vendor1;
        $rootScope.galVendor=vendor1;

    };

    $scope.showDetailsD=function(vendor1)
    {
        $scope.cartMsg=false;
        $scope.showDecoration=true;
        $scope.clickedVendor=vendor1;
        $rootScope.galVendor=vendor1;

    };

    $scope.closeMe=function()
    {
        $scope.showWeddingPhotographer=false;
        $scope.clickedVendor=null;
        $scope.cartMsg=false;
        $scope.showCaterer=false;
        $scope.showVenue=false;
        $scope.showDecoration=false;
    };

    //Methos to add selected vendors in the cart in page scope
    $scope.addCart=function(){

        console.log("trying to push in cart"+$scope.clickedVendor.firstname);

        var tempcar={name:$scope.clickedVendor.firstname,ServiceType:$scope.clickedVendor.vendorType,Price:"1500",imagename:$scope.clickedVendor.imageName


};
        $rootScope.cart.push(tempcar);
        $scope.cartMsg=true;

    };

    //Method to get vendors by type

    $scope.getVendors = function(vendorType,vendorEventType) {
        console.log(vendorType);
      VendorSer.getVendors(vendorType,vendorEventType).then(function (response)
        {
            if(vendorType=="Photographer") {
                $scope.pvendors = response.data;
            }
            else if(vendorType=="Caterer")
            {
                $scope.cvendors = response.data;

            }
            else if(vendorType=="Venue")
            {
                $scope.vvendors = response.data;

            }
            else if(vendorType=="Decoration")
            {
                $scope.dvendors = response.data;

            }


        });
        };


    $scope.create = function(firstname,email,mobile,description,vendorType,vendorEvenType,imageName) {

        var Vendor = {
            firstname:firstname,
            vendorType:vendorType,

            vendorEvenType:vendorEvenType,
            email: email,
            description: description,
            mobile: mobile,
            imageName:imageName

        };
        console.log("Vendor created"+Vendor.firstname);

        VendorSer.createV(Vendor).then(function (response) {
            var vendor = response.data;
            //console.log(response.statusCode);
            if(vendor){
                //alert("User Created");
                $scope.additionStatus="Vendor has been added successfully!!";
                // $scope.successmessage=false;
            }
            else
            {
                $scope.additionStatus="Action Failed.Internal Error";
                //$scope.failuremessage=false;
            }
        });

        //console.log(res);

    };

});
