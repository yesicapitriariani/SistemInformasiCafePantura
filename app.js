/**
 * KEDAI KOPI PANTURA - INTERACTIVE JAVASCRIPT
 * Full-featured: Cart, WhatsApp Checkout, Menu Filtering, Search,
 * Table Reservation, Interactive Reviews, Live Hours, and Web Audio Ambience.
 */

// ==========================================
// 1. DATA MENU KATALOG
// ==========================================
const MENU_DATA = [
  // Signature Coffee
  {
    id: 1,
    name: "Es Kopi Susu Pantura",
    category: "signature",
    price: 22000,
    rating: 4.9,
    reviews: 340,
    tag: "Best Seller",
    desc: "Double shot espresso blend Pantura dipadu susu murni gurih dan gula aren kelapa organik murni.",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80",
    hasTemp: true
  },
  {
    id: 2,
    name: "Espresso Tonic Pantura",
    category: "signature",
    price: 28000,
    rating: 4.8,
    reviews: 120,
    tag: "Signature",
    desc: "Single origin espresso segar dituangkan di atas sparkling tonic water dengan sentuhan citrus lemon.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
    hasTemp: false
  },
  {
    id: 3,
    name: "Aren Cremoso Macchiato",
    category: "signature",
    price: 26000,
    rating: 4.9,
    reviews: 195,
    tag: "Favorit",
    desc: "Espresso dark roast dengan lapisan cold foam tebal dan aroma karamel gula aren yang lembut.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80",
    hasTemp: true
  },
  {
    id: 4,
    name: "Sea Salt Caramel Latte",
    category: "signature",
    price: 29000,
    rating: 4.9,
    reviews: 210,
    tag: "Chef Pick",
    desc: "Paduan manis gurih salted caramel artisan dengan steamed milk halus dan double ristretto.",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80",
    hasTemp: true
  },

  // Manual Brew
  {
    id: 5,
    name: "V60 Gayo Winey Process",
    category: "manual",
    price: 32000,
    rating: 5.0,
    reviews: 88,
    tag: "Specialty",
    desc: "Biji arabika Gayo dengan fermentasi wine process menghasilkan aroma anggur, plum, dan aftertaste manis.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80",
    hasTemp: true
  },
  {
    id: 6,
    name: "Japanese Iced Flores Bajawa",
    category: "manual",
    price: 30000,
    rating: 4.8,
    reviews: 64,
    tag: "Segar",
    desc: "Manual brew V60 yang langsung diseduh di atas es batu murni, berkarakter floral dengan sentuhan dark cocoa.",
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=600&q=80",
    hasTemp: false
  },
  {
    id: 7,
    name: "Aeropress Mandheling Gold",
    category: "manual",
    price: 27000,
    rating: 4.7,
    reviews: 52,
    tag: "Bold",
    desc: "Body tebal, aroma rempah bumi yang khas, dan keasaman rendah yang nyaman di lambung.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
    hasTemp: true
  },

  // Non-Coffee
  {
    id: 8,
    name: "Matcha Ceremonial Latte",
    category: "non-coffee",
    price: 27000,
    rating: 4.9,
    reviews: 230,
    tag: "Favorit",
    desc: "Bubuk matcha murni dari Uji, Jepang, dikocok tradisional dengan fresh milk creamy yang seimbang.",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80",
    hasTemp: true
  },
  {
    id: 9,
    name: "Artisan Dark Chocolate 70%",
    category: "non-coffee",
    price: 25000,
    rating: 4.8,
    reviews: 140,
    tag: "Cozy",
    desc: "Cokelat hitam single origin lokal Jawa Timur dengan rasa pahit manis yang kaya dan menenangkan.",
    image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=600&q=80",
    hasTemp: true
  },
  {
    id: 10,
    name: "Earl Grey Peach Sparkler",
    category: "non-coffee",
    price: 23000,
    rating: 4.7,
    reviews: 95,
    tag: "Fresh",
    desc: "Seduhan teh Earl Grey aromatik berpadu sari buah persik manis dan soda yang menyegarkan dahaga.",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80",
    hasTemp: false
  },

  // Pastry & Bakery
  {
    id: 11,
    name: "Almond Croissant Toast",
    category: "pastry",
    price: 28000,
    rating: 5.0,
    reviews: 310,
    tag: "Best Seller",
    desc: "Croissant berlapis renyah dengan isian frangipane almond cream dan taburan almond panggang.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
    hasTemp: false
  },
  {
    id: 12,
    name: "Basque Burnt Cheesecake",
    category: "pastry",
    price: 32000,
    rating: 4.9,
    reviews: 180,
    tag: "Dessert",
    desc: "Kue keju panggang ala Spanyol dengan kerak karamel khas dan tekstur dalam yang meleleh lembut.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80",
    hasTemp: false
  },
  {
    id: 13,
    name: "Warm Cinnamon Roll Glaze",
    category: "pastry",
    price: 24000,
    rating: 4.8,
    reviews: 115,
    tag: "Fresh Baked",
    desc: "Roti gulung kayu manis hangat dengan topping lelehan cream cheese manis legit.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
    hasTemp: false
  },

  // Main Course & Snacks
  {
    id: 14,
    name: "Nasi Goreng Spesial Pantura",
    category: "meals",
    price: 35000,
    rating: 4.9,
    reviews: 420,
    tag: "Kenyang",
    desc: "Nasi goreng bumbu rempah smoky khas pesisir dengan sate ayam, telur mata sapi, kerupuk udang & acar.",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80",
    hasTemp: false
  },
  {
    id: 15,
    name: "Spaghetti Aglio Olio Smoked Beef",
    category: "meals",
    price: 34000,
    rating: 4.8,
    reviews: 160,
    tag: "Italian",
    desc: "Pasta al dente ditumis dengan minyak zaitun, bawang putih renyah, cabai kering, dan potongan daging asap.",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80",
    hasTemp: false
  },
  {
    id: 16,
    name: "Truffle Fries with Parmesan",
    category: "meals",
    price: 23000,
    rating: 4.8,
    reviews: 290,
    tag: "Snack",
    desc: "Kentang goreng renyah disiram minyak truffle aromatik dan taburan keju parmesan impor gurih.",
    image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
    hasTemp: false
  }
];

