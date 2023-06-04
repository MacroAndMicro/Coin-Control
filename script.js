

// Get form elements
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const typeInput = document.getElementById('type');
const addTransactionButton = document.getElementById('addTransaction');

// Get transaction list element
const transactionList = document.getElementById('transactionList');

// Get current balance element
const currentBalanceElement = document.getElementById('currentBalance');

// Initialize transactions array
let transactions = [];

// Function to update the transaction list
function updateTransactionList() {
  // Clear the transaction list
  transactionList.innerHTML = '';

  // Update the transaction list with the transactions array
  transactions.forEach(function(transaction, index) {
    const listItem = document.createElement('li');
    listItem.classList.add(transaction.type);
    
    const transactionInfo = document.createElement('div');
    transactionInfo.classList.add('transactionInfo');
    
    const description = document.createElement('span');
    description.innerText = transaction.description;
    
    const amount = document.createElement('span');
    amount.innerText = transaction.type === 'income' ? `+$${transaction.amount.toFixed(2)}` : `-$${transaction.amount.toFixed(2)}`;
    
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteTransaction');
    deleteButton.innerText = 'Delete';
    
    transactionInfo.appendChild(description);
    transactionInfo.appendChild(amount);
    listItem.appendChild(transactionInfo);
    listItem.appendChild(deleteButton);
    
    // Add event listener to delete button
    deleteButton.addEventListener('click', function() {
      deleteTransaction(index);
    });
    
    // Append the transaction to the transaction list
    transactionList.appendChild(listItem);
  });
}

// Function to calculate the current balance
function calculateCurrentBalance() {
  let balance = 0;

  transactions.forEach(function(transaction) {
    if (transaction.type === 'income') {
      balance += transaction.amount;
    } else {
      balance -= transaction.amount;
    }
  });

  // Update the current balance element
  currentBalanceElement.innerText = `$${balance.toFixed(2)}`;
}

// Function to add a transaction
function addTransaction() {
  const description = descriptionInput.value;
  const amount = parseFloat(amountInput.value);
  const type = typeInput.value;

  // Validate the input
  if (description === '' || isNaN(amount)) {
    alert('Please enter a valid description and amount.');
    return;
  }

  // Create a new transaction object
  const transaction = {
    description,
    amount,
    type
  };

  // Add the transaction to the transactions array
  transactions.push(transaction);

  // Update the transaction list and current balance
  updateTransactionList();
  calculateCurrentBalance();

  // Reset the form
  descriptionInput.value = '';
  amountInput.value = '';
  typeInput.value = 'income';
}

// Function to delete a transaction
function deleteTransaction(index) {
  // Remove the transaction from the transactions array
  transactions.splice(index, 1);

  // Update the transaction list and current balance
  updateTransactionList();
  calculateCurrentBalance();
}

// Add event listener to the add transaction button
addTransactionButton.addEventListener('click', addTransaction);
