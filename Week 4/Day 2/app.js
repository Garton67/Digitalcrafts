//  id="newTask"type="submit" id="addTask">
//  id="pendingUL">
// id="completedUL">

let newItem = document.getElementById("newTask")
let addButton = document.getElementById("addTask")

let currentItems = document.getElementById("pendingUL")
let completedItems = document.getElementById("completedUL")

addButton.addEventListener("click", function(self) {
    event.preventDefault()

    let item = newItem.value

    let listItem = document.createElement("label")
    listItem.innerHTML = item

    let checkBox = document.createElement("input")
    checkBox.type = "checkbox"
    checkBox.setAttribute("id", "checkbox")
    checkBox.addEventListener("change", function() {
        if (this.checked) {
            completedItems.appendChild(this.parentElement)
        }
        else {
            currentItems.appendChild(this.parentElement)
        }
    


    })

    let removeItem = document.createElement("button")
    removeItem.innerHTML = "remove"
    removeItem.setAttribute("id", "remove")
    removeItem.addEventListener("click", function() {
        local = (this.parentElement).parentElement
        local.removeChild(this.parentElement)
    })

    let liItem = document.createElement("li")
        

    currentItems.appendChild(liItem)
    liItem.appendChild(checkBox)
    liItem.appendChild(listItem)
    liItem.appendChild(removeItem)

    newItem.value = ""

    
})