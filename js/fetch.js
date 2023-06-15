let url = 'https://jsonplaceholder.typicode.com/users'

function fetchFake() {
  fetch(url)
  .then(response => response.json())
  .then(data => mostrarData(data))
  .catch(err => console.log(err))

const mostrarData = (data) => {
  console.log(data);
  let body = ''
  for (let i = 0; i < data.length; i++){
    body += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr>`
  }
  document.getElementById('dataTable').innerHTML = body
}
  
}
fetchFake();