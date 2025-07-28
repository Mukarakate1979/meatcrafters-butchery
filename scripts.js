document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  const name = data.get('name');
  const email = data.get('email');
  const phone = data.get('phone');
  const product = data.get('product');
  const qty = data.get('quantity');
  const instr = data.get('instructions') || '';

  const subject = encodeURIComponent(`Order: ${product} x${qty}kg from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n` +
    `Product: ${product}\nQuantity: ${qty} kg\nInstructions: ${instr}`
  );
  const mailto = `mailto:info@meatcrafters.example.com?subject=${subject}&body=${body}`;

  const waNumber = '263710000000';
  const waMessage = encodeURIComponent(
    `Hello MeatCrafters, I'd like to order:\n` +
    `Product: ${product}\nQuantity: ${qty} kg\nName: ${name}\nPhone: ${phone}\nInstructions: ${instr}`
  );
  const whatsappUrl = `https://wa.me/${waNumber}?text=${waMessage}`;

  window.open(mailto, '_blank');
  window.open(whatsappUrl, '_blank');
  alert('Your order is being prepared! Email and WhatsApp windows should open.');
  form.reset();
});
