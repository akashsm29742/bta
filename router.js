module.exports = function(app) {
	// Common routes
	require('./routes/commonRoutes.js')(app);
	
	// Mock routes
	require('./routes/mockRoutes.js')(app);
	
	// Prod routes
	require('./routes/prodRoutes.js')(app);


	app.get('/',function(req,res){
		res.json("success");
	})
};