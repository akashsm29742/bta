exports = module.exports = function(app, mongoose) {
	
	// Users Schemas
	require('./schemas/users/adminSchema')(app, mongoose);

	// Prods Schema
	require('./schemas/prods/brandSchema')(app, mongoose);
	require('./schemas/prods/categorySchema')(app, mongoose);
	require('./schemas/prods/productSchema')(app, mongoose);
};