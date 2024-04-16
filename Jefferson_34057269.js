var http = require('http');
var fs = require('fs');
var variavelGlobalReutilizavel = 'mesmo valor/parametros etc';

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html>');
    res.write('<body>');
    res.write('<h1>Primeiro executavel com html embutido/inline</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
}).listen(8080);

http.createServer(function (req, res) {
    fs.readFile('Jefferson_34057269.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8081);
   