document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://rickandmortyapi.com/api/character/2'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('h2').innerText = data.name
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}