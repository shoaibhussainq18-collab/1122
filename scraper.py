#!/usr/bin/env python3
"""
TECH TRACKER - Comprehensive Product Catalog Scraper & Shopify CSV Exporter
Contains full catalog of:
  - Smartwatches (Z90 Pro, Z81 Pro Max, Z80 Pro, Ultra 2 Titanium, Series 10, T900, WS92 7-Strap Set, HK9 Pro AMOLED)
  - Luxury Hublot Replicas (Brown Leather, White Dial, Orlinski Silver, Black Magic, Big Bang Unico Rose Gold, Classic Fusion Blue, Spirit of Big Bang Tonneau, Sang Bleu II)
  - Airbuds & Audio (AirPods Pro 2 Replica, ANC Studio Pro, AirPods 3, Cyberpunk Gaming TWS, M10 Powerbank, Sports Neckband)
  - Phone Coolers (Semiconductor RGB Magnetic, DL05 Digital Display, Black Shark Dual Peltier)
Exports:
  1. products.csv
  2. shopify_products.csv
  3. products.json
"""

import os
import re
import csv
import json
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
STANDARD_CSV = BASE_DIR / "products.csv"
SHOPIFY_CSV = BASE_DIR / "shopify_products.csv"
JSON_FILE = BASE_DIR / "products.json"


def slugify(text: str) -> str:
    text = text.lower()
    text = re.sub(r'[^a-z0-9\s-]', '', text)
    text = re.sub(r'[\s-]+', '-', text).strip('-')
    return text


