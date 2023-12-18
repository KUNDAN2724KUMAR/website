let balance = 0;

function updateBalance() {
    document.getElementById("balance").innerText = "Balance: $" + balance.toFixed(2);
}

function deposit() {
    const amount = parseFloat(prompt("Enter the deposit amount:"));
    if (!isNaN(amount) && amount > 0) {
        balance += amount;
        updateBalance();
    } else {
        alert("Invalid amount. Please enter a valid number.");
    }
}

function withdraw() {
    const amount = parseFloat(prompt("Enter the withdrawal amount:"));
    if (!isNaN(amount) && amount > 0 && amount <= balance) {
        balance -= amount;
        updateBalance();
    } else {
        alert("Invalid amount or insufficient funds. Please enter a valid number.");
    }
}

updateBalance();


