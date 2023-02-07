const form = document.querySelector('form');
const factDiv = document.querySelector('.number-fact');    

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const number = e.querySelector('input[type = "number"]').value; 
  const loading = 'Wait a little bit';
  factDiv.innerHTML = loading;
  const baseURL = 'http://numbersapi.com/'
  fetch(baseURL + number)
    .then(response => console.log("responce", response))
})