const products = [
    {
        id: 10,
        name: "FRONY QH191 Wireless Bluetooth Gaming Headset",
        brand: "FRONY",
        category: "headphones",
        hot: true,
        price: 999,
        oldPrice: 1999,
        rating: 4.2,
        description: "Wireless gaming sports headphones with stereo sound, SD card support, and 5-6 hour battery backup. True wireless multicolor bluetooth headset.",
        image: "images/frony-qh191-headset.jpg",
        features: [
            "Wireless gaming bluetooth headset with stereo sound",
            "SD card slot for music playback without your phone",
            "5-6 hour battery backup for long listening sessions",
            "Multicolor sporty design",
            "Built-in mic for gaming and hands-free calls"
        ],
        gallery: ["images/frony-qh191-headset.jpg", "images/frony-qh191-2.jpg"],
        affiliateLink: "https://fktr.in/nY8IAei"
    },
    {
        id: 11,
        name: "ShreeVistaar Noise Cancelling Wireless Headset",
        brand: "ShreeVistaar",
        category: "headphones",
        hot: false,
        price: 1499,
        oldPrice: 2999,
        rating: 4.1,
        description: "Noise cancelling wireless headset with built-in mic for crystal clear calls. On-the-ear bluetooth headset in silver and white.",
        image: "images/shreevistaar-headset.jpg",
        features: [
            "Active noise cancellation for immersive sound",
            "Built-in mic for crystal clear hands-free calls",
            "Comfortable on-ear cushions for long wear",
            "Wireless bluetooth connectivity",
            "Elegant silver and white finish"
        ],
        gallery: ["images/shreevistaar-headset.jpg"],
        affiliateLink: "https://fktr.in/eTXox5q"
    },
    {
        id: 12,
        name: "TRIGGR Punkheadz Z4 Bluetooth Gaming Headset",
        brand: "TRIGGR",
        category: "headphones",
        hot: false,
        price: 1799,
        oldPrice: 3499,
        rating: 4.3,
        description: "Punkheadz Z4 with 50 hour battery, dual pairing, 40mm drivers, gaming mode and BT v6.0. On-the-ear bluetooth headset in alpine green.",
        image: "images/triggr-z4-headset.jpg",
        features: [
            "50-hour battery life for days of playback",
            "Dual pairing - connect two devices at once",
            "40mm drivers for deep, rich bass",
            "Gaming mode with low latency",
            "Bluetooth v6.0 connectivity",
            "Alpine green on-ear design"
        ],
        gallery: ["images/triggr-z4-headset.jpg", "images/triggr-z4-2.jpg", "images/triggr-z4-3.jpg", "images/triggr-z4-4.jpg"],
        affiliateLink: "https://fktr.in/oWtv5fw"
    },
    {
        id: 13,
        name: "TABARET NEW Wireless Bluetooth On Ear Headphones",
        brand: "TABARET",
        category: "headphones",
        hot: false,
        price: 899,
        oldPrice: 1799,
        rating: 4.0,
        description: "Wireless bluetooth on-ear headphones with volume control and HD sound. Comfortable red on-the-ear design for everyday listening.",
        image: "images/tabaret-headset.jpg",
        features: [
            "Volume control right on the headset",
            "HD sound output for clear audio",
            "Wireless bluetooth pairing",
            "Built-in mic for calls",
            "Sleek red on-ear design"
        ],
        gallery: ["images/tabaret-headset.jpg", "images/tabaret-headset-2.jpg"],
        affiliateLink: "https://fktr.in/FXoWkMc"
    },
    {
        id: 14,
        name: "TRIGGR Punkheadz Z3 Bluetooth Gaming Headset",
        brand: "TRIGGR",
        category: "headphones",
        hot: false,
        price: 1699,
        oldPrice: 3299,
        rating: 4.3,
        description: "Punkheadz Z3 with latest BT v6.0, 50 hour battery, dual pairing, 40mm drivers and ENC noise cancellation. On-the-ear bluetooth headset in aqua blue.",
        image: "images/triggr-z3-headset.jpg",
        features: [
            "Latest Bluetooth v6.0 connectivity",
            "50-hour battery life",
            "Dual pairing - switch between two devices",
            "40mm drivers for powerful sound",
            "ENC environmental noise cancellation",
            "Aqua blue on-ear design"
        ],
        gallery: ["images/triggr-z3-headset.jpg", "images/triggr-z3-2.jpg", "images/triggr-z3-3.jpg", "images/triggr-z3-4.jpg"],
        affiliateLink: "https://fktr.in/Y35e3nm"
    },
    {
        id: 15,
        name: "PunnkFunnk Astro Junior Kids Bluetooth Headset",
        brand: "PunnkFunnk",
        category: "headphones",
        hot: false,
        price: 1299,
        oldPrice: 2499,
        rating: 4.4,
        description: "Astro Junior kids' headphones designed with a focus on safety and durability. True wireless bluetooth headset in green.",
        image: "images/punkfunk-kids-headset.jpg",
        features: [
            "Kids headphones designed with safety first",
            "Durable build for rough and tumble use",
            "True wireless bluetooth connectivity",
            "Volume-limited for child-safe listening",
            "Fun green color kids will love"
        ],
        gallery: ["images/punkfunk-kids-headset.jpg", "images/punkfunk-kids-2.jpg", "images/punkfunk-kids-3.jpg", "images/punkfunk-kids-4.jpg", "images/punkfunk-kids-5.jpg"],
        affiliateLink: "https://fktr.in/vJHg053"
    },
    {
        id: 16,
        name: "CASIO Youth (MCW-200H-9AVDF) Analog Watch - For Boys & Girls A1324",
        brand: "CASIO",
        category: "watches",
        hot: true,
        price: 899,
        oldPrice: 1495,
        rating: 4.5,
        description: "CASIO Youth (MCW-200H-9AVDF) Analog Watch - For Boys & Girls A1324. A classic youth analog watch from Casio built for daily use.",
        image: "images/casio-mcw-1.jpg",
        features: [
            "Genuine Casio youth analog watch",
            "Rugged, everyday design for boys and girls",
            "Easy-to-read analog display",
            "Durable construction for long-lasting use",
            "Stylish look that pairs with any outfit"
        ],
        gallery: ["images/casio-mcw-1.jpg", "images/casio-mcw-2.jpg", "images/casio-mcw-3.jpg", "images/casio-mcw-4.jpg", "images/casio-mcw-5.jpg"],
        affiliateLink: "https://fktr.in/zuq66iI"
    },
    {
        id: 17,
        name: "CASIO Youth (MRW-200HC-2BVDF) Analog Watch - For Boys & Girls A864",
        brand: "CASIO",
        category: "watches",
        hot: false,
        price: 5439,
        oldPrice: 6995,
        rating: 4.2,
        description: "CASIO Youth (MRW-200HC-2BVDF) Analog Watch - For Boys & Girls A864. A sporty Casio analog watch with a bold, reliable look.",
        image: "images/casio-mrw-1.jpg",
        features: [
            "Genuine Casio youth analog watch",
            "Sporty, masculine design",
            "Clear analog dial for easy reading",
            "Comfortable fit for all-day wear",
            "Built to match an active lifestyle"
        ],
        gallery: ["images/casio-mrw-1.jpg", "images/casio-mrw-2.jpg", "images/casio-mrw-3.jpg", "images/casio-mrw-4.jpg"],
        affiliateLink: "https://fktr.in/8ADx94r"
    },
    {
        id: 18,
        name: "TheHotPickz Snake Watch Analog Watch - For Women Golden Strap Snake Watch (Green Dial)",
        brand: "TheHotPickz",
        category: "watches",
        hot: false,
        price: 264,
        oldPrice: 999,
        rating: 4.2,
        description: "TheHotPickz Snake Watch Analog Watch - For Women. Golden strap snake watch with a green dial - a bold fashion statement.",
        image: "images/snake-1.jpg",
        features: [
            "Unique snake coil design",
            "Golden strap with green dial",
            "Trendy statement piece for women",
            "Lightweight and comfortable to wear",
            "Analog display for classic timekeeping"
        ],
        gallery: ["images/snake-1.jpg", "images/snake-2.jpg", "images/snake-3.jpg", "images/snake-4.jpg"],
        affiliateLink: "https://fktr.in/O52FjC1"
    },
    {
        id: 19,
        name: "NAYROS Analog Watch - For Women Pink Meenakari Fusion",
        brand: "NAYROS",
        category: "watches",
        hot: false,
        price: 763,
        oldPrice: 1599,
        rating: 3.9,
        description: "NAYROS Analog Watch - For Women Pink Meenakari Fusion. Beautifully crafted meenakari dial watch with a feminine pink finish.",
        image: "images/nayros-1.jpg",
        features: [
            "Elegant pink meenakari dial",
            "Traditional fusion design for women",
            "Premium crafted bracelet",
            "Smooth analog movement",
            "Perfect for festive and formal wear"
        ],
        gallery: ["images/nayros-1.jpg", "images/nayros-2.jpg", "images/nayros-3.jpg", "images/nayros-4.jpg"],
        affiliateLink: "https://fktr.in/8IQmLf9"
    },
    {
        id: 20,
        name: "Praizy Times Premium Metal Bracelet Watch Collection Analog Watch - For Women Metal Bracelet Watch",
        brand: "Praizy Times",
        category: "watches",
        hot: false,
        price: 278,
        oldPrice: 1299,
        rating: 4.3,
        description: "Praizy Times Premium Metal Bracelet Watch Collection Analog Watch - For Women. A premium metal bracelet watch with an oval dial.",
        image: "images/praizy-1.jpg",
        features: [
            "Premium metal bracelet strap",
            "Elegant oval dial design",
            "Sophisticated women's fashion watch",
            "Polished metallic finish",
            "Comfortable secure clasp"
        ],
        gallery: ["images/praizy-1.jpg", "images/praizy-2.jpg", "images/praizy-3.jpg", "images/praizy-4.jpg"],
        affiliateLink: "https://fktr.in/Ldz5wst"
    },
    {
        id: 1,
        name: "True Wireless Earbuds Pro",
        brand: "SoundMax",
        category: "electronics",
        hot: true,
        price: 1299,
        oldPrice: 3999,
        rating: 4.5,
        description: "Crystal clear sound with active noise cancellation and 30hr battery life.",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
        features: [
            "Active noise cancellation",
            "Crystal clear stereo sound",
            "30-hour total battery life",
            "Comfortable secure in-ear fit"
        ],
        affiliateLink: "https://www.amazon.in/s?k=wireless+earbuds&tag=dealora-21"
    },
    {
        id: 2,
        name: "Smart Fitness Watch",
        brand: "PulseFit",
        category: "electronics",
        hot: true,
        price: 2499,
        oldPrice: 5999,
        rating: 4.3,
        description: "Heart-rate tracking, GPS, and a bright AMOLED display. Water resistant.",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
        features: [
            "Heart-rate tracking",
            "Built-in GPS",
            "Bright AMOLED display",
            "Water resistant"
        ],
        affiliateLink: "https://www.amazon.in/s?k=smart+watch&tag=dealora-21"
    },
    {
        id: 3,
        name: "Bluetooth Party Speaker",
        brand: "BoomBox",
        category: "electronics",
        hot: false,
        price: 1599,
        oldPrice: 3499,
        rating: 4.6,
        description: "Deep bass, 360-degree sound, and 12-hour playtime for every party.",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",
        features: [
            "Deep bass 360-degree sound",
            "12-hour playtime",
            "Wireless bluetooth",
            "Portable design"
        ],
        affiliateLink: "https://www.amazon.in/s?k=bluetooth+speaker&tag=dealora-21"
    },
    {
        id: 4,
        name: "Running Shoes Flex",
        brand: "Stride",
        category: "fashion",
        hot: false,
        price: 1899,
        oldPrice: 4299,
        rating: 4.4,
        description: "Ultra-light breathable mesh with cushioned sole for all-day comfort.",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
        features: [
            "Ultra-light breathable mesh",
            "Cushioned sole",
            "All-day comfort fit",
            "Durable grip outsole"
        ],
        affiliateLink: "https://www.amazon.in/s?k=running+shoes&tag=dealora-21"
    },
    {
        id: 5,
        name: "Men's Slim Fit Shirt",
        brand: "UrbanWear",
        category: "fashion",
        hot: false,
        price: 899,
        oldPrice: 1999,
        rating: 4.2,
        description: "Premium cotton slim-fit shirt, wrinkle-free and easy to style.",
        image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?auto=format&fit=crop&w=800&q=80",
        features: [
            "Premium cotton fabric",
            "Slim-fit cut",
            "Wrinkle-free finish",
            "Easy to style"
        ],
        affiliateLink: "https://www.amazon.in/s?k=mens+slim+fit+shirt&tag=dealora-21"
    },
    {
        id: 6,
        name: "Anti-Theft Backpack",
        brand: "TrailPro",
        category: "accessories",
        hot: true,
        price: 999,
        oldPrice: 2499,
        rating: 4.5,
        description: "Laptop-friendly, water-resistant with hidden pockets and USB port.",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
        features: [
            "Laptop-friendly compartment",
            "Water resistant",
            "Hidden anti-theft pockets",
            "Built-in USB port"
        ],
        affiliateLink: "https://www.amazon.in/s?k=anti+theft+backpack&tag=dealora-21"
    },
    {
        id: 7,
        name: "Minimalist Analog Watch",
        brand: "Classico",
        category: "accessories",
        hot: false,
        price: 1499,
        oldPrice: 3499,
        rating: 4.1,
        description: "Elegant leather strap watch that goes with every outfit.",
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80",
        features: [
            "Elegant leather strap",
            "Classic analog dial",
            "Precision quartz movement",
            "Goes with every outfit"
        ],
        affiliateLink: "https://www.amazon.in/s?k=analog+watch+men&tag=dealora-21"
    },
    {
        id: 8,
        name: "LED Desk Lamp",
        brand: "Lumina",
        category: "home",
        hot: false,
        price: 799,
        oldPrice: 1899,
        rating: 4.4,
        description: "Dimmable warm-white light with USB charging port and touch control.",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
        features: [
            "Dimmable warm-white light",
            "Touch control",
            "USB charging port",
            "Energy efficient"
        ],
        affiliateLink: "https://www.amazon.in/s?k=led+desk+lamp&tag=dealora-21"
    },
    {
        id: 9,
        name: "Non-Stick Cookware Set",
        brand: "KitchenArt",
        category: "home",
        hot: false,
        price: 2599,
        oldPrice: 5999,
        rating: 4.3,
        description: "8-piece granite non-stick set, scratch-resistant and easy to clean.",
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
        features: [
            "8-piece granite set",
            "Non-stick coating",
            "Scratch resistant",
            "Easy to clean"
        ],
        affiliateLink: "https://www.amazon.in/s?k=non+stick+cookware+set&tag=dealora-21"
    }
];

