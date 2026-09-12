import { MenuItem, ReviewItem, GalleryPhoto, ExperienceTile } from '../types';

export const RESTAURANT_INFO = {
  name: 'Om Sai Ki Rasoi',
  tagline: 'Where Every Meal Feels Like Home',
  location: 'Civil Lines, Prayagraj',
  fullAddress: '11A/9/1, Near High Court, M.G., Civil Lines, Prayagraj, Uttar Pradesh 211001',
  phone: '077050 11220',
  formattedPhone: '+91 77050 11220',
  whatsappNumber: '917705011220',
  googleRating: 4.3,
  reviewCount: '86+',
  priceRange: '₹200–₹400',
  serviceHighlights: 'All You Can Eat • Vegan Options • Family Dining',
  openingHours: 'Open daily until 10:30 PM (11:00 AM – 10:30 PM)',
  email: 'omsai.rasoi.prayagraj@gmail.com',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.8258284560777!2d81.8285514!3d25.4440939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398535084ce1c4c7%3A0xebe75b5bdfd94d80!2sHigh%20Court%2C%20Civil%20Lines%2C%20Prayagraj%2C%20Uttar%20Pradesh%20211001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  mapsDirectionUrl: 'https://maps.google.com/?q=Om+Sai+Ki+Rasoi+Civil+Lines+Prayagraj+High+Court',
  developerCredit: {
    name: 'RoadsideDeveloper',
    whatsapp: '+91 7654224826',
    call: '+91 8405918172'
  }
};

