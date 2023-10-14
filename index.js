let recipeList = document.getElementById('recipe-list').getElementsByTagName('li')
let addIng = document.getElementById("add-ing")
let shopList = document.getElementById("shop-list")

var checkedBoxes = document.querySelectorAll('input[name=mycheckboxes]:checked');

addIng.addEventListener("click", function() {
    let ingString = ""
    for (let i = 0; i < recipeList.length; i++)
    {
        ingString += "<li>" + recipeList[i].innerHTML + "</li>"
    }
    shopList.innerHTML = ingString
})