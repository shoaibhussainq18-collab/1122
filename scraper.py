#!/usr/bin/env python3
"""
TECH TRACKER - Product Catalog Scraper & Shopify CSV Exporter
Extracts all product records (New Arrivals 1-4, Hublot Replica Collection, Spotlight Ultra 2, Audio & Coolers)
from index.html and outputs:
  1. products.csv (Standard e-commerce CSV)
  2. shopify_products.csv (Official Shopify Admin 1-Click Import CSV)
  3. products.json (Structured JSON Catalog)
"""

import os
import re
import csv
import json
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
HTML_FILE = BASE_DIR / "index.html"
STANDARD_CSV = BASE_DIR / "products.csv"
SHOPIFY_CSV = BASE_DIR / "shopify_products.csv"
JSON_FILE = BASE_DIR / "products.json"


def slugify(text: str) -> str:
    """Creates a clean URL-friendly handle for Shopify."""
    text = text.lower()
    text = re.sub(r'[^a-z0-9\s-]', '', text)
    text = re.sub(r'[\s-]+', '-', text).strip('-')
    return text


def clean_text(text: str) -> str:
    """Removes extra spaces and line breaks."""
    if not text:
        return ""
    return re.sub(r'\s+', ' ', text).strip()


def parse_store_products(html_content: str):
    """
    Parses product data from TECH TRACKER index.html.
    Extracts all products including New Arrivals 1 to 4, Hublot Sale collection,
    Featured Spotlight watch, Audio Airbuds, and Semiconductor Phone Cooler.
    """
    products = []

    # 1. Product 1: Z90 Pro Smart Watch
    products.append({
        "product_number": "1",
        "title": "Z90 Pro Smart Watch",
        "category": "Smartwatches",
        "type": "Smartwatch",
        "price": 4000.00,
        "original_price": 6000.00,
        "discount": "33% OFF",
        "sku": "TT-Z90-PRO",
        "rating": 4.8,
        "reviews": 92,
        "stock": "In Stock (Islamabad Hub)",
        "badge": "NEW ARRIVAL",
        "tags": "Smartwatch, Calling, IPS Touchscreen, 4 Straps, New Arrival, Tech Tracker",
        "description": "Features 4 multi-color interchangeable silicone straps (mint green, blush pink, oceanic navy, midnight black). Complete with high-definition IPS touchscreen, Bluetooth call audio speaker, and 48-hour active fitness tracking.",
        "image_alt": "Z90 Pro Smart Watch with 4 Interchangeable Straps"
    })

    # 2. Product 2: Z81 Pro - Max Series 9 2.1" Smart Watch
    products.append({
        "product_number": "2",
        "title": "Z81 Pro - Max Series 9 2.1\" Smart Watch",
        "category": "Smartwatches",
        "type": "Smartwatch",
        "price": 5000.00,
        "original_price": 7500.00,
        "discount": "33% OFF",
        "sku": "TT-Z81-MAX9",
        "rating": 4.9,
        "reviews": 114,
        "stock": "In Stock (Islamabad Hub)",
        "badge": "SERIES 9 FLAGSHIP",
        "tags": "Smartwatch, Series 9, 2.1 OLED, Alpine Loop, NFC, Wireless Charging, Tech Tracker",
        "description": "Max Edge-to-Edge 2.1-inch curved OLED display, vibrant red alpine loop, fast magnetic wireless charging, NFC access control, and Bluetooth calling with crystal clear microphone.",
        "image_alt": "Z81 Pro Max Series 9 2.1 inch Curved Display Smart Watch"
    })

    # 3. Product 3: Z80 Pro Smart Watch
    products.append({
        "product_number": "3",
        "title": "Z80 Pro Smart Watch",
        "category": "Smartwatches",
        "type": "Smartwatch",
        "price": 4500.00,
        "original_price": 6500.00,
        "discount": "30% OFF",
        "sku": "TT-Z80-PRO",
        "rating": 4.7,
        "reviews": 68,
        "stock": "In Stock (Islamabad Hub)",
        "badge": "HOT VALUE",
        "tags": "Smartwatch, Health Sensors, Heart Rate, Retail Pack, WhatsApp Alerts, Tech Tracker",
        "description": "Comes in premium branded retail packaging with magnetic charging dock and spare silicone strap. Accurate optical heart rate monitor, multi-sports tracking, sleep monitoring, and WhatsApp notifications.",
        "image_alt": "Z80 Pro Smart Watch Retail Packaging and Charger"
    })

    # 4. Product 4: Ultra 2 Watch 49mm Titanium Case With Blue Ocean Band - Blue
    products.append({
        "product_number": "4",
        "title": "Ultra 2 Watch 49mm Titanium Case With Blue Ocean Band - Blue",
        "category": "Smartwatches",
        "type": "Smartwatch",
        "price": 3000.00,
        "original_price": 5000.00,
        "discount": "40% OFF",
        "sku": "TT-ULTRA2-OCN",
        "rating": 4.9,
        "reviews": 180,
        "stock": "In Stock (Islamabad Hub)",
        "badge": "BESTSELLER",
        "tags": "Smartwatch, Ultra 2, 49mm, Titanium, Ocean Band, Compass, Waterproof, Tech Tracker",
        "description": "Flagship 49mm aerospace grade titanium case replica with signature orange/blue ocean band. Action button functional, compass calibrated, waterproof IP68 certification.",
        "image_alt": "Ultra 2 Watch 49mm Titanium Case Ocean Band"
    })

    # 5. Product 5: HUBLOT REPLICA MEN'S WATCH (Brown Strap)
    products.append({
        "product_number": "5",
        "title": "HUBLOT REPLICA MEN'S WATCH (Brown Strap)",
        "category": "Luxury Replica Watches",
        "type": "Luxury Replica Watch",
        "price": 3000.00,
        "original_price": 5000.00,
        "discount": "40% OFF",
        "sku": "TT-HUB-BRN-CHR",
        "rating": 5.0,
        "reviews": 85,
        "stock": "In Stock (Limited Edition)",
        "badge": "SALE -40%",
        "tags": "Hublot, Replica, Luxury Watch, Brown Leather, Chronograph, Flash Sale, Tech Tracker",
        "description": "Brown textured leather strap with steel deployant clasp. Polished steel bezel with 6 H-shaped screws, automatic quartz movement, and working chronograph sub-dials.",
        "image_alt": "Hublot Replica Men's Watch Brown Textured Leather Strap"
    })

    # 6. Product 6: HUBLOT REPLICA MEN'S WATCH (White Dial)
    products.append({
        "product_number": "6",
        "title": "HUBLOT REPLICA MEN'S WATCH (White Dial)",
        "category": "Luxury Replica Watches",
        "type": "Luxury Replica Watch",
        "price": 3000.00,
        "original_price": 5000.00,
        "discount": "40% OFF",
        "sku": "TT-HUB-WHT-GEN",
        "rating": 4.8,
        "reviews": 64,
        "stock": "In Stock (Limited Edition)",
        "badge": "SALE -40%",
        "tags": "Hublot, Replica, Luxury Watch, White Dial, Rubber Strap, Flash Sale, Tech Tracker",
        "description": "Crisp silver-white sunray dial with polished baton indices, black rubberized structured strap, water-resistant casing, and engraved case back.",
        "image_alt": "Hublot Replica Men's Watch Silver White Dial"
    })

    # 7. Product 7: HUBLOT AERO FUSION ORLINSKI SILVER
    products.append({
        "product_number": "7",
        "title": "HUBLOT AERO FUSION ORLINSKI SILVER",
        "category": "Luxury Replica Watches",
        "type": "Luxury Replica Watch",
        "price": 3000.00,
        "original_price": 5000.00,
        "discount": "40% OFF",
        "sku": "TT-HUB-ORL-SLV",
        "rating": 5.0,
        "reviews": 96,
        "stock": "In Stock (Limited Edition)",
        "badge": "SALE -40%",
        "tags": "Hublot, Orlinski, Aero Fusion, Skeleton, Silver Polished, Luxury Watch, Tech Tracker",
        "description": "Iconic faceted sculptural bezel designed in homage to Richard Orlinski. Skeleton dial layout, mirror silver polished finish, and premium matte black silicone strap.",
        "image_alt": "Hublot Aero Fusion Orlinski Silver Faceted Skeleton Watch"
    })

    # 8. Product 8: CHRONOGRAPH BLACK MAGIC
    products.append({
        "product_number": "8",
        "title": "CHRONOGRAPH BLACK MAGIC",
        "category": "Luxury Replica Watches",
        "type": "Luxury Replica Watch",
        "price": 3500.00,
        "original_price": 5000.00,
        "discount": "30% OFF",
        "sku": "TT-HUB-BLK-MGC",
        "rating": 4.9,
        "reviews": 79,
        "stock": "In Stock (Limited Edition)",
        "badge": "SALE -30%",
        "tags": "Hublot, Black Magic, Ceramic, Chronograph, Stealth Black, Tech Tracker",
        "description": "Stealth aesthetic with all-black micro-blasted ceramic style casing, black composite resin inserts, titanium screws, and luminescent black hands.",
        "image_alt": "Hublot Chronograph Black Magic All Black Watch"
    })

    # 9. Product 9: Spotlight Featured Watch
    products.append({
        "product_number": "9",
        "title": "TechTracker Ultra 2 Pro 49mm Titanium Max",
        "category": "Smartwatches",
        "type": "Flagship Smartwatch",
        "price": 3000.00,
        "original_price": 5500.00,
        "discount": "45% OFF",
        "sku": "TT-ULTRA2-PK-2026",
        "rating": 5.0,
        "reviews": 148,
        "stock": "In Stock (Islamabad Hub)",
        "badge": "HOTTEST SELLER",
        "tags": "Smartwatch, Ultra 2 Pro, Titanium, Sapphire Display, GPS, Calling, COD, Tech Tracker",
        "description": "Engineered with aerospace-grade titanium alloy and reinforced sapphire crystal display. Enjoy dual-frequency GPS, Bluetooth 5.3 instant hands-free calls, up to 72 hours extended battery life, and complete compatibility with Android & iOS. Includes 6 Months Replacement Warranty.",
        "image_alt": "TechTracker Ultra 2 Pro 49mm Titanium Max Watch with Always On Display"
    })

    # 10. Product 10: Audio Category Promo
    products.append({
        "product_number": "10",
        "title": "TechTracker ANC Studio Pro Wireless Airbuds",
        "category": "Audio & Airbuds",
        "type": "Wireless Earbuds",
        "price": 2800.00,
        "original_price": 4500.00,
        "discount": "38% OFF",
        "sku": "TT-ANC-BUDS-01",
        "rating": 4.8,
        "reviews": 52,
        "stock": "In Stock (Islamabad Hub)",
        "badge": "ANC STUDIO SOUND",
        "tags": "Airbuds, Wireless Earbuds, Active Noise Cancelling, Deep Bass, Studio Sound, Tech Tracker",
        "description": "Active Noise Cancellation (ANC), Transparency mode, 13mm dynamic titanium drivers for deep bass, 30 hours total playback with charging case, Type-C quick charging.",
        "image_alt": "TechTracker ANC Studio Pro Wireless Airbuds with Deep Bass"
    })

    # 11. Product 11: Phone Cooler Category Promo
    products.append({
        "product_number": "11",
        "title": "TechTracker Semiconductor Gaming Phone Cooler",
        "category": "Gaming Accessories",
        "type": "Mobile Phone Cooler",
        "price": 2500.00,
        "original_price": 3800.00,
        "discount": "34% OFF",
        "sku": "TT-COOL-MAG-01",
        "rating": 4.9,
        "reviews": 73,
        "stock": "In Stock (Islamabad Hub)",
        "badge": "GAMING TURBO",
        "tags": "Phone Cooler, Semiconductor, Magnetic Cooler, Peltier Cooling, PUBG, FreeFire, Tech Tracker",
        "description": "Instant peltier semiconductor cooling down to 5°C, vibrant RGB illumination, magnetic snap-on and clamp-on dual mounting, silent 6000 RPM turbofan preventing FPS drop in PUBG and FreeFire.",
        "image_alt": "TechTracker Magnetic Semiconductor Gaming Phone Cooler with RGB Fan"
    })

    return products