const PLACEHOLDER = 'https://placehold.co/800x600/e7e2da/6b6b6b?text=Dealora';
const grid = document.getElementById('productGrid');
let currentCat = 'all';

function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function discount(p) {
    return Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100);
}

function formatPrice(n) {
    return '\u20B9' + n.toLocaleString('en-IN');
}

function stars(rating) {
    const full = Math.round(rating);
    return '\u2605'.repeat(full) + '\u2606'.repeat(5 - full);
}

function cardHTML(p, index) {
    return `
        <article class="blog-card${index === 0 ? ' featured' : ''}" data-id="${p.id}">
            <div class="card-img-wrap">
                <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='${PLACEHOLDER}'">
                <span class="category-tag">${capitalize(p.category)}</span>
            </div>
            <div class="card-content">
                <span class="card-meta">${p.brand}</span>
                <h2 class="card-title">${p.name}</h2>
                <p class="card-desc">${p.description}</p>
                <div class="rating">
                    <span class="stars">${stars(p.rating)}</span>
                    <span>${p.rating} / 5</span>
                </div>
                <a class="card-link" href="${p.affiliateLink}" target="_blank" rel="noopener sponsored">
                    <i class="fas fa-shopping-bag"></i> View Price &rarr;
                </a>
            </div>
        </article>
    `;
}

