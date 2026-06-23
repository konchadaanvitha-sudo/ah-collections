// ─── PRODUCT DATA ───────────────────────────────────────────
// TO ADD YOUR PHOTOS: put images in the /images/ folder
// then replace the "image" path below with the filename.
// Set stock to 0 to show "Out of Stock" to customers.
const PRODUCTS = {
  chains: [
    { id:"c1", name:"Figaro Chain",        price:399, image:"images/Chain1.jpeg",  stock:10 },
    { id:"c2", name:"Box Chain",           price:449, image:"images/Chain2.jpeg",  stock:8  },
    { id:"c3", name:"Rope Chain",          price:499, image:"images/chain3.jpeg",  stock:5  },
    { id:"c4", name:"Singapore Chain",     price:379, image:"images/Chain4.jpeg",  stock:12 },
    { id:"c5", name:"Cuban Link Chain",    price:549, image:"images/Chain5.jpeg",  stock:3  },
    { id:"c6", name:"Heart Pendant Chain", price:479, image:"images/chain6.jpeg",  stock:7  },
    { id:"c7", name:"Heart Pendant Chain", price:479, image:"images/chain7.jpeg",  stock:7  },
    { id:"c8", name:"Heart Pendant Chain", price:479, image:"images/chain8.jpeg",  stock:7  },
    { id:"c9", name:"Heart Pendant Chain", price:479, image:"images/chain9.jpeg",  stock:7  },
    { id:"c10", name:"Heart Pendant Chain", price:479, image:"images/chain10.jpeg",  stock:7  },
    { id:"c11", name:"Heart Pendant Chain", price:479, image:"images/chain11.jpeg",  stock:7  },
    { id:"c12", name:"Heart Pendant Chain", price:479, image:"images/chain12.jpeg",  stock:7  },
    { id:"c13", name:"Heart Pendant Chain", price:479, image:"images/chain13.jpeg",  stock:7  },
    { id:"c14", name:"Heart Pendant Chain", price:479, image:"images/chain14.jpeg",  stock:7  },
    { id:"c15", name:"Heart Pendant Chain", price:479, image:"images/chain15.jpeg",  stock:7  },
    { id:"c16", name:"Heart Pendant Chain", price:479, image:"images/chain16.jpeg",  stock:7  },
    { id:"c17", name:"Heart Pendant Chain", price:479, image:"images/chain17.jpeg",  stock:7  },
    { id:"c18", name:"Heart Pendant Chain", price:479, image:"images/chain18.jpeg",  stock:7  },
    { id:"c19", name:"Heart Pendant Chain", price:479, image:"images/chain19.jpeg",  stock:7  },
    { id:"c20", name:"Heart Pendant Chain", price:479, image:"images/chain20.jpeg",  stock:7  },
    { id:"c21", name:"Heart Pendant Chain", price:479, image:"images/chain21.jpeg",  stock:7  },
    { id:"c22", name:"Heart Pendant Chain", price:479, image:"images/chain22.jpeg",  stock:7  },
    { id:"c23", name:"Heart Pendant Chain", price:479, image:"images/chain23.jpeg",  stock:7  },
    { id:"c24", name:"Heart Pendant Chain", price:479, image:"images/chain24.jpeg",  stock:7  },
    { id:"c25", name:"Heart Pendant Chain", price:479, image:"images/chain25.jpeg",  stock:7  },
    { id:"c26", name:"Heart Pendant Chain", price:479, image:"images/chain26.jpeg",  stock:7  },
    { id:"c27", name:"Heart Pendant Chain", price:479, image:"images/chain27.jpeg",  stock:7  },
    { id:"c28", name:"Heart Pendant Chain", price:479, image:"images/chain28.jpeg",  stock:7  },
    
  ],
  bracelets: [
    { id:"b1", name:"Slim Tennis Bracelet", price:349, image:"images/bracelet1.jpeg", stock:10 },
    { id:"b2", name:"Charm Bracelet",       price:429, image:"images/bracelet2.jpeg", stock:6  },
    { id:"b3", name:"Gold Cuff Bracelet",   price:499, image:"images/bracelet3.jpeg", stock:4  },
    { id:"b4", name:"Link Bracelet",        price:469, image:"images/bracelet4.jpeg", stock:8  },
    { id:"b5", name:"Classic Bangle",       price:389, image:"images/bracelet5.jpeg", stock:15 },
    { id:"b6", name:"Name Bracelet",        price:599, image:"images/bracelet6.jpeg", stock:5  },
    { id:"b7", name:"Name Bracelet",        price:599, image:"images/bracelet7.jpeg", stock:5  },
    { id:"b8", name:"Name Bracelet",        price:599, image:"images/bracelet8.jpeg", stock:5  },
    { id:"b9", name:"Name Bracelet",        price:599, image:"images/bracelet9.jpeg", stock:5  },
    { id:"b10", name:"Name Bracelet",        price:599, image:"images/bracelet10.jpeg", stock:5  },
    { id:"b11", name:"Name Bracelet",        price:599, image:"images/bracelet11.jpeg", stock:5  },
    { id:"b12", name:"Name Bracelet",        price:599, image:"images/bracelet12.jpeg", stock:5  },
    { id:"b13", name:"Name Bracelet",        price:599, image:"images/bracelet13.jpeg", stock:5  },
    { id:"b14", name:"Name Bracelet",        price:599, image:"images/bracelet14.jpeg", stock:5  },
    { id:"b14", name:"Name Bracelet",        price:599, image:"images/kada1.jpeg", stock:5  },
    { id:"b14", name:"Name Bracelet",        price:599, image:"images/kada2.jpeg", stock:5  },
    { id:"b14", name:"Name Bracelet",        price:599, image:"images/kada3.jpeg", stock:5  },
    { id:"b14", name:"Name Bracelet",        price:599, image:"images/kada4.jpeg", stock:5  },
    { id:"b14", name:"Name Bracelet",        price:599, image:"images/kada5.jpeg", stock:5  },
    { id:"b14", name:"Name Bracelet",        price:599, image:"images/kada6.jpeg", stock:5  },
    { id:"b14", name:"Name Bracelet",        price:599, image:"images/kada7.jpeg", stock:5  },
    { id:"b14", name:"Name Bracelet",        price:599, image:"images/kada8.jpeg", stock:5  },
  ],
  earrings: [
    { id:"e1", name:"Gold Studs",     price:279, image:"images/earrings1.jpeg", stock:20 },
    { id:"e2", name:"Drop Earrings",  price:349, image:"images/earrings2.jpeg", stock:8  },
    { id:"e3", name:"Jhumkas",        price:429, image:"images/earrings3.jpeg", stock:6  },
    { id:"e4", name:"Gold Hoops",     price:319, image:"images/earrings4.jpeg", stock:12 },
    { id:"e5", name:"Chandelier Set", price:549, image:"images/earrings5.jpeg", stock:3  },
    { id:"e6", name:"Ear Cuffs",      price:299, image:"images/earrings6.jpeg", stock:9  },
    { id:"e6", name:"Ear Cuffs",      price:299, image:"images/earrings7.jpeg", stock:9  },
    { id:"e6", name:"Ear Cuffs",      price:299, image:"images/earrings8.jpeg", stock:9  },
  ],
  bangles: [
    { id:"bg1", name:"Classic Red Thread",  price:299, image:"images/bangles1.jpeg", stock:10 },
    { id:"bg2", name:"Bridal White Set",    price:599, image:"images/bangles2.jpeg", stock:4  },
    { id:"bg3", name:"Festive Green Duo",   price:399, image:"images/bangles3.jpeg", stock:7  },
    { id:"bg4", name:"Silk Thread Set",     price:349, image:"images/bangles4.jpeg", stock:5  },
    { id:"bg5", name:"Stone Accent Bangle", price:449, image:"images/bangles5.jpeg", stock:6  },
  ]
};

// ─── STOCK: saved by admin via stock.html ─────────────────────
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

// qty starts at 0; + makes it 1, − won't go below 0
function changeQty(id, delta) {
  var el  = document.getElementById('qty-' + id);
  var val = parseInt(el.textContent) + delta;
  if (val < 0) val = 0;
  if (val > 20) val = 20;
  el.textContent = val;
}
