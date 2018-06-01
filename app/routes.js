module.exports = function(app) {

	var userModel=require("./models/User");
    var vendorModel=require("./models/Vendor");

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

    app.post('/api/getVendors/vendortype/vendorEventType', function(req, res) {

        console.log(req.body);

        vendorModel.find({  vendorType: req.body.vendorType,
                   vendorEvenType: req.body.vendorEvenType},function(err,vendors) {
            console.log("vendor is"+vendors);
            if (err) throw err;

            console.log("vendor is"+vendors);
            res.json(vendors);
        })
    });


    app.post('/api/login', function(req, res) {
        console.log(req.body);
        userModel.findOne({username:req.body.username, password:req.body.password}, function(err, user) {
            if (err) throw err;
            // object of the user
            console.log(user);
            res.json(user);
        });

    });
    //return $http.post('/api/addVendors', userData);


    app.post('/api/addVendors', function(req, res) {
        // console.log("I am in a post router");
        console.log(req.body);
        // userModel.createUser(req.body);
        vendorModel.create({


            firstname: req.body.firstname,
            vendorType: req.body.vendorType,
            vendorEvenType: req.body.vendorEvenType,
            email:req.body.email,
            mobile: req.body.mobile,
            description:req.body.description,
            imageName:req.body.imageName



        }, function(err, todo) {
            if (err) {
                res.send(err);
            }
            else
            {
                res.statusCode="200";
            }

            console.log(res);

            // get and return all the todos after you create another
            userModel.find(function(err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        });


    });



    app.post('/api/users', function(req, res) {
        // console.log("I am in a post router");
        console.log(req.body);
        // userModel.createUser(req.body);
        userModel.create({
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            email : req.body.email,
            username : req.body.username,
            password : req.body.password,
            usertype:req.body.usertype,
            mobile:req.body.mobile

        }, function(err, todo) {
            if (err) {
                res.send(err);
            }
            else
            {
                res.statusCode="200";
            }

            console.log(res);

            // get and return all the todos after you create another
            userModel.find(function(err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        });


    });

};