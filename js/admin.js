//empty array to store our items/products
let product = []
//-------------------------------------------------------------------------------------------------------------------
//constructor function to create my objects
function Constructor(url,id,name,description,price){
    this.url = url
    this.id = id
    this.name = name
    this.description = description
    this.price = price
}
//-------------------------------------------------------------------------------------------------------------------
//item list
let item1 = new Constructor('https://i.postimg.cc/NfnjfqNJ/yugioh6.jpg',1, 'YuGiOh figurine' , 'This is better than the fake',700)
let item2 = new Constructor('https://i.postimg.cc/pdfWZ9P4/yugioh5.webp',2, 'YuGiOh card sleeves' , 'This is better than the fake',700)
let item3 = new Constructor('https://i.postimg.cc/FR3QmzWm/yugioh3.jpg',3, 'YugiOh Box set' , 'This is better than the fake',700)
let item4 = new Constructor('https://i.postimg.cc/YSxyrkpT/yugioh2.jpg',4, 'YuGiOh card packs gold' , 'This is better than the fake',700)
let item5 = new Constructor('https://i.postimg.cc/tR5b7Qgd/yugioh1.jpg',5, 'YuGiOh card packs black' , 'This is better than the fake',700)

//--------------------------------------------------------------------------------------------------------------------
//Pushing items into array
product.push(item1,item2,item3,item4,item5)
    //sets the array in local storage
//items is the name of the array
//JSON.stringify turns objects into a string to be able to view in the console
localStorage.setItem("product",JSON.stringify(product))

//getItem gets the item from the browser
//sets the array from local storage to array(items) in code
product = JSON.parse(localStorage.getItem('product')) 

let deleteButton = document.querySelector('.delete')

//---------------------------------------------------------------------------------------------------------------------

let table = document.querySelector('table')

//the window.onload() is an event handler , not an event listener
//You must figure out the event listener on your own
function upload(){
let productItems = product.map(function(item,index){
    console.log(item);
    console.log(index);
    return `
        <tr>
        <td><img src='${item.url}'</td>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>R${item.price}</td>
            <td>${item.description}</td>
            <td><button class='delete'>Edit</button></td>
            <td><button class='delete' value=${index}>Delete</button></td>

        </tr>`
})

table.innerHTML = productItems.join('')
}

upload()
// ------------------------------------------------------------------------------------------------------------------

function storage(){
    //sets the array in local storage
//items is the name of the array
//JSON.stringify turns objects into a string to be able to view in the console
localStorage.setItem("product",JSON.stringify(product))

//getItem gets the item from the browser
//sets the array from local storage to array(items) in code
itemStorage = JSON.parse(localStorage.getItem('product')) 

}


// ------------------------------------------------------------------------------------------------------------------
table.addEventListener('click',function(){
    if(event.target.classList.contains('delete')) {
        remove(event.target.value)
        alert(event.target.value)
    }
})

// table.style.backgroundColor ='blue'

// table.style.color ='yellow'

// table.style.display = 'none'
// ------------------------------------------------------------------------------------------------------------------