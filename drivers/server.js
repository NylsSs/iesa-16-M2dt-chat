var express = require('express')(),
	http = require('http');

module.exports = function(app){

	return{
		instance : null,

		create : function(){
			//create server
			this.instance = http.Server(express);

			app.routes.create(express);

			if(app.config.socket) app.socket.init();

			this.listen();
		},

		listen : function(){
			this.instance.listen('1337', function(){
				console.log('listening on *:1337');
			});
		}
	}

}