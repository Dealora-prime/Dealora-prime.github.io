const products = [
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
        <article class="blog-card${index === 0 ? ' featured' : ''}">
            <div class="card-img-wrap">
                <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='${PLACEHOLDER}'">
                <span class="discount-badge">${discount(p)}% OFF</span>
                <span class="category-tag">${capitalize(p.category)}</span>
            </div>
            <div class="card-content">
                <span class="card-meta">${p.brand} / ${formatPrice(p.oldPrice)}</span>
                <h2 class="card-title">${p.name}</h2>
                <p class="card-desc">${p.description}</p>
                <div class="rating">
                    <span class="stars">${stars(p.rating)}</span>
                    <span>${p.rating} / 5</span>
                </div>
                <div class="price-row">
                    <span class="price">${formatPrice(p.price)}</span>
                    <span class="old-price">${formatPrice(p.oldPrice)}</span>
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
        if (bar) window.scrollTo({ top: Math.max(0, bar.offsetTop - 80), behavior: 'smooth' });
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
