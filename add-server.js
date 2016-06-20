var http = require('http')
, seaport = require('seaport')
, ports = seaport.connect('localhost', 9090);

function add () {
	var n = 100000, sum = 0;
	for (var i = 0; i < n ; i++) {
		sum += i;
	}
	return sum;
}

// add-server
var server = http.createServer(function (req, res) {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('grand total: ' + add() + ', Response from port: ' + this.address().port);
});

// add-server listens to PORT registered in seaport
server.listen(ports.register('add-server'), function () {
	console.log('add-server listening on %d', this.address().port);
});