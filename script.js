// handle like button
let likeBtn = document.querySelectorAll(".like");
likeBtn.forEach(btn => {
    btn.addEventListener('click', function() {
        if (btn.style.color === "red") {
            btn.style.color = "black";
        }else {
            btn.style.color = "red";
        }
    }); 
});

// Delete items from the cart.
let clearBtn = document.querySelectorAll(".delete");
clearBtn.forEach(element => {
    element.addEventListener("click", function() {
        let parentDiv = element.closest(".card-container");
        parentDiv.remove();
    })
})