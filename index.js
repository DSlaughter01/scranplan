let recipeList = document.getElementById('recipe-list').getElementsByTagName('li')
let addIng = document.getElementById("add-ing") // 
let shopList = document.getElementById("shop-list")
let ingString = ""

// Adds ingredients to shopping list 
addIng.addEventListener("click", function() {
    for (let i = 0; i < recipeList.length; i++)
    {
        ingString += "<li>" + recipeList[i].innerHTML + "</li>"
    }
    shopList.innerHTML = ingString
    localStorage.setItem('shoppingList', shopList.innerHTML)
})

// If using localStorage, this data stays forever, so a new button is needed to empty shopping list

