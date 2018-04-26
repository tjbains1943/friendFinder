var path = require('path');

// Export HTML routes
module.exports = function(app) {
	// console.log('___ENTER htmlRoute
    // Survey page
    console.log(4)
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
    
    app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

};


  