def get_all_products():
    return [
        # ==========================================
        # 1. SMARTWATCHES COLLECTION
        # ==========================================
        {
            "product_number": "1",
            "title": "Z90 Pro Smart Watch (4 Straps Included)",
            "category": "Smartwatches",
            "type": "Smartwatch",
            "price": 4000.00,
            "original_price": 6000.00,
            "discount": "33% OFF",
            "sku": "TT-Z90-PRO",
            "rating": 4.8,
            "reviews": 92,
            "stock": "In Stock (Islamabad Hub)",
            "badge": "4 STRAPS INCLUDED",
            "tags": "Smartwatch, Calling, IPS Touchscreen, 4 Straps, New Arrival, Tech Tracker",
            "description": "Features 4 multi-color interchangeable silicone straps (mint green, blush pink, oceanic navy, midnight black). Complete with high-definition IPS touchscreen, Bluetooth call audio speaker, and 48-hour active fitness tracking.",
            "image_alt": "Z90 Pro Smart Watch with 4 Interchangeable Straps"
        },
        {
            "product_number": "2",
            "title": "Z81 Pro - Max Series 9 2.1\" Curved Display Smart Watch",
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
        },
        {
            "product_number": "3",
            "title": "Z80 Pro Smart Watch (Retail Packaging)",
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
        },
        {
            "product_number": "4",
            "title": "Ultra 2 Watch 49mm Titanium Case (Ocean Band)",
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
        },
        {
            "product_number": "5",
            "title": "TechTracker Ultra 2 Pro 49mm Titanium Max (Spotlight Edition)",
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
            "image_alt": "TechTracker Ultra 2 Pro 49mm Titanium Max Watch Always On Display"
        },
        {
            "product_number": "6",
            "title": "Series 10 Ultra Curved AMOLED Smartwatch",
            "category": "Smartwatches",
            "type": "Smartwatch",
            "price": 5500.00,
            "original_price": 8500.00,
            "discount": "35% OFF",
            "sku": "TT-SERIES10-AMOLED",
            "rating": 4.9,
            "reviews": 84,
            "stock": "In Stock (Islamabad Hub)",
            "badge": "2026 NEW RELEASE",
            "tags": "Smartwatch, Series 10, AMOLED, Dynamic Island, Fast Charge, Tech Tracker",
            "description": "Latest 2026 flagship Series 10 replica featuring vibrant AMOLED true black screen, dynamic notification island, metallic chassis, wireless quick charger, and IP68 water resistance.",
            "image_alt": "Series 10 Ultra Curved AMOLED Smartwatch"
        },
        {
            "product_number": "7",
            "title": "T900 Ultra Big Screen Smart Watch (Orange Alpine Loop)",
            "category": "Smartwatches",
            "type": "Smartwatch",
            "price": 2200.00,
            "original_price": 3500.00,
            "discount": "37% OFF",
            "sku": "TT-T900-ULTRA",
            "rating": 4.6,
            "reviews": 210,
            "stock": "In Stock (Islamabad Hub)",
            "badge": "BUDGET CHAMPION",
            "tags": "Smartwatch, T900, Big Screen, Budget Friendly, Calling, Tech Tracker",
            "description": "Best budget 2.09-inch big display smartwatch with Bluetooth calling, social media message pop-ups, music playback control, game center, and rugged orange alpine loop strap.",
            "image_alt": "T900 Ultra Big Screen Smart Watch"
        },
        {
            "product_number": "8",
            "title": "WS92 Max Ultra Smartwatch with 7 Straps Gift Box Set",
            "category": "Smartwatches",
            "type": "Smartwatch",
            "price": 4800.00,
            "original_price": 7500.00,
            "discount": "36% OFF",
            "sku": "TT-WS92-7STRAPS",
            "rating": 5.0,
            "reviews": 95,
            "stock": "In Stock (Islamabad Hub)",
            "badge": "7 STRAPS GIFT SET",
            "tags": "Smartwatch, Gift Set, 7 Straps, Silicone, Metal, Alpine, Tech Tracker",
            "description": "Ultimate luxury gift set featuring the WS92 Max Ultra smartwatch along with 7 designer interchangeable straps (stainless steel link, ocean silicone, alpine loop, trail loop, leather, sport band).",
            "image_alt": "WS92 Max Ultra Smartwatch with 7 Straps Gift Box Set"
        },
        {
            "product_number": "9",
            "title": "HK9 Pro+ Gen 2 AMOLED Smartwatch with ChatGPT & Compass",
            "category": "Smartwatches",
            "type": "Smartwatch",
            "price": 6500.00,
            "original_price": 9500.00,
            "discount": "32% OFF",
            "sku": "TT-HK9-PRO-PLUS",
            "rating": 4.9,
            "reviews": 112,
            "stock": "In Stock (Islamabad Hub)",
            "badge": "AMOLED + CHATGPT",
            "tags": "Smartwatch, HK9 Pro, AMOLED, High Refresh Rate, ChatGPT, Tech Tracker",
            "description": "The gold standard of 1:1 replicas with authentic 60Hz AMOLED screen, real working optical compass, ChatGPT onboard integration, sound recording, and ultra-smooth gesture navigation.",
            "image_alt": "HK9 Pro Plus Gen 2 AMOLED Smartwatch"
        },

        # ==========================================
        # 2. HUBLOT LUXURY WATCHES COLLECTION
        # ==========================================
        {
            "product_number": "10",
            "title": "HUBLOT REPLICA MEN'S WATCH (Brown Textured Leather Strap)",
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
        },
        {
            "product_number": "11",
            "title": "HUBLOT REPLICA MEN'S WATCH (Silver White Sunray Dial)",
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
        },
        {
            "product_number": "12",
            "title": "HUBLOT AERO FUSION ORLINSKI SILVER (Faceted Skeleton)",
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
        },
        {
            "product_number": "13",
            "title": "HUBLOT CHRONOGRAPH BLACK MAGIC (Stealth Ceramic)",
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
        },
        {
            "product_number": "14",
            "title": "HUBLOT BIG BANG UNICO ROSE GOLD REPLICA (Skeleton Dial)",
            "category": "Luxury Replica Watches",
            "type": "Luxury Replica Watch",
            "price": 4500.00,
            "original_price": 7500.00,
            "discount": "40% OFF",
            "sku": "TT-HUB-UNICO-GLD",
            "rating": 5.0,
            "reviews": 63,
            "stock": "In Stock (Limited Edition)",
            "badge": "PREMIUM GOLD",
            "tags": "Hublot, Big Bang, Unico, Rose Gold, Skeleton Chrono, Luxury Watch, Tech Tracker",
            "description": "Satin-finished 18K rose gold plated bezel with exposed micro-gears skeleton dial. Working chronograph pushers, flyback simulation, and ribbed black vulcanized rubber strap.",
            "image_alt": "Hublot Big Bang Unico Rose Gold Skeleton Chrono Watch"
        },
        {
            "product_number": "15",
            "title": "HUBLOT CLASSIC FUSION TITANIUM BLUE DIAL",
            "category": "Luxury Replica Watches",
            "type": "Luxury Replica Watch",
            "price": 3800.00,
            "original_price": 6000.00,
            "discount": "37% OFF",
            "sku": "TT-HUB-CLS-BLU",
            "rating": 4.9,
            "reviews": 51,
            "stock": "In Stock (Limited Edition)",
            "badge": "CLASSIC ELEGANCE",
            "tags": "Hublot, Classic Fusion, Blue Dial, Sunray, Slim Bezel, Tech Tracker",
            "description": "Timeless sunray satin navy blue dial with polished titanium finish case and integrated rubber-backed blue alligator textured strap. Ideal for formal suits and daily luxury.",
            "image_alt": "Hublot Classic Fusion Titanium Blue Dial Watch"
        },
        {
            "product_number": "16",
            "title": "HUBLOT SPIRIT OF BIG BANG TONNEAU CURVED CASE",
            "category": "Luxury Replica Watches",
            "type": "Luxury Replica Watch",
            "price": 4800.00,
            "original_price": 8000.00,
            "discount": "40% OFF",
            "sku": "TT-HUB-SPIRIT-TNN",
            "rating": 5.0,
            "reviews": 42,
            "stock": "In Stock (Limited Edition)",
            "badge": "TONNEAU BARREL",
            "tags": "Hublot, Spirit of Big Bang, Tonneau, Curved Case, Richard Mille Style, Tech Tracker",
            "description": "Signature barrel-shaped curved tonneau case that hugs the wrist ergonomically. Multi-layered skeleton dial, frosted titanium finish, and quick-release silicone strap.",
            "image_alt": "Hublot Spirit of Big Bang Tonneau Barrel Watch"
        },
        {
            "product_number": "17",
            "title": "HUBLOT BIG BANG SANG BLEU II GEOMETRIC EDITION",
            "category": "Luxury Replica Watches",
            "type": "Luxury Replica Watch",
            "price": 4200.00,
            "original_price": 7000.00,
            "discount": "40% OFF",
            "sku": "TT-HUB-SANG-BLEU",
            "rating": 4.8,
            "reviews": 39,
            "stock": "In Stock (Limited Edition)",
            "badge": "GEOMETRIC ART",
            "tags": "Hublot, Sang Bleu, Geometric, Polygonal Hands, Tattoo Art, Tech Tracker",
            "description": "Maxime Buchi geometric polygon hands design. Faceted octagonal sapphire crystal, diamond-cut case architecture, and engraved deployant safety buckle.",
            "image_alt": "Hublot Big Bang Sang Bleu II Geometric Watch"
        },

        # ==========================================
        # 3. AIRBUDS & AUDIO COLLECTION
        # ==========================================
        {
            "product_number": "18",
            "title": "AirPods Pro 2nd Gen Master Replica (Active Noise Cancelling)",
            "category": "Audio & Airbuds",
            "type": "Wireless Earbuds",
            "price": 3500.00,
            "original_price": 6000.00,
            "discount": "42% OFF",
            "sku": "TT-AIRPODS-PRO2",
            "rating": 5.0,
            "reviews": 164,
            "stock": "In Stock (Islamabad Hub)",
            "badge": "ANC + POP-UP",
            "tags": "Airbuds, AirPods Pro 2, ANC, Transparency, Spatial Audio, Master Replica, Tech Tracker",
            "description": "High-fidelity master replica with working Active Noise Cancellation (ANC), Transparency mode, iOS pop-up animation, touch volume slide control, and MagSafe speaker lanyard case.",
            "image_alt": "AirPods Pro 2 Master Replica with Active Noise Cancelling"
        },
        {
            "product_number": "19",
            "title": "TechTracker ANC Studio Pro Wireless Airbuds",
            "category": "Audio & Airbuds",
            "type": "Wireless Earbuds",
            "price": 2800.00,
            "original_price": 4500.00,
            "discount": "38% OFF",
            "sku": "TT-ANC-BUDS-01",
            "rating": 4.8,
            "reviews": 88,
            "stock": "In Stock (Islamabad Hub)",
            "badge": "STUDIO BASS",
            "tags": "Airbuds, Wireless Earbuds, Active Noise Cancelling, Deep Bass, Studio Sound, Tech Tracker",
            "description": "Active Noise Cancellation (ANC), Transparency mode, 13mm dynamic titanium drivers for deep bass, 30 hours total playback with charging case, Type-C quick charging.",
            "image_alt": "TechTracker ANC Studio Pro Wireless Airbuds with Deep Bass"
        },
        {
            "product_number": "20",
            "title": "AirPods 3rd Gen Wireless Earbuds (Spatial Audio)",
            "category": "Audio & Airbuds",
            "type": "Wireless Earbuds",
            "price": 2800.00,
            "original_price": 4500.00,
            "discount": "38% OFF",
            "sku": "TT-AIRPODS-GEN3",
            "rating": 4.7,
            "reviews": 75,
            "stock": "In Stock (Islamabad Hub)",
            "badge": "ERGONOMIC FIT",
            "tags": "Airbuds, AirPods 3, Spatial Audio, Wireless Charging, Siri, Tech Tracker",
            "description": "Contoured in-ear design without silicone tips for natural comfort. Adaptive EQ, force sensor controls, sweat and water resistance, and 30-hour battery life with wireless case.",
            "image_alt": "AirPods 3rd Gen Wireless Earbuds"
        },
        {
            "product_number": "21",
            "title": "TechTracker Cyberpunk Transparent Gaming TWS Earbuds",
            "category": "Audio & Airbuds",
            "type": "Gaming Earbuds",
            "price": 2600.00,
            "original_price": 4200.00,
            "discount": "38% OFF",
            "sku": "TT-CYBER-TWS",
            "rating": 4.9,
            "reviews": 62,
            "stock": "In Stock (Islamabad Hub)",
            "badge": "40MS LOW LATENCY",
            "tags": "Airbuds, Gaming TWS, Cyberpunk, Transparent, RGB, PUBG, Tech Tracker",
            "description": "Ultra-low latency 40ms gaming mode for instant footsteps in PUBG and FreeFire. Futuristic transparent clear charging case with breathing neon RGB LEDs and dual noise-reduction microphones.",
            "image_alt": "TechTracker Cyberpunk Transparent Gaming TWS Earbuds"
        },
        {
            "product_number": "22",
            "title": "M10 TWS Wireless Earbuds with Powerbank Display Case",
            "category": "Audio & Airbuds",
            "type": "Wireless Earbuds",
            "price": 1500.00,
            "original_price": 2500.00,
            "discount": "40% OFF",
            "sku": "TT-M10-TWS",
            "rating": 4.5,
            "reviews": 230,
            "stock": "In Stock (Islamabad Hub)",
            "badge": "MASSIVE VALUE",
            "tags": "Airbuds, M10, Powerbank Case, LED Display, Budget, Bluetooth 5.3, Tech Tracker",
            "description": "Pakistan's most popular daily earbuds with built-in emergency phone charging powerbank case, digital LED percentage battery display, waterproof touch sensors, and punchy 9D stereo sound.",
            "image_alt": "M10 TWS Wireless Earbuds with Powerbank Display Case"
        },
        {
            "product_number": "23",
            "title": "TechTracker Pro Wireless Sports Magnetic Neckband",
            "category": "Audio & Airbuds",
            "type": "Wireless Neckband",
            "price": 1999.00,
            "original_price": 3200.00,
            "discount": "38% OFF",
            "sku": "TT-NECKBAND-PRO",
            "rating": 4.8,
            "reviews": 57,
            "stock": "In Stock (Islamabad Hub)",
            "badge": "100H STANDBY",
            "tags": "Neckband, Bluetooth Headset, Gym, Running, Magnetic, Heavy Bass, Tech Tracker",
            "description": "Premium flexible silicone neckband with magnetic instant lock earbuds. Up to 50 hours non-stop music playback, vibration call alert, fast Type-C charge, and sweatproof running design.",
            "image_alt": "TechTracker Pro Wireless Sports Magnetic Neckband"
        },

        # ==========================================
        # 4. GAMING ACCESSORIES & PHONE COOLERS
        # ==========================================
        {
            "product_number": "24",
            "title": "TechTracker Semiconductor Gaming Phone Cooler (Magnetic RGB)",
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
        },
        {
            "product_number": "25",
            "title": "TechTracker MEMO DL05 Digital Temp Display Phone Cooler",
            "category": "Gaming Accessories",
            "type": "Mobile Phone Cooler",
            "price": 2999.00,
            "original_price": 4500.00,
            "discount": "33% OFF",
            "sku": "TT-MEMO-DL05",
            "rating": 4.9,
            "reviews": 46,
            "stock": "In Stock (Islamabad Hub)",
            "badge": "TEMP DISPLAY",
            "tags": "Phone Cooler, DL05, Digital Temperature, Peltier, Overheating Fix, Tech Tracker",
            "description": "Live real-time digital LED temperature display showing degrees Celsius right on the cooler back. Freezes down in 10 seconds, dual silicone non-slip clamp, and USB-C powered.",
            "image_alt": "TechTracker MEMO DL05 Digital Temp Display Phone Cooler"
        },
        {
            "product_number": "26",
            "title": "TechTracker Black Shark Style Dual Peltier Magnetic Radiator",
            "category": "Gaming Accessories",
            "type": "Mobile Phone Cooler",
            "price": 3200.00,
            "original_price": 4800.00,
            "discount": "33% OFF",
            "sku": "TT-COOL-DUAL-PELT",
            "rating": 5.0,
            "reviews": 38,
            "stock": "In Stock (Islamabad Hub)",
            "badge": "EXTREME COOLING",
            "tags": "Phone Cooler, Black Shark, Extreme Cooling, iPhone MagSafe, Android, Tech Tracker",
            "description": "Heavy-duty dual-layer semiconductor Peltier plate cooling module. Perfect for iPhone 12/13/14/15/16 MagSafe direct snap and Android devices. Eliminates 90FPS thermal throttling entirely.",
            "image_alt": "TechTracker Black Shark Style Dual Peltier Magnetic Radiator"
        }
    ]


