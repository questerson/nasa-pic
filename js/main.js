//Example fetch using pokemonapi.co


//fWTgxUq6iy5ZaLwn9OEXOj1feBfP6qpPLaXPEyAL
//You can start using this key to make web service requests. Simply pass your key in the URL when making a web request. Here's an example:





document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://api.nasa.gov/planetary/apod?api_key=fWTgxUq6iy5ZaLwn9OEXOj1feBfP6qpPLaXPEyAL&count=5'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('img').src = data[0].hdurl
        document.querySelector('h3').innerText = data[0].explanation
    
      document.querySelector('h2').innerText = data[0].title
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}