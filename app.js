var config = require('config');

var app = {
	root : __dirname,
	config : config
};

app.server = require('./drivers/server')(app);
app.routes = require('./drivers/routes')(app);
app.socket = require('./drivers/socket')(app);

app.messenger = require('./services/messenger')(app);

app.server.create();


/*


var io = require('socket.io')(http);

io.on('connection', function(socket){
	console.log('user connected');

	// recive message
	socket.on('send', function(msg){
		io.emit('receive', msg);
	});

	// User disconnection
	socket.on('disconnect', function(){
		console.log('user disconnected');
	});
});



http.listen(1337, function(){
	console.log('listening on *:1337');
});

*/