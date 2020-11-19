const path = require('path');
require('dotenv').config();

module.exports = {
        swaggerDefinition: {
            swagger:"2.0",
            info:{"title":"Proyecto PAE Otoño 2020",
            "description":"Este proyecto es para la clase de Programacion de Aplicaciones de Escritorio para la universidad de ITESO. La aplicación es un gestor de un restaurante el cual será para el uso tanto del cliente como para el control de ciertas actividades en el caso de los empleados.",
            "contact": {
                "name": "API Support",
              },
              "version": "1.0.1",
              "servers":[`${process.env.APP_PATH}:${process.env.PORT}`]
        
            }
        },
        apis: ['index.js',path.join(__dirname,'..','..','routes','index.js'),path.join(__dirname,'..','..','routes','api.js')]
    }