document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const number = Math.floor(Math.random() * 100);
  const url = `https://rickandmortyapi.com/api/character/${number}`
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.name
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}