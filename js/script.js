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
    },
    {
        id: 33,
        name: "MRSAYON Large 32 L Laptop Backpack Bag with 2 Hidden Pockets (Black)",
        brand: "MRSAYON",
        category: "backpacks",
        hot: true,
        price: 399,
        oldPrice: 1299,
        rating: 3.9,
        description: "MRSAYON 32L laptop backpack with 2 hidden pockets for extra security. Spacious, durable and perfect for school, college and office use.",
        features: [
            "32L spacious capacity with 2 hidden pockets",
            "Laptop sleeve for safe device storage",
            "Water-resistant durable fabric",
            "Comfortable padded shoulder straps",
            "Perfect for school, college and office"
        ],
        image: "images/mrsayon-1.jpg",
        gallery: ["images/mrsayon-1.jpg", "images/mrsayon-2.jpg", "images/mrsayon-3.jpg", "images/mrsayon-4.jpg", "images/mrsayon-5.jpg"],
        affiliateLink: "https://fktr.in/z0dpI0m"
    },
    {
        id: 34,
        name: "MONVELLI Large 40 L Laptop Backpack Casual for Men Women Boys Girls Office",
        brand: "MONVELLI",
        category: "backpacks",
        hot: false,
        price: 539,
        oldPrice: 1999,
        rating: 4.2,
        description: "MONVELLI 40L large laptop backpack for men, women, boys and girls. A roomy casual backpack built for office, travel and everyday carry.",
        features: [
            "Large 40L capacity for all your essentials",
            "Fits laptops up to 15.6 inch",
            "Unisex casual design",
            "Comfortable padded back support",
            "Great for office and travel"
        ],
        image: "images/monvelli-1.jpg",
        gallery: ["images/monvelli-1.jpg", "images/monvelli-2.jpg"],
        affiliateLink: "https://fktr.in/dsXkvdg"
    },
    {
        id: 35,
        name: "Prolific Stylish 25 Ltr Backpack for Laptop 14 inch Nylon Water Resistance with USB Charging Port",
        brand: "Prolific",
        category: "backpacks",
        hot: true,
        price: 408,
        oldPrice: 1299,
        rating: 4.1,
        description: "Prolific stylish 25L nylon backpack with USB charging port and water resistance. Ideal for school, college, office and travel.",
        features: [
            "25L capacity with USB charging port",
            "Fits 14 inch laptops",
            "Water-resistant nylon material",
            "Smart outer USB port for on-the-go charging",
            "Perfect for school, college, office and travel"
        ],
        image: "images/prolific-1.jpg",
        gallery: ["images/prolific-1.jpg", "images/prolific-2.jpg", "images/prolific-3.jpg"],
        affiliateLink: "https://fktr.in/1a1ksU4"
    },
    {
        id: 36,
        name: "HouseOfCommon Vintage Classic Faux Leather Travel Backpack College for Men Women 28 L",
        brand: "HouseOfCommon",
        category: "backpacks",
        hot: false,
        price: 410,
        oldPrice: 1499,
        rating: 4.2,
        description: "HouseOfCommon vintage classic faux leather travel backpack with a timeless look. 28L capacity for college, travel and daily use.",
        features: [
            "Vintage faux leather premium look",
            "28L roomy capacity",
            "Fits laptops comfortably",
            "Unisex classic design",
            "Durable everyday travel backpack"
        ],
        image: "images/houseofcommon-1.jpg",
        gallery: ["images/houseofcommon-1.jpg", "images/houseofcommon-2.jpg", "images/houseofcommon-3.jpg", "images/houseofcommon-4.jpg", "images/houseofcommon-5.jpg"],
        affiliateLink: "https://fktr.in/oW0Gp9J"
    },
    {
        id: 37,
        name: "WESLEY Zeus Unisex Bag Office College Bag Business 35 L Laptop Backpack",
        brand: "WESLEY",
        category: "backpacks",
        hot: true,
        price: 773,
        oldPrice: 2499,
        rating: 4.3,
        description: "WESLEY Zeus 35L unisex laptop backpack for office, college and business. A premium, organized carry for professionals and students.",
        features: [
            "35L premium organized design",
            "Laptop compartment with padding",
            "Unisex office and college style",
            "Multiple pockets for organization",
            "Comfortable ergonomic straps"
        ],
        image: "images/wesley-1.jpg",
        gallery: ["images/wesley-1.jpg", "images/wesley-2.jpg", "images/wesley-3.jpg", "images/wesley-4.jpg"],
        affiliateLink: "https://fktr.in/vdDdYmO"
    },
    {
        id: 38,
        name: "Rgulus Leather Rhodium Bracelet for Men",
        brand: "Rgulus",
        category: "accessories",
        hot: true,
        price: 178,
        oldPrice: 599,
        rating: 4.1,
        description: "Rgulus leather rhodium bracelet - a stylish everyday accessory for men. Premium leather with a rhodium-plated finish.",
        features: [
            "Premium leather bracelet",
            "Rhodium-plated accent",
            "Stylish everyday accessory for men",
            "Comfortable adjustable fit",
            "Great gifting option"
        ],
        image: "images/rgulus-1.jpg",
        gallery: ["images/rgulus-1.jpg", "images/rgulus-2.jpg", "images/rgulus-3.jpg", "images/rgulus-4.jpg"],
        affiliateLink: "https://fktr.in/wQI66BG"
    },
    {
        id: 39,
        name: "ringzinnie Stylish Silver Black Octagon Square Pendant for Men Women Boys",
        brand: "ringzinnie",
        category: "accessories",
        hot: false,
        price: 72,
        oldPrice: 399,
        rating: 3.3,
        description: "ringzinnie stylish silver-black octagon square pendant with agate stone in stainless steel. A bold fashion locket for men, women and boys.",
        features: [
            "Octagon square locket design",
            "Stainless steel with agate stone",
            "Silver and black finish",
            "Unisex fashion accessory",
            "Budget-friendly style upgrade"
        ],
        image: "images/ringzinnie-1.jpg",
        gallery: ["images/ringzinnie-1.jpg", "images/ringzinnie-2.jpg", "images/ringzinnie-3.jpg", "images/ringzinnie-4.jpg", "images/ringzinnie-5.jpg"],
        affiliateLink: "https://fktr.in/B03loK9"
    },
    {
        id: 40,
        name: "GanPatique chaens Silver Stainless Steel Pendant Set for Men",
        brand: "GanPatique",
        category: "accessories",
        hot: false,
        price: 163,
        oldPrice: 699,
        rating: 3.8,
        description: "GanPatique silver stainless steel pendant set - a premium chain and pendant combo for men. Everyday style that lasts.",
        features: [
            "Stainless steel pendant with chain",
            "Silver anti-tarnish finish",
            "Men's everyday fashion set",
            "Durable and long-lasting",
            "Great value accessory"
        ],
        image: "images/ganpatique-1.jpg",
        gallery: ["images/ganpatique-1.jpg"],
        affiliateLink: "https://fktr.in/Cxpibh8"
    },
    {
        id: 41,
        name: "SAIIZEN Silver-Black Stainless Steel Locket Pendant Set, Rhodium Alloy Set",
        brand: "SAIIZEN",
        category: "accessories",
        hot: false,
        price: 168,
        oldPrice: 699,
        rating: 3.7,
        description: "SAIIZEN silver-black stainless steel locket pendant set with rhodium alloy finish. A modern men's accessory that completes any look.",
        features: [
            "Stainless steel locket pendant",
            "Rhodium alloy finish",
            "Silver-black dual tone style",
            "Men's premium accessory",
            "Complete pendant set"
        ],
        image: "images/saiizen-1.jpg",
        gallery: ["images/saiizen-1.jpg", "images/saiizen-2.jpg", "images/saiizen-3.jpg", "images/saiizen-4.jpg", "images/saiizen-5.jpg"],
        affiliateLink: "https://fktr.in/lWf67Ap"
    },
    {
        id: 42,
        name: "AiFit 8-in-1 USB-C Hub for Work & Play - 4K HDMI, 87W PD, Ethernet, USB",
        brand: "AiFit",
        category: "gadgets",
        hot: true,
        price: 251,
        oldPrice: 999,
        rating: 3.7,
        description: "AiFit sleek 8-in-1 USB-C hub with 4K HDMI, 87W power delivery, Ethernet and multiple USB ports. Turn one port into everything you need.",
        features: [
            "8-in-1 multiport USB-C hub",
            "4K HDMI video output",
            "87W power delivery pass-through",
            "Gigabit Ethernet port",
            "Sleek compact travel design"
        ],
        image: "images/aifit-1.jpg",
        gallery: ["images/aifit-1.jpg", "images/aifit-2.jpg", "images/aifit-3.jpg", "images/aifit-4.jpg", "images/aifit-5.jpg"],
        affiliateLink: "https://fktr.in/gwvydrp"
    },
    {
        id: 43,
        name: "Mobile Point Type C Multiport Hub 5-in-1 Adapter Dock - HDMI Multi USB Port 4K",
        brand: "Mobile Point",
        category: "gadgets",
        hot: false,
        price: 245,
        oldPrice: 899,
        rating: 3,
        description: "Mobile Point 5-in-1 Type-C multiport hub adapter with HDMI and multi-USB ports. Connect laptops, tablets and smartphones to HDTV at 4K.",
        features: [
            "5-in-1 Type-C multiport hub",
            "HDMI output up to 4K",
            "Multi-USB port expansion",
            "Compatible with Type-C laptops and tablets",
            "Compact travel-friendly design"
        ],
        image: "images/mobilepoint-1.jpg",
        gallery: ["images/mobilepoint-1.jpg", "images/mobilepoint-2.jpg", "images/mobilepoint-3.jpg", "images/mobilepoint-4.jpg", "images/mobilepoint-5.jpg"],
        affiliateLink: "https://fktr.in/FSxel69"
    },
    {
        id: 44,
        name: "fire turtle Bluetooth Wireless Speaker with USB Input, Hands-Free Calling, 10W RMS",
        brand: "fire turtle",
        category: "speakers",
        hot: true,
        price: 480,
        oldPrice: 1499,
        rating: 4.1,
        description: "fire turtle 10W Bluetooth wireless speaker with USB input and hands-free calling. Big sound and bold style for home or outdoors.",
        features: [
            "10W RMS powerful sound output",
            "Bluetooth wireless connectivity",
            "USB input for wired music playback",
            "Hands-free calling with mic",
            "Portable bold design"
        ],
        image: "images/fireturtle-1.jpg",
        gallery: ["images/fireturtle-1.jpg", "images/fireturtle-2.jpg", "images/fireturtle-3.jpg", "images/fireturtle-4.jpg", "images/fireturtle-5.jpg"],
        affiliateLink: "https://fktr.in/BFfwBry"
    },
    {
        id: 45,
        name: "Fireshell FS-636 Portable Bluetooth Speaker with Clear Sound and High Bass Output 10W",
        brand: "Fireshell",
        category: "speakers",
        hot: false,
        price: 478,
        oldPrice: 1499,
        rating: 4.1,
        description: "Fireshell FS-636 portable Bluetooth speaker with clear sound and high bass output. Compact power for music anywhere you go.",
        features: [
            "10W high bass output",
            "Clear sound reproduction",
            "Portable compact design",
            "Bluetooth wireless streaming",
            "Built for travel and outdoor use"
        ],
        image: "images/fireshell-1.jpg",
        gallery: ["images/fireshell-1.jpg", "images/fireshell-2.jpg", "images/fireshell-3.jpg", "images/fireshell-4.jpg", "images/fireshell-5.jpg"],
        affiliateLink: "https://fktr.in/NXvytJp"
    },
    {
        id: 46,
        name: "YOROTO YO-412BTL Wireless Speaker with RGB Light, Superior Sound, Thunder Bass 20W",
        brand: "YOROTO",
        category: "speakers",
        hot: true,
        price: 1499,
        oldPrice: 2999,
        rating: 4,
        description: "YOROTO YO-412BTL 20W wireless speaker with RGB light and thunder bass. Room-filling sound with a spectacular light show.",
        features: [
            "20W thunder bass output",
            "RGB light effects",
            "Superior sound quality",
            "Bluetooth wireless connectivity",
            "Party-ready design"
        ],
        image: "images/yoroto-1.jpg",
        gallery: ["images/yoroto-1.jpg", "images/yoroto-2.jpg", "images/yoroto-3.jpg", "images/yoroto-4.jpg"],
        affiliateLink: "https://fktr.in/Z2pivVQ"
    },
    {"id":47,"name":"ASIAN Men Lace-Up Sneakers (Beige)","brand":"ASIAN","category":"sneakers","hot":true,"price":800,"oldPrice":1599,"rating":4,"description":"Comfortable ASIAN lace-up sneakers with a sporty beige look. Great everyday footwear at a steal.","image":"images/asian-sneaker-1.jpg","features":["Sporty beige lace-up design","Comfortable cushioned sole","Durable everyday build","Great value price"],"gallery":[["images/asian-sneaker-1.jpg","images/asian-sneaker-2.jpg","images/asian-sneaker-3.jpg","images/asian-sneaker-4.jpg","images/asian-sneaker-5.jpg"]],"affiliateLink":"https://ajiio.in/A9rD042"},
    {"id":48,"name":"Shein Men Colour-Blocked Graphic Print Lace-Up Sneakers","brand":"Shein","category":"sneakers","hot":false,"price":699,"oldPrice":699,"rating":4,"description":"Shein colour-blocked graphic print sneakers for men. Trendy, lightweight and head-turning style.","image":"images/shein-sneaker-1.jpg","features":["Colour-blocked graphic print","Lightweight design","Trendy street style","Comfortable fit"],"gallery":[["images/shein-sneaker-1.jpg","images/shein-sneaker-2.jpg","images/shein-sneaker-3.jpg"]],"affiliateLink":"https://ajiio.in/9Lm8mU2"},
    {"id":49,"name":"Red Tape Men Round Toe Lace-Up Sneakers","brand":"Red Tape","category":"sneakers","hot":false,"price":966,"oldPrice":6899,"rating":4,"description":"Red Tape round toe lace-up sneakers in white - premium build and classic style for daily wear.","image":"images/redtape-sneaker-1.jpg","features":["Classic round toe silhouette","Premium leather-look upper","Durable sole for daily wear","Timeless white colorway"],"gallery":[["images/redtape-sneaker-1.jpg","images/redtape-sneaker-2.jpg"]],"affiliateLink":"https://ajiio.in/Cm0kaI4"},
    {"id":50,"name":"Birde Men Lace-Up Sneakers with Rexene Upper","brand":"Birde","category":"sneakers","hot":false,"price":560,"oldPrice":1999,"rating":4,"description":"Birde lace-up sneakers with rexene upper - durable, breathable and budget friendly.","image":"images/birde-sneaker-1.jpg","features":["Rexene upper for durability","Breathable comfort","Lace-up secure fit","Budget-friendly price"],"gallery":[["images/birde-sneaker-1.jpg","images/birde-sneaker-2.jpg","images/birde-sneaker-3.jpg"]],"affiliateLink":"https://ajiio.in/8CEtf4w"},
    {"id":51,"name":"NEEMANS Court Flex Sneaker For Men","brand":"Neemans","category":"sneakers","hot":true,"price":986,"oldPrice":2099,"rating":4.4,"description":"NEEMANS Court Flex sneaker with cushioned comfort and modern design. Rated 4.4 by shoppers.","image":"images/neemans-sneaker-1.jpg","features":["Cushioned insole for comfort","Modern court-sport design","Rated 4.4 by shoppers","Durable outsole"],"gallery":[["images/neemans-sneaker-1.jpg","images/neemans-sneaker-2.jpg","images/neemans-sneaker-3.jpg","images/neemans-sneaker-4.jpg","images/neemans-sneaker-5.jpg"]],"affiliateLink":"https://myntr.it/Bmxiw1o"},
    {"id":52,"name":"Campus ESTILO Men Textured Sneakers","brand":"Campus","category":"sneakers","hot":false,"price":1299,"oldPrice":2999,"rating":4.5,"description":"Campus ESTILO textured sneakers - sporty comfort with a stylish silhouette for all-day wear.","image":"images/campus-sneaker-1.jpg","features":["Textured sporty upper","Cushioned comfort","Stylish silhouette","Rated 4.5"],"gallery":[["images/campus-sneaker-1.jpg","images/campus-sneaker-2.jpg","images/campus-sneaker-3.jpg"]],"affiliateLink":"https://myntr.it/VxvHJ64"},
    {"id":53,"name":"Killer Men Colour-Blocked Sneakers","brand":"Killer","category":"sneakers","hot":false,"price":691,"oldPrice":3299,"rating":3.9,"description":"Killer colour-blocked sneakers - bold street style with great value. Rated 3.9.","image":"images/killer-sneaker-1.jpg","features":["Bold colour-block styling","Comfortable fit","Streetwear appeal","Great discount"],"gallery":[["images/killer-sneaker-1.jpg","images/killer-sneaker-2.jpg","images/killer-sneaker-3.jpg"]],"affiliateLink":"https://myntr.it/pI6uus0"},
    {"id":54,"name":"NEEMANS Court Flex Sneaker (Alternate Color)","brand":"Neemans","category":"sneakers","hot":false,"price":986,"oldPrice":2099,"rating":4.4,"description":"NEEMANS Court Flex sneaker in an alternate colorway - same comfort, fresh look.","image":"images/neemans-sneaker2-1.jpg","features":["Same comfort as NEEMANS Court Flex","Fresh alternate colorway","Cushioned insole","Durable build"],"gallery":[["images/neemans-sneaker2-1.jpg","images/neemans-sneaker2-2.jpg","images/neemans-sneaker2-3.jpg","images/neemans-sneaker2-4.jpg","images/neemans-sneaker2-5.jpg"]],"affiliateLink":"https://myntr.it/5I84Unp"},
    {"id":55,"name":"HRX by Hrithik Roshan Men Off-White Round Toe Mesh Sneakers","brand":"HRX by Hrithik Roshan","category":"sneakers","hot":false,"price":1159,"oldPrice":3999,"rating":4.1,"description":"HRX by Hrithik Roshan mesh sneakers - breathable, lightweight athleisure for everyday.","image":"images/hrx-sneaker-1.jpg","features":["Breathable mesh upper","Lightweight athleisure","Round toe comfort","Rated 4.1"],"gallery":[["images/hrx-sneaker-1.jpg","images/hrx-sneaker-2.jpg","images/hrx-sneaker-3.jpg"]],"affiliateLink":"https://myntr.it/0cpOLEf"},
    {"id":56,"name":"Pocy Shoes Men Colour-Blocked Sneakers","brand":"Pocy","category":"sneakers","hot":false,"price":752,"oldPrice":3000,"rating":3.8,"description":"Pocy colour-blocked sneakers - playful pops of color with comfy soles.","image":"images/pocy-sneaker-1.jpg","features":["Playful colour blocking","Comfortable padded sole","Casual everyday style","Budget price"],"gallery":[["images/pocy-sneaker-1.jpg","images/pocy-sneaker-2.jpg"]],"affiliateLink":"https://myntr.it/lkIJ038"},
    {"id":57,"name":"Green Girgit Brown & Pink Printed Wooden Floor Lamp","brand":"Green Girgit","category":"floor-lamps","hot":false,"price":1624,"oldPrice":4750,"rating":4,"description":"Green Girgit wooden floor lamp with printed shade - cozy warm light for your living space.","image":"images/greengirgit-lamp-1.jpg","features":["Printed wooden floor lamp","Warm ambient lighting","Handsome wooden construction","Fits cozy corners"],"gallery":[["images/greengirgit-lamp-1.jpg"]],"affiliateLink":"https://myntr.it/Yllpztc"},
    {"id":58,"name":"Crosscut White & Black Printed Metal Cylinder Floor Lamp with Shelves","brand":"Crosscut","category":"floor-lamps","hot":true,"price":1795,"oldPrice":4990,"rating":4.7,"description":"Crosscut metal cylinder floor lamp with shelves - modern white & black design with storage.","image":"images/crosscut-lamp-1.jpg","features":["Metal cylinder design","Built-in shelves for storage","Modern white & black finish","Statement lighting"],"gallery":[["images/crosscut-lamp-1.jpg","images/crosscut-lamp-2.jpg","images/crosscut-lamp-3.jpg"]],"affiliateLink":"https://myntr.it/P8tlY8g"},
    {"id":59,"name":"Crosscut Brown & White Printed Wooden Cylinder Floor Lamp with Shelves","brand":"Crosscut","category":"floor-lamps","hot":false,"price":2795,"oldPrice":9990,"rating":4.7,"description":"Crosscut wooden cylinder floor lamp with shelves - warm brown tones with practical shelves.","image":"images/crosscut-lamp2-1.jpg","features":["Warm brown wood tones","Cylinder shape with shelves","Practical storage","Cozy glow"],"gallery":[["images/crosscut-lamp2-1.jpg","images/crosscut-lamp2-2.jpg","images/crosscut-lamp2-3.jpg"]],"affiliateLink":"https://myntr.it/phtrNz8"},
    {"id":60,"name":"Akway Beige & White Cane Webbing Wooden Cylindrical Floor Lamp","brand":"Akway","category":"floor-lamps","hot":false,"price":6085,"oldPrice":8500,"rating":4,"description":"Akway cane webbing cylindrical floor lamp - boho chic lighting with natural texture.","image":"images/akway-lamp-1.jpg","features":["Cane webbing texture","Cylindrical silhouette","Boho natural style","Warm illumination"],"gallery":[["images/akway-lamp-1.jpg","images/akway-lamp-2.jpg","images/akway-lamp-3.jpg"]],"affiliateLink":"https://myntr.it/5S0fpge"},
    {"id":61,"name":"Kulin Multi-Colored Gold Plated Lord Jagannath Idol Showpiece","brand":"Kulin","category":"showpieces","hot":false,"price":336,"oldPrice":499,"rating":4,"description":"Kulin gold plated Lord Jagannath idol - multi-colored divine showpiece for home decor.","image":"images/kulin-showpiece-1.jpg","features":["Gold plated finish","Multi-colored artwork","Lord Jagannath idol","Festive home decor"],"gallery":[["images/kulin-showpiece-1.jpg"]],"affiliateLink":"https://myntr.it/jWfhu5d"},
    {"id":62,"name":"Market99 Gold-Toned Elephant Figurine Showpiece","brand":"Market99","category":"showpieces","hot":false,"price":679,"oldPrice":1699,"rating":3.8,"description":"Market99 gold-toned elephant figurine - auspicious and elegant table showpiece.","image":"images/market99-showpiece-1.jpg","features":["Gold-toned elegant finish","Elephant figurine","Auspicious decor","Tabletop size"],"gallery":[["images/market99-showpiece-1.jpg"]],"affiliateLink":"https://myntr.it/iXhbJ8L"},
    {"id":63,"name":"The Artment Thought Thinker Gold Polyresin Set of 3 Small Showpiece","brand":"The Artment","category":"showpieces","hot":true,"price":569,"oldPrice":1549,"rating":4,"description":"The Artment Thought Thinker set of 3 small showpieces - gold polyresin art for living room.","image":"images/artment-thinker-1.jpg","features":["Set of 3 small showpieces","Gold polyresin art","Thought thinker sculpture","Living room accent"],"gallery":[["images/artment-thinker-1.jpg"]],"affiliateLink":"https://myntr.it/Iwc6Y6s"},
    {"id":64,"name":"Artisyn Meditating Lord Buddha Gold Polyresin Showpiece","brand":"Artisyn","category":"showpieces","hot":false,"price":309,"oldPrice":999,"rating":4.3,"description":"Artisyn meditating Lord Buddha showpiece - serene gold polyresin decor for home or garden.","image":"images/artisyn-buddha-1.jpg","features":["Meditating Buddha pose","Gold polyresin","Hand-crafted look","Home or garden decor"],"gallery":[["images/artisyn-buddha-1.jpg","images/artisyn-buddha-2.jpg","images/artisyn-buddha-3.jpg","images/artisyn-buddha-4.jpg","images/artisyn-buddha-5.jpg"]],"affiliateLink":"https://myntr.it/Blulhon"},
    {"id":65,"name":"Adhvik Black Religious Figurine Showpiece","brand":"Adhvik","category":"showpieces","hot":false,"price":362,"oldPrice":599,"rating":4,"description":"Adhvik black religious figurine showpiece - bold spiritual decor piece.","image":"images/adhvik-showpiece-1.jpg","features":["Bold black finish","Religious figurine","Spiritual decor","Compact size"],"gallery":[["images/adhvik-showpiece-1.jpg"]],"affiliateLink":"https://myntr.it/8hkZYJI"},
    {"id":66,"name":"CraftVatika Multicoloured Swan Love Birds Showpiece","brand":"CraftVatika","category":"showpieces","hot":true,"price":581,"oldPrice":1140,"rating":4.4,"description":"CraftVatika multicoloured swan love birds - charming couples decor showpiece.","image":"images/craftvatika-swan-1.jpg","features":["Swan love birds design","Multicoloured finish","Charming couples decor","Handcrafted feel"],"gallery":[["images/craftvatika-swan-1.jpg","images/craftvatika-swan-2.jpg","images/craftvatika-swan-3.jpg","images/craftvatika-swan-4.jpg","images/craftvatika-swan-5.jpg"]],"affiliateLink":"https://myntr.it/7KWXgci"},
    {"id":67,"name":"Flenzy Black Charming European Retro Telephone Curio Showpiece","brand":"Flenzy","category":"showpieces","hot":false,"price":712,"oldPrice":1649,"rating":4.6,"description":"Flenzy black European retro telephone curio - quirky vintage showpiece that grabs attention.","image":"images/flenzy-phone-1.jpg","features":["European retro telephone","Quirky curio piece","Black matte finish","Great conversation piece"],"gallery":[["images/flenzy-phone-1.jpg","images/flenzy-phone-2.jpg","images/flenzy-phone-3.jpg"]],"affiliateLink":"https://myntr.it/c8t9wPL"},
    {"id":68,"name":"The Artment Muscle Craft Accent Black Polyresin Medium Showpiece","brand":"The Artment","category":"showpieces","hot":false,"price":699,"oldPrice":1499,"rating":4,"description":"The Artment muscle craft accent showpiece - modern black polyresin art for the living room.","image":"images/artment-muscle-1.jpg","features":["Muscle craft accent","Modern black finish","Polyresin art","Living room statement"],"gallery":[["images/artment-muscle-1.jpg"]],"affiliateLink":"https://myntr.it/jKWma3n"}
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

grid.addEventListener('click', e => {
    const card = e.target.closest('.blog-card');
    if (!card || e.target.closest('.card-link')) return;
    const p = products.find(x => x.id === Number(card.dataset.id));
    if (p) openModal(p);
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

document.querySelectorAll('[data-scroll-cat]').forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault();
        setCat(el.dataset.scrollCat);
    });
});

document.querySelectorAll('.join-hub-btn').forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        const target = document.getElementById('newsletter');
        if (target) {
            const top = target.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: 'smooth' });
            setTimeout(() => {
                const input = target.querySelector('input[type="email"]');
                if (input) input.focus();
            }, 500);
        }
        closeMenu();
    });
});

document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const input = form.querySelector('input[type="email"]');
        const btn = form.querySelector('button');
        if (input && btn) {
            btn.textContent = 'Subscribed!';
            btn.disabled = true;
            input.value = '';
            input.placeholder = 'You are subscribed. Welcome aboard!';
            setTimeout(() => {
                btn.textContent = 'Subscribe';
                btn.disabled = false;
            }, 4000);
        }
    });
});
