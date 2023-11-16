document.addEventListener("DOMContentLoaded", function () {
    const expenseForm = document.getElementById("expenseForm");
    const expenseList = document.getElementById("expenseList");
    const totalAmountElement = document.getElementById("totalAmount");

    let expenses = [];
    let totalAmount = 0;

    function addExpense() {
        const description = document.getElementById("expenseDescription").value;
        const amount = parseFloat(document.getElementById("expenseAmount").value);

        if (!description || isNaN(amount) || amount <= 0) {
            alert("Please enter a valid description and amount.");
            return;
        }

        const expense = {
            description: description,
            amount: amount,
            id: new Date().getTime(), // simple way to create a unique ID
        };

        expenses.push(expense);
        updateExpenseList();
        updateTotalAmount();

        // Clear input fields
        document.getElementById("expenseDescription").value = "";
        document.getElementById("expenseAmount").value = "";
    }

    function removeExpense(id) {
        expenses = expenses.filter(expense => expense.id !== id);
        updateExpenseList();
        updateTotalAmount();
    }

    function updateExpenseList() {
        expenseList.innerHTML = "";
        expenses.forEach(expense => {
            const expenseItem = document.createElement("div");
            expenseItem.classList.add("expenseItem");
            expenseItem.innerHTML = `
                <span>${expense.description}</span>
                <span>₹${expense.amount.toFixed(2)}</span>
                <button class="remove-button" data-id="${expense.id}">Remove</button>
            `;
            expenseList.appendChild(expenseItem);
        });
    }

    function updateTotalAmount() {
        totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);
        totalAmountElement.textContent = totalAmount.toFixed(2);
    }

    // Event delegation for the "Remove" button
    expenseList.addEventListener("click", function (event) {
        if (event.target.classList.contains("remove-button")) {
            const idToRemove = parseInt(event.target.getAttribute("data-id"));
            removeExpense(idToRemove);
        }
    });

    // Event listener for the "Add Expense" button
    expenseForm.addEventListener("click", function (event) {
        if (event.target.tagName === "BUTTON" && !event.target.classList.contains("remove-button")) {
            addExpense();
        }
    });
});
