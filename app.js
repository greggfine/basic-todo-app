var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	todoController = require('./controllers/todo-controller');

app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }));



todoController(app);


app.listen(3000, function() {
	console.log('The server is running.');
})