# ¿Cómo ejecutar la aplicación?

En la terminal:

`npm install`

`npm start`

## Arquitectura

Para comenzar a desarrollar la aplicación, realicé un diseño en papel para visualizar cuántas páginas y componentes necesitaría. Una vez completado este proceso, creé la página de inicio (HomePage) y la página de administración (Admin), compartiendo componentes como la barra de navegación (Nav), las tarjetas de teléfonos (Card Phones) y el pie de página (Footer).

En la barra de navegación (Nav), implementé lógica para mostrar diferentes iconos en la página de inicio y en la página de administración. Utilicé un mapeo para mostrar imágenes, títulos, descripciones y precios de teléfonos en las tarjetas, y reutilicé este componente en la página de administración.

Además, implementé la funcionalidad para mostrar los detalles de un teléfono cuando se hace clic en su imagen. También agregué un botón para crear nuevos teléfonos, utilizando eventos handle y navegación para dirigir al usuario a un formulario donde se pueden ingresar los datos. La creación de un nuevo teléfono se gestionó mediante el dispatch y el ID del objetivo.

Para las acciones de eliminar (delete) y marcar como favorito (favorite), desarrollé funcionalidad adicional. La acción de eliminar involucra otra llamada, donde se identifica el ID del teléfono a borrar y se maneja mediante un handle. Para la función de favoritos, utilicé el estado (useState) para cambiar el color del icono según si se hace clic o no.

También diseñé una página de inicio de sesión para usuarios, que está protegida por contraseña. Implementé un reducer, (store) y utilicé useState en el componente de inicio de sesión para permitir que los usuarios ingresen su nombre de usuario y contraseña. Una vez autenticados, se utiliza la navegación para redirigir a la ruta /admin/phones.

Otro aspecto importante es la funcionalidad del carrito de compras, que incluye un reducer, (store) y el uso de localStorage para almacenar los teléfonos seleccionados como parte de una lista de compras en una página separada.

Finalmente, para implementar el despliegue de la aplicación, segui estos pasos:

- git init
- git add .
- git commit -m "initial commit"
- git remote add origin (repository remote git url here)
- git push -u origin master
- En package.json poner "homepage": "https://myusername.github.io/my-app"
- Instalar : npm install --save gh-pages
- En package.json:

```
"scripts": {

- "predeploy": "npm run build",
- "deploy": "gh-pages -d build",
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
  }
```

Para realizar el despliegue:

`npm run deploy`

## Retos

- El primer reto ha sido la llamada a la api ya que no me funcionaba por un problema de cors. Investigando por internet encontré que lo podia solucionar el problema usando un proxy llamado "Cors-anywhere" , como esto ( https://cors-anywhere.herokuapp.com/corsdemo) , se añade como parte de la ruta la url de la Api.
  'https://cors-anywhere.herokuapp.com/https://phones-store-api.containers.soamee.com/phones',
  Funciona temporalmente , si no se ven las fotos y detalles de la api hay que pulsar al boton de la página mostrada anteriormente para que funcione.

- Otra cosa interesante que descubrí fue un pequeño problema con la llamada a la API usando el método DELETE. Resulta que cuando probé esta funcionalidad en el cliente de "thunk", todo funcionaba como se esperaba, pero en mi sitio web, no se borraba la imagen correctamente. Después de investigar un poco, descubrí que el problema estaba en la ruta que estábamos utilizando. Originalmente, estábamos usando "phone" en la ruta para eliminar un teléfono específico. Sin embargo, después de algunos intentos y errores, decidí cambiar "phone" a "phones" en la ruta de la API.
  ¡Eso hizo el truco! Después de realizar ese cambio en la ruta, la llamada DELETE comenzó a funcionar perfectamente en mi sitio web, y las imágenes se borraron sin problemas.

- Uno de los desafíos más significativos de esta prueba técnica fue tratar de maximizar la reutilización de componentes para evitar duplicaciones innecesarias. Esta tarea requería pensar creativamente y estructurar los componentes de manera que fueran versátiles y pudieran adaptarse a diferentes partes de la aplicación.

- Otro punto que resultó bastante desafiante fue la implementación del botón del carrito de compras. Esta funcionalidad involucraba varios conceptos y tecnologías, como Redux para gestionar el estado global de la aplicación, localStorage para almacenar los datos del carrito, eventos handle para manejar las interacciones del usuario, dispatch para realizar acciones en el estado, y useEffect para efectuar cambios en la interfaz de usuario .