function render() {
    let list = products;
    if (currentCat === 'hot') {
        list = products.filter(p => p.hot);
    } else if (currentCat !== 'all') {
        list = products.filter(p => p.category === currentCat);
    }

    if (list.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">&#128533;</span>
                <h3>No deals in this category yet</h3>
                <p>Check back soon &mdash; new deals are added every day.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = list.map(cardHTML).join('');
}

function setCat(cat) {
    currentCat = cat;
    document.querySelectorAll('.filter-item').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.cat === cat);
    });
    render();
    setTimeout(() => {
        const bar = document.querySelector('.filter-bar');
        if (bar) {
            const top = Math.max(0, bar.offsetTop - 80);
            if ('scrollBehavior' in document.documentElement.style) {
                window.scrollTo({ top, behavior: 'smooth' });
            } else {
                window.scrollTo(0, top);
            }
        }
    }, 80);
}

document.querySelectorAll('[data-cat]').forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault();
        setCat(el.dataset.cat);
        closeMenu();
    });
});

function toggleMenu() {
    const open = document.getElementById('navLinks').classList.toggle('open');
    document.getElementById('closeBtn').classList.toggle('show', open);
    document.getElementById('menuBackdrop').classList.toggle('show', open);
    document.body.classList.toggle('menu-open', open);
}

