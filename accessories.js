const data= [
    {
        id : 0,
        
        name : 'Pink High Wedge Sneaker',
        price :1600,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 1,
    
        name : 'White Printed Sneaker',
        price :1750,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 2,
       
        name : 'Shiny Gold Block Heels',
        price :2999,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 3,
        
        name : 'Party Wear Pumps',
        price :2799,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 4,
     
        name : 'Tri-Color Multi-Purpose Hand Bag',
        price :1800,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 5,
     
        name : 'Chanel Chain-Sling Bag',
        price :2400,
		delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 6,
      
        name : 'Red Cross Sling',
        price : 1999,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 7,
      
        name : 'Cute Pink Chain-Sling',
        price :1990,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
	
	{
        id : 8,
    
        name : 'Designer Hand Chain',
        price :225,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
	{
        id : 9,
        
        name : 'Butterfly Hand Chain',
        price :270,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
	{
        id : 10,
        
        name : 'Pearl And Silver Choker+Necklace',
        price :399,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
	{
        id : 11,
     
        name : 'Star and Moon Pendant',
        price :350,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
	
];

let cartList=[]; //array to store cart lists

var i;
var detail =document.getElementsByClassName('card-item');
var detailsImg = document.getElementById('details-img')
var detailTitle = document.getElementById('detail-title')
var images =document.getElementsByClassName('card-img');
var detailPrice = document.getElementById('detail-price')
var detailsPage = document.getElementById('details-page');
var back = document.getElementById('buy')
back.addEventListener('click',refreshPage)
var addToCarts = document.querySelectorAll('#add-to-cart')
var cart = document.getElementById('cart');

// click event to display cart page
cart.addEventListener('click',displayCart)

var carts = document.getElementById('carts');

//click events to add items to cart from details page
carts.addEventListener('click',()=>addToCart(getId))

var home = document.getElementById('logo');

//click event to hide cart page and return to home page
home.addEventListener('click',hideCart);

//events on dynamically created element to remove items from list
document.addEventListener('click',function (e){
    if(e.target.id=='remove'){
        var itemId = e.target.parentNode.id
        removeFromCart(itemId)
    }
})


//click event to display details page
for(i=0;i<data.length;i++){
    detail[i].addEventListener('click',handleDetail)
}

var getId;

//click events to add items to cart from home page cart icon
addToCarts.forEach(val=>val.addEventListener('click',()=>addToCart(val.parentNode.id)));

// details function
function handleDetail(e){
    detailsPage.style.display = 'block'
    getId= this.parentNode.id;
 
    detailTitle.innerHTML=   data[getId].name;
    detailPrice.innerHTML= 'Price : Rs. ' +data[getId].price;
    
}

// add item to the cart
function addToCart(id) {
    if(!data[id].itemInCart){
        cartList= [...cartList,data[id]];
        addItem()
        
        alert('item added to your cart')

    }
    else{
        alert('your item is already there')
    }
    data[id].itemInCart= true
}

//back to main page
function refreshPage(){
    detailsPage.style.display = 'none'
}

// hide your cart page
function hideCart(){
    document.getElementById('main').style.display= "block";
    document.getElementById('cart-container').style.display= "none";
}

//display your cart page
function displayCart(){
    document.getElementById('main').style.display= "none";
    document.getElementById('details-page').style.display= "none";
    document.getElementById('cart-container').style.display= "block";
    if(cartList.length==0){
        document.getElementById('cart-with-items').style.display= "none";
        document.getElementById('empty-cart').style.display= "block";
    }
    else{
        document.getElementById('empty-cart').style.display= "none";
        document.getElementById('cart-with-items').style.display= "block";
        
    }
}

var totalAmount;
var totalItems;


//add item to the cart
function addItem(){
    totalAmount=0;
    totalItems = 0;
    
    var clrNode=document.getElementById('item-body');
        clrNode.innerHTML= '';
        console.log(clrNode.childNodes)
        cartList.map((cart)=>
        {
            var cartCont = document.getElementById('item-body');
            totalAmount = totalAmount + cart.price;
           
            totalItems = totalItems + 1;

            var tempCart = document.createElement('div')
            tempCart.setAttribute('class','cart-list');
            tempCart.setAttribute('id',cart.id);

           

            var listName = document.createElement('h3');
            listName.setAttribute('class','list-name');
            listName.innerHTML = cart.name;
            tempCart.appendChild(listName)

            var listPay = document.createElement('h3');
            listPay.setAttribute('class','pay');
            listPay.innerHTML = cart.price;
            tempCart.appendChild(listPay);

            var listQuantity = document.createElement('h3');
            listQuantity.setAttribute('class','quantity');
            listQuantity.innerHTML = '1';
            tempCart.appendChild(listQuantity);

            var listTrash = document.createElement('i');
            listTrash.setAttribute('class','fa fa-trash ');
            listTrash.setAttribute('id','remove');
            tempCart.appendChild(listTrash);

            cartCont.appendChild(tempCart);
            
        })
        document.getElementById('total-amount').innerHTML = 'Total Amount : Rs. ' + totalAmount;
        document.getElementById('total-items').innerHTML = 'Total Items : ' + totalItems;
        
        document.getElementById('total').style.display= "block";
}

//remove item from the cart
function removeFromCart(itemId){
    data[itemId].itemInCart = false
    cartList = cartList.filter((list)=>list.id!=itemId);
    addItem()
    if(cartList.length==0){
        document.getElementById('cart-with-items').style.display= "none";
        document.getElementById('empty-cart').style.display= "block";
    }
}