const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' })
        let salida = {
            nombre: 'raul alejandro',
            edad: 34,
            url: req.url

        }
        res.write(JSON.stringify(salida));
        //res.write('Hola mundo');
        res.end(); //indica que ya terminamos de crear la respuesta

    })
    .listen(8080);

console.log('Escuchando el puerto 8080');