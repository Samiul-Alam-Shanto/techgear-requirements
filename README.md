# 🛠️ প্রজেক্ট রিকোয়ারমেন্ট: GearLog (টেক ও ডেস্ক সেটআপ বিল্ডার)

## 🌐 API Endpoints

- সকল গ্যাজেটের ডেটা: `https://tech-gear-products-api.vercel.app/api/products`
- একটি নির্দিষ্ট গ্যাজেটের বিস্তারিত: `https://tech-gear-products-api.vercel.app/api/products/:id`

## 🔧 প্রধান শর্তাবলি —

### ১. 🔝 Navbar

Navbar-টি হুবহু ডার্ক UI ডিজাইনের মতো তৈরি করতে হবে।

**বাম পাশে (Left):**

- ব্র্যান্ডের লোগো আইকন এবং `GEARLOG` নাম থাকতে হবে।

**মাঝখানে (Middle):**

- `Gadgets` এবং `My Build` নেভিগেশন লিংক থাকতে হবে।
- সক্রিয় পেজের লিংকটি আলাদা ব্যাকগ্রাউন্ড বা রং দিয়ে হাইলাইট করতে হবে।

**ডান পাশে (Right):**

- দুটি স্ট্যাটাস ব্যাজ (কাউন্টার) থাকতে হবে—একটি Build ব্যাজ এবং অন্যটি Wishlist ব্যাজ। এগুলোতে বর্তমান আইটেমের সংখ্যা দেখাতে হবে।
- **Build ব্যাজ:** উজ্জ্বল অ্যাকসেন্ট ব্যাকগ্রাউন্ড (`#ccff00`) এবং ডার্ক টেক্সটসহ Filled Pill ডিজাইন হতে হবে।
- **Wishlist ব্যাজ:** Outline বা Border Pill ডিজাইন হতে হবে।
- Build এবং Wishlist—উভয় ব্যাজে ক্লিক করলে ব্যবহারকারীকে `/my-build` পেজে নিয়ে যেতে হবে।

### ২. 🅱️ Hero / Banner (হোম পেজের উপরে)

- **Eyebrow Text:** `"TECH SETUP CATALOG"` — নিয়ন অ্যাকসেন্ট রঙে থাকতে হবে।
- **প্রধান শিরোনাম:** `"BUILD WITH INTENT. PICK EVERY GEAR."` — বড় হাতের অক্ষরে, মোটা Display Font ব্যবহার করতে হবে; যেমন Oswald অথবা Bebas Neue।
- **সাবটাইটেল:**

  `"GearLog is a dark, no-nonsense desk setup companion: pick a gadget, lock it into today's build, and watch your dream rig come together."`

- **প্রধান CTA বাটন (আইকনসহ):** `"BROWSE GADGETS"`
  - এই বাটনে ক্লিক করলে কোনো রুট পরিবর্তন হবে না। বরং একই পেজের `#catalog` সেকশনে Smooth Scroll করে নিয়ে যেতে হবে।
- **ডান পাশের ছবি:** ডান পাশে একটি প্রিমিয়াম গেমিং/ডেস্ক গ্যাজেট অথবা 3D টেক ইলাস্ট্রেশন থাকতে হবে।

### ৩. ⚖️ Catalog Section (হোম পেজ)

- **শিরোনাম:** `"THE CATALOG"`
- **সাবটাইটেল:** `"Fifteen flagship gadgets covering every corner of your desk setup."`
- API থেকে পাওয়া সব গ্যাজেটকে বড় স্ক্রিনে ৩-কলামের গ্রিডে (৩×৫) কার্ড হিসেবে দেখাতে হবে।
  - মোবাইলে: ১টি কলাম।
  - ট্যাবলেটে: ২টি কলাম।
  - বড় স্ক্রিনে: ৩টি কলাম।

**প্রতিটি কার্ডে যা যা থাকতে হবে:**

