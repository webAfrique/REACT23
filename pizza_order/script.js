const home = document.querySelector('.hero')
const orderForm = document.querySelector('form')
const checkout = document.querySelector('.order-summary')
const endTransaction = document.querySelector('.thank-you')
const summary = document.querySelector('ul.summary')

const showPrice = document.querySelectorAll('.show-price')
const servings = document.querySelectorAll('input[type=radio]')
const toppings = document.querySelectorAll('input[type=checkbox]')
const selectDelivery = document.querySelector('select')

const priceList = {
    '2 Servings': 7.50,
    '4 Servings': 10.50,
    '6 Servings': 12.50,
    '8 Servings': 15.50
}

const deliveryOptions = {
    'eat-in': 0.00,
    'pickup': 0.00,
    'delivery': 5.00
}

const currentOrder = {
    totalPrice: 0.00,
    servings: 0.00,
    delivery: 0.00,
    toppings: [],
    getTotal(){
        if (this.toppings.length > 4){
            this.totalPrice = 
            (this.toppings.length - 4 ) * 0.5 + this.servings + this.delivery
            showPrice[0].textContent = '€' + currentOrder.totalPrice
            showPrice[1].textContent = '€' + currentOrder.totalPrice
        }
        else {
            this.totalPrice = this.servings + this.delivery
            showPrice[0].textContent = '€' + currentOrder.totalPrice
            showPrice[1].textContent = '€' + currentOrder.totalPrice
        }
    }
}

function login(){
    document.querySelector('.total-price').style.visibility = 'visible'
    document.querySelector('.username-field').style.visibility = 'visible'
}
function showUser(){
    const username = document.querySelector('.username-field').value
    document.querySelector('.username').textContent = username
}

const pages = [orderForm, checkout, endTransaction]
pages.forEach(page => page.style.display = 'none')

function navigate(currentPage, nextPage) {
    currentPage.style.display = 'none'
    nextPage.style.display = 'block'
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


servings.forEach(serving => {
    serving.addEventListener(
        'click', function(event) {
            let price = priceList[event.target.value]
            let serving = event.target.value
            currentOrder.servings = price
            currentOrder.getTotal()
            addToSummary(serving, price)
        }
    )
})

toppings.forEach(topping => {
    topping.addEventListener('click', function(event){
        if (event.target.checked){
            currentOrder.toppings.push(event.target.value)
            currentOrder.getTotal()
            let price = currentOrder.toppings.length > 4 ? 0.50 : 0.00
            addToSummary(topping.value, price)
            //updateSummary()
        }
        else {
            let index = currentOrder.toppings.indexOf(event.target.value)
            currentOrder.toppings.splice(index, 1)
            currentOrder.getTotal()
            summary.removeChild(summary.children[index])
            updateSummary()
        }
    })
})

selectDelivery.addEventListener('change', function(event){
    currentOrder.delivery = deliveryOptions[event.target.value]
    currentOrder.getTotal()
    let item = event.target.value
    let price = deliveryOptions[event.target.value]
    addToSummary(item, price)
    showPrice[0].textContent = '€' + currentOrder.totalPrice
    showPrice[1].textContent = '€' + currentOrder.totalPrice
})

/*document.querySelector('.proceed').addEventListener(
    'click', () => {
        home.style.display = 'none'
    }
)*/

function addToSummary(item, price){
    const listItem = document.createElement('li')
    const selectedItem = document.createElement('p')
    selectedItem.textContent = item
    selectedItem.classList.add('item')
    const itemPrice = document.createElement('p')
    itemPrice.textContent = '€' + price
    itemPrice.classList.add('price')
    listItem.appendChild(selectedItem)
    listItem.appendChild(itemPrice)
    summary.appendChild(listItem)
}

function updateSummary(){
    if (summary.children.length >= 4){
        for (let index = 0; index <= 3; index++){
            summary.children[index].querySelector('.price').textContent = '€0.00'
        }
    }
}
//summary.children[0].querySelector('.price').textContent = 'fjkdjsjf'