def export_standard_csv(products, filepath: Path):
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
            body_html = (
                f"<p><strong>{p['title']}</strong></p>"
                f"<p>{p['description']}</p>"
                f"<p><strong>Key Highlights:</strong></p>"
                f"<ul>"
                f"<li>100% Quality Inspected before dispatch</li>"
                f"<li>Cash On Delivery (COD) available across Pakistan</li>"
                f"<li>Fast Express Delivery in 2-3 Business Days</li>"
                f"<li>7 Days Hassle-Free Replacement Guarantee</li>"
                f"</ul>"
            )

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
                "Variant Inventory Qty": "100",
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
    with open(filepath, mode="w", encoding="utf-8") as f:
        json.dump(products, f, indent=2, ensure_ascii=False)


def main():
    print("=" * 65)
    print("  TECH TRACKER - Catalog Extraction & Shopify Exporter")
    print("=" * 65)

    products = get_all_products()
    print(f"[*] Loaded {len(products)} products into catalog.")

    export_standard_csv(products, STANDARD_CSV)
    print(f"[+] Standard CSV: {STANDARD_CSV.name} ({STANDARD_CSV.stat().st_size} bytes)")

    export_shopify_csv(products, SHOPIFY_CSV)
    print(f"[+] Shopify CSV:  {SHOPIFY_CSV.name} ({SHOPIFY_CSV.stat().st_size} bytes)")

    export_json(products, JSON_FILE)
    print(f"[+] JSON Catalog: {JSON_FILE.name} ({JSON_FILE.stat().st_size} bytes)")

    print("=" * 65)


if __name__ == "__main__":
    main()
