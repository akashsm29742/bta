var multer = require('multer')
var upload = multer({
  dest: '/tmp',
});


module.exports = function(app) {

	app.get('/prod/getCategoriesAndBrands',require('../joyi/apis/prodApis').getCategoriesAndBrands);
	app.post('/prod/createCategories',require('../joyi/apis/prodApis').createCategories);
	app.post('/prod/createProduct', upload.single('prodImage'), require('../joyi/apis/prodApis').createProduct);
    };