document.addEventListener("DOMContentLoaded", function() {
    var boton = document.getElementById("login");
    boton.addEventListener("click", function(event) {
      event.preventDefault();
      login();
    });
  
    function login() {
      var user = document.getElementById("userName").value;
      var password = document.getElementById("password").value;
      if (user === "david" && password === "coder") {
        window.location = "fetch.html";
      } else {
        alert("Los datos de inicio de sesión no son correctos.");
      }
    }
  });
  
  
  