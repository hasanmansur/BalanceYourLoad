var http = require('http')
, httpProxy = require('http-proxy');

var i = 0;
var addresses = [
    {
        host: 'localhost',
        port: 8001
    },
    {
        host: 'localhost',
        port: 8002
    },
    {
        host: 'localhost',
        port: 8003
    }
];

var proxy = httpProxy.createProxyServer({});
var server = http.createServer(function(req, res) {
  proxy.web(req, res, { target: 'http://' + addresses[i].host + ':' + addresses[i].port });
  i = (i + 1) % addresses.length;
});

server.listen(5050, function () {
	console.log('listening on port %d', 5050);
});