export const MENU_ITEMS: MenuItem[] = [
  // Indian
  {
    id: 'm1',
    name: 'Paneer Butter Masala',
    hindiName: 'पनीर बटर मसाला',
    category: 'Indian',
    description: 'Slow-simmered velvety cottage cheese in a rich tomato, cashew and butter gravy with aromatic whole spices.',
    price: 260,
    dietary: 'veg',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800',
    badge: "House Favorite",
    spiciness: 'medium'
  },
  {
    id: 'm2',
    name: 'Dal Makhani Rasoi Khas',
    hindiName: 'दाल मखनी रसोई खास',
    category: 'Indian',
    description: 'Black lentils slowly stewed overnight over slow charcoal embers, finished with churned butter and fresh cream.',
    price: 220,
    dietary: 'veg',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800',
    badge: "Signature",
    spiciness: 'mild'
  },
  {
    id: 'm3',
    name: 'Dum Pukht Subz Biryani',
    hindiName: 'दम पुख्त सब्ज़ बिरयानी',
    category: 'Indian',
    description: 'Aged basmati rice sealed in earthen handi with garden vegetables, saffron milk, fresh mint and caramelized shallots.',
    price: 240,
    dietary: 'veg',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800',
    badge: "Handi Cooked",
    spiciness: 'medium'
  },
  {
    id: 'm4',
    name: 'Tandoori Soya Chaap Tikka',
    hindiName: 'तंदूरी सोया चाप टिक्का',
    category: 'Indian',
    description: 'Tender soy protein marinated in hung curd, Kashmiri deghi mirch and mustard oil, charred in clay oven.',
    price: 230,
    dietary: 'vegan',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=800',
    spiciness: 'spicy'
  },

  // Chinese
  {
    id: 'm5',
    name: 'Crispy Honey Chilli Lotus Stem & Potato',
    hindiName: 'क्रिस्पी हनी चिली लोटस स्टेम',
    category: 'Chinese',
    description: 'Thinly sliced lotus root and crisp batons tossed in wok-fired honey chilli reduction and toasted sesame.',
    price: 210,
    dietary: 'vegan',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800',
    badge: "Crunch Classic",
    spiciness: 'medium'
  },
  {
    id: 'm6',
    name: 'Hakka Noodles & Dimsum Platter',
    hindiName: 'हक्का नूडल्स प्लैटर',
    category: 'Chinese',
    description: 'Wok-tossed thin wheat noodles paired with steamed vegetable dumplings and artisanal charred scallion dip.',
    price: 250,
    dietary: 'veg',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=800',
    spiciness: 'mild'
  },
  {
    id: 'm7',
    name: 'Schezwan Paneer Dry',
    hindiName: 'शेज़वान पनीर ड्राई',
    category: 'Chinese',
    description: 'Crisp cottage cheese tossed with fiery homemade Sichuan peppers, crunchy bell peppers, and scallions.',
    price: 240,
    dietary: 'veg',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=800',
    spiciness: 'spicy'
  },

  // Continental
  {
    id: 'm8',
    name: 'Creamy Sundried Tomato & Herb Pasta',
    hindiName: 'क्रीमी सनड्राइड टोमैटो पास्ता',
    category: 'Continental',
    description: 'Penne tossed with Italian herbs, roasted garlic, wilted baby spinach and parmesan-infused velvety cream.',
    price: 260,
    dietary: 'veg',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d62817ee?q=80&w=800',
    badge: "Chef Curated",
    spiciness: 'mild'
  },
  {
    id: 'm9',
    name: 'Exotic Garden Veg Sizzler',
    hindiName: 'गार्डन वेज सिज़लर',
    category: 'Continental',
    description: 'Smokin sizzler platter with grilled vegetables, herb rice, buttered corn on the cob, and house pepper sauce.',
    price: 320,
    dietary: 'veg',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800',
    badge: "Live Sizzling",
    spiciness: 'medium'
  },

  // Snacks
  {
    id: 'm10',
    name: 'Kurkure Dahi Ke Kebab',
    hindiName: 'दही के कबाब',
    category: 'Snacks',
    description: 'Melt-in-mouth spiced hung yogurt patties with a crisp exterior, served with mint and pomegranate chutney.',
    price: 190,
    dietary: 'veg',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
    badge: "Bestseller",
    spiciness: 'mild'
  },
  {
    id: 'm11',
    name: 'Stuffed Amritsari Kulcha with Chole',
    hindiName: 'अमृतसरी कुलचा छोले',
    category: 'Snacks',
    description: 'Crispy flaky clay-oven baked bread layered with spiced potato and paneer, served with raw onion and tangy tamarind.',
    price: 180,
    dietary: 'veg',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=800',
    spiciness: 'medium'
  },
  {
    id: 'm12',
    name: 'Corn Cheese Cigar Rolls',
    hindiName: 'कॉर्न चीज़ रोल्स',
    category: 'Snacks',
    description: 'Golden fried crispy pastry rolls filled with sweet golden corn and melted mozzarella, paired with sweet chilli dip.',
    price: 200,
    dietary: 'veg',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=800',
    spiciness: 'mild'
  },

  // Main Course
  {
    id: 'm13',
    name: 'Kadhai Paneer Angara',
    hindiName: 'कड़ाही पनीर अंगारा',
    category: 'Main Course',
    description: 'Succulent paneer cubes tossed in freshly pounded coriander seeds, dry red chillies, and bell peppers in cast iron.',
    price: 250,
    dietary: 'veg',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800',
    spiciness: 'spicy'
  },
  {
    id: 'm14',
    name: 'Banarasi Malai Kofta',
    hindiName: 'बनारसी मलाई कोफ्ता',
    category: 'Main Course',
    description: 'Silken paneer and khoya dumplings stuffed with raisins, gently bathed in a fragrant cashew-saffron gravy.',
    price: 280,
    dietary: 'veg',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800',
    badge: "Royalty Recipe",
    spiciness: 'mild'
  },
  {
    id: 'm15',
    name: 'Pindi Chana Masala (Vegan)',
    hindiName: 'पिंडी चना मसाला',
    category: 'Main Course',
    description: 'Rustic chickpeas simmered with anardana, roasted cumin, and black tea reduction for deep, earthy flavours.',
    price: 210,
    dietary: 'vegan',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800',
    badge: "100% Vegan",
    spiciness: 'medium'
  },

  // Desserts
  {
    id: 'm16',
    name: 'Kesar Pista Shahi Tukda',
    hindiName: 'शाही टुकड़ा',
    category: 'Desserts',
    description: 'Crisp ghee-fried bread soaked in cardamom sugar syrup, topped with thick rabdi, saffron strands and toasted slivers.',
    price: 150,
    dietary: 'veg',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800',
    badge: "Sweet Legacy",
    spiciness: 'mild'
  },
  {
    id: 'm17',
    name: 'Hot Sizzling Brownie with Vanilla Cream',
    hindiName: 'हॉट सिज़लिंग ब्राउनी',
    category: 'Desserts',
    description: 'Dense dark chocolate walnut fudge brownie served on a smoking cast-iron platter, poured over with hot chocolate ganache.',
    price: 180,
    dietary: 'veg',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800',
    spiciness: 'mild'
  },

  // Mocktails
  {
    id: 'm18',
    name: 'Prayag Jamun & Kala Khatta Fizz',
    hindiName: 'प्रयाग जामुन फ़िज़',
    category: 'Mocktails',
    description: 'Fresh blackberry and jamun pulp crushed with rock salt, roasted cumin, fresh lime, and sparkling tonic water.',
    price: 130,
    dietary: 'vegan',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800',
    badge: "Local Favorite",
    spiciness: 'mild'
  },
  {
    id: 'm19',
    name: 'Cucumber Mint Botanical Cooler',
    hindiName: 'कुकम्बर मिंट कूलर',
    category: 'Mocktails',
    description: 'Cold-pressed English cucumber, crushed garden spearmint, organic honey and splash of Himalayan pink salt.',
    price: 120,
    dietary: 'vegan',
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=800',
    spiciness: 'mild'
  },

  // Chef Specials
  {
    id: 'm20',
    name: 'Om Sai Grand Family Thali Feast',
    hindiName: 'ओम साई ग्रैंड पारिवारिक थाली',
    category: 'Chef Specials',
    description: 'The ultimate royal banquet: 2 Paneer gravies, Dal Makhani, Pulao, assorted tandoori breads, raita, salad, and dessert.',
    price: 360,
    dietary: 'veg',
    image: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?q=80&w=800',
    badge: "All-You-Can-Feast",
    isChefSpecial: true,
    spiciness: 'medium'
  },
  {
    id: 'm21',
    name: 'Tawa Paneer Khurchan with Butter Naan',
    hindiName: 'तवा पनीर खुरचन',
    category: 'Chef Specials',
    description: 'Fine slivers of fresh paneer griddled with hand-crushed tomatoes, shredded ginger, coriander seeds and kasoori methi.',
    price: 290,
    dietary: 'veg',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800',
    badge: "Chef Signature",
    isChefSpecial: true,
    spiciness: 'medium'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'r1',
    author: 'Advocate Anand Sharma',
    rating: 5,
    date: '1 week ago',
    text: 'Located right next to the High Court in Civil Lines, this has become our chambers daily lunch spot. The Paneer Butter Masala and Dal Makhani are consistently incredible. Warm ambience and prompt service.',
    tag: 'Frequent Diner · Civil Lines',
    avatarBg: '#6B4F3B'
  },
  {
    id: 'r2',
    author: 'Pooja Srivastava & Family',
    rating: 5,
    date: '2 weeks ago',
    text: 'Celebrated my father 60th birthday here with 14 family members. Every dish from the sizzler to the Thali was hot and flavourful. The staff went out of their way to make our family feel at home.',
    tag: 'Family Celebration',
    avatarBg: '#7A8B5A'
  },
  {
    id: 'r3',
    author: 'Rahul Mehrotra',
    rating: 5,
    date: '3 weeks ago',
    text: 'Civil Lines needed a restaurant that maintains clean hygiene, refined seating, and yet keeps prices so honest (₹250-₹350 per head!). The Kurkure Dahi Kebab is out of this world.',
    tag: 'Verified Google Review',
    avatarBg: '#D6B56C'
  },
  {
    id: 'r4',
    author: 'Dr. Sneha Verma',
    rating: 5,
    date: '1 month ago',
    text: 'Wonderful vegan options that are clearly marked and prepared fresh. The Pindi Chana and Mocktails were super refreshing. Clean kitchen and aesthetic interiors.',
    tag: 'Health & Vegan Dining',
    avatarBg: '#6B4F3B'
  },
  {
    id: 'r5',
    author: 'Vikramaditya Singh',
    rating: 4,
    date: '1 month ago',
    text: 'Excellent quality food with authentic North Indian taste. The garlic naan and Dum Biryani were freshly prepared and aromatic. Best family dining restaurant in Prayagraj.',
    tag: 'Google Local Guide',
    avatarBg: '#7A8B5A'
  },
  {
    id: 'r6',
    author: 'Meenakshi & Alok Dwivedi',
    rating: 5,
    date: '2 months ago',
    text: 'We order from Om Sai Ki Rasoi on WhatsApp regularly for weekend dinners at home. Always arrives piping hot and sealed carefully. Outstanding taste every single time.',
    tag: 'Regular Diner',
    avatarBg: '#D6B56C'
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'g1',
    title: 'Warm Architectural Dining Space',
    category: 'interior',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200',
    aspect: 'wide',
    caption: 'Natural ash wood, soft architectural illumination and spacious family booths.'
  },
  {
    id: 'g2',
    title: 'Clay Oven Tandoor Artistry',
    category: 'culinary',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000',
    aspect: 'tall',
    caption: 'Slow-charred perfection over live embers by master cooks.'
  },
  {
    id: 'g3',
    title: 'Rich Indian Gravies & Artisanal Naan',
    category: 'culinary',
    imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1000',
    aspect: 'square',
    caption: 'Prepared daily with whole hand-ground spices and fresh dairy.'
  },
  {
    id: 'g4',
    title: 'Generations Around The Table',
    category: 'family',
    imageUrl: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1200',
    aspect: 'wide',
    caption: 'Comfortable, spacious seating designed for multi-generational conversations.'
  },
  {
    id: 'g5',
    title: 'Botanical Craft Mocktails',
    category: 'culinary',
    imageUrl: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1000',
    aspect: 'tall',
    caption: 'Locally inspired herbs, crushed spices and chilled mountain infusions.'
  },
  {
    id: 'g6',
    title: 'Evening Warmth & Soft Illumination',
    category: 'ambience',
    imageUrl: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1000',
    aspect: 'square',
    caption: 'Intimate ambiance with Scandinavian minimalist lines and Indian warmth.'
  },
  {
    id: 'g7',
    title: 'Banquet & Birthday Celebrations',
    category: 'family',
    imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000',
    aspect: 'tall',
    caption: 'Dedicated arrangements for birthdays, anniversaries, and office luncheons.'
  },
  {
    id: 'g8',
    title: 'Dessert Mastercraft',
    category: 'culinary',
    imageUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1200',
    aspect: 'wide',
    caption: 'Traditional Indian sweet craftsmanship reimagined with contemporary poise.'
  }
];

