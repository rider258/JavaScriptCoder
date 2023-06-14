
document.addEventListener("DOMContentLoaded", function() {
    const empezar = document.getElementById("btn-empezar");
    const registrar = document.getElementById("ico-registrar");


    //aniado la porcion de codigo para vincular los botones de las diferentes carreras como sugirio el tutor

    const inscribirmeDesarrollo = document.getElementById("inscribirme-desarrollo");
    const inscribirmeGrafico = document.getElementById("inscribirme-grafico");
    const inscribirmeMarketing = document.getElementById("inscribirme-marketing" );
  
    // Evento click en el botón "Empezar" y "Registrar" para cargar el formulario
    empezar.addEventListener("click", cargarFormulario);
    registrar.addEventListener("click", cargarFormulario);
    //aniado los eventos para escuchsar los clicks de los respectivos botones
    inscribirmeDesarrollo.addEventListener("click", cargarFormulario);
    inscribirmeGrafico.addEventListener("click", cargarFormulario);
    inscribirmeMarketing.addEventListener("click", cargarFormulario);
  
    function cargarFormulario(event) {
      event.preventDefault();
  
      //modificacion del contenido del contenedor, se crea el formulario
  
      let newContent = document.getElementById("main");
      newContent.innerHTML = `
        <h2 class="form-title">Formulario de Registro</h2>
        <form id="formulario" class="formulario">
          <label for="nombre">Nombre</label>
          <input type="text" name="nombre" id="nombreInput" placeholder="Ingresar Nombre">
  
          <label for="edad">Edad</label>
          <input type="text" name="edad" id="edadInput" placeholder="Ingresar Edad">
  
          <label for="email">Email</label>
          <input type="email" name="email" id="emailInput" placeholder="Ingresar email">
  
          <label for="telefono">Teléfono</label>
          <input type="text" name="telefono" id="telefonoInput" placeholder="Ingresar Teléfono">
  
          <label for="carrera">Carrera</label>
          <input type="text" name="carrera" id="carreraInput" placeholder="Ingresar la carrera">
  
          <label for="modalidad">Modalidad</label>
          <select name="modalidad" id="modalidadSelect">
            <option value="Presencial">Presencial</option>
            <option value="Online">Online</option>
            <option value="Mixta">Mixta</option>
          </select>
  
          <label for="codigo-descuento">Código de Descuento</label>
          <input type="text" name="codigo-descuento" id="codigoDescuentoInput" placeholder="Ingresar código de descuento">
  
          <div id="btn-registro" class="botones">
            <input class="registrarse" type="submit" value="Registrarse">
            <input class="cancelar" type="submit" value="Cancelar">
          </div>
        </form>
  
        <div id="estudiantesContainer"></div>
      `;
  
      const formulario = document.getElementById("formulario");
      formulario.addEventListener("submit", regEstudiante);
    }
  
    let estudiantes = [];
  
    class Estudiante {
      constructor(nombre, edad, email, telefono, carrera, modalidad, codigoDescuento) {
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;
        this.carrera = carrera;
        this.modalidad = modalidad;
        this.codigoDescuento = codigoDescuento;
      }
    }
  
    function regEstudiante(event) {
      event.preventDefault();
  
      let nombre = document.getElementById("nombreInput").value;
      let edad = document.getElementById("edadInput").value;
      let email = document.getElementById("emailInput").value;
      let telefono = document.getElementById("telefonoInput").value;
      let carrera = document.getElementById("carreraInput").value;
      let modalidad = document.getElementById("modalidadSelect").value;
      let codigoDescuento = document.getElementById("codigoDescuentoInput").value;
  
      let estudiante = new Estudiante(nombre, edad, email, telefono, carrera, modalidad, codigoDescuento);
  
      estudiantes.push(estudiante);
      mostrarEstudiantes();
      guardarEstudiantesLocalStorage();
      calcularPrecio(estudiante);
      //alert("Estudiante creado");// insertamos el alert de confirmacion

      //utilizamos la libreria sweetaler2
      Swal.fire(
        'Buen trabajo!',
        'El registro ha sido exitoso!',
        'success'
      )
    }
  
    function mostrarEstudiantes() {
      let estudiantesContainer = document.getElementById("estudiantesContainer");
      estudiantesContainer.innerHTML = "";
  
      estudiantes.forEach(function(estudiante) {
        let estudianteInfo = document.createElement("div");
        estudianteInfo.innerHTML = `     
        `;
  
        estudiantesContainer.appendChild(estudianteInfo);
      });
    }
  
    function guardarEstudiantesLocalStorage() {
      localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
    }
  
    function calcularPrecio(estudiante) {
      const precioIngenieria = 3500;
      const precioLicenciatura = 2500;
      const precioPostgrado = 5000;
      let precio = 0;
      let descuento = 0;
  
      switch (estudiante.carrera) {
        case "Ingeniería":
          precio = precioIngenieria;
          descuento = 0.15;
          break;
        case "Licenciatura":
          precio = precioLicenciatura;
          descuento = 0.20;
          break;
        case "Postgrado":
          precio = precioPostgrado;
          descuento = 0.30;
          break;
      }
  
      let nuevoPrecio = precio - precio * descuento;
  
      const mensaje = `
        Estudiante: ${estudiante.nombre}
        Carrera: ${estudiante.carrera}
        Modalidad: ${estudiante.modalidad}
        Precio Original: $${precio}
        Precio con Descuento: $${nuevoPrecio}
        Código de Descuento: ${estudiante.codigoDescuento}
      `;
  
      let precioInfo = document.createElement("p");
      precioInfo.innerHTML = mensaje;
  
      let estudiantesContainer = document.getElementById("estudiantesContainer");
      estudiantesContainer.appendChild(precioInfo);
    }
  
    // Cargar estudiantes del localStorage al cargar la página
    function cargarEstudiantesLocalStorage() {
      let estudiantesLocalStorage = localStorage.getItem("estudiantes");
      if (estudiantesLocalStorage) {
        estudiantes = JSON.parse(estudiantesLocalStorage);
        mostrarEstudiantes();
      }
    }
  
    cargarEstudiantesLocalStorage();
  });
  
  
  