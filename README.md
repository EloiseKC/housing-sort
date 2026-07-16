# Housing 2 — Inventory Sort

Drag-and-drop categorisation tool for playtesting the Housing 2 inventory filter system.

---

## Folder structure

```
/
├── index.html              ← main tool (deploy this to GitHub Pages)
├── apps-script.js          ← paste into Google Apps Script
├── README.md
├── icons/
│   ├── cat1.png            ← Seating & Beds
│   ├── cat2.png            ← Tables & Surfaces
│   ├── cat3.png            ← Storage
│   ├── cat4.png            ← Appliances
│   ├── cat5.png            ← Hobbies
│   └── cat6.png            ← Decor
└── thumbnails/
    ├── 1.png               ← Palm Plant
    ├── 4.png               ← Modern Flat Screen TV
    ├── 5.png               ← Classical Armchair
    └── ...                 ← one PNG per furniture ID (see list below)
```

---

## Setup — step by step

### 1. Add images

Place your files in the correct folders:

**Category icons** — `icons/cat1.png` through `icons/cat6.png`

| File     | Category         |
|----------|------------------|
| cat1.png | Seating & Beds   |
| cat2.png | Tables & Surfaces|
| cat3.png | Storage          |
| cat4.png | Appliances       |
| cat5.png | Hobbies          |
| cat6.png | Decor            |

**Furniture thumbnails** — `thumbnails/{id}.png`

Any image size works. Recommended: square, 120×120px minimum.
Missing images show a text placeholder automatically — no errors.

| File   | Furniture               | File   | Furniture               |
|--------|-------------------------|--------|-------------------------|
| 1.png  | Palm Plant              | 62.png | Retro Bookshelf         |
| 4.png  | Modern Flat Screen TV   | 63.png | Modern Closet           |
| 5.png  | Classical Armchair      | 64.png | Rustic Closet           |
| 6.png  | Industrial Dining Chair | 65.png | Locker                  |
| 7.png  | Mid-Century Dining Chair| 66.png | Modern Double Drawer    |
| 8.png  | Cottage Sofa            | 67.png | Rustic Sideboard        |
| 11.png | Mid-Century Dining Table| 68.png | Industrial Sideboard    |
| 18.png | Paper Bin               | 69.png | Retro Sideboard         |
| 19.png | Modern Armchair         | 70.png | Modern Shelf            |
| 20.png | Egg Shell Armchair      | 71.png | Rustic Shelf            |
| 21.png | Modern Sofa             | 72.png | Industrial Shelf        |
| 22.png | Chesterfield Sofa       | 73.png | Neon Shelf              |
| 23.png | Industrial Coffee Table | 74.png | Modern Lamp             |
| 24.png | Rustic Coffee Table     | 75.png | Rustic Lamp             |
| 25.png | Marble Coffee Table     | 76.png | Industrial Lamp         |
| 26.png | Stove                   | 77.png | Sputnik Lamp            |
| 27.png | Chimney                 | 78.png | Monstera Plant          |
| 28.png | Washing Machine         | 79.png | Plant Wall              |
| 29.png | Tulip Table             | 80.png | Cacti                   |
| 30.png | Rustic Table            | 81.png | Modern Rug              |
| 31.png | Rustic Chair            | 82.png | Persian Rug             |
| 32.png | Modern Desk             | 83.png | Boho Rug                |
| 33.png | Neon Desk               | 84.png | Cow Rug                 |
| 34.png | Executive Desk          | 85.png | Dumbbell Rack           |
| 35.png | Office Rolling Chair    | 86.png | Punching Bag            |
| 36.png | Neon Rolling Chair      | 87.png | Exercise Bike           |
| 37.png | Executive Rolling Chair | 88.png | Trophy Shelf            |
| 38.png | Modern Oven             | 89.png | Guitar                  |
| 39.png | Retro Oven              | 90.png | Piano                   |
| 40.png | Pizza Oven              | 91.png | Vintage Record Player   |
| 41.png | Modern Fridge           | 92.png | Jukebox                 |
| 42.png | Retro Fridge            | 93.png | Skeleton                |
| 43.png | Mini Fridge             | 94.png | Vintage Globe           |
| 44.png | Modern Kitchen Cabinet  | 95.png | Telescope               |
| 45.png | Rustic Kitchen Cabinet  | 96.png | Pin Board               |
| 46.png | Marble Kitchen Cabinet  | 97.png | Teddy Bear              |
| 47.png | Modern Sink             | 98.png | Billard Table           |
| 48.png | Rustic Sink             | 99.png | Toy Box                 |
| 49.png | Marble Sink             | 100.png| Arcade Machine          |
| 50.png | Trashcan                | 101.png| Traffic Rug             |
| 51.png | Dishwasher              | 102.png| Aquarium                |
| 52.png | Industrial Bed          | 103.png| Pet Bed                 |
| 53.png | Modern Bed              | 104.png| Marble Statue           |
| 54.png | Racing Bed              | 105.png| Fishing Trophy          |
| 55.png | Rustic Bed              | 106.png| Retro TV                |
| 56.png | Modern Nightstand       | 107.png| Curtain A               |
| 57.png | Rustic Nightstand       | 108.png| Curtain B               |
| 58.png | Round Side Table        | 109.png| Speaker                 |
| 59.png | Modern Bookshelf        | 110.png| Coat Rack               |
| 60.png | Rustic High Shelves     |        |                         |
| 61.png | Industrial Bookshelf    |        |                         |

---

### 2. Set up Google Apps Script

1. Open your Google Sheet
2. **Extensions → Apps Script**
3. Delete any existing code and paste the full contents of `apps-script.js`
4. **Deploy → New deployment**
   - Type: Web app
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Click Deploy — copy the URL

### 3. Configure the webhook

In `index.html`, find this line near the top of the script:

```javascript
const WEBHOOK_URL = '';
```

Replace with:

```javascript
const WEBHOOK_URL = 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec';
```

### 4. Deploy to GitHub Pages

1. Push the full folder to your GitHub repo
2. **Settings → Pages → Source: main branch / root**
3. Share the generated URL with testers

---

## How to use

- **Click** a furniture thumbnail to select it (gold border appears)
- **Click a category** above to assign it
- Or **drag and drop** directly onto a category
- **Click a mini-thumbnail** inside a category to send it back to the pool
- Enter your name (optional) and click **Submit** when done
- Partial submissions are allowed with a confirmation prompt

---

## Google Sheet output

Each submission creates one row per furniture item in a sheet called **Sort Results**:

| Timestamp | Respondent | Session ID | Furniture ID | Furniture Name | Furniture Type | Category ID | Category Name |
|-----------|------------|------------|--------------|----------------|----------------|-------------|---------------|
| 2026-07-15T... | Elo | abc123 | 1 | Palm Plant | Plant | 6 | Decor |
| 2026-07-15T... | Elo | abc123 | 4 | Modern Flat Screen TV | TV | 5 | Hobbies |

Filter by **Session ID** to see one full submission. Filter by **Furniture ID** to see how different testers categorised the same item.
