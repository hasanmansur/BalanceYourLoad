var http = require('http')
, httpProxy = require('http-proxy')
, seaport = require('seaport')
, ports = seaport.connect('localhost', 9090);

var i = -1;

var proxy = httpProxy.createProxyServer({});
var server = http.createServer(function(req, res) {
	var addresses = ports.query('add-server');
	if (!addresses.length) {
        res.writeHead(503, { 'Content-Type': 'text/plain' });
        res.end('Service unavailable');
        return;
    }
	i = (i + 1) % addresses.length;
	var host = addresses[i].host.split(":").reverse()[0];
	var port = addresses[i].port;
	proxy.web(req, res, { target: 'http://' + host + ':' + port });	
});

server.listen(8000, function () {
	console.log('load balancer listening on port %d', 8000);
});

