module.exports = {
 COMPANY_DETAILS: {
	COMPANY_NAME: "Joyi Fashion",
	COMPANY_ADDRESS: "Company Address",	
	COMPANY_PHONE: "1234567890",
	COMPANY_EMAIL: "fromEmailAddress@something.com",
	COMPANY_EMAIL_PASSWORD: "PASSWORD"
 },	
 MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/joyi',
 otpCodeExpiryTimeInMiliSecs : 600000,
 TOKEN_SECRET : process.env.TOKEN_SECRET || 'YOUR_UNIQUE_JWT_TOKEN_SECRET',
 SUPER_ADMIN_EMAIL : 'groeitech@gmail.com', // super Admin credentials
 SUPER_ADMIN_PHONE : '9945052847',//super Admin PH no
 WEB_FOLDER : "dev"    
};