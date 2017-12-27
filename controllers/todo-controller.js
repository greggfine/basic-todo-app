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
		var item = req.body.todoItem;
		item === 'Clear'? data.push(item.toLowerCase()): data.push(item);
		res.redirect('/todo');
	});

}

