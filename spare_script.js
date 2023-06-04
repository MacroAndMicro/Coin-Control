
/*
let transactions = [];
let balance = 0;

function addTransaction() {
    const descriptionInput = document.getElementById('description');
    const amountInput = document.getElementById('amount');
    const typeInput = document.getElementById('type');

    const description = descriptionInput.value;
    const amount = parseFloat(amountInput.value);
    const type = typeInput.value;

    if (description.trim() === '' || isNaN(amount)) {
        alert('Please enter a valid description and amount.');
        return;
    }

    const transaction = {
        id: Date.now(),
        description,
        amount,
        type
    };

    transactions.push(transaction);

    updateTransactionList();
    updateBalance();

    descriptionInput.value = '';
    amountInput.value = '';
    typeInput.value = 'income';
}

function deleteTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);

    updateTransactionList();
    updateBalance();
}

function updateTransactionList() {
    const transactionList = document.getElementById('transactionList');
    transactionList.innerHTML = '';

    transactions.forEach(transaction => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${transaction.description}</span>
            <span>${transaction.amount}</span>
            <span>${transaction.type}</span>
            <button onclick="deleteTransaction(${transaction.id})">Delete</button>
        `;

        transactionList.appendChild(listItem);
    });
}

function updateBalance() {
    balance = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'income') {
            return acc + transaction.amount;
        } else if (transaction.type === 'expense') {
            return acc - transaction.amount;
        }
    }, 0);

    const balanceAmount = document.getElementById('balanceAmount');
    balanceAmount.textContent = balance.toFixed(2);
}
*/




/*
let transactions = [];
let balance = 0;

function addTransaction() {
    const descriptionInput = document.getElementById('description');
    const amountInput = document.getElementById('amount');

    const description = descriptionInput.value;
    const amount = parseFloat(amountInput.value);

    if (description.trim() === '' || isNaN(amount)) {
        alert('Please enter a valid description and amount.');
        return;
    }

    const transaction = {
        id: Date.now(),
        description,
        amount,
    };

    transactions.push(transaction);

    updateTransactionList();
    updateBalance();

    descriptionInput.value = '';
    amountInput.value = '';
}

function deleteTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);

    updateTransactionList();
    updateBalance();
}

function updateTransactionList() {
    const transactionList = document.getElementById('transactionList');
    transactionList.innerHTML = '';

    transactions.forEach(transaction => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${transaction.description}</span>
            <span>${transaction.amount}</span>
            <button onclick="deleteTransaction(${transaction.id})">Delete</button>
        `;

        transactionList.appendChild(listItem);
    });
}

function updateBalance() {
    balance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

    const balanceAmount = document.getElementById('balanceAmount');
    balanceAmount.textContent = balance.toFixed(2);
}
*/



/*
let transactions = [];
let balance = 0;

function addTransaction() {
    const descriptionInput = document.getElementById('description');
    const amountInput = document.getElementById('amount');
    const typeInput = document.getElementById('type');

    const description = descriptionInput.value;
    const amount = parseFloat(amountInput.value);
    const type = typeInput.value;

    if (description.trim() === '' || isNaN(amount)) {
        alert('Please enter a valid description and amount.');
        return;
    }

    const transaction = {
        id: Date.now(),
        description,
        amount: type === 'expense' ? -amount : amount,
    };

    transactions.push(transaction);

    updateTransactionList();
    updateBalance();

    descriptionInput.value = '';
    amountInput.value = '';
}

function deleteTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);

    updateTransactionList();
    updateBalance();
}

function updateTransactionList() {
    const transactionList = document.getElementById('transactionList');
    transactionList.innerHTML = '';

    transactions.forEach(transaction => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${transaction.description}</span>
            <span>${transaction.amount}</span>
            <button onclick="deleteTransaction(${transaction.id})">Delete</button>
        `;

        transactionList.appendChild(listItem);
    });
}

function updateBalance() {
    balance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

    const balanceAmount = document.getElementById('balanceAmount');
    balanceAmount.textContent = balance.toFixed(2);
}

function goToHomePage() {
    // Implement the logic to navigate to the home page
    console.log('Navigating to home page...');
}

function goToLogin() {
    // Implement the logic to navigate to the login page
    console.log('Navigating to login page...');
}

function goToSignup() {
    // Implement the logic to navigate to the signup page
    console.log('Navigating to signup page...');
}

function goToContact() {
    // Implement the logic to navigate to the contact us page
    console.log('Navigating to contact us page...');
}
*/







/*

ye mastt kaam karra tha


// Transaction object
function Transaction(description, amount, type) {
    this.description = description;
    this.amount = parseFloat(amount);
    this.type = type;
}

// Array to store transactions
const transactions = [];

// DOM elements
const transactionList = document.getElementById("transactionList");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const typeInput = document.getElementById("type");
const addTransactionBtn = document.getElementById("addTransaction");
const currentBalance = document.getElementById("currentBalance");

// Function to display transactions
function displayTransactions() {
    transactionList.innerHTML = "";

    transactions.forEach((transaction) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${transaction.description}: ${transaction.type === "income" ? "+" : "-"}$${transaction.amount.toFixed(2)}`;
        transactionList.appendChild(listItem);
    });
}

// Function to calculate and display the current balance
function calculateBalance() {
    let balance = 0;

    transactions.forEach((transaction) => {
        if (transaction.type === "income") {
            balance += transaction.amount;
        } else if (transaction.type === "expense") {
            balance -= transaction.amount;
        }
    });

    currentBalance.textContent = `$${balance.toFixed(2)}`;
}

// Event listener for add transaction button
addTransactionBtn.addEventListener("click", () => {
    const description = descriptionInput.value;
    const amount = amountInput.value;
    const type = typeInput.value;

    if (description.trim() === "" || amount.trim() === "") {
        alert("Please enter a description and amount.");
        return;
    }

    const transaction = new Transaction(description, amount, type);
    transactions.push(transaction);

    descriptionInput.value = "";
    amountInput.value = "";
    typeInput.selectedIndex = 0;

    displayTransactions();
    calculateBalance();
});

*/