- 📷 গ্যাজেটের ছবি (Image)।
- 🏷️ ক্যাটাগরি ট্যাগ পিলস (যেমন: Keyboards, Wireless)।
- 📛 গ্যাজেটের নাম বড় হাতের অক্ষরে (যেমন: `"KEYCHRON Q1 PRO"`)।
- 🖇️ ব্র্যান্ড ও কানেক্টিভিটি লাইন (যেমন: `"Keychron, Bluetooth / Wired"`)।
- 🔴 আইকনসহ Stats Row:
  - ডেলিভারি সময় (২৪ ঘণ্টা)।
  - মূল্য ($199)।
  - রেটিং (4.9)।
- 🧭 কোনো কার্ডে ক্লিক করলে ব্যবহারকারীকে সংশ্লিষ্ট গ্যাজেটের Details Page-এ (`/gadgets/:id`) নিয়ে যেতে হবে।

### ৪. 🖥️ Gadget Details Page — দুই-কলামের লেআউট

**বাম পাশে (Visual/Media):**

- গ্যাজেটের একটি বড়, উচ্চমানের ছবি পুরো কলামজুড়ে থাকতে হবে।

**ডান পাশে (Information Sections):**

- **শিরোনাম:** গ্যাজেটের নাম (যেমন: `"KEYCHRON Q1 PRO"`)।
- **সাবটাইটেল/বিবরণ:** গ্যাজেটটি সম্পর্কে ১–২ লাইনের বিবরণ।
- **ক্যাটাগরি ট্যাগ:** ক্যাটাগরির নামগুলো Pill আকারে থাকতে হবে (যেমন: Keyboards, Wireless)।

**Key Specs Table/Panel (Label + Value Rows):**

নিচের তথ্যগুলো লেবেল ও ভ্যালু আকারে দেখাতে হবে:

- BRAND & TYPE
- QUALITY TIER
- WARRANTY (YRS)
- STOCK STATUS
- DELIVERY TIME
- PRICE
- RATING

উদাহরণ:

- Brand & Type: Keychron
- Quality Tier: Aluminum / Flagship
- Warranty: ২ বছর
- Stock Status: ১০–১৫টি পিস
- Delivery Time: ২৪ ঘণ্টা
- Price: $199
- Rating: 4.9

**SETUP & CARE GUIDE Section:**

- গ্যাজেটটি সেটআপ করার নিয়ম নিয়ে ৪টি ধাপের একটি নম্বরযুক্ত তালিকা (১, ২, ৩, ৪) থাকতে হবে।

**Call-to-Action Buttons:**

- **প্রধান বাটন:** `"Add to today's build"` — আইকনসহ নিয়ন ব্যাকগ্রাউন্ড।
- **দ্বিতীয় বাটন:** `"Save for later"` — আইকনসহ Outline Border।

### ৫. ⚡ Details Page — বাটনের কার্যকারিতা

**"Add to today's build" বাটনে ক্লিক করলে:**

- গ্যাজেটটি `/my-build` পেজের `Today's Build` ট্যাবে যোগ হবে।
- Navbar-এর Build ব্যাজের কাউন্টার ১ বৃদ্ধি পাবে।
- একটি সুন্দর Toast Notification দেখাবে (যেমন: `"Added to today's build!"`)।

**"Save for later" বাটনে ক্লিক করলে:**

- গ্যাজেটটি `/my-build` পেজের `Wishlist` ট্যাবে যোগ হবে।
- Navbar-এর Wishlist ব্যাজের কাউন্টার ১ বৃদ্ধি পাবে।
- একটি Toast Notification দেখাবে (যেমন: `"Saved to wishlist!"`)।

### ৬. 📦 My Build Page (`/my-build`) — The Setup Log Page

- **শিরোনাম:** `"MY BUILD"`
- **সাবটাইটেল:** `"Cap of five gears for today's rig. Order them, then load more."`

**Metrics Summary Row (৩টি Stat Card):**

১. **Gadgets:** মোট আইটেমের সংখ্যা।

২. **Est. Delivery (hrs):** মোট ডেলিভারি সময়, ঘণ্টায়।

৩. **Total Budget ($):** মোট মূল্য।

