'use strict'; 

module.exports = function(app, mongoose) {
  var productSchema = mongoose.Schema({
    _id: Number,
    name: String,
    description: String,
    imageUrl: String,
    categoryId: {type: mongoose.Schema.Types.Number, ref: 'categories'},
    brandId: {type: mongoose.Schema.Types.Number, ref: 'brands', default: 1},
  });


  var products = mongoose.model('products', productSchema);
  /* For AutoIncrement */
    productSchema.plugin(app.schema.autoIncrement.plugin, {
        model: 'products',
        field: '_id',
        startAt: '1',
        incrementBy: 1
    });
    
    app.schema.products = products;
};