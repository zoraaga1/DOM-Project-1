// handle like button
let likeBtn = document.querySelectorAll(".like");
likeBtn.forEach(btn => {
    btn.addEventListener('click', function () {
        if (btn.style.color === "red") {
            btn.style.color = "black";
        } else {
            btn.style.color = "red";
        }
    });
});

// Delete items from the cart
const clearBtn = document.querySelectorAll(".delete");
clearBtn.forEach(element => {
    element.addEventListener("click", function () {
        let parentDiv = element.closest(".card-container");
        parentDiv.remove();
        calcTotalPrice();
    })
})

// Add item
let plusBtn = document.querySelectorAll(".plus")
plusBtn.forEach(btn => {
    btn.addEventListener('click', function () {
        let itemQuantity = btn.nextElementSibling.innerText;
        let quantity = parseFloat(itemQuantity);
        quantity += 1;
        btn.nextElementSibling.innerText = quantity;
        calcTotalPrice();
    });
})

// Minus item
let minusBtn = document.querySelectorAll(".minus")
minusBtn.forEach(btn => {
    btn.addEventListener('click', function () {
        let itemQuantity = btn.previousElementSibling.innerText;
        let quantity = parseFloat(itemQuantity);
        quantity -= 1;
        if (quantity < 0) {
            btn.previousElementSibling.innerText = 0;
        } else {
            btn.previousElementSibling.innerText = quantity;
        }
        calcTotalPrice();
    });
})

// Total price
function calcTotalPrice() {
    let pricesList = [];
    let prices = document.querySelectorAll('.unit-price');
    prices.forEach(price => {
        pricesList.push(parseFloat(price.innerText));
    })
    console.log(pricesList);
    let quantityList = [];
    let quantities = document.querySelectorAll('.quantity');
    quantities.forEach(quantity => {
        quantityList.push(parseFloat(quantity.innerText));
    })
    console.log(quantityList);
    let totalPrice = 0;
    for (i = 0; i < pricesList.length; i++) {
        totalPrice += pricesList[i] * quantityList[i]
    }
    console.log(totalPrice);
    document.querySelector(".total").innerText = `${totalPrice} $`;
}