export const EXPERIENCE_TILES: ExperienceTile[] = [
  {
    id: 'exp-1',
    title: 'Family Dining',
    subtitle: 'Warm Gatherings',
    description: 'Generously proportioned tables, comforting flavours, and a tranquil space where three generations dine together happily.',
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=800',
    tag: 'Spacious & Welcoming'
  },
  {
    id: 'exp-2',
    title: 'Birthday Celebrations',
    subtitle: 'Unforgettable Milestones',
    description: 'Personalized table arrangements, celebratory dessert sizzlers, and heartfelt hospitality to make birthdays truly memorable.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800',
    tag: 'Custom Arrangements'
  },
  {
    id: 'exp-3',
    title: 'Group Gatherings',
    subtitle: 'Shared Feasts',
    description: 'Platters made for passing around, endless conversations, and abundant servings designed for friendship and camaraderie.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800',
    tag: 'Large Seating'
  },
  {
    id: 'exp-4',
    title: 'Private Events',
    subtitle: 'Exclusive Dining',
    description: 'Curated tasting menus and reserved dining sections for intimate reunions, office achievements, or private family get-togethers.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800',
    tag: 'Reserved Sections'
  },
  {
    id: 'exp-5',
    title: 'Special Occasions',
    subtitle: 'Anniversaries & Festivities',
    description: 'Delicate candle-lit corners, chef specials, and champagne mocktails to commemorate life’s most meaningful dates.',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=800',
    tag: 'Elegant Ambiance'
  },
  {
    id: 'exp-6',
    title: 'Casual Lunch',
    subtitle: 'Civil Lines Repose',
    description: 'A serene midday respite from the busy High Court and M.G. Marg corridors with fast, freshly prepared nourishing thalis.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800',
    tag: 'Quick & Hearty'
  },
  {
    id: 'exp-7',
    title: 'Dinner With Friends',
    subtitle: 'Laughter & Flavours',
    description: 'Crispy starters, sizzling platters, aromatic biryanis, and long leisurely conversations late into the evening.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800',
    tag: 'Leisurely Evenings'
  },
  {
    id: 'exp-8',
    title: 'Celebrations',
    subtitle: 'Everyday Joys',
    description: 'Because any ordinary Tuesday dinner can be turned into a celebration when the food is cooked with soul and served with love.',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800',
    tag: 'Heartfelt Service'
  }
];

