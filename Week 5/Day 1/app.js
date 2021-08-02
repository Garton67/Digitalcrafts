const movieURL = 'http://www.omdbapi.com/?s=&apikey=15e4e4ab'

const searchTerm = document.getElementById("searchTerm")
const searchButton = document.getElementById("searchButton")

const container = document.getElementById("container")
const movieList = document.getElementById("movieList")

searchButton.addEventListener('click', function() {
    searchDB(searchTerm.value)

})


function searchDB(sItem) {
    myURL = `http://www.omdbapi.com/?s=${sItem}&apikey=15e4e4ab`
    let dotRequest = new XMLHttpRequest()
    dotRequest.addEventListener('load', function () {
        let posts = JSON.parse(this.responseText)
        let dotsList = posts.Search.map(function (info) {
            return `
        <div class="movieDot">
        <div class="posterThumb"><img src="${info.Poster}" class="smallPoster"></div>
        <div class="title"><a href="#movieList" onclick="post('${info.imdbID}')">${info.Title}</a></div>
        </div>
        `
        })

        container.innerHTML = dotsList.join("")
    })

    dotRequest.open('GET', myURL)
    dotRequest.send()
}

function post(imdb) {
    imdbURL = `http://www.omdbapi.com/?i=${imdb}&apikey=15e4e4ab`
    let request = new XMLHttpRequest()

    request.addEventListener('load', function () {
        let posts = JSON.parse(this.responseText)
        let postsUL = `
        <div class="mainAttraction">
        <img src="${posts.Poster}" class="largePoster">
        <div class="mainInfoBox">
        <div class="mainTitle">${posts.Title}</div>
        <div class="mainRelease">${posts.Released}</div>
        <div class="mainRated">${posts.Rated}</div>
        </div>
        </div>
        `
        movieList.innerHTML = postsUL

    })
    request.open('get', imdbURL)
    request.send()
}

searchDB('Harry Potter')