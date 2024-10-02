const customerName = document.getElementById('customerName');
const locationVal = document.getElementById('location');
const order = document.getElementById('order');
const submitBtn = document.getElementById('submit-btn');
const output = document.getElementById('output');


const validate = () => {
  if (customerName.value.length < 3 || customerName.value.length > 50) {
    alert('Name must be between 3 and 50 characters');
    return false
  } else if (order.value.length < 3 || order.value.length > 50) {
    alert('Order must be between 3 and 50 characters');
    return false;
  }
  // Concatenation vs template literals
  output.textContent = `${customerName.value} has submitted an order at ${new Date().toLocaleDateString()} for ${order.value} for pickup at ${locationVal.value}`;
  return true;
}

// For enter key - triggered when key is released
document.addEventListener('keyup', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    validate();
  }
});

// For click
submitBtn.addEventListener('click', validate);