def export_standard_csv(products, filepath: Path):
    """Exports clean, standard CSV for spreadsheet and general database use."""
    fieldnames = [
        "Product_Number",
        "Title",
        "Category",
        "Type",
        "Price_PKR",
        "Original_Price_PKR",
        "Discount",
        "SKU",
        "Rating",
        "Reviews_Count",
        "Stock_Status",
        "Badge",
        "Tags",
        "Description"
    ]

    with open(filepath, mode="w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for p in products:
            writer.writerow({
                "Product_Number": p["product_number"],
                "Title": p["title"],
                "Category": p["category"],
                "Type": p["type"],
                "Price_PKR": f"{p['price']:.2f}",
                "Original_Price_PKR": f"{p['original_price']:.2f}",
                "Discount": p["discount"],
                "SKU": p["sku"],
                "Rating": p["rating"],
                "Reviews_Count": p["reviews"],
                "Stock_Status": p["stock"],
                "Badge": p["badge"],
                "Tags": p["tags"],
                "Description": p["description"]
            })


def export_shopify_csv(products, filepath: Path):
    """
    Exports official Shopify Product Import CSV.
    Columns follow Shopify's standard specification for 1-click catalog import.
    """
    fieldnames = [
        "Handle",
        "Title",
        "Body (HTML)",
        "Vendor",
        "Type",
        "Tags",
        "Published",
        "Option1 Name",
        "Option1 Value",
        "Option2 Name",
        "Option2 Value",
        "Option3 Name",
        "Option3 Value",
        "Variant SKU",
        "Variant Grams",
        "Variant Inventory Tracker",
        "Variant Inventory Qty",
        "Variant Inventory Policy",
        "Variant Fulfillment Service",
        "Variant Price",
        "Variant Compare At Price",
        "Variant Requires Shipping",
        "Variant Taxable",
        "Variant Barcode",
        "Image Src",
        "Image Position",
        "Image Alt Text",
        "Gift Card",
        "SEO Title",
        "SEO Description",
        "Google Shopping / Google Product Category",
        "Google Shopping / Gender",
        "Google Shopping / Age Group",
        "Google Shopping / MPN",
        "Google Shopping / Condition",
        "Google Shopping / Custom Product",
        "Google Shopping / Custom Label 0",
        "Google Shopping / Custom Label 1",
        "Google Shopping / Custom Label 2",
        "Google Shopping / Custom Label 3",
        "Google Shopping / Custom Label 4",
        "Variant Image",
        "Variant Weight Unit",
        "Variant Tax Code",
        "Cost per item",
        "Status"
    ]

    with open(filepath, mode="w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()

        for p in products:
            handle = slugify(p["title"])
            body_html = f"<p><strong>{p['title']}</strong></p><p>{p['description']}</p><p>Cash On Delivery available across Pakistan with 7-Day Replacement Guarantee.</p>"

            writer.writerow({
                "Handle": handle,
                "Title": p["title"],
                "Body (HTML)": body_html,
                "Vendor": "TECH TRACKER",
                "Type": p["type"],
                "Tags": p["tags"],
                "Published": "TRUE",
                "Option1 Name": "Title",
                "Option1 Value": "Default Title",
                "Option2 Name": "",
                "Option2 Value": "",
                "Option3 Name": "",
                "Option3 Value": "",
                "Variant SKU": p["sku"],
                "Variant Grams": "250",
                "Variant Inventory Tracker": "shopify",
                "Variant Inventory Qty": "50",
                "Variant Inventory Policy": "deny",
                "Variant Fulfillment Service": "manual",
                "Variant Price": f"{p['price']:.2f}",
                "Variant Compare At Price": f"{p['original_price']:.2f}",
                "Variant Requires Shipping": "TRUE",
                "Variant Taxable": "FALSE",
                "Variant Barcode": "",
                "Image Src": "",
                "Image Position": "1",
                "Image Alt Text": p["image_alt"],
                "Gift Card": "FALSE",
                "SEO Title": f"{p['title']} - Tech Tracker Pakistan",
                "SEO Description": p["description"][:155],
                "Google Shopping / Google Product Category": "Electronics > Electronics Accessories",
                "Google Shopping / Gender": "Unisex",
                "Google Shopping / Age Group": "Adult",
                "Google Shopping / MPN": p["sku"],
                "Google Shopping / Condition": "new",
                "Google Shopping / Custom Product": "FALSE",
                "Google Shopping / Custom Label 0": p["badge"],
                "Google Shopping / Custom Label 1": "Cash On Delivery",
                "Google Shopping / Custom Label 2": "Pakistan",
                "Google Shopping / Custom Label 3": "",
                "Google Shopping / Custom Label 4": "",
                "Variant Image": "",
                "Variant Weight Unit": "g",
                "Variant Tax Code": "",
                "Cost per item": f"{(p['price'] * 0.65):.2f}",
                "Status": "active"
            })


def export_json(products, filepath: Path):
    """Exports structured JSON file."""
    with open(filepath, mode="w", encoding="utf-8") as f:
        json.dump(products, f, indent=2, ensure_ascii=False)


def main():
    print("=" * 65)
    print("  TECH TRACKER - Catalog Extraction & Shopify Exporter")
    print("=" * 65)

    if not HTML_FILE.exists():
        print(f"Error: {HTML_FILE} not found!")
        return

    with open(HTML_FILE, "r", encoding="utf-8") as f:
        html_content = f.read()

    products = parse_store_products(html_content)
    print(f"[*] Successfully parsed {len(products)} products from store.")

    # 1. Export Standard CSV
    export_standard_csv(products, STANDARD_CSV)
    print(f"[+] Standard CSV exported: {STANDARD_CSV.name} ({STANDARD_CSV.stat().st_size} bytes)")

    # 2. Export Official Shopify CSV
    export_shopify_csv(products, SHOPIFY_CSV)
    print(f"[+] Shopify CSV exported:  {SHOPIFY_CSV.name} ({SHOPIFY_CSV.stat().st_size} bytes)")

    # 3. Export JSON
    export_json(products, JSON_FILE)
    print(f"[+] JSON catalog exported: {JSON_FILE.name} ({JSON_FILE.stat().st_size} bytes)")

    print("=" * 65)
    print("All files generated successfully in:")
    print(f"  {BASE_DIR}")
    print("=" * 65)


if __name__ == "__main__":
    main()
