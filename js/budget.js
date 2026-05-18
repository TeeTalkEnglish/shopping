const checkboxes = document.querySelectorAll('.item-check');

const priceInputs = document.querySelectorAll('.price-input');

const totalPrice = document.getElementById('totalPrice');

const budgetMessage = document.getElementById('budgetMessage');

const budgetLimit = 120;

function updateTotal() {

    let total = 0;

    checkboxes.forEach((box, index) => {

        if (box.checked) {

            const value =
                Number(priceInputs[index].value) || 0;

            total += value;

        }

    });

    totalPrice.textContent = total.toFixed(2);

    if (total > budgetLimit) {

        totalPrice.style.color = "red";

        budgetMessage.textContent =
            "Over budget! Remove some items.";

        budgetMessage.style.color = "red";

    } else {

        totalPrice.style.color = "green";

        budgetMessage.textContent =
            "You are within budget.";

        budgetMessage.style.color = "green";

    }

}

checkboxes.forEach(box => {

    box.addEventListener('change', updateTotal);

});

priceInputs.forEach(input => {

    input.addEventListener('input', updateTotal);

});