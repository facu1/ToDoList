# NodeJS App (todolistapp-api)

API de la aplicacion to do


## Requests	## Uso


Get - todosapp.herokuapp.com/api/items

Post - todosapp.herokuapp.com/api/items

JSON

{

  "text": "something"

  "state": true or false

}

Put - todosapp.herokuapp.com/api/items/:id


JSON

{

  "text": "something"
  
  or

  "state": true or false

}

Delete - todosapp.herokuapp.com/api/items/:id


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