// ==========================================
// 2. STATE APLIKASI
// ==========================================
let cart = [];
let activeCategory = "all";
let searchQuery = "";
let discountPercent = 0;
let appliedCouponCode = "";
let orderType = "dine-in"; // 'dine-in' or 'take-away'

// ==========================================
// 3. INISIALISASI SAAT DOM READY
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initOperationalHours();
  renderMenu();
  setupEventListeners();
  loadCartFromStorage();
  initAmbienceSound();
});

// Format Rupiah
function formatRupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
  }).format(number);
}

// Toast Notifikasi Cepat
function showToast(message) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>☕</span> <span>${message}</span>`;
  toast.classList.add("is-shown");
  setTimeout(() => {
    toast.classList.remove("is-shown");
  }, 2800);
}

// ==========================================
// 4. RENDER MENU KATALOG
// ==========================================
function renderMenu() {
  const container = document.getElementById("menuGrid");
  if (!container) return;

  const filtered = MENU_DATA.filter(item => {
    const matchCat = activeCategory === "all" || item.category === activeCategory;
    const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <p style="font-size: 28px; margin-bottom: 10px;">🔍</p>
        <p style="font-size: 16px; font-weight: 700;">Menu tidak ditemukan</p>
        <p style="font-size: 13px;">Coba gunakan kata kunci lain atau pilih kategori lain.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="menu-item-card" data-id="${item.id}">
      <div class="item-thumb-wrap">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        ${item.tag ? `<span class="badge badge-amber item-tag">${item.tag}</span>` : ""}
      </div>
      <div class="item-body">
        <div class="item-title-row">
          <h4 class="item-title">${item.name}</h4>
          <span class="item-rating">★ ${item.rating.toFixed(1)}</span>
        </div>
        <p class="item-desc">${item.desc}</p>
        
        ${item.hasTemp ? `
          <div class="item-options" data-id="${item.id}">
            <button type="button" class="opt-pill is-selected" data-temp="Iced" onclick="selectTemp(${item.id}, 'Iced', this)">❄️ Dingin</button>
            <button type="button" class="opt-pill" data-temp="Hot" onclick="selectTemp(${item.id}, 'Hot', this)">♨️ Panas</button>
          </div>
        ` : ""}

        <div class="item-footer">
          <span class="item-price">${formatRupiah(item.price)}</span>
          <button type="button" class="item-add-btn" onclick="addToCart(${item.id})">
            <span>+</span> Tambah
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

// Opsi Suhu (Hot/Iced)
const itemTempSelections = {};
window.selectTemp = function(itemId, temp, btn) {
  itemTempSelections[itemId] = temp;
  const parent = btn.parentElement;
  parent.querySelectorAll(".opt-pill").forEach(p => p.classList.remove("is-selected"));
  btn.classList.add("is-selected");
};

// ==========================================
// 5. KERANJANG BELANJA & QUICK ORDER
// ==========================================
window.addToCart = function(itemId) {
  const item = MENU_DATA.find(i => i.id === itemId);
  if (!item) return;

  const temp = item.hasTemp ? (itemTempSelections[itemId] || "Iced") : null;
  const cartKey = temp ? `${itemId}-${temp}` : `${itemId}`;

  const existing = cart.find(c => c.cartKey === cartKey);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      cartKey,
      id: item.id,
      name: item.name,
      price: item.price,
      temp: temp,
      image: item.image,
      qty: 1
    });
  }

  saveCartToStorage();
  updateCartUI();
  showToast(`${item.name} ${temp ? `(${temp})` : ""} ditambahkan ke keranjang!`);
};

window.updateQty = function(cartKey, change) {
  const index = cart.findIndex(c => c.cartKey === cartKey);
  if (index === -1) return;

  cart[index].qty += change;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  saveCartToStorage();
  updateCartUI();
};

function updateCartUI() {
  const countBadge = document.getElementById("cartCountBadge");
  const cartDrawerItems = document.getElementById("cartItemsList");
  const subtotalEl = document.getElementById("cartSubtotal");
  const taxEl = document.getElementById("cartTax");
  const discountRowEl = document.getElementById("cartDiscountRow");
  const discountValEl = document.getElementById("cartDiscountVal");
  const totalEl = document.getElementById("cartGrandTotal");
  const emptyStateEl = document.getElementById("cartEmptyState");

  const totalQty = cart.reduce((acc, curr) => acc + curr.qty, 0);
  if (countBadge) countBadge.textContent = totalQty;

  const subtotal = cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);
  const discount = Math.round(subtotal * discountPercent);
  const tax = Math.round((subtotal - discount) * 0.10); // PPN 10%
  const grandTotal = (subtotal - discount) + tax;

  if (cart.length === 0) {
    if (emptyStateEl) emptyStateEl.style.display = "block";
    if (cartDrawerItems) cartDrawerItems.innerHTML = "";
  } else {
    if (emptyStateEl) emptyStateEl.style.display = "none";
    if (cartDrawerItems) {
      cartDrawerItems.innerHTML = cart.map(item => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
          <div class="cart-item-info">
            <h5 class="cart-item-title">${item.name}</h5>
            ${item.temp ? `<span class="cart-item-opt">Suhu: ${item.temp}</span>` : ""}
            <div class="cart-item-price">${formatRupiah(item.price * item.qty)}</div>
          </div>
          <div class="cart-qty-ctrl">
            <button class="qty-btn" onclick="updateQty('${item.cartKey}', -1)">-</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="updateQty('${item.cartKey}', 1)">+</button>
          </div>
        </div>
      `).join("");
    }
  }

  if (subtotalEl) subtotalEl.textContent = formatRupiah(subtotal);
  if (taxEl) taxEl.textContent = formatRupiah(tax);
  if (totalEl) totalEl.textContent = formatRupiah(grandTotal);

  if (discountRowEl && discountValEl) {
    if (discount > 0) {
      discountRowEl.style.display = "flex";
      discountValEl.textContent = `- ${formatRupiah(discount)} (${appliedCouponCode})`;
    } else {
      discountRowEl.style.display = "none";
    }
  }
}

