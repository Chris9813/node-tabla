const { crearArchivo } = require('./helpers/multiplicar')
const  argv  = require('./config/yargs')



console.clear();

const { b, l, h } = argv
crearArchivo(b,l,h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(error => console.log('Error al grabar el archivo: ', error))

