- শুরুতে সবগুলো মেট্রিকের মান ০ থাকবে।
- Build List-এ কোনো আইটেম যোগ বা সরিয়ে ফেললে মেট্রিকগুলো তাৎক্ষণিকভাবে আপডেট হতে হবে।

**Tabs:**

- `Today's Build`
- `Wishlist`
- সক্রিয় ট্যাবটি আলাদাভাবে হাইলাইট করতে হবে।

**Loading State:**

- ডেটা লোড হওয়ার সময় `"Loading gadgets…"` লেখা অথবা একটি Spinner দেখাতে হবে।

**Planned Gadget Cards List:**

প্রতিটি আইটেমকে Horizontal Card Layout-এ দেখাতে হবে। প্রতিটি কার্ডে থাকতে হবে:

- গ্যাজেটের Thumbnail Image।
- গ্যাজেটের নাম।
- ব্র্যান্ডের তথ্য।
- Stats Row: ঘণ্টা (hrs), মূল্য ($), রেটিং।
- ডান পাশে ৩টি Action Button:
  1. **View Details:** ক্লিক করলে সংশ্লিষ্ট গ্যাজেটের Details Page-এ নিয়ে যাবে।
  2. **Mark as Ordered:** Check আইকনসহ বাটন।
  3. **Remove:** X আইকনসহ বাটন।

**Empty State (লিস্ট খালি থাকলে):**

- **শিরোনাম:** `"NOTHING HERE YET"`
- **সাবটাইটেল:** `"Browse the catalog and add a gadget to get your setup moving."`
- **CTA Button:** `"Go to gadgets"`
  - ক্লিক করলে হোম পেজে (`/`) নিয়ে যেতে হবে।

### ৭. 🦶 Footer ও অতিরিক্ত শর্তাবলি

**Footer:**

- ডার্ক ব্যাকগ্রাউন্ড থাকতে হবে।
- বাম পাশে লোগো ও `GEARLOG` নাম থাকবে।
- ডান পাশে নিচের Copyright Text থাকতে হবে:

  `"© 2026 GearLog — Tech Setup Catalog. Build smart, shop honest."`

**404 Page:**

- কোনো ভুল URL-এ গেলে সুন্দর একটি Custom 404 Not Found পেজ দেখাতে হবে।

**Loading Animation:**

- হোম পেজে গ্যাজেট Fetch হওয়ার সময় Skeleton অথবা Spinner Animation দেখাতে হবে।

### C1. Sort Dropdown (`/my-build` পেজে)

- ডান পাশে `"Sort By"` Dropdown থাকতে হবে।
- অপশনগুলো হবে:
  - Delivery
  - Price
  - Rating
- ডিফল্ট অপশন: `Delivery`।
- Dropdown-এর সঙ্গে Chevron আইকন থাকতে হবে।
- অপশন পরিবর্তন করলে বর্তমান ট্যাবের গ্যাজেট লিস্ট নতুনভাবে Sort হতে হবে।

### C2. GitHub README

- প্রজেক্টের বিস্তারিত তথ্যসহ একটি সুন্দর `README.md` ফাইল তৈরি করতে হবে।

### C3. Card Action Functionality (`/my-build` পেজে)

**Mark as Ordered:**

- বাটনে ক্লিক করলে গ্যাজেটটি Ordered হিসেবে চিহ্নিত হবে।
- একটি Toast Notification দেখাতে হবে।

**Remove (X):**

- বাটনে ক্লিক করলে গ্যাজেটটি লিস্ট থেকে মুছে যাবে।
- সংশ্লিষ্ট কাউন্টার ও Metric Card আপডেট হতে হবে।
- একটি Toast Notification দেখাতে হবে।

### ১. ৫-আইটেমের সর্বোচ্চ সীমা

- `Today's Build`-এ ৫টি গ্যাজেট যোগ হয়ে গেলে `"Add to today's build"` বাটনটি Disable করে দিতে হবে।

### ২. Search Filter

- গ্যাজেটের নাম অথবা ক্যাটাগরি ট্যাগ ব্যবহার করে গ্যাজেট খুঁজে বের করার জন্য একটি Search Box রাখতে হবে।
