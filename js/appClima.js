

//capturamos los elementos del DOM

let contenedor = document.getElementById('containerApp');
let formularioBusqueda = document.getElementById('search_submit');
let inputBusqueda = document.getElementById('search_input');
let temperaturaGrados = document.getElementById('degreeNumber');
let icono = document.getElementById('weatherIcon');
let descripcion = document.getElementById('description');
let zonaHoraria = document.getElementById('timezone');
let fecha = document.getElementById('date');
let min = document.getElementById('min');
let max = document.getElementById('max');


// declaramos las funciones secundarias
const cambiarColor = (obj) => {
    //extraer la hora del objeto que contiene los datos del tiempo
    console.log(obj.dt);
    let convertTime = new Date(obj.dt*1000).toLocaleString("es-CO",{
        timeStyle: "short",
        dateStyle: "short"
    });
    console.log(convertTime);
    fecha.textContent = `${convertTime}`

    const horaDia = new Date(obj.dt * 1000).getHours();
    console.log(horaDia);

    if (horaDia > 6 && horaDia < 18){
        containerApp.classList.remove("night");
        containerApp.classList.add("day");
    } else {
            containerApp.classList.remove("day");
            containerApp.classList.add("night");
    }

    
};

const  mostrarDatos = (obj) => {
    console.log(obj);
    temperaturaGrados.textContent = Math.floor(obj.main.temp);
    zonaHoraria.textContent = obj.name;
    const icon = obj.weather[0].icon;
    icono.innerHTML =`<img class="iconos" src='icons/${icon}.png'>`;
    min.textContent = Math.floor(obj.main.temp_min);
    max.textContent = Math.floor(obj.main.temp_max);
    descripcion.textContent = obj.weather[0].description;
    

};
// declaramos la funcion principal getWeatherData 
const getWeatherData = async(city)=> {
    //pedido de la informacion de la app del clima
    const res = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=sp&appid=e1b434dc419aaefc5058b6da7ab86c05`,{
     "header":{
        "apiKey" : "e1b434dc419aaefc5058b6da7ab86c05"

    }});
    const data = await res.json();
    

    // fetch
    

    //cambiar color del fondo del contenedor segun sea dia o noche

     cambiarColor(data);

    //mostrar los datos
    
    mostrarDatos(data); 


}

formularioBusqueda.addEventListener("submit", e=> {
    e.preventDefault();
    getWeatherData(inputBusqueda.value);
})





window.onload = ()=> {
    getWeatherData("Bucaramanga");
} 

