// ─── PRODUCT DATA ───────────────────────────────────────────
// Photos are in the ROOT folder (same level as index.html)
// Set stock to 0 to show "Out of Stock" to customers.

const PRODUCTS = {
  chains: [
    { id:"c1",  name:"Chain 1",  price:399, image:"Chain1.jpeg",  stock:10 },
    { id:"c2",  name:"Chain 2",  price:399, image:"Chain2.jpeg",  stock:10 },
    { id:"c3",  name:"Chain 3",  price:399, image:"chain3.jpeg",  stock:10 },
    { id:"c4",  name:"Chain 4",  price:399, image:"Chain4.jpeg",  stock:10 },
    { id:"c5",  name:"Chain 5",  price:399, image:"Chain5.jpeg",  stock:10 },
    { id:"c6",  name:"Chain 6",  price:399, image:"chain6.jpeg",  stock:10 },
    { id:"c7",  name:"Chain 7",  price:399, image:"chain7.jpeg",  stock:10 },
    { id:"c8",  name:"Chain 8",  price:399, image:"chain8.jpeg",  stock:10 },
    { id:"c9",  name:"Chain 9",  price:399, image:"chain9.jpeg",  stock:10 },
    { id:"c10", name:"Chain 10", price:399, image:"chain10.jpeg", stock:10 },
    { id:"c11", name:"Chain 11", price:399, image:"chain11.jpeg", stock:10 },
    { id:"c12", name:"Chain 12", price:399, image:"chain12.jpeg", stock:10 },
    { id:"c13", name:"Chain 13", price:399, image:"chain13.jpeg", stock:10 },
    { id:"c14", name:"Chain 14", price:399, image:"chain14.jpeg", stock:10 },
    { id:"c15", name:"Chain 15", price:399, image:"chain15.jpeg", stock:10 },
    { id:"c16", name:"Chain 16", price:399, image:"chain16.jpeg", stock:10 },
    { id:"c17", name:"Chain 17", price:399, image:"chain17.jpeg", stock:10 },
    { id:"c18", name:"Chain 18", price:399, image:"chain18.jpeg", stock:10 },
    { id:"c19", name:"Chain 19", price:399, image:"chain19.jpeg", stock:10 },
    { id:"c20", name:"Chain 20", price:399, image:"chain20.jpeg", stock:10 },
    { id:"c21", name:"Chain 21", price:399, image:"chain21.jpeg", stock:10 },
    { id:"c22", name:"Chain 22", price:399, image:"chain22.jpeg", stock:10 },
    { id:"c23", name:"Chain 23", price:399, image:"chain23.jpeg", stock:10 },
    { id:"c24", name:"Chain 24", price:399, image:"chain24.jpeg", stock:10 },
    { id:"c25", name:"Chain 25", price:399, image:"chain25.jpeg", stock:10 },
    { id:"c26", name:"Chain 26", price:399, image:"chain26.jpeg", stock:10 },
    { id:"c27", name:"Chain 27", price:399, image:"chain27.jpeg", stock:10 },
    { id:"c28", name:"Chain 28", price:399, image:"chain28.jpeg", stock:10 },
  ],
  bracelets: [
    { id:"b1",  name:"Bracelet 1",  price:349, image:"bracelet1.jpeg",  stock:10 },
    { id:"b2",  name:"Bracelet 2",  price:349, image:"bracelet2.jpeg",  stock:10 },
    { id:"b3",  name:"Bracelet 3",  price:349, image:"bracelet3.jpeg",  stock:10 },
    { id:"b4",  name:"Bracelet 4",  price:349, image:"bracelet4.jpeg",  stock:10 },
    { id:"b5",  name:"Bracelet 5",  price:349, image:"bracelet5.jpeg",  stock:10 },
    { id:"b6",  name:"Bracelet 6",  price:349, image:"bracelet6.jpeg",  stock:10 },
    { id:"b7",  name:"Bracelet 7",  price:349, image:"bracelet7.jpeg",  stock:10 },
    { id:"b8",  name:"Bracelet 8",  price:349, image:"bracelet8.jpeg",  stock:10 },
    { id:"b9",  name:"Bracelet 9",  price:349, image:"bracelet9.jpeg",  stock:10 },
    { id:"b10", name:"Bracelet 10", price:349, image:"bracelet10.jpeg", stock:10 },
    { id:"b11", name:"Bracelet 11", price:349, image:"bracelet11.jpeg", stock:10 },
    { id:"b12", name:"Bracelet 12", price:349, image:"bracelet12.jpeg", stock:10 },
    { id:"b13", name:"Bracelet 13", price:349, image:"bracelet13.jpeg", stock:10 },
    { id:"b14", name:"Bracelet 14", price:349, image:"bracelet14.jpeg", stock:10 },
    { id:"b15", name:"Kada 1",      price:349, image:"kada1.jpeg",      stock:10 },
    { id:"b16", name:"Kada 2",      price:349, image:"kada2.jpeg",      stock:10 },
    { id:"b17", name:"Kada 3",      price:349, image:"kada3.jpeg",      stock:10 },
    { id:"b18", name:"Kada 4",      price:349, image:"kada4.jpeg",      stock:10 },
    { id:"b19", name:"Kada 5",      price:349, image:"kada5.jpeg",      stock:10 },
    { id:"b20", name:"Kada 6",      price:349, image:"kada6.jpeg",      stock:10 },
    { id:"b21", name:"Kada 7",      price:349, image:"kada7.jpeg",      stock:10 },
    { id:"b22", name:"Kada 8",      price:349, image:"kada8.jpeg",      stock:10 },
  ],
  earrings: [
    { id:"e1", name:"Earrings 1", price:279, image:"earrings1.jpeg", stock:20 },
    { id:"e2", name:"Earrings 2", price:279, image:"earrings2.jpeg", stock:20 },
    { id:"e3", name:"Earrings 3", price:279, image:"earrings3.jpeg", stock:20 },
    { id:"e4", name:"Earrings 4", price:279, image:"earrings4.jpeg", stock:20 },
    { id:"e5", name:"Earrings 5", price:279, image:"earrings5.jpeg", stock:20 },
    { id:"e6", name:"Earrings 6", price:279, image:"earrings6.jpeg", stock:20 },
    { id:"e7", name:"Earrings 7", price:279, image:"earrings7.jpeg", stock:20 },
    { id:"e8", name:"Earrings 8", price:279, image:"earrings8.jpeg", stock:20 },
  ],
  bangles: [
    { id:"bg1", name:"Thread Bangle 1", price:299, image:"bangles1.jpeg", stock:10 },
    { id:"bg2", name:"Thread Bangle 2", price:299, image:"bangles2.jpeg", stock:10 },
    { id:"bg3", name:"Thread Bangle 3", price:299, image:"bangles3.jpeg", stock:10 },
    { id:"bg4", name:"Thread Bangle 4", price:299, image:"bangles4.jpeg", stock:10 },
    { id:"bg5", name:"Thread Bangle 5", price:299, image:"bangles5.jpeg", stock:10 },
    { id:"bg6", name:"Thread Bangle 6", price:299, image:"Bangles5.jpeg", stock:10 },
  ]
};

