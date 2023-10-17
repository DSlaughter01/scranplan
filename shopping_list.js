let shopList = document.getElementById('shop-list')
shopList.innerHTML = localStorage.getItem('shoppingList')
let shopListLI = document.getElementById('shop-list').getElementsByTagName('input')
let updateList = document.getElementById('update-list')
let deleteList = document.getElementById('delete-list')
ingString = ""

// Updates shopping list
updateList.addEventListener("click", function() {
    for (let i = 0; i < shopListLI.length; i++)
    {
        if (shopListLI[i].checked) {
        ingString += '<li><input name="ingredient" type="checkbox" checked><label>' + shopListLI[i].innerText +'</label></li>'
        console.log(ingString)
        }
    }
    shopList.innerHTML = ingString
    localStorage.setItem('shoppingList', ingString)
    alert('List updated!')
})

// Deletes shopping list
deleteList.addEventListener("click", function() {
    shopList.innerHTML = ingString
    localStorage.setItem('shoppingList', ingString)
    alert('List deleted!')
})