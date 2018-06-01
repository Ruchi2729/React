angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})
        .when('/createVendor', {
            templateUrl: 'views/vendor.html',
            controller: 'VendorController'
        })
        .when('/showgal', {
            templateUrl: 'views/gallary.html',
            controller: 'VendorController'
        })
        .when('/contactus', {
            templateUrl: 'views/contactus.html',
            controller: 'HomeController'
        })

        .when('/gototestimonials', {
            templateUrl: 'views/testimonial.html',
            controller: 'HomeController'
        })


        .when('/aboutus', {
            templateUrl: 'views/aboutus.html',
            controller: 'HomeController'
        })

        .when('/goldwedding', {
            templateUrl: 'views/goldWedding.html',
            controller: 'HomeController'
        })
        .when('/silverwedding', {
            templateUrl: 'views/silverWedding.html',
            controller: 'HomeController'
        })

        .when('/platinumwedding', {
            templateUrl: 'views/platinum.html',
            controller: 'HomeController'
        })



        .when('/gotoCareers', {
            templateUrl: 'views/career.html',
            controller: 'HomeController'
        })

        .when('/displaygallery', {
            templateUrl: 'views/displaygallery.html',
            controller: 'VendorController'
        })


        .when('/goToTerms', {
            templateUrl: 'views/terms.html',
            controller: 'HomeController'
        })
        .when('/showgal1', {
            templateUrl: 'views/gallary2.html',
            controller: 'VendorController'
        })
        .when('/showvendor', {
            templateUrl: 'views/showvendor.html',
            controller: 'VendorController'
        })
        .when('/showvendorphoto', {
            templateUrl: 'views/showvendor.html#photo',
            controller: 'VendorController'
        })
        .when('/showvendorvenue', {
            templateUrl: 'views/showvendor.html#venue',
            controller: 'VendorController'
        })
        .when('/showvendorcaterer', {
            templateUrl: 'views/showvendor.html#caterer',
            controller: 'VendorController'
        })
        .when('/showvendordecoration', {
            templateUrl: 'views/showvendor.html#decoration',
            controller: 'VendorController'
        })

        .when('/showCart', {
            templateUrl: 'views/cart.html',
            controller: 'CartController'
        })


		.when('/nerds', {
			templateUrl: 'views/nerd.html',
			controller: 'NerdController'
		})

        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        })

        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'RegisterController'
        })

		.when('/geeks', {
			templateUrl: 'views/geek.html',
			controller: 'GeekController'	
		});

	$locationProvider.html5Mode(true);

}]);