// ─── STOCK ────────────────────────────────────────────────────
function getStock(productId, defaultStock) {
  var saved = localStorage.getItem('stock_' + productId);
  return saved !== null ? parseInt(saved) : defaultStock;
}
function setStock(productId, qty) {
  localStorage.setItem('stock_' + productId, qty);
}

// ─── RENDER PRODUCTS ─────────────────────────────────────────
function renderProducts(cat) {
  var items = PRODUCTS[cat] || [];
  var grid  = document.getElementById('products-grid');
  if (!grid) return;
  grid.innerHTML = '';

  items.forEach(function(p) {
    var stock      = getStock(p.id, p.stock);
    var outOfStock = stock <= 0;

    var card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML =
      '<div class="product-img">' +
        '<img src="' + p.image + '" alt="' + p.name + '" onerror="this.style.display=\'none\';this.nextElementSibling.style.opacity=\'0.35\'"/>' +
        '<span class="ph-icon">' + catIcon(cat) + '</span>' +
        (outOfStock ? '<div class="out-of-stock-badge"><span>Out of Stock</span></div>' : '') +
      '</div>' +
      '<div class="product-info">' +
        '<h3>' + p.name + '</h3>' +
        '<div class="price">₹' + p.price + '</div>' +
        '<div class="product-controls">' +
          '<div class="qty-box">' +
            '<button class="qty-btn" onclick="changeQty(\'' + p.id + '\',-1)">−</button>' +
            '<div class="qty-num" id="qty-' + p.id + '">0</div>' +
            '<button class="qty-btn" onclick="changeQty(\'' + p.id + '\',1)">+</button>' +
          '</div>' +
          '<button class="add-cart-btn" id="acb-' + p.id + '"' +
            ' onclick="addToCart(\'' + p.id + '\',\'' + p.name + '\',' + p.price + ',\'' + p.image + '\')"' +
            (outOfStock ? ' disabled' : '') + '>' +
            (outOfStock ? 'Out of Stock' : 'Add to Cart') +
          '</button>' +
        '</div>' +
      '</div>';
    grid.appendChild(card);
  });
}

function catIcon(cat) {
  var icons = {chains:'📿', bracelets:'💛', earrings:'✨', bangles:'🪬'};
  return icons[cat] || '💎';
}

function changeQty(id, delta) {
  var el  = document.getElementById('qty-' + id);
  var val = parseInt(el.textContent) + delta;
  if (val < 0) val = 0;
  if (val > 20) val = 20;
  el.textContent = val;
}
