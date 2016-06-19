var http = require('http');
var args = process.argv.splice(2);
var port = args[0] || 8000;

function add () {
	var n = 100000, sum = 0;
	for (var i = 0; i < n ; i++) {
		sum += i;
	}
	return sum;
}

var server = http.createServer(function (req, res) {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('grand total: ' + add() + ', serving server port#' + port);
});

server.listen(port, function () {
	console.log('server is listening on %d', port);
});