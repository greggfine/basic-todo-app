module.exports = function(app) {

	var data = [];

	app.get('/', function(req, res) {
		res.redirect('/todo');
	});

	app.get('/todo', function(req, res) {
		if (data.includes('clear')) { data = [];}
		res.render('home', { todoList: data });
	});

	app.post('/todo', function(req, res) {
		data.push(req.body.todoItem);
		res.redirect('/todo');
	});

}

