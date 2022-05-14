var productNameInput = document.getElementById('productName');
var productPriceInput = document.getElementById('productPrice');
var productCategoryInput = document.getElementById('productCategory');
var productDescInput = document.getElementById('productDescription');

var inputs = document.getElementsByClassName('form-control');


var addbtn = document.getElementById('addbtn');

var products = [];
if(JSON.parse(localStorage.getItem('productslist'))!=null){
    products = JSON.parse(localStorage.getItem('productslist'));
    displaydata();
}
addbtn.onclick =function(){
    addproduct();
    displaydata();
    resetInputs()
}

function addproduct(){

    var product = {
        name : productNameInput.value,
        price : productPriceInput.value,
        category : productCategoryInput.value,
        desc : productDescInput.value,
    }
    products.push(product);

    localStorage.setItem('productslist', JSON.stringify(products));
}

function deleteProduct(index){
    products.splice(index , 1 );
    displaydata();
    localStorage.setItem('productslist', JSON.stringify(products));
}

function displaydata(){
    var sum = "";
    for(var i=0 ; i<products.length ; i++){
        sum += 
        `
        <tr>
        <td>${products[i].name}</td>
        <td>${products[i].price}</td>
        <td>${products[i].category}</td>
        <td>${products[i].desc}</td>
        <td><button class="btn btn-warning">Updata</button></td>
        <td><button onclick="deleteProduct(${i})" class="btn btn-danger">Delete</button></td>
        </tr>
        `
    }
    document.getElementById('tableBody').innerHTML=sum;
}

function resetInputs(){
    for(var i=0 ; i<inputs.length ; i++){
        inputs[i].value = "";
    }
}


