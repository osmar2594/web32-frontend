const express = require('express');
const colorr = require('colors');
const app = express();
const port = 3000;

    songs = [ 
    {id: 1, name: 'Kilometros', artista: 'Sin Bandera', year: 2007},
    {id: 2, name: 'Umbrella', artista: 'Rihanna', year: 2000},
    {id: 3, name: 'Back in black', artista: 'AC/DC', year: 1980},
    {id: 4, name: 'Gasolina', artista: 'Daddy Yankee', year: 2002},
    {id: 5, name: 'Perdedor', artista: 'Enrique Iglesias', year: 2005},
    ];

    app.get('/', (req, res) => {
        res.send(`<html><body>Hola desde servidor usando express</body></html>`);
    });

    app.get('/songs', (req, res) => {
        res.json(songs);
    });

    app.listen(port, () =>{
        console.log(`Servidor esta funcionando en puerto: ${port}`.rainbow);
        
    })