// Kupon Promo
window.applyCoupon = function() {
  const input = document.getElementById("couponInput");
  if (!input) return;

  const code = input.value.trim().toUpperCase();
  if (code === "PANTURA10") {
    discountPercent = 0.10;
    appliedCouponCode = "PANTURA10";
    showToast("Kupon diskon 10% berhasil digunakan! 🎉");
    updateCartUI();
  } else if (code === "") {
    discountPercent = 0;
    appliedCouponCode = "";
    updateCartUI();
  } else {
    showToast("Kode kupon tidak valid. Gunakan 'PANTURA10'");
  }
};

// Ganti Tipe Pesanan (Dine-in / Take-away)
window.setOrderType = function(type) {
  orderType = type;
  document.querySelectorAll(".order-type-btn").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.type === type);
  });
  const tableGroup = document.getElementById("tableNumberGroup");
  if (tableGroup) {
    tableGroup.style.display = type === "dine-in" ? "block" : "none";
  }
};

// Checkout WhatsApp
window.checkoutWhatsApp = function() {
  if (cart.length === 0) {
    showToast("Keranjang Anda masih kosong!");
    return;
  }

  const tableInput = document.getElementById("tableNumberInput");
  const notesInput = document.getElementById("customerNotesInput");
  const nameInput = document.getElementById("customerNameInput");

  const customerName = nameInput ? nameInput.value.trim() : "Pelanggan";
  const tableNo = (orderType === "dine-in" && tableInput) ? tableInput.value.trim() : "-";
  const notes = notesInput ? notesInput.value.trim() : "-";

  const subtotal = cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);
  const discount = Math.round(subtotal * discountPercent);
  const tax = Math.round((subtotal - discount) * 0.10);
  const grandTotal = (subtotal - discount) + tax;

  let message = `*HALO KEDAI KOPI PANTURA, SAYA INGIN ORDER*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `👤 *Nama:* ${customerName || "Pelanggan"}\n`;
  message += `📍 *Tipe Pesanan:* ${orderType === "dine-in" ? `Dine In (Meja #${tableNo})` : "Take Away (Bungkus)"}\n`;
  if (notes && notes !== "-") message += `📝 *Catatan:* ${notes}\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `*RINCIAN PESANAN:*\n`;

  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name} ${item.temp ? `(${item.temp})` : ""} x${item.qty} = ${formatRupiah(item.price * item.qty)}\n`;
  });

  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `Subtotal: ${formatRupiah(subtotal)}\n`;
  if (discount > 0) message += `Diskon (${appliedCouponCode}): -${formatRupiah(discount)}\n`;
  message += `Pajak PPN (10%): ${formatRupiah(tax)}\n`;
  message += `*TOTAL BAYAR: ${formatRupiah(grandTotal)}*\n\n`;
  message += `Mohon diproses pesanan saya. Terima kasih! 🙏☕`;

  const waNumber = "6281234567890"; // Ganti dengan nomor WhatsApp Kedai Kopi Pantura
  const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

// Simulasi QRIS & Cetak Struk
window.openReceiptModal = function() {
  if (cart.length === 0) {
    showToast("Keranjang Anda masih kosong!");
    return;
  }

  const modal = document.getElementById("receiptModal");
  const receiptItemsEl = document.getElementById("receiptItems");
  const receiptTotalEl = document.getElementById("receiptTotal");
  const receiptOrderTypeEl = document.getElementById("receiptOrderType");
  const receiptDateEl = document.getElementById("receiptDate");

  const subtotal = cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);
  const discount = Math.round(subtotal * discountPercent);
  const tax = Math.round((subtotal - discount) * 0.10);
  const grandTotal = (subtotal - discount) + tax;

  const tableInput = document.getElementById("tableNumberInput");
  const tableNo = tableInput ? tableInput.value.trim() : "-";

  if (receiptDateEl) {
    const now = new Date();
    receiptDateEl.textContent = now.toLocaleDateString("id-ID", {
      day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit"
    });
  }

  if (receiptOrderTypeEl) {
    receiptOrderTypeEl.textContent = orderType === "dine-in" ? `Dine In (Meja #${tableNo})` : "Take Away";
  }

  if (receiptItemsEl) {
    receiptItemsEl.innerHTML = cart.map(item => `
      <div class="receipt-line">
        <span>${item.name} ${item.temp ? `(${item.temp})` : ""} x${item.qty}</span>
        <span>${formatRupiah(item.price * item.qty)}</span>
      </div>
    `).join("");

    if (discount > 0) {
      receiptItemsEl.innerHTML += `
        <div class="receipt-line" style="color: #27ae60;">
          <span>Diskon Promo (${appliedCouponCode})</span>
          <span>-${formatRupiah(discount)}</span>
        </div>
      `;
    }

    receiptItemsEl.innerHTML += `
      <div class="receipt-line">
        <span>PB1 / PPN 10%</span>
        <span>${formatRupiah(tax)}</span>
      </div>
    `;
  }

  if (receiptTotalEl) {
    receiptTotalEl.textContent = formatRupiah(grandTotal);
  }

  if (modal) modal.classList.add("is-open");
};

