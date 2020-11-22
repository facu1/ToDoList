# NodeJS App (todolistapp-api)

A simple todo list Api app built with MongoDB, Express and Node

## Requests

Get - todosapp.herokuapp.com/api/items
Post - todosapp.herokuapp.com/api/items
  {
    "text": "something"
    "state": true or false
  }
Put - todosapp.herokuapp.com/api/items/:id
  {
    "text": "something"
    or
    "state": true or false
  }
Delete - todosapp.herokuapp.com/api/items/:id

## Install the dependencies
```bash
npm i
```

### Start the app in development mode
```bash
nodemon server.js
```

### Start the app for production
```bash
node server.js
```
