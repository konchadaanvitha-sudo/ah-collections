// ── YOUR WHATSAPP NUMBER — change 919876543210 to yours ──────
var WHATSAPP_NUMBER = "916304240589";

function getCart() {
  try { return JSON.parse(localStorage.getItem('ah_cart') || '[]'); }
  catch(e) { return []; }
}
function saveCart(cart) {
  localStorage.setItem('ah_cart', JSON.stringify(cart));
}

function addToCart(id, name, price, image) {
  var cart = getCart();
  var qty  = parseInt(document.getElementById('qty-' + id).textContent) || 0;
  if (qty === 0) {
    var btn = document.getElementById('acb-' + id);
    btn.textContent = 'Select quantity first!';
    btn.style.background = '#C0392B';
    setTimeout(function(){
      btn.textContent = 'Add to Cart';
      btn.style.background = '';
    }, 1800);
    return;
  }
  var existing = cart.find(function(i){ return i.id === id; });
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id:id, name:name, price:price, image:image, qty:qty });
  }
  saveCart(cart);
  updateCartBadge();
  showAddedFeedback(id);
}

function updateCartBadge() {
  var cart  = getCart();
  var total = cart.reduce(function(s,i){ return s + i.qty; }, 0);
  var el    = document.getElementById('cart-count');
  if (el) el.textContent = total;
}

function showAddedFeedback(id) {
  var btn = document.getElementById('acb-' + id);
  if (!btn) return;
  btn.textContent = '✓ Added!';
  btn.style.background = '#639922';
  setTimeout(function(){
    btn.textContent = 'Add to Cart';
    btn.style.background = '';
  }, 1200);
}

// ── RENDER CART PAGE ─────────────────────────────────────────
function renderCart() {
  var cart    = getCart();
  var wrapper = document.getElementById('cart-wrapper');
  var section = document.getElementById('checkout-section');
  if (!wrapper) return;
  updateCartBadge();

  if (cart.length === 0) {
    wrapper.innerHTML =
      '<div class="cart-empty">' +
        '<p>🛒 Your cart is empty</p>' +
        '<a href="shop.html" class="btn-gold">Continue Shopping</a>' +
      '</div>';
    if (section) section.style.display = 'none';
    return;
  }

  var itemsHtml = cart.map(function(item) {
    return '<div class="cart-item" id="ci-' + item.id + '">' +
      '<div class="cart-item-img"><img src="' + item.image + '" alt="' + item.name + '" onerror="this.style.display=\'none\'"/></div>' +
      '<div class="cart-item-info"><h4>' + item.name + '</h4><p>₹' + item.price + ' each</p></div>' +
      '<div class="cart-item-qty">' +
        '<button class="cq-btn" onclick="cartChangeQty(\'' + item.id + '\',-1)">−</button>' +
        '<div class="cq-num" id="cq-' + item.id + '">' + item.qty + '</div>' +
        '<button class="cq-btn" onclick="cartChangeQty(\'' + item.id + '\',1)">+</button>' +
      '</div>' +
      '<div style="font-size:14px;font-weight:700;color:var(--gold-dark);min-width:60px;text-align:right">₹<span id="cs-' + item.id + '">' + (item.price * item.qty) + '</span></div>' +
      '<div class="cart-item-remove" onclick="removeFromCart(\'' + item.id + '\')" title="Remove">✕</div>' +
    '</div>';
  }).join('');

  wrapper.innerHTML = itemsHtml;
  if (section) section.style.display = 'block';

  // Init bill
  var items = cart.reduce(function(s,i){ return s + i.price * i.qty; }, 0);
  document.getElementById('bill-items').textContent = items;
}

function cartChangeQty(id, delta) {
  var cart = getCart();
  var item = cart.find(function(i){ return i.id === id; });
  if (!item) return;
  item.qty += delta;
  if (item.qty < 1) { removeFromCart(id); return; }
  saveCart(cart);
  var qEl = document.getElementById('cq-' + id);
  var sEl = document.getElementById('cs-' + id);
  if (qEl) qEl.textContent = item.qty;
  if (sEl) sEl.textContent = item.price * item.qty;
  var items = cart.reduce(function(s,i){ return s + i.price * i.qty; }, 0);
  document.getElementById('bill-items').textContent = items;
  updateCartBadge();
  // recalc delivery if state already selected
  if (typeof updateDelivery === 'function') updateDelivery();
}

function removeFromCart(id) {
  var cart = getCart().filter(function(i){ return i.id !== id; });
  saveCart(cart);
  renderCart();
}

// ── WHATSAPP CHECKOUT WITH CUSTOMER DETAILS ──────────────────
function checkoutWhatsApp() {
  var name     = document.getElementById('cust-name').value.trim();
  var phone    = document.getElementById('cust-phone').value.trim();
  var address  = document.getElementById('cust-address').value.trim();
  var stateEl  = document.getElementById('cust-state');
  var stateTxt = stateEl.options[stateEl.selectedIndex].text;
  var stateVal = stateEl.value;
  var pincode  = document.getElementById('cust-pincode').value.trim();

  // Validation
  if (!name) { alert('Please enter your name.'); document.getElementById('cust-name').focus(); return; }
  if (!phone) { alert('Please enter your phone number.'); document.getElementById('cust-phone').focus(); return; }
  if (!address) { alert('Please enter your address.'); document.getElementById('cust-address').focus(); return; }
  if (!stateVal) { alert('Please select your state.'); document.getElementById('cust-state').focus(); return; }
  if (!pincode) { alert('Please enter your pincode.'); document.getElementById('cust-pincode').focus(); return; }

  var cart     = getCart();
  var delivery = (stateVal === 'ap' || stateVal === 'ts') ? 50 : 100;
  var items    = cart.reduce(function(s,i){ return s + i.price * i.qty; }, 0);
  var total    = items + delivery;

  var lines = cart.map(function(i) {
    return '• ' + i.name + ' × ' + i.qty + ' = ₹' + (i.price * i.qty);
  }).join('\n');

  var msg =
    '🛒 *New Order – AH Collections*\n\n' +
    '👤 *Customer Details*\n' +
    'Name: ' + name + '\n' +
    'Phone: ' + phone + '\n' +
    'Address: ' + address + '\n' +
    'State: ' + stateTxt + '\n' +
    'Pincode: ' + pincode + '\n\n' +
    '🛍️ *Items Ordered*\n' +
    lines + '\n\n' +
    '🧾 *Bill Summary*\n' +
    'Items Total: ₹' + items + '\n' +
    'Delivery Charges: ₹' + delivery + '\n' +
    '*Grand Total: ₹' + total + '*\n\n' +
    'Please send the payment QR code. Thank you! 🙏';

  window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg), '_blank');
}
