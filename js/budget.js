const priceInputs = document.querySelectorAll('.price-input');

const totalPrice = document.getElementById('totalPrice');

const budgetMessage = document.getElementById('budgetMessage');

const budgetLimit = 35;

function updateTotal(){

    let total = 0;

    priceInputs.forEach(input => {

        total += Number(input.value) || 0;

    });

    totalPrice.textContent = total.toFixed(2);

    if(total > budgetLimit){

        totalPrice.style.color = "red";

        budgetMessage.textContent =
            "Over budget! Remove some items.";

        budgetMessage.style.color = "red";

    }

    else{

        totalPrice.style.color = "green";

        budgetMessage.textContent =
            "You are within budget.";

        budgetMessage.style.color = "green";

    }

}

priceInputs.forEach(input => {

    input.addEventListener('input', updateTotal);

});