window.closeReceiptModal = function() {
  const modal = document.getElementById("receiptModal");
  if (modal) modal.classList.remove("is-open");
};

// ==========================================
// 6. FORM RESERVASI MEJA
// ==========================================
window.handleReservationSubmit = function(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const phone = form.phone.value;
  const guests = form.guests.value;
  const date = form.date.value;
  const time = form.time.value;
  const area = form.area.value;
  const notes = form.notes.value || "-";

  let waMsg = `*RESERVASI MEJA - KEDAI KOPI PANTURA*\n`;
  waMsg += `━━━━━━━━━━━━━━━━━━━━━\n`;
  waMsg += `👤 *Nama:* ${name}\n`;
  waMsg += `📞 *No WhatsApp:* ${phone}\n`;
  waMsg += `👥 *Jumlah Tamu:* ${guests} Orang\n`;
  waMsg += `📅 *Tanggal:* ${date}\n`;
  waMsg += `⏰ *Jam:* ${time} WIB\n`;
  waMsg += `🪑 *Pilihan Area:* ${area}\n`;
  waMsg += `📝 *Catatan Khusus:* ${notes}\n`;
  waMsg += `━━━━━━━━━━━━━━━━━━━━━\n`;
  waMsg += `Mohon konfirmasi ketersediaan meja kami. Terima kasih! 🙏`;

  const waUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(waMsg)}`;

  showToast("Reservasi dicatat! Menghubungkan ke WhatsApp...");
  setTimeout(() => {
    window.open(waUrl, "_blank");
    form.reset();
  }, 1200);
};

// ==========================================
// 7. ULASAN & TESTIMONI INTERAKTIF
// ==========================================
let currentStarRating = 5;
window.setStarRating = function(rating) {
  currentStarRating = rating;
  const stars = document.querySelectorAll(".star-rating-select span");
  stars.forEach((s, idx) => {
    s.classList.toggle("is-active", idx < rating);
  });
};

window.handleReviewSubmit = function(event) {
  event.preventDefault();
  const form = event.target;
  const authorName = form.author.value.trim();
  const text = form.reviewText.value.trim();
  const reviewsContainer = document.getElementById("testimonialsGrid");

  if (!authorName || !text) return;

  const newCard = document.createElement("div");
  newCard.className = "review-card";
  newCard.innerHTML = `
    <div class="review-stars">${"★".repeat(currentStarRating)}${"☆".repeat(5 - currentStarRating)}</div>
    <p class="review-text">"${text}"</p>
    <div class="review-author">
      <div class="author-avatar">${authorName.charAt(0).toUpperCase()}</div>
      <div class="author-info">
        <h4>${authorName}</h4>
        <small>Baru saja • Pelanggan Terverifikasi</small>
      </div>
    </div>
  `;

  if (reviewsContainer) {
    reviewsContainer.prepend(newCard);
  }

  showToast("Terima kasih atas ulasan hangat Anda! 🌟");
  form.reset();
  setStarRating(5);
};

// ==========================================
// 8. JAM OPERASIONAL REAL-TIME
// ==========================================
function initOperationalHours() {
  const statusEl = document.getElementById("liveStatusPill");
  if (!statusEl) return;

  const now = new Date();
  const hour = now.getHours();
  // Jam Buka 08:00 - 23:00
  const isOpen = hour >= 8 && hour < 23;

  if (isOpen) {
    statusEl.innerHTML = `<span class="status-dot"></span> BUKA SEKARANG (Tutup 23:00 WIB)`;
  } else {
    statusEl.innerHTML = `<span class="status-dot" style="background: #e67e22; box-shadow: 0 0 8px #e67e22;"></span> SEDANG TUTUP (Buka 08:00 WIB)`;
    statusEl.style.color = "#e67e22";
    statusEl.style.borderColor = "rgba(230, 126, 34, 0.3)";
  }
}

// ==========================================
// 9. COZY SOUND AMBIENCE (WEB AUDIO API SYNTH)
// ==========================================
let audioCtx = null;
let isAmbiencePlaying = false;
let noiseNode = null;
let gainNode = null;

function initAmbienceSound() {
  const soundBtn = document.getElementById("soundAmbienceBtn");
  if (!soundBtn) return;

  soundBtn.addEventListener("click", () => {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }

    if (isAmbiencePlaying) {
      // Matikan
      if (gainNode) {
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
        setTimeout(() => {
          if (noiseNode) noiseNode.disconnect();
          isAmbiencePlaying = false;
          soundBtn.classList.remove("is-playing");
          soundBtn.innerHTML = "▶";
          showToast("Suasana hujan santai dimatikan.");
        }, 500);
      }
    } else {
      // Mainkan suara rintik hujan / cafe white noise yang menenangkan
      if (audioCtx.state === "suspended") {
        audioCtx.resume();
      }

      const bufferSize = audioCtx.sampleRate * 2;
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const data = buffer.getChannelData(0);

      // Pink noise synthesis for cozy rain ambience
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
        b6 = white * 0.115926;
      }

      noiseNode = audioCtx.createBufferSource();
      noiseNode.buffer = buffer;
      noiseNode.loop = true;

      const filter = audioCtx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 1200;

      gainNode = audioCtx.createGain();
      gainNode.gain.setValueAtTime(0.01, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.12, audioCtx.currentTime + 1);

      noiseNode.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      noiseNode.start();
      isAmbiencePlaying = true;
      soundBtn.classList.add("is-playing");
      soundBtn.innerHTML = "⏸";
      showToast("🌧️ Suasana hujan cafe santai dimulai...");
    }
  });
}

// ==========================================
// 10. SETUP EVENT LISTENERS & DRAWER
// ==========================================
function setupEventListeners() {
  // Sticky Topbar Scroll
  window.addEventListener("scroll", () => {
    const topbar = document.getElementById("topbar");
    if (topbar) {
      topbar.classList.toggle("is-scrolled", window.scrollY > 20);
    }
  });

  // Mobile Menu Drawer
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const mobileClose = document.getElementById("mobileClose");

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener("click", () => mobileDrawer.classList.toggle("is-open"));
  }
  if (mobileClose && mobileDrawer) {
    mobileClose.addEventListener("click", () => mobileDrawer.classList.remove("is-open"));
  }

  // Cart Drawer
  const cartTrigger = document.getElementById("cartTrigger");
  const cartDrawer = document.getElementById("cartDrawer");
  const cartBackdrop = document.getElementById("cartBackdrop");
  const cartCloseBtn = document.getElementById("cartCloseBtn");

  function openCart() {
    if (cartDrawer) cartDrawer.classList.add("is-open");
    if (cartBackdrop) cartBackdrop.classList.add("is-open");
  }
  function closeCart() {
    if (cartDrawer) cartDrawer.classList.remove("is-open");
    if (cartBackdrop) cartBackdrop.classList.remove("is-open");
  }

  if (cartTrigger) cartTrigger.addEventListener("click", openCart);
  if (cartCloseBtn) cartCloseBtn.addEventListener("click", closeCart);
  if (cartBackdrop) cartBackdrop.addEventListener("click", closeCart);

  // Filter Kategori Menu
  const catButtons = document.querySelectorAll(".category-btn");
  catButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      catButtons.forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      activeCategory = btn.dataset.category;
      renderMenu();
    });
  });

  // Search Live Menu
  const searchInput = document.getElementById("menuSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderMenu();
    });
  }
}

// Local Storage
function saveCartToStorage() {
  localStorage.setItem("cafe_pantura_cart", JSON.stringify(cart));
}
function loadCartFromStorage() {
  const saved = localStorage.getItem("cafe_pantura_cart");
  if (saved) {
    try {
      cart = JSON.parse(saved);
      updateCartUI();
    } catch (e) {
      cart = [];
    }
  }
}

// Theme Switcher (Dark / Light)
function initTheme() {
  const saved = localStorage.getItem("cafe_pantura_theme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);
  updateThemeIcon(saved);
}

window.toggleTheme = function() {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("cafe_pantura_theme", next);
  updateThemeIcon(next);
  showToast(`Mode tema diubah ke ${next === "dark" ? "Cozy Dark" : "Warm Cream"}`);
};

function updateThemeIcon(theme) {
  const icon = document.getElementById("themeIcon");
  if (icon) {
    icon.textContent = theme === "dark" ? "🌙" : "☀️";
  }
}
