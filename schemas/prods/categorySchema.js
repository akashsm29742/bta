'use strict'; 

module.exports = function(app, mongoose) {
  var categorySchema = mongoose.Schema({
      _id: Number,
      name: String,
      descValue: Boolean,
      //imageUrl: String
  });


  var categories = mongoose.model('categories', categorySchema);
  /* For AutoIncrement */
   categorySchema.plugin(app.schema.autoIncrement.plugin, {
        model: 'categories',
        field: '_id',
        startAt: '1',
        incrementBy: 1
    });
    
    app.schema.categories = categories;
};