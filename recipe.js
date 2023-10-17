let recipeList = document.getElementById('recipe-list').getElementsByTagName('li')
let addIng = document.getElementById('add-ing')
ingString = ""
let checkboxes = document.getElementsByName('ingredient');
let emptyAlert = document.getElementById('empty-alert')
let alreadyClicked = false;

// Adds ingredients to shopping list 
addIng.addEventListener("click", function() {
    if (alreadyClicked === false) {
    for (let i = 0; i < recipeList.length; i++)
    {
        if (checkboxes[i].checked) {
        ingString += '<li><input type="checkbox" checked><label>' + recipeList[i].innerText +'</label></li>'
        }
    }

    localStorage.setItem('shoppingList', ingString)
    emptyAlert.innerHTML = '<div class="alert alert-primary" role="alert">Ingredients added!</div>'
    alreadyClicked = true;    
    }
    
    else { 
    emptyAlert.innerHTML = '<div class="alert alert-primary" role="alert">Ingredients already added. Click Add Ingredients again to confirm</div>'
    alreadyClicked = false;
    }
    console.log(localStorage)
})


