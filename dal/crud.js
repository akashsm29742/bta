
// Function to insert document 

exports.createDocument = function (toSaveDoc, collection, app, callback){
	var newDoc = new collection(toSaveDoc);
	newDoc.save(function(err, doc){
		if(err){
			callback(err, "");
		} else {
			callback("", doc);
		}
	});
};

// Function to update document

exports.updateDocument = function (query, toUpdateDoc, collection, options, populateDoc, app, callback){
	options.new = true;
	collection.findOneAndUpdate(query, toUpdateDoc, options).populate(populateDoc).exec(function(err, doc){
		if(err){
			callback(err, "");
		} else {
			callback("", doc);
		}
	});
};


// Function to get document

exports.getOneDoc = function (query, collection, selection, populateDoc, app, callback){
	collection.findOne(query, selection).populate(populateDoc).exec(function(err, doc){
		if(err){
			callback(err, "");
		} else {
			callback("", doc);
		}
	});
};

// Function to get document

exports.getAll = function (query, collection, selection, populateDoc, app, callback){
	collection.find(query, selection).populate(populateDoc).lean().exec(function(err, doc){
		if(err){
			callback(err, "");
		} else {
			callback("", doc);
		}
	});
};

//  Function to get Data using sort and limit
exports.getAllSortLimit = function (query, collection, selection, populateDoc,sorting,limits,app, callback){
	collection.find(query, selection).populate(populateDoc).sort(sorting).limit(limits).lean().exec(function(err, doc){
		if(err){
			callback(err, "");
		} else {
			callback("", doc);
		}
	});
};


// Function to remove document(s)

exports.removeDocs = function (query, collection, app, callback){
	collection.remove(query).exec(function(err, doc){
		if(err){
			callback(err, "");
		} else {
			callback("", doc);
		}
	});
};

//Function to get user data with hashpassword and salt
exports.getUserDataWithOutHashPassTokenSalt = function(query, collection, app, callback){
	collection.find(query).select('+hashedPassword +salt').exec(function(err, doc){
		if(err){
			callback(err, "");
		} else {
			callback("", doc);
		}
	});
};

//Function to get use data with hashpassword and salt
exports.getDriverDataWithOutHashPassTokenSalt = function(query, collection, app, callback) {
	collection.find(query).select('+personalDetails.hashed_password +personalDetails.salt').exec(function(err, doc){
		if(err){
			callback(err, "");
		} else {
			callback("", doc);
		}
	});
};

// Function to get data as aggrigate function & geoup by & sort
exports.getAllDocsbyGroup = function (query, collection, app, callback){
	collection.aggregate(query,function(err, doc){
		if(err){
			callback(err, "");
		} else {
			callback("", doc);
		}
	});
};

// Function to get data as populate function.
exports.getAllDocsbyPopulate = function (populateDoc, path, collection, app, callback){
	collection.populate(populateDoc, path, function(err, doc){
		if(err){
			callback(err, "");
		} else {
			callback("", doc);
		}
	});
};
