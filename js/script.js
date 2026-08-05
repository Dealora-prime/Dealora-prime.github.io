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
        id: 21,
        name: "ABREXO Vintage Law Date Working Square Black Dial Brown Premium Silicone Strap Analog Watch for Men",
        brand: "ABREXO",
        category: "watches",
        hot: true,
        price: 227,
        oldPrice: 999,
        rating: 4.3,
        description: "ABREXO Vintage-Law watch with a square black dial, working date window and a premium brown silicone strap. A stylish everyday analog watch at an unbeatable price.",
        features: [
            "Square black dial with working date window",
            "Premium brown silicone strap for all-day comfort",
            "Classic analog movement",
            "Vintage-inspired design",
            "Great value everyday watch"
        ],
        image: "images/abrexo-vintage-1.jpg",
        gallery: ["images/abrexo-vintage-1.jpg", "images/abrexo-vintage-2.jpg", "images/abrexo-vintage-3.jpg"],
        affiliateLink: "https://fktr.in/vyrYN2T"
    },
    {
        id: 22,
        name: "Kovonsh Black Dial Digital Watch for Boys - Black Sports Watch for Men",
        brand: "Kovonsh",
        category: "watches",
        hot: false,
        price: 231,
        oldPrice: 799,
        rating: 4.1,
        description: "Kovonsh water-resistant digital watch with black dial for boys and men. Sporty, durable and stylish digital sports watch for everyday use.",
        features: [
            "Water-resistant digital sports watch",
            "Black dial with clear digital display",
            "Durable strap built for active use",
            "Perfect for boys and men",
            "Lightweight and comfortable"
        ],
        image: "images/kovonsh-1.jpg",
        gallery: ["images/kovonsh-1.jpg", "images/kovonsh-2.jpg", "images/kovonsh-3.jpg", "images/kovonsh-4.jpg", "images/kovonsh-5.jpg"],
        affiliateLink: "https://fktr.in/2wR1qWn"
    },
    {
        id: 23,
        name: "M7 Metronaut Adventure Chrono Series Analog-Digital Watch for Men",
        brand: "M7 Metronaut",
        category: "watches",
        hot: true,
        price: 719,
        oldPrice: 2499,
        rating: 4.2,
        description: "M7 Metronaut Adventure Chrono Series watch with analog-digital display, desert tan resin design and mud-resistant build. A rugged adventure watch for men.",
        features: [
            "Analog-digital dual display",
            "Chrono series adventure design",
            "Mud-resistant resin construction",
            "Desert tan rugged look",
            "Built for outdoor use"
        ],
        image: "images/m7-metronaut-1.jpg",
        gallery: ["images/m7-metronaut-1.jpg", "images/m7-metronaut-2.jpg", "images/m7-metronaut-3.jpg", "images/m7-metronaut-4.jpg", "images/m7-metronaut-5.jpg"],
        affiliateLink: "https://fktr.in/9Uk9lJ6"
    },
    {
        id: 24,
        name: "luxurit Black Sports Watch for Men & Boys with Backlight Alarm Snooze Stopwatch",
        brand: "Luxurit",
        category: "watches",
        hot: false,
        price: 414,
        oldPrice: 1299,
        rating: 4.2,
        description: "Luxurit black digital sports watch with backlight, alarm, snooze and stopwatch functions. A full-featured digital watch for men and boys.",
        features: [
            "Backlight for easy reading in the dark",
            "Alarm with snooze function",
            "Stopwatch for sports and fitness",
            "Sporty black design",
            "Water-resistant daily wear"
        ],
        image: "images/luxurit-1.jpg",
        gallery: ["images/luxurit-1.jpg", "images/luxurit-2.jpg", "images/luxurit-3.jpg", "images/luxurit-4.jpg"],
        affiliateLink: "https://fktr.in/hu2tmi6"
    },
    {
        id: 25,
        name: "ABREXO GODFATHER Square Chrono Look Gold Dial Date Working Black Silicone Strap Analog Watch for Men",
        brand: "ABREXO",
        category: "watches",
        hot: true,
        price: 374,
        oldPrice: 1499,
        rating: 4.3,
        description: "ABREXO GODFATHER square chrono-look watch with a striking gold dial, working date and black silicone strap. Bold style at a budget price.",
        features: [
            "Square chrono-look design",
            "Striking gold dial",
            "Working date window",
            "Black silicone strap",
            "Bold statement piece"
        ],
        image: "images/abrexo-godfather-1.jpg",
        gallery: ["images/abrexo-godfather-1.jpg", "images/abrexo-godfather-2.jpg"],
        affiliateLink: "https://fktr.in/Qu1wdwe"
    },
    {
        id: 26,
        name: "ABREXO Trending Stylish Synthetic Strap Combo Analog Watch for Men (Under 400)",
        brand: "ABREXO",
        category: "watches",
        hot: false,
        price: 264,
        oldPrice: 999,
        rating: 3.9,
        description: "ABREXO stylish synthetic strap combo watch for men - casual, party-wear and formal designer styles in one. Great value under 400 rupees.",
        features: [
            "Casual, party and formal designer styles",
            "Comfortable synthetic strap",
            "Classic analog display",
            "Trendy everyday look",
            "Unbeatable budget price"
        ],
        image: "images/abrexo-combo-1.jpg",
        gallery: ["images/abrexo-combo-1.jpg", "images/abrexo-combo-2.jpg", "images/abrexo-combo-3.jpg", "images/abrexo-combo-4.jpg", "images/abrexo-combo-5.jpg"],
        affiliateLink: "https://fktr.in/Wbz2iEL"
    },
    {
        id: 27,
        name: "V2A Analog-Digital Watch for Men - Trendy Casual Sports Military Green Shock Resistant",
        brand: "V2A",
        category: "watches",
        hot: false,
        price: 899,
        oldPrice: 2999,
        rating: 4,
        description: "V2A analog-digital watch for men with trendy casual sports military green design and shock-resistant build. A tough, eye-catching daily watch.",
        features: [
            "Analog-digital display",
            "Military green sporty design",
            "Shock-resistant construction",
            "Trendy casual look",
            "Durable everyday wear"
        ],
        image: "images/v2a-1.jpg",
        gallery: ["images/v2a-1.jpg", "images/v2a-2.jpg", "images/v2a-3.jpg"],
        affiliateLink: "https://fktr.in/h1xuRKZ"
    },
    {
        id: 28,
        name: "ABREXO GODFATHER Series Gold Blue Dial Date Working Black Silicone Strap Analog Watch for Men",
        brand: "ABREXO",
        category: "watches",
        hot: false,
        price: 436,
        oldPrice: 1699,
        rating: 4,
        description: "ABREXO GODFATHER Series watch with a gold and blue dial, working date and black silicone strap. Premium look, everyday price.",
        features: [
            "Gold-blue dual tone dial",
            "Working date window",
            "Black silicone strap",
            "Premium GODFATHER series look",
            "Comfortable all-day wear"
        ],
        image: "images/abrexo-blue-1.jpg",
        gallery: ["images/abrexo-blue-1.jpg", "images/abrexo-blue-2.jpg", "images/abrexo-blue-3.jpg", "images/abrexo-blue-4.jpg", "images/abrexo-blue-5.jpg"],
        affiliateLink: "https://fktr.in/b0ydahS"
    },
    {
        id: 29,
        name: "Blue Pearl Analog Watch for Boys - Unique New Arrival Arrow Rich Looking",
        brand: "Blue Pearl",
        category: "watches",
        hot: false,
        price: 192,
        oldPrice: 799,
        rating: 3.9,
        description: "Blue Pearl unique arrow-rich looking analog watch for boys. A stylish new-arrival watch at an amazing budget price.",
        features: [
            "Unique arrow-rich design",
            "Stylish analog display",
            "Perfect for boys",
            "New arrival design",
            "Amazing budget price"
        ],
        image: "images/bluepearl-1.jpg",
        gallery: ["images/bluepearl-1.jpg", "images/bluepearl-2.jpg", "images/bluepearl-3.jpg", "images/bluepearl-4.jpg", "images/bluepearl-5.jpg"],
        affiliateLink: "https://fktr.in/cyLa6HS"
    },
    {
        id: 30,
        name: "TechFusion T800 Ultra Digital Watch with Bluetooth Calling, 1.99 Inch HD Screen Black Smartwatch",
        brand: "TechFusion",
        category: "smartwatches",
        hot: true,
        price: 498,
        oldPrice: 1999,
        rating: 3.5,
        description: "TechFusion T800 Ultra smartwatch with Bluetooth calling and a large 1.99 inch HD screen. Full smartwatch features at a budget price.",
        features: [
            "Bluetooth calling support",
            "1.99 inch HD touch screen",
            "Android and iOS compatible",
            "Sleek black smartwatch design",
            "Fitness and notification tracking"
        ],
        image: "images/techfusion-1.jpg",
        gallery: ["images/techfusion-1.jpg", "images/techfusion-2.jpg", "images/techfusion-3.jpg", "images/techfusion-4.jpg", "images/techfusion-5.jpg"],
        affiliateLink: "https://fktr.in/HmM5q0n"
    },
    {
        id: 31,
        name: "TUNEBUDDY 10in1 SmartWatch i20 Ultra Max Suit Infinite Display + Earbuds Combo with 7 Straps",
        brand: "TUNEBUDDY",
        category: "smartwatches",
        hot: true,
        price: 736,
        oldPrice: 2999,
        rating: 4,
        description: "TUNEBUDDY 10in1 smartwatch bundle with i20 Ultra Max smartwatch, earbuds and 7 straps. Infinite display AMOLED-style watch with everything included.",
        features: [
            "i20 Ultra Max smartwatch with infinite display",
            "Comes with earbuds combo",
            "7 sport straps included",
            "AMOLED-style vibrant display",
            "Complete 10-in-1 value bundle"
        ],
        image: "images/tunebuddy-1.jpg",
        gallery: ["images/tunebuddy-1.jpg", "images/tunebuddy-2.jpg", "images/tunebuddy-3.jpg", "images/tunebuddy-4.jpg", "images/tunebuddy-5.jpg"],
        affiliateLink: "https://fktr.in/tTRwS6x"
    },
    {
        id: 32,
        name: "jinzs T800 Ultra Smart Watch with Magnetic Wireless Charger",
        brand: "Jinzs",
        category: "smartwatches",
        hot: false,
        price: 3020,
        oldPrice: 7999,
        rating: 3.7,
        description: "jinzs T800 Ultra smart watch with magnetic wireless charger included. Premium T800 Ultra design with wireless charging convenience.",
        features: [
            "T800 Ultra premium design",
            "Magnetic wireless charger included",
            "Android compatible",
            "Fitness and health tracking",
            "Sleek modern smartwatch"
        ],
        image: "images/jinzs-1.jpg",
        gallery: ["images/jinzs-1.jpg"],
        affiliateLink: "https://fktr.in/XnPLz6g"
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