function closeMenu() {
    document.getElementById('navLinks').classList.remove('open');
    document.getElementById('closeBtn').classList.remove('show');
    document.getElementById('menuBackdrop').classList.remove('show');
    document.body.classList.remove('menu-open');
    document.querySelectorAll('.dropdown-parent.open').forEach(li => li.classList.remove('open'));
}

document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', e => {
        e.preventDefault();
        const parent = toggle.closest('.dropdown-parent');
        const wasOpen = parent.classList.contains('open');
        document.querySelectorAll('.dropdown-parent.open').forEach(li => li.classList.remove('open'));
        if (!wasOpen) parent.classList.add('open');
    });
});

document.querySelectorAll('#navLinks a[href^="#"]').forEach(a => {
    if (!a.classList.contains('dropdown-toggle')) {
        a.addEventListener('click', () => closeMenu());
    }
});

const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    const dark = document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme', !dark);
    localStorage.setItem('dealora-theme', dark ? 'dark' : 'light');
});

const savedTheme = localStorage.getItem('dealora-theme');
if (savedTheme === 'dark') {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

render();

/* ---------- Product detail modal ---------- */
const modal = document.getElementById('productModal');
const modalSlider = document.getElementById('modalSlider');
const modalSlides = document.getElementById('modalSlides');
const modalDots = document.getElementById('slideDots');
const modalBrand = document.getElementById('modalBrand');
const modalMeta = document.getElementById('modalMeta');
const modalTitle = document.getElementById('modalTitle');
const modalRating = document.getElementById('modalRating');
const modalHighlights = document.getElementById('modalHighlights');
const modalDesc = document.getElementById('modalDesc');
const modalFeatures = document.getElementById('modalFeatures');
const modalBtn = document.getElementById('modalBtn');
let currentSlide = 0;
let slideCount = 1;

function openModal(p) {
    const images = (p.gallery && p.gallery.length) ? p.gallery : [p.image];
    slideCount = images.length;
    currentSlide = 0;
    modalSlides.innerHTML = images.map(src =>
        `<div class="modal-slide"><img src="${src}" alt="${p.name}" onerror="this.src='${PLACEHOLDER}'"></div>`
    ).join('');
    modalDots.innerHTML = images.map((_, i) =>
        `<button class="slide-dot${i === 0 ? ' active' : ''}" onclick="goSlide(${i})" aria-label="Image ${i + 1}"></button>`
    ).join('');
    modalBrand.textContent = p.brand;
    modalMeta.textContent = p.brand;
    modalTitle.textContent = p.name;
    modalRating.innerHTML = `<span class="stars">${stars(p.rating)}</span><span>${p.rating} / 5</span>`;
    modalHighlights.innerHTML = [
        '<span><i class="fas fa-truck"></i>Free Delivery</span>',
        '<span><i class="fas fa-shield-alt"></i>Brand Warranty</span>',
        '<span><i class="fas fa-undo-alt"></i>7-Day Replacement</span>',
        '<span><i class="fas fa-tag"></i>' + p.category + '</span>'
    ].join('');
    modalDesc.textContent = p.description;
    modalFeatures.innerHTML = (p.features || []).map(f => `<li><i class="fas fa-check-circle"></i>${f}</li>`).join('');
    modalBtn.href = p.affiliateLink;
    updateSlider();
    modal.classList.add('open');
    document.body.classList.add('modal-open');
}

function closeModal() {
    modal.classList.remove('open');
    document.body.classList.remove('modal-open');
}

function goSlide(i) {
    currentSlide = Math.max(0, Math.min(slideCount - 1, i));
    updateSlider();
}

function updateSlider() {
    modalSlides.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
    modalDots.querySelectorAll('.slide-dot').forEach((d, i) => d.classList.toggle('active', i === currentSlide));
    document.getElementById('slidePrev').style.display = slideCount > 1 ? 'flex' : 'none';
    document.getElementById('slideNext').style.display = slideCount > 1 ? 'flex' : 'none';
    document.getElementById('slideDots').style.display = slideCount > 1 ? 'flex' : 'none';
}

grid.addEventListener('dblclick', e => {
    const card = e.target.closest('.blog-card');
    if (card && !e.target.closest('.card-link')) {
        const p = products.find(x => x.id === Number(card.dataset.id));
        if (p) openModal(p);
    }
});

let lastTap = 0;
grid.addEventListener('click', e => {
    const card = e.target.closest('.blog-card');
    if (!card || e.target.closest('.card-link')) return;
    const now = Date.now();
    if (now - lastTap < 350) {
        const p = products.find(x => x.id === Number(card.dataset.id));
        if (p) openModal(p);
        lastTap = 0;
    } else {
        lastTap = now;
    }
});

let touchStartX = 0;
modalSlider.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].clientX;
}, { passive: true });

modalSlider.addEventListener('touchend', e => {
    const diff = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(diff) > 40) {
        if (diff < 0) goSlide(currentSlide + 1);
        else goSlide(currentSlide - 1);
    }
}, { passive: true });

document.addEventListener('keydown', e => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') goSlide(currentSlide - 1);
    if (e.key === 'ArrowRight') goSlide(currentSlide + 1);
});
