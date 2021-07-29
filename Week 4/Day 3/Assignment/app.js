const menulist = document.getElementById("menulist")
const starters = document.getElementById("starters")
const entrees = document.getElementById("entrees")
const desserts = document.getElementById("desserts")
const allitems = document.getElementById("allitems")

function shapemenu(givenmenu) {
    const menuprep = givenmenu.map(function (dish) {
        return `
    <li class="dish">
    <div class="pic"><img src="${dish.imageURL}" class="image"><img></div>
    <div class="titledesc">
    <div class="dishtitle">${dish.title}</div>
    <div class="description">${dish.description}</div>
    </div>
    <div class="price">$${dish.price}</div>
    </li>
    `
    })

    menulist.innerHTML = ""
    menulist.innerHTML = menuprep.join("")
}

function mainmenu() {
    shapemenu(dishes)
}

starters.addEventListener("click", function() {
    const starterprep = dishes.filter(function (dish) {
        return dish.course == "Starters"
    })
    shapemenu(starterprep)
})

entrees.addEventListener("click", function() {
    const entreeprep = dishes.filter(function (dish) {
        return dish.course == "Entrees"
    })
    shapemenu(entreeprep)
})

desserts.addEventListener("click", function() {
    const dessertsprep = dishes.filter(function (dish) {
        return dish.course == "Desserts"
    })
    shapemenu(dessertsprep)
})

allitems.addEventListener("click", function() {
    mainmenu()
})

mainmenu()