/*

ufffffffffffff

// Transaction object
function Transaction(description, amount, type) {
    this.description = description;
    this.amount = parseFloat(amount);
    this.type = type;
}

// Array to store transactions
const transactions = [];

// DOM elements
const transactionList = document.getElementById("transactionList");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const typeInput = document.getElementById("type");
const addTransactionBtn = document.getElementById("addTransaction");
const currentBalance = document.getElementById("currentBalance");

// Function to display transactions
function displayTransactions() {
    transactionList.innerHTML = "";

    transactions.forEach((transaction, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${transaction.description}: ${transaction.type === "income" ? "+" : "-"}$${transaction.amount.toFixed(2)}`;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            deleteTransaction(index);
        });

        listItem.appendChild(deleteBtn);
        transactionList.appendChild(listItem);
    });
}

// Function to calculate and display the current balance
function calculateBalance() {
    let balance = 0;

    transactions.forEach((transaction) => {
        if (transaction.type === "income") {
            balance += transaction.amount;
        } else if (transaction.type === "expense") {
            balance -= transaction.amount;
        }
    });

    currentBalance.textContent = `$${balance.toFixed(2)}`;
}

// Function to delete a transaction
function deleteTransaction(index) {
    transactions.splice(index, 1);
    displayTransactions();
    calculateBalance();
}

// Event listener for add transaction button
addTransactionBtn.addEventListener("click", () => {
    const description = descriptionInput.value;
    const amount = amountInput.value;
    const type = typeInput.value;

    if (description.trim() === "" || amount.trim() === "") {
        alert("Please enter a description and amount.");
        return;
    }

    const transaction = new Transaction(description, amount, type);
    transactions.push(transaction);

    descriptionInput.value = "";
    amountInput.value = "";
    typeInput.selectedIndex = 0;

    displayTransactions();
    calculateBalance();
});
*/




/*

uffffffffffffffffffffffffffffffffffffffffffffffffffffffffff

// DOM elements
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const typeInput = document.getElementById("type");
const addTransactionBtn = document.getElementById("addTransaction");
const transactionList = document.getElementById("transactionList");
const currentBalance = document.getElementById("currentBalance");
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const loginPage = document.getElementById("loginPage");
const signupPage = document.getElementById("signupPage");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

// Transactions array to store transaction objects
let transactions = [];

// Event listener for Add Transaction button
addTransactionBtn.addEventListener("click", addTransaction);

// Event listener for Login button
loginBtn.addEventListener("click", () => {
    loginPage.style.display = "block";
    signupPage.style.display = "none";
});

// Event listener for Signup button
signupBtn.addEventListener("click", () => {
    signupPage.style.display = "block";
    loginPage.style.display = "none";
});

// Event listener for Login form submission
loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById("usernameInput").value;
    const password = document.getElementById("passwordInput").value;

    // Perform login validation here (e.g., check credentials)
    // Replace the following example logic with your own implementation
    if (username === "admin" && password === "password") {
        // Display the main finance tracker page
        loginPage.style.display = "none";
    } else {
        alert("Invalid username or password. Please try again.");
    }

    // Clear the login form inputs
    document.getElementById("usernameInput").value = "";
    document.getElementById("passwordInput").value = "";
});

// Event listener for Signup form submission
signupForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission

    const newUsername = document.getElementById("newUsernameInput").value;
    const newPassword = document.getElementById("newPasswordInput").value;

    // Perform signup logic here (e.g., create a new user)
    // Replace the following example logic with your own implementation
    if (newUsername && newPassword) {
        alert("Signup successful! Please login with your new credentials.");
        signupPage.style.display = "none";
    } else {
        alert("Signup failed. Please fill in all fields.");
    }

    // Clear the signup form inputs
    document.getElementById("newUsernameInput").value = "";
    document.getElementById("newPasswordInput").value = "";
});

// Function to add a new transaction
function addTransaction() {
    const description = descriptionInput.value;
    const amount = parseFloat(amountInput.value);
    const type = typeInput.value;

    if (description === "" || isNaN(amount)) {
        alert("Please enter a description and a valid amount.");
        return;
    }

    const transaction = {
        id: generateTransactionId(),
        description,
        amount,
        type,
    };

    transactions.push(transaction);

    updateTransactionList();
    updateBalance();

    // Clear the input fields
    descriptionInput.value = "";
    amountInput.value = "";
    typeInput.selectedIndex = 0;
}

// Function to generate a unique transaction ID
function generateTransactionId() {
    return Math.floor(Math.random() * 1000000);
}

// Function to delete a transaction
function deleteTransaction(id) {
    transactions = transactions.filter((transaction) => transaction.id !== id);

    updateTransactionList();
    updateBalance();
}

*/

