'use strict'; 
module.exports = function(app, mongoose) {
    var adminSchema = mongoose.Schema({
		// Define Schema here
	});
	
	var admin = mongoose.model('customers', adminSchema); 
    /* For AutoIncrement
   /* adminSchema.plugin(app.schema.autoIncrement.plugin, {
        model: 'modelName',
        field: '_id',
        startAt: '1',
        incrementBy: 1
    });*/
    
    app.schema.admin = admin;
	
};
		
		