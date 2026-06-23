// ─── PRODUCT DATA ───────────────────────────────────────────
// TO ADD YOUR PHOTOS: put images in the /images/ folder
// then replace the "image" path below with the filename.
// Example: image: "images/chains/figaro.jpg"
// Set stock to 0 to show "Out of Stock" to customers.

const PRODUCTS = {
  chains: [
    { id:"c1", name:"Figaro Chain",       price:399, image:"images/chain1.jpg",    stock:10 },
    { id:"c2", name:"Box Chain",          price:449, image:"images/chain2.jpg",    stock:8  },
    { id:"c3", name:"Rope Chain",         price:499, image:"images/chain3.jpg",    stock:5  },
    { id:"c4", name:"Singapore Chain",    price:379, image:"images/chain4.jpg",    stock:12 },
    { id:"c5", name:"Cuban Link Chain",   price:549, image:"images/chain5.jpg",    stock:3  },
    { id:"c6", name:"Heart Pendant Chain",price:479, image:"images/chain6.jpg",    stock:7  },
  ],
  bracelets: [
    { id:"b1", name:"Slim Tennis Bracelet",  price:349, image:"images/brac1.jpg", stock:10 },
    { id:"b2", name:"Charm Bracelet",        price:429, image:"images/brac2.jpg", stock:6  },
    { id:"b3", name:"Gold Cuff Bracelet",    price:499, image:"images/brac3.jpg", stock:4  },
    { id:"b4", name:"Link Bracelet",         price:469, image:"images/brac4.jpg", stock:8  },
    { id:"b5", name:"Classic Bangle",        price:389, image:"images/brac5.jpg", stock:15 },
    { id:"b6", name:"Name Bracelet",         price:599, image:"images/brac6.jpg", stock:5  },
  ],
  earrings: [
    { id:"e1", name:"Gold Studs",       price:279, image:"images/ear1.jpg",  stock:20 },
    { id:"e2", name:"Drop Earrings",    price:349, image:"images/ear2.jpg",  stock:8  },
    { id:"e3", name:"Jhumkas",          price:429, image:"images/ear3.jpg",  stock:6  },
    { id:"e4", name:"Gold Hoops",       price:319, image:"images/ear4.jpg",  stock:12 },
    { id:"e5", name:"Chandelier Set",   price:549, image:"images/ear5.jpg",  stock:3  },
    { id:"e6", name:"Ear Cuffs",        price:299, image:"images/ear6.jpg",  stock:9  },
  ],
  bangles: [
    { id:"bg1", name:"Classic Red Thread",  price:299, image:"images/bangle1.jpg", stock:10 },
    { id:"bg2", name:"Bridal White Set",    price:599, image:"images/bangle2.jpg", stock:4  },
    { id:"bg3", name:"Festive Green Duo",   price:399, image:"images/bangle3.jpg", stock:7  },
    { id:"bg4", name:"Silk Thread Set",     price:349, image:"images/bangle4.jpg", stock:5  },
    { id:"bg5", name:"Stone Accent Bangle", price:449, image:"images/bangle5.jpg", stock:6  },
    { id:"bg6", name:"Multicolour Silk",    price:379, image:"images/bangle6.jpg", stock:8  },
  ]
};

// ─── LOAD STOCK FROM LOCAL STORAGE (admin overrides) ────────
function getStock(productId, defaultStock) {
  const saved = localStorage.getItem('stock_' + productId);
  return saved !== null ? parseInt(saved) : defaultStock;
}
function setStock(productId, qty) {
  localStorage.setItem('stock_' + productId, qty);
}

// ─── RENDER PRODUCTS ─────────────────────────────────────────
function renderProducts(cat, isAdmin) {
  const items = PRODUCTS[cat] || [];
  const grid  = document.getElementById('products-grid');
  if (!grid) return;

  grid.innerHTML = '';

  items.forEach(function(p) {
    const stock = getStock(p.id, p.stock);
    const outOfStock = stock <= 0;

    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
      <div class="product-img">
        <img src="${p.image}" alt="${p.name}"
          onerror="this.style.display='none';this.nextElementSibling.style.opacity='0.4'"/>
        <span class="ph-icon">${catIcon(cat)}</span>
        ${outOfStock ? '<div class="out-of-stock-badge"><span>Out of Stock</span></div>' : ''}
      </div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <div class="price">₹${p.price}</div>
        <div class="product-controls">
          <div class="qty-box">
            <button class="qty-btn" onclick="changeQty('${p.id}',-1)">−</button>
            <div class="qty-num" id="qty-${p.id}">1</div>
            <button class="qty-btn" onclick="changeQty('${p.id}',1)">+</button>
          </div>
          <button class="add-cart-btn" id="acb-${p.id}"
            onclick="addToCart('${p.id}','${p.name}',${p.price},'${p.image}')"
            ${outOfStock ? 'disabled' : ''}>
            ${outOfStock ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  // Admin stock controls
  if (isAdmin) renderAdminControls(items);
}

function catIcon(cat) {
  const icons = {chains:'📿',bracelets:'💛',earrings:'✨',bangles:'🪬'};
  return icons[cat] || '💎';
}

function changeQty(id, delta) {
  const el = document.getElementById('qty-' + id);
  let val = parseInt(el.textContent) + delta;
  if (val < 1) val = 1;
  if (val > 20) val = 20;
  el.textContent = val;
}

// ─── ADMIN STOCK CONTROLS ────────────────────────────────────
function renderAdminControls(items) {
  const container = document.getElementById('admin-stock-controls');
  if (!container) return;
  container.innerHTML = '';
  items.forEach(function(p) {
    const stock = getStock(p.id, p.stock);
    const row = document.createElement('div');
    row.className = 'stock-control-row';
    row.innerHTML = `
      <label>${p.name}</label>
      <input class="stock-input" type="number" min="0" value="${stock}" id="si-${p.id}"/>
      <button class="save-stock-btn" onclick="saveStock('${p.id}')">Save</button>
      <span id="ss-${p.id}" style="font-size:11px;color:green;display:none">✓ Saved</span>
    `;
    container.appendChild(row);
  });
}

function saveStock(id) {
  const val = parseInt(document.getElementById('si-' + id).value);
  setStock(id, isNaN(val) ? 0 : val);
  const msg = document.getElementById('ss-' + id);
  msg.style.display = 'inline';
  setTimeout(function(){ msg.style.display='none'; location.reload(); }, 800);
}
