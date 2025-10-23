const { response } = require('express');
var http =require ('http');

//vamos a crear nuestro propio servidor

var servidor = http.createServer(function (req, res){

    //req -> solicitud que viene por parte de la arquitectura cliente servidor, todos los clientes (navegadores, usuarios, app, servicios) son los que realizan una peticion por parte del portocolo
    //res -> respuesta que el servidor le da al cliente

    res.writeHead(200, {'Content-Type': 'text/html charset : utf-8' }); //200 es un codigo de exito

    res.write('<h1>Hola Mundo desde Node.js</h1>');
    res.write('<h1> a mimir</h2>');
    res.write('<h1> a mimirx2</h2>');

    console.log('Hola si entro al servidor');

    res.end(); 
});


//es necesario tener un puerto de comunicacion para el servidor

servidor.listen(3000);

console.log('Servidor ejecutandose en http://localhost:3000');