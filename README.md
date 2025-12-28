# Shopify Liquid Skills Test

This repository demonstrates my familiarity with **Shopify Liquid**, coding style, and component development using the **Dawn theme**. The goal was to create custom sections, snippets, and assets according to the given specifications.

## Setup

1. Forked and cloned the [Shopify Dawn theme](https://github.com/Shopify/dawn) as the base.
2. All custom sections, snippets, and assets are added under the appropriate theme directories.

---

## Sections

### 1. `promotional-banner.liquid`
- **Location:** `sections/promotional-banner.liquid`
- **Purpose:** Display a promotional banner with editable fields.
- **Schema Fields:**
  - `Title` – main heading for the banner.
  - `Description` – text content below the title (max 350 characters).
  - `Button/Anchor link` – URL for the call-to-action.
  - `Image/File` – banner image.
- **Functionality:** Fields are editable from the Shopify theme editor and rendered using Liquid.

### 2. `section-rgb-card.liquid`
- **Location:** `sections/section-rgb-card.liquid`
- **Purpose:** Display a card component with RGB styling.
- **Assets:**
  - `assets/rgb-card.css` – custom CSS for styling.
  - `assets/rgb-card.js` – custom JS for dynamic behavior.
- **Functionality:** Section includes custom CSS and JS to match the design provided.

---

## Snippets

### 1. `card-promo.liquid`
- **Location:** `snippets/card-promo.liquid`
- **Purpose:** Reusable card snippet.
- **Variables:** `title` – example: `"Hello World"`.
- **Functionality:** Passes the `title` variable to `card-content.liquid` for rendering.

### 2. `card-content.liquid`
- **Location:** `snippets/card-content.liquid`
- **Purpose:** Display content of the card.
- **Functionality:** Receives `title` from `card-promo.liquid` and renders it inside the snippet.

---

## Assets

- **CSS:** `rgb-card.css` – used in `section-rgb-card.liquid` for styling cards.
- **JS:** `rgb-card.js` – used in `section-rgb-card.liquid` for dynamic interactions.
- Banner images and files are included in the `assets` folder.

---

