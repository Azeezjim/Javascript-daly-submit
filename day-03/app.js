const button = document.querySelector('.container button') ;
const jokeText = document.querySelector('.container .joke');

button.addEventListener('click', getJoke)

async function getJoke() {
  const jokeData = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  });
  const dataObj = await jokeData.json();
  jokeText.innerHTML = dataObj.joke;  
}