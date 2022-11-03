# NodeJS App (todolistapp-api)

API de la aplicacion to do


## Uso


Get - http://localhost:5000/api/items

Post - http://localhost:5000/api/items

BODY

{

  "text": "something"

  "state": true or false

}

Put - http://localhost:5000/api/items/:id


BODY

{

  "text": "something"
  
  or

  "state": true or false

}

Delete - http://localhost:5000/api/items/:id


## Instalar las dependencias
```bash
npm i
```


### Inicie la aplicación en modo de desarrollo (recarga de código activo, informe de errores, etc.)
```bash
nodemon server.js
```


### Cree la aplicación para producción
```bash
node server.js
```
