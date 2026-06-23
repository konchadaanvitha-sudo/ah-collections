// ─── CART STORAGE ────────────────────────────────────────────
// YOUR WHATSAPP NUMBER — change this to your number with country code
var WHATSAPP_NUMBER = "916304240589"; // India +91, replace with your number

function getCart() {
  try {
    return JSON.parse(localStorage.getItem('ah_cart') || '[]');
  } catch(e) { return []; }
}

function saveCart(cart) {
  localStorage.setItem('ah_cart', JSON.stringify(cart));
}

function addToCart(id, name, price, image) {
  var cart = getCart();
  var qty  = parseInt(document.getElementById('qty-' + id).textContent) || 1;
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
  var orig = btn.textContent;
  btn.textContent = '✓ Added!';
  btn.style.background = '#639922';
  setTimeout(function(){
    btn.textContent = orig;
    btn.style.background = '';
  }, 1200);
}

// ─── RENDER CART PAGE ────────────────────────────────────────
function renderCart() {
  var cart    = getCart();
  var wrapper = document.getElementById('cart-wrapper');
  if (!wrapper) return;

  updateCartBadge();

  if (cart.length === 0) {
    wrapper.innerHTML = `
      <div class="cart-empty">
        <p>🛒 Your cart is empty</p>
        <a href="shop.html" class="btn-gold">Continue Shopping</a>
      </div>`;
    return;
  }

  var total = cart.reduce(function(s,i){ return s + i.price * i.qty; }, 0);

  var itemsHtml = cart.map(function(item) {
    return `
      <div class="cart-item" id="ci-${item.id}">
        <div class="cart-item-img">
          <img src="${item.image}" alt="${item.name}"
            onerror="this.style.display='none'"/>
        </div>
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p>₹${item.price} each</p>
        </div>
        <div class="cart-item-qty">
          <button class="cq-btn" onclick="cartChangeQty('${item.id}',-1)">−</button>
          <div class="cq-num" id="cq-${item.id}">${item.qty}</div>
          <button class="cq-btn" onclick="cartChangeQty('${item.id}',1)">+</button>
        </div>
        <div style="font-size:14px;font-weight:700;color:var(--gold-dark);min-width:60px;text-align:right">
          ₹<span id="cs-${item.id}">${item.price * item.qty}</span>
        </div>
        <div class="cart-item-remove" onclick="removeFromCart('${item.id}')" title="Remove">✕</div>
      </div>`;
  }).join('');

  wrapper.innerHTML = `
    ${itemsHtml}
    <div class="cart-summary">
      <div class="total">Total: <span>₹<span id="cart-total">${total}</span></span></div>
      <button class="whatsapp-btn" onclick="checkoutWhatsApp()">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        Order via WhatsApp
      </button>
      <p style="font-size:11px;color:#8B7040;text-align:center;margin-top:10px;line-height:1.5">
        We'll send you the payment QR code on WhatsApp after receiving your order.
      </p>
    </div>`;
}

function cartChangeQty(id, delta) {
  var cart = getCart();
  var item = cart.find(function(i){ return i.id === id; });
  if (!item) return;
  item.qty += delta;
  if (item.qty < 1) {
    removeFromCart(id);
    return;
  }
  saveCart(cart);
  // update UI without full re-render
  var qEl = document.getElementById('cq-' + id);
  var sEl = document.getElementById('cs-' + id);
  var tEl = document.getElementById('cart-total');
  if (qEl) qEl.textContent = item.qty;
  if (sEl) sEl.textContent = item.price * item.qty;
  var newTotal = cart.reduce(function(s,i){ return s + i.price * i.qty; }, 0);
  if (tEl) tEl.textContent = newTotal;
  updateCartBadge();
}

function removeFromCart(id) {
  var cart = getCart().filter(function(i){ return i.id !== id; });
  saveCart(cart);
  renderCart();
}

// ─── WHATSAPP CHECKOUT ───────────────────────────────────────
function checkoutWhatsApp() {
  var cart = getCart();
  if (cart.length === 0) return;

  var lines = cart.map(function(i) {
    return "• " + i.name + " × " + i.qty + " = ₹" + (i.price * i.qty);
  });
  var total = cart.reduce(function(s,i){ return s + i.price * i.qty; }, 0);

  var msg =
    "🛒 *New Order – AH Collections*\n\n" +
    lines.join("\n") +
    "\n\n*Total: ₹" + total + "*\n\n" +
    "Please send me the payment QR code. Thank you! 🙏";

  var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg);
  window.open(url, '_blank');
}
