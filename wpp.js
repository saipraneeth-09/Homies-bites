const cart = [];

function addToCart(name, price) {
  const itemIndex = cart.findIndex(item => item.name === name);
  
  if (itemIndex > -1) {
    cart[itemIndex].quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  updateCart();
}
function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");
  cartItems.innerHTML = "";
  let totalPrice = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    totalPrice += itemTotal;
    const listItem = document.createElement("li");
    listItem.textContent = `₹{item.name} - ₹{item.price} x ₹{item.quantity} = ₹{itemTotal}`;
    cartItems.appendChild(listItem);
  });

  totalPriceElement.textContent = totalPrice.toFixed(2);
}

function openPaymentModal() {
  const totalPrice = document.getElementById("total-price").textContent;
  document.getElementById("modal-total-price").textContent = totalPrice;
  document.getElementById("payment-modal").style.display = "flex";
}

function closePaymentModal() {
  document.getElementById("payment-modal").style.display = "none";
}

function confirmPayment() {
  const selectedPayment = document.querySelector('input[name="payment"]:checked');
  if (!selectedPayment) {
    alert("Please select a payment method.");
    return;
  }

  alert(`Thank you for your order! Payment method: ${selectedPayment.value}`);
  cart.length = 0; 
  updateCart();
  closePaymentModal();
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  

    alert(`Thank you, ${name}! Your message has been sent. We will contact you shortly at ${email}.`);
  
  
    document.getElementById("contact-form").reset();
  });
  