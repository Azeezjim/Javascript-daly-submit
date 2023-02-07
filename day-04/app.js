const form = document.querySelector('form');
const factDiv = document.querySelector('.number-fact');    

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const number = e.target.querySelector('input[type="number"]').value; 
  const loading = 'Wait a little bit...-';
  factDiv.innerHTML = loading;
  const baseURL = 'http://numbersapi.com/'
  fetch(baseURL + number, {
    method: 'GET',
    headers: {
      'x-requested-with': 'text/pline'
    }
  })
    .then(response => response.text())
    .then(text => factDiv.innerHTML = text)
})