export const VALUES_LIST = [
  {
    title: 'Fresh Ingredients',
    desc: 'Locally sourced daily produce, unadulterated spices, and pure dairy.'
  },
  {
    title: 'Carefully Prepared',
    desc: 'Authentic slow-cooking traditions, handcrafted marinades, and charcoal tandoor.'
  },
  {
    title: 'Served Fresh',
    desc: 'Cooked to order and served piping hot to your table with warm Indian grace.'
  }
];

export const WHY_OM_SAI = [
  {
    iconName: 'Leaf',
    title: 'Fresh Ingredients',
    description: 'Farm-fresh vegetables, cold-pressed oils, and spices freshly ground in-house every morning.'
  },
  {
    iconName: 'HeartHandshake',
    title: 'Family Friendly',
    description: 'Spacious child-friendly seating, gentle spice adjustments, and comfortable high chairs.'
  },
  {
    iconName: 'Sparkles',
    title: 'Vegan Options',
    description: 'Dedicated plant-based specialties clearly designated so everyone eats with peace of mind.'
  },
  {
    iconName: 'Home',
    title: 'Comfortable Ambience',
    description: 'Warm natural wood textures, acoustic softness, and balanced architectural lighting.'
  },
  {
    iconName: 'ShieldCheck',
    title: 'Hygienic Kitchen',
    description: 'Exemplary culinary sanitation standards, temperature-controlled prep, and filtered water.'
  },
  {
    iconName: 'Users',
    title: 'Warm Hospitality',
    description: 'Attentive service rooted in traditional Indian warmth where every guest is revered as family.'
  },
  {
    iconName: 'Award',
    title: 'Quality Food',
    description: 'Consistent recipes tested over years to deliver rich taste without heavy synthetic oils.'
  },
  {
    iconName: 'Banknote',
    title: 'Affordable Dining',
    description: 'Premium dining ambiance and generous portions priced at a modest ₹200–₹400 per guest.'
  }
];
