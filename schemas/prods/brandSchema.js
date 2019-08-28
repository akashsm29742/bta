'use strict'; 

module.exports = function(app, mongoose) {
  var brandSchema = mongoose.Schema({
      id: Number,
      name: String
  });


  var brands = mongoose.model('brands', brandSchema);
  /* For AutoIncrement */
    brandSchema.plugin(app.schema.autoIncrement.plugin, {
        model: 'brands',
        field: '_id',
        startAt: '1',
        incrementBy: 1
    });
    
    app.schema.brands = brands;
};