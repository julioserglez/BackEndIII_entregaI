# BackEndIII_entregaI

# Primera entrega

    Se hace la entrega con los siguientes puntos:

    Se bassa el proyecto de la actividad 2
    Se crea dos enpoints que generan datos fake para usuarios y mascotas

# Crear un router llamado mocks.router.js que funcione bajo la ruta base /api/mocks.

    -----------Rutas para generar Mocks de Usuarios------------

    Genera usuarios fake y los muestra en pantalla 
    /api/mocks/mockingusers/:cant

    Genera usuarios fakes y guarda en la BD 
    /api/mocks/generatedata/users/:cant

    -----------Rutas para generar Mocks de Mascotas--------------- // 
    Genera mascotas fakes y muestra en pantalla 
    /api/mocks/mockingpets/:cant'

    // Genera mascotas mascotas fakes y guarda en la BD 
    /api/mocks/generatedata/pets/:cant

#     Se guarda usuarios con las siguientes caracteristicas: 
  El campo Password con la contraseña "coder123" 
  El campo Role puede variar entre “user” y “admin”. 
  El campo Pets debe ir como array vacío.

* Se recibe el parametro cantidad pra generar los registro necesarios. 
* Se hacen las validaciones necesarias 
* Se comprueba la inserción de registros, asegurando que los registros generados estén disponibles y sean accesibles.

    Julio GLez
