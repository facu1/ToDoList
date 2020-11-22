# Quasar App (todolistapp-client)

Applicación de gestión de tareas o quehaceres pendientes (to-dos) donde el usuario pueda crear tareas, editarlas, marcarlas como terminadas y también borrarlas.

# Uso

Para empezar, en el inicio aparecerá un botón que dice 'TODOLISTAPP', al presionar podrá empezar a crear sus tareas.
Con la barra que se encuentra al principio de la pagina podrá ingresar la tarea y luego agregarla a la lista apretando el botón 'Crear'.
La tarea agregada tiene 3 funcionalidades: marcar como finalizada con el checkbox de la izquierda, editarse apretando doble-click sobre el texto de la tarea y podrá eliminarse inmediatamente con el basurero de la derecha, se eliminará siempre y cuando la tarea esté hecha, sino le aparecerá una ventana para confirmar la acción.

## Framework utilizado
Quasar y NodeJS

## Instalar las dependencias
```bash
npm i
```

### Inicie la aplicación en modo de desarrollo (recarga de código activo, informe de errores, etc.)
```bash
quasar dev
```

### Cree la aplicación para producción

```bash
quasar build
```