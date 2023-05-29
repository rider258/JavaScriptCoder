
/* en esta porcion de codigo quise imprlementar la busqueda de los estudiantes, notese que se encuentra en una pagina diferente */


// es necesario envolver el codigo en DomContentLoaded para que el  navegador cargue todos los elemetos del dom antes de ejecutar el codigo con el fin de evitar errores de elementos nulos

document.addEventListener("DOMContentLoaded", function() {
    
    //definicion de la variable busqueda, se crea el formulario 


    let formBusqueda = document.createElement("form");
    formBusqueda.id = "formulario-busqueda";

    // se crea el input y se le dan los atributos
  
    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.id = "nombreBusquedaInput";
    inputNombre.placeholder = "Ingrese el nombre del estudiante";
    formBusqueda.appendChild(inputNombre);
  
    // creacion del boton de busqueda

    let botonBuscar = document.createElement("button");
    botonBuscar.type = "submit";
    botonBuscar.className = "btn"
    botonBuscar.textContent = "Buscar";
    formBusqueda.appendChild(botonBuscar);
  
    let resultadosContainer = document.createElement("div");
    resultadosContainer.id = "resultadosContainer";
  
    let contenedorPrincipal = document.getElementById("contenedorPrincipal");
    contenedorPrincipal.appendChild(formBusqueda);
    contenedorPrincipal.appendChild(resultadosContainer);
  
    formBusqueda.addEventListener("submit", ejecutarBusqueda);
  
    function ejecutarBusqueda(event) {
      event.preventDefault();
  
      // Obtener el nombre del estudiante ingresado en el formulario
      let nombreBusqueda = document.getElementById("nombreBusquedaInput").value.trim();
  
      // Realizar la búsqueda en el LocalStorage
      let estudiantesEncontrados = buscarEstudiantePorNombre(nombreBusqueda);
  
      // Mostrar los resultados de la búsqueda
      mostrarResultados(estudiantesEncontrados);
    }
  
    function buscarEstudiantePorNombre(nombre) {
      // Obtener los datos del LocalStorage
      const estudiantes = obtenerEstudiantesLocalStorage();
  
      // Filtrar los estudiantes por nombre
      const estudiantesEncontrados = estudiantes.filter(estudiante => estudiante.nombre === nombre);
  
      return estudiantesEncontrados;
    }
  
    function obtenerEstudiantesLocalStorage() {
      let estudiantesLocalStorage = localStorage.getItem("estudiantes");
      let estudiantes = [];
  
      if (estudiantesLocalStorage) {
        estudiantes = JSON.parse(estudiantesLocalStorage);
      }
  
      return estudiantes;
    }
  
    function mostrarResultados(estudiantes) {
      resultadosContainer.innerHTML = "";
  
      if (estudiantes.length > 0) {
        estudiantes.forEach(function(estudiante) {
          let estudianteInfo = document.createElement("div");
          estudianteInfo.innerHTML = `
            <h3>${estudiante.nombre}</h3>
            <p>Edad: ${estudiante.edad}</p>
            <p>Email: ${estudiante.email}</p>
            <p>Teléfono: ${estudiante.telefono}</p>
            <p>Carrera: ${estudiante.carrera}</p>
            <p>Modalidad: ${estudiante.modalidad}</p>
            <p>Código de Descuento: ${estudiante.codigoDescuento}</p>
            <hr>
          `;
  
          resultadosContainer.appendChild(estudianteInfo);
        });
      } else {
        let mensaje = document.createElement("p");
        mensaje.textContent = "No se encontraron estudiantes con ese nombre.";
        resultadosContainer.appendChild(mensaje);
      }
    }
  
  });
  