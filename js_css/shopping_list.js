let shopList = document.getElementById('shop-list')
shopList.innerHTML = localStorage.getItem('shoppingList')
let shopListInput = document.getElementById('shop-list').getElementsByTagName('input')
let shopListLabel = document.getElementById('shop-list').getElementsByTagName('label')
let updateList = document.getElementById('update-list')
let deleteList = document.getElementById('delete-list')
let emptyAlert = document.getElementById('empty-alert-rec')

// Updates shopping list
updateList.addEventListener("click", function() {
    ingString = ""
    for (let i = 0; i < shopListInput.length; i++)
    {
        if (shopListInput[i].checked) {
        ingString += '<li><input name="ingredient" type="checkbox" checked><label>' + shopListLabel[i].innerText +'</label></li>'
        console.log(ingString)
        }
    }
    shopList.innerHTML = ingString
    localStorage.setItem('shoppingList', ingString)
    emptyAlert.innerHTML = '<div class="alert alert-primary" role="alert">List updated!</div>'
})

// Deletes shopping list
deleteList.addEventListener("click", function() {
    localStorage.setItem('shoppingList', "")
    shopList.innerHTML = ""
    emptyAlert.innerHTML = '<div class="alert alert-primary" role="alert">List deleted!</div>'
})