const choiceTheMovie = document.querySelector('.button-start')
const title = document.querySelector('h1')


function draw() {
  const movies = [
    document.querySelector('.input-movie-1'),
    document.querySelector('.input-movie-2'),
    document.querySelector('.input-movie-3'),
    document.querySelector('.input-movie-4'),
    document.querySelector('.input-movie-5'),
    document.querySelector('.input-movie-6'),
    document.querySelector('.input-movie-7'),
    document.querySelector('.input-movie-8'),
    document.querySelector('.input-movie-9'),
    document.querySelector('.input-movie-10')
  ]
  const filteredMovies = movies.filter(input => input.value.trim() !== '')


  if (filteredMovies.length === 0) {
    title.innerHTML = 'Digite pelo menos um Filme!'
    return
  }

  movies.forEach(input => {
    input.style.border = ''
    input.style.backgroundColor = ''
    input.style.color = ''
    input.style.fontSize = ''
  })

  const movieDraw = filteredMovies[Math.floor(Math.random() * filteredMovies.length)]

  movieDraw.style.border = '3px solid gold'
  movieDraw.style.backgroundColor = 'black'
  movieDraw.style.color = 'gold'
  movieDraw.style.fontSize = '30px'

  title.innerHTML = `
  <img class="img-claquete" src="./assets/emoticon-filme.png"></img>
  ${movieDraw.value}
  <img class="img-movie" src="./assets/emoticon-pipoca.png"></img>
  `

  title.classList.add('animate');
  setTimeout(() => title.classList.remove('animate'), 300)
}

choiceTheMovie.addEventListener('click', draw)