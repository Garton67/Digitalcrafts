const newsHere = document.getElementById("newsHere")
const sourcesHere = document.getElementById("sourcesHere")
const freepress = news.articles
const freesource = sources.sources


sourcesHere.addEventListener("change", function () {
    const newschoice = this.value
    const spotcheck = news.articles["source"]

    const sourcednews = news.articles.filter(function (article) {
        return article.source.name == newschoice

    })
  
    shownews(sourcednews)
})


const sourceslist = freesource.map(function (itemtwo) {
    return `
<option value="${itemtwo.name}">${itemtwo.name}</option>
`
})


sourcesHere.innerHTML = sourceslist.join("")


shownews(freepress)

function shownews(takenews) {

    newsHere.innerHTML = ""

    const newsy = takenews.map(function (app) {
        return `
    <li class="newsslot">
    <div id="title" class="title">${app.title != null ? app.title : ""}</div>
    <div id="author">${app.author != null ? app.author : ""}</div>
    <div id="description">${app.description != null ? app.description : ""}</div>
    <div id="url"><a href="${app.url != null ? app.url : ""}">News Story Link</a></div>
    <div id="urlToImage"class="imagebox"><img src="${app.urlToImage != null ? app.urlToImage : "http://www.agentlopez.com/news.png"}" class="imagebox" /></div>
    <div id="publishedAt">${app.publishedAt != null ? app.publishedAt : ""}</div>
    </li>
    `

    })
    newsHere.innerHTML = newsy.join("")
}