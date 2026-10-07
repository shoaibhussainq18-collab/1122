/**
 * TECHNO Official Flagship Store - Core Application Engine
 * High-performance client-side router, reactive cart, multi-currency engine, and Shopify-grade checkout.
 */

// =========================================================================
// 1. GLOBAL DATABASE & CONSTANTS (COMPREHENSIVE TECH HARDWARE SUITE)
// =========================================================================

const TECHNO_PRODUCTS = [
  {
    "id": "techno-chrono-ultra-titanium-smartwatch",
    "title": "TECHNO Chrono Ultra Titanium Smartwatch",
    "shortTitle": "Chrono Ultra Titanium",
    "series": "TECHNO CHRONO",
    "category": "Smartwatches",
    "price": 349.0,
    "compareAtPrice": 449.0,
    "rating": 5.0,
    "reviewCount": 142,
    "isSale": true,
    "isBestSeller": true,
    "inStock": true,
    "description": "Aerospace-grade Grade 5 titanium smartwatch with edge-to-edge Sapphire AMOLED display, dual-band GPS, medical-grade PPG biosensors, and 14-day battery longevity.",
    "images": [
      "https://shoaibhussainq18-collab.github.io/141633443434/images/smartwatch-ultra.jpg",
      "https://shoaibhussainq18-collab.github.io/141633443434/images/smartwatch-sport.jpg"
    ],
    "variants": [
      {
        "name": "Natural Titanium",
        "hex": "#9E9E9E",
        "imageIndex": 0
      },
      {
        "name": "Stealth DLC Black",
        "hex": "#111111",
        "imageIndex": 0
      }
    ],
    "features": [
      "Grade 5 Aerospace Titanium Unibody with Sapphire Crystal Glass",
      "1.43-inch Always-On AMOLED Retina Display (1,000 nits outdoor peak)",
      "14-Day Battery Life on a Single Fast Magnetic Charge",
      "10 ATM Water Resistance (100 meters dive & open-water swim rated)",
      "Dual-Frequency GPS (L1+L5) with Real-Time Turn-by-Turn Waypoints"
    ],
    "specs": {
      "Case Material": "Grade 5 Titanium with Micro-Blasted Matte Finish",
      "Display": "1.43\" Ultra-Retina Sapphire AMOLED (466x466, 326 PPI)",
      "Battery Life": "14 Days Typical Use / 36 Hours Continuous Dual-GPS",
      "Biosensors": "8-Channel PPG Optical Heart Rate, SpO2, ECG Sensor, Skin Temp",
      "Water Resistance": "100m / 10 ATM / MIL-STD-810H Certified",
      "Connectivity": "Bluetooth 5.3 BLE, Dual-Band GPS (L1+L5), NFC Contactless Pay",
      "Dimensions & Weight": "46mm x 46mm x 12.1mm \u2022 52 grams (without strap)"
    },
    "inTheBox": [
      "1x TECHNO Chrono Ultra Titanium Smartwatch",
      "1x Magnetic Fast-Charging Puck (USB-C)",
      "1x Grade 5 Titanium Link Bracelet + 1x Fluoroelastomer Sport Strap",
      "1x Certificate of Authenticity & 2-Year International Warranty"
    ]
  },
  {
    "id": "techno-pulse-pro-sport-smartwatch",
    "title": "TECHNO Pulse Pro Ceramic Sport Watch",
    "shortTitle": "Pulse Pro Sport",
    "series": "TECHNO CHRONO",
    "category": "Smartwatches",
    "price": 179.0,
    "compareAtPrice": 249.0,
    "rating": 4.8,
    "reviewCount": 98,
    "isSale": true,
    "isBestSeller": false,
    "inStock": true,
    "description": "Curved borderless OLED sport watch featuring high-temperature ceramic bezel, real-time VO2 Max tracking, apnea sleep analysis, and breathable fluoroelastomer loop strap.",
    "images": [
      "https://shoaibhussainq18-collab.github.io/141633443434/images/smartwatch-sport.jpg",
      "https://shoaibhussainq18-collab.github.io/141633443434/images/smartwatch-ultra.jpg"
    ],
    "variants": [
      {
        "name": "Onyx Black",
        "hex": "#171717",
        "imageIndex": 0
      },
      {
        "name": "Glacier Cyan",
        "hex": "#00E5FF",
        "imageIndex": 0
      }
    ],
    "features": [
      "Curved Borderless OLED Display with Neon Ambient Telemetry Rings",
      "VO2 Max, Lactate Threshold, and Real-Time Heart Rate Zone Alerts",
      "5 ATM Water Resistance with Automatic Lap Counting & Stroke Detection",
      "Featherweight 34g Ergonomic Aerodynamic Chassis"
    ],
    "specs": {
      "Case Material": "Zirconia Ceramic Bezel with Polycarbonate Subframe",
      "Display": "1.78\" Curved AMOLED (368x448, 800 nits)",
      "Battery Life": "Up to 9 Days Normal / 24 Hours Continuous Sport Mode",
      "Sport Modes": "120+ Tracked Disciplines with Auto-Recognition",
      "Biosensors": "PPG 4.0 BioTracker, Continuous SpO2, HRV Stress Monitor",
      "Water Resistance": "5 ATM (50 meters swim proof)",
      "Weight": "34 grams ultra-balanced"
    },
    "inTheBox": [
      "1x TECHNO Pulse Pro Ceramic Sport Watch",
      "1x High-Tension Fluoroelastomer Sport Loop",
      "1x Fast Magnetic USB-C Charging Cable",
      "1x Quick Setup Guide & Warranty Card"
    ]
  },
  {
    "id": "techno-apex-stealth-tactical-watch",
    "title": "TECHNO Apex Stealth Tactical GPS Watch",
    "shortTitle": "Apex Stealth Tactical",
    "series": "TECHNO CHRONO",
    "category": "Smartwatches",
    "price": 299.0,
    "compareAtPrice": 399.0,
    "rating": 4.9,
    "reviewCount": 76,
    "isSale": true,
    "isBestSeller": false,
    "inStock": true,
    "description": "Engineered to MIL-STD-810H military standards with solar power harvesting, night vision compatibility, barometric storm alerts, and tactical stealth mode.",
    "images": [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80",
      "https://shoaibhussainq18-collab.github.io/141633443434/images/smartwatch-ultra.jpg"
    ],
    "variants": [
      {
        "name": "Matte Tactical Black",
        "hex": "#121212",
        "imageIndex": 0
      },
      {
        "name": "Desert Olive",
        "hex": "#4B5320",
        "imageIndex": 0
      }
    ],
    "features": [
      "Real-Time Outdoor Tactical Telemetry on High-Contrast Sunlight Screen",
      "Night Vision Compatible Backlight & Stealth Mode",
      "Built-in 3-Axis Compass, Barometric Altimeter, and Gyroscope",
      "Dual-Position Coordinate Formatting (MGRS & Lat/Long)"
    ],
    "specs": {
      "Bezel Material": "Diamond-Like Carbon (DLC) Coated Titanium",
      "Display": "1.4\" Sunlight-Visible Transflective Memory-in-Pixel",
      "Battery Life": "24 Days Typical / 48 Hours Full GPS Mode",
      "Durability": "MIL-STD-810H Thermal, Shock, and Water Resistance",
      "Water Rating": "10 ATM / 100 meters",
      "Weight": "58 grams"
    },
    "inTheBox": [
      "1x TECHNO Apex Stealth Tactical Watch",
      "1x Tactical Ballistic Nylon Quick-Release Strap",
      "1x Heavy-Duty Braided Charging Cord",
      "1x Tactical Field Manual"
    ]
  },
  {
    "id": "techno-aero-slim-active-watch",
    "title": "TECHNO Aero Slim Ultra-Light Fitness Watch",
    "shortTitle": "Aero Slim Active",
    "series": "TECHNO CHRONO",
    "category": "Smartwatches",
    "price": 129.0,
    "compareAtPrice": 179.0,
    "rating": 4.7,
    "reviewCount": 112,
    "isSale": true,
    "isBestSeller": true,
    "inStock": true,
    "description": "Weighing only 26 grams, the Aero Slim features a continuous health telemetry engine, 10-day battery life, and high-refresh 60Hz curved Retina display.",
    "images": [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80",
      "https://shoaibhussainq18-collab.github.io/141633443434/images/smartwatch-sport.jpg"
    ],
    "variants": [
      {
        "name": "Space Gray",
        "hex": "#4B5563",
        "imageIndex": 0
      },
      {
        "name": "Rose Quartz",
        "hex": "#F43F5E",
        "imageIndex": 0
      }
    ],
    "features": [
      "Featherweight 26g Chassis Designed for 24/7 Sleep Tracking",
      "1.82\" Curved Borderless Retina Display with Smooth 60Hz Refresh",
      "Personalized AI Sleep & Recovery Coach with HRV Monitoring",
      "One-Tap Measurement of Heart Rate, SpO2, and Stress in 45 Seconds"
    ],
    "specs": {
      "Case Material": "Aviation-Grade 6063 Anodized Aluminum Alloy",
      "Display": "1.82\" AMOLED Retina (408x480, 347 PPI, 60Hz)",
      "Battery Life": "10 Days Typical / 14 Days Battery Saver Mode",
      "Sensors": "BioTracker 4.0 Optical Sensor, 3-Axis Accelerometer",
      "Water Resistance": "5 ATM (50 meters)",
      "Weight": "26 grams without strap"
    },
    "inTheBox": [
      "1x TECHNO Aero Slim Active Watch",
      "1x Soft-Touch Breathable Silicone Band",
      "1x Magnetic Charging Cable",
      "1x Quick Start Guide"
    ]
  },
  {
    "id": "techno-vanguard-esim-lte-smartwatch",
    "title": "TECHNO Vanguard eSIM LTE Smartwatch",
    "shortTitle": "Vanguard 4G LTE",
    "series": "TECHNO CHRONO",
    "category": "Smartwatches",
    "price": 369.0,
    "compareAtPrice": 479.0,
    "rating": 4.8,
    "reviewCount": 85,
    "isSale": true,
    "isBestSeller": true,
    "inStock": true,
    "description": "Untether from your phone. Autonomous 4G LTE cellular connectivity with built-in speaker, beamforming microphone, NFC payments, and music streaming.",
    "images": [
      "https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=800&q=80",
      "https://shoaibhussainq18-collab.github.io/141633443434/images/smartwatch-ultra.jpg"
    ],
    "variants": [
      {
        "name": "Stealth Obsidian",
        "hex": "#111827",
        "imageIndex": 0
      },
      {
        "name": "Polar White Ceramic",
        "hex": "#F3F4F6",
        "imageIndex": 0
      }
    ],
    "features": [
      "Autonomous eSIM 4G LTE Connectivity for Independent Phone Calls & SMS",
      "Stream Offline Audio Directly to Bluetooth Headphones",
      "Contactless NFC Payments via TECHNO Pay Global Gateway",
      "Dual HD Microphones with AI Noise Suppression for Clear Wrist Calls"
    ],
    "specs": {
      "Connectivity": "4G LTE Standalone eSIM, Wi-Fi 2.4/5GHz, Bluetooth 5.3, NFC",
      "Display": "1.43\" Super AMOLED (466x466, 326 PPI, Always-On)",
      "Storage": "32GB High-Speed Flash Memory for Apps & Audio",
      "Battery Life": "5 Days Smart Mode / 48 Hours Heavy LTE Usage",
      "Water Rating": "5 ATM Water Resistance",
      "Weight": "54 grams"
    },
    "inTheBox": [
      "1x TECHNO Vanguard eSIM LTE Smartwatch",
      "1x Quick Release Matte Silicone Strap",
      "1x Magnetic Charging Stand",
      "1x eSIM Activation Guide"
    ]
  },
  {
    "id": "techno-wireless-noise-cancelling-headphones-pro",
    "title": "TECHNO Wireless Noise-Cancelling Headphones Pro",
    "shortTitle": "Wireless Pro",
    "series": "TECHNO SERIES X",
    "category": "Headphones",
    "price": 199.0,
    "compareAtPrice": 299.0,
    "rating": 4.9,
    "reviewCount": 184,
    "isSale": true,
    "isBestSeller": true,
    "inStock": true,
    "description": "Engineered for supreme acoustic fidelity with personalized Spatial Audio, adaptive ANC, and unmatched 40-hour wireless playtime. Precision crafted in lightweight matte composite.",
    "images": [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAhzeAfkVnIFbTvX5yZrgkk251E9hSCkp2M3Tn1tOYXoiXBjmcMpqf-hgPIOxHC_e1AyLBA4CoNA1K75G0w001pXRLWovNJbkjW-wiOPU8aL5Afplz6EY8pv-IIGA83yrunIDWXxvwOzxj_62ipNjL6N8CLb-pNQBP1tnJl84S7XOF7n76FfWn2mtgFxafWH6xPMJFSq0_goaPS-xc1_xxKgnoB36GO60vykpjbi3M7",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrw64PfO2ZJcgO6xZlxLTltn4NcpGdeSPmraI5we3gxeShHtODAJB4y_RwUBtNPAQ4H5EkejyBwYLUgrlc4QieHFUBSdbJwShmaTsDD1DvdccQw-nvL6EBgI5PYejr4HWrXXEbPnk6_qi3Jxl_clEJkAvrTaAb0Nowxnb3-tGJ0LfgS681seampXxeohmYe9ICOcPYl3gAN-5lHg8eqLyCY35mC-WTSaTW8rz2qe3G"
    ],
    "variants": [
      {
        "name": "Matte White / Silver",
        "hex": "#EAEAEA",
        "imageIndex": 0
      },
      {
        "name": "Stealth Black",
        "hex": "#1A1A1A",
        "imageIndex": 1
      }
    ],
    "features": [
      "Active Noise Cancellation (ANC) with Transparency Mode",
      "Up to 40 Hours of Playback with Fast USB-C Quick Charge",
      "Custom 40mm Hi-Res Audio Certified Titanium Drivers",
      "Ergonomic Ultra-Plush Memory Foam Ear Cushions"
    ],
    "specs": {
      "Transducer Size": "40mm Custom High-Excursion Titanium",
      "Frequency Response": "10Hz - 40,000Hz (Hi-Res Certified)",
      "Noise Cancellation": "Hybrid ANC with 6 Adaptive Microphones",
      "Bluetooth": "Bluetooth 5.3 Multipoint & LDAC High-Res",
      "Battery Life": "40 Hours (ANC On) / 55 Hours (ANC Off)",
      "Weight": "248 grams"
    },
    "inTheBox": [
      "1x TECHNO Wireless Pro Headphones",
      "1x Protective Magnetic Travel Case",
      "1x 3.5mm Gold-Plated Audio Cable",
      "1x USB-C Fast-Charging Braided Cable"
    ]
  },
  {
    "id": "techno-studio-air-open-back-monitor",
    "title": "TECHNO Studio Air Open-Back Reference Monitor",
    "shortTitle": "Studio Air Open-Back",
    "series": "TECHNO SERIES X",
    "category": "Headphones",
    "price": 249.0,
    "compareAtPrice": 349.0,
    "rating": 5.0,
    "reviewCount": 92,
    "isSale": true,
    "isBestSeller": false,
    "inStock": true,
    "description": "50mm planar magnetic acoustic transducers in an open-back aluminum mesh chamber. Delivers surgical mastering accuracy, zero inner-ear pressure, and limitless soundstage.",
    "images": [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDkIbnZpshtyNmE0iWr11pFI9uPaRi-kEOabvsUs72354KDYfTp1dn3EoOzyRXJC1rdgrte2w_yyY-BQU8ecXDdDZKaMQuAyEDshaDka0Lp_wR9oUdEeKnCgftMEpn90K-xuUEshlcNEjenK-opYcwE8-DmRv7BTuAYRnYx1NbSjTtRpd1Cq56mSljRxIxnCX_bH8QExJE2Su0wkKA-yybhGgdBrM3r65GZuaO0m9kP"
    ],
    "variants": [
      {
        "name": "Anodized Silver Mesh",
        "hex": "#D1D5DB",
        "imageIndex": 0
      }
    ],
    "features": [
      "Custom 50mm Planar Magnetic Diaphragms with Neodymium Stator Array",
      "Acoustically Transparent Open-Back Honeycomb Stainless Steel Grille",
      "Zero Fatigue Ultra-Breathable Velour Memory Foam Ear Cushions",
      "Dual-Entry Detachable Silver-Plated OFC Audiophile Cable"
    ],
    "specs": {
      "Driver Type": "50mm Planar Magnetic Ultra-Thin Diaphragm",
      "Acoustic Design": "Open-Back Circumaural",
      "Frequency Response": "5Hz - 50,000Hz Audiophile Grade",
      "Impedance": "38 Ohms",
      "Weight": "285 grams"
    },
    "inTheBox": [
      "1x TECHNO Studio Air Reference Headphones",
      "1x 2.5m Silver-Plated OFC 3.5mm Cable",
      "1x 6.35mm Gold-Plated Studio Adapter"
    ]
  },
  {
    "id": "techno-studio-anc-plus-edition",
    "title": "TECHNO Studio ANC+ Spatial Audio Headphones",
    "shortTitle": "Studio ANC+ Edition",
    "series": "TECHNO SERIES X",
    "category": "Headphones",
    "price": 279.0,
    "compareAtPrice": 369.0,
    "rating": 4.9,
    "reviewCount": 118,
    "isSale": true,
    "isBestSeller": true,
    "inStock": true,
    "description": "Dynamic head-tracking 3D spatial acoustics with custom carbon-fiber acoustic chambers, room calibration microphones, and 50-hour battery longevity.",
    "images": [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAKWiKmrwGyImiWkFAT7Tdxt5p-2WkIBkhmGU5rlKvXSTDY8bbjfVYiTlvgiXd29K_QC-dwOtTGrWvUGlMSvhrkjQIgRBQSNLtN4AHkJ4an_pNiLx_tDh4rzyBbQWtTWNuYZ3eKM_AlD-uYeNxM2lHcgcFWntbBfFx8SEouDY4iTlrG7TQ3L5Eqskr6gNUJGDS6gzdscy61JtajMeOuArDJU8rYFtNgf4GztsIZAqSM"
    ],
    "variants": [
      {
        "name": "Carbon Weave Black",
        "hex": "#18181B",
        "imageIndex": 0
      }
    ],
    "features": [
      "Real-Time Spatial Audio with Dynamic 6-Axis Gyroscopic Head Tracking",
      "Carbon Fiber Enclosure Dampening Resonances for Micro-Detail Clarity",
      "Lossless LDAC 990kbps Transmission and USB-C 24-bit/96kHz DAC",
      "50-Hour Extended Battery Life with Quick Charge"
    ],
    "specs": {
      "Acoustic Chambers": "Multi-Layered Real Carbon Fiber Composite",
      "Drivers": "45mm Carbon Bio-Cellulose Dome Drivers",
      "ANC Performance": "Adaptive Hybrid ANC up to 45dB Noise Reduction",
      "Battery": "50 Hours Playtime / 15m Charge = 8 Hours",
      "Weight": "260 grams"
    },
    "inTheBox": [
      "1x TECHNO Studio ANC+ Headphones",
      "1x Hard Shell Molded Storage Case",
      "1x Lossless USB-C Audio Cable",
      "1x 3.5mm Braided Auxiliary Cable"
    ]
  },
  {
    "id": "techno-carbon-master-audiophile-headphone",
    "title": "TECHNO Carbon Master Audiophile Headphones",
    "shortTitle": "Carbon Master Audiophile",
    "series": "TECHNO SERIES X",
    "category": "Headphones",
    "price": 389.0,
    "compareAtPrice": 499.0,
    "rating": 5.0,
    "reviewCount": 47,
    "isSale": true,
    "isBestSeller": false,
    "inStock": true,
    "description": "The pinnacle of acoustic engineering. Real forged carbon fiber earcups, 50mm pure beryllium-coated drivers, balanced 4.4mm pentaconn connectivity, and plush Alcantara padding.",
    "images": [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80"
    ],
    "variants": [
      {
        "name": "Forged Marble Carbon",
        "hex": "#171717",
        "imageIndex": 0
      }
    ],
    "features": [
      "50mm Pure Beryllium-Coated Diaphragms for Instantaneous Transient Speed",
      "Solid Forged Carbon Acoustic Resonators CNC Milled from Solid Blocks",
      "Dual Balanced 4.4mm Pentaconn + 3.5mm OFC Silver-Litz Wiring",
      "Italian Alcantara Memory Foam Cushions for Supreme Comfort"
    ],
    "specs": {
      "Transducer": "50mm Beryllium Deposited Ultra-Rigid Diaphragm",
      "Frequency Response": "4Hz - 52,000Hz Master Reference",
      "Impedance": "32 Ohms",
      "Weight": "295 grams"
    },
    "inTheBox": [
      "1x TECHNO Carbon Master Audiophile Headphones",
      "1x 4.4mm Balanced Silver-Plated Cable (1.8m)",
      "1x 3.5mm Single-Ended Audiophile Cable (1.8m)"
    ]
  },
  {
    "id": "techno-quiet-commute-anc-headphones",
    "title": "TECHNO QuietCommute Ultra-Comfort ANC Headphones",
    "shortTitle": "QuietCommute ANC",
    "series": "TECHNO SERIES X",
    "category": "Headphones",
    "price": 159.0,
    "compareAtPrice": 219.0,
    "rating": 4.8,
    "reviewCount": 139,
    "isSale": true,
    "isBestSeller": true,
    "inStock": true,
    "description": "Engineered for subway, airplane, and open-office commuters. Delivers 45dB noise suppression, zero clamping pressure headband, and massive 60-hour runtime.",
    "images": [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80"
    ],
    "variants": [
      {
        "name": "Stealth Charcoal",
        "hex": "#27272A",
        "imageIndex": 0
      }
    ],
    "features": [
      "45dB Active Noise Cancellation Targeting Low-Frequency Engine Drone",
      "Zero Clamping Force Memory Headband for 12-Hour Continuous Wearing",
      "60-Hour Industry-Leading Battery Life with Fast Charge",
      "Fold-Flat Dual-Axis Swivel Mechanism for Compact Bag Storage"
    ],
    "specs": {
      "Drivers": "40mm Custom Neodymium Dynamic Drivers",
      "Battery Life": "60 Hours (ANC On) / 75 Hours (ANC Off)",
      "Connectivity": "Bluetooth 5.3 Multipoint Dual-Device Pairing",
      "Weight": "220 grams Featherweight Over-Ear"
    },
    "inTheBox": [
      "1x TECHNO QuietCommute ANC Headphones",
      "1x Compact Slim Travel Case",
      "1x Fast Charging USB-C Cable"
    ]
  },
  {
    "id": "techno-aero-pods-pro-gen2-anc",
    "title": "TECHNO Aero Pods Pro Gen 2 ANC Earbuds",
    "shortTitle": "Aero Pods Pro Gen 2",
    "series": "AERO SERIES",
    "category": "Airbuds",
    "price": 149.0,
    "compareAtPrice": 199.0,
    "rating": 5.0,
    "reviewCount": 215,
    "isSale": true,
    "isBestSeller": true,
    "inStock": true,
    "description": "Next-generation true wireless earbuds with dual-driver acoustic architecture, 42dB smart adaptive ANC, dynamic head-tracking spatial audio, and Qi wireless charging case.",
    "images": [
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80"
    ],
    "variants": [
      {
        "name": "Glacier White",
        "hex": "#F8FAFC",
        "imageIndex": 0
      }
    ],
    "features": [
      "Dual-Driver Acoustic System (11mm Sub-Bass Woofer + Micro Tweeter)",
      "42dB Adaptive Noise Cancellation with Auto Environmental Sensing",
      "3D Spatial Audio with Dynamic Real-Time Head Tracking",
      "Qi Wireless & MagSafe Fast-Charging Aluminum-Hinged Case"
    ],
    "specs": {
      "Drivers": "11mm Liquid Crystal Polymer + Balanced Micro-Tweeter",
      "Battery Life": "8.5 Hours Single Charge / 36 Hours with Charging Case",
      "Noise Cancellation": "Adaptive Smart Hybrid ANC up to 42dB",
      "Water Rating": "IPX5 Water & Sweat Resistance",
      "Weight": "4.2 grams per bud \u2022 46g charging case"
    },
    "inTheBox": [
      "2x TECHNO Aero Pods Pro Earbuds (L/R)",
      "1x Wireless Fast-Charging Protective Case",
      "4x Pairs Ergonomic Silicone Ear Tips (XS, S, M, L)",
      "1x Braided USB-C Fast Charging Cable"
    ]
  },
  {
    "id": "techno-earbuds-pro-high-res",
    "title": "TECHNO True Wireless Earbuds Pro",
    "shortTitle": "True Wireless Pro",
    "series": "AERO SERIES",
    "category": "Airbuds",
    "price": 199.0,
    "compareAtPrice": 299.0,
    "rating": 4.9,
    "reviewCount": 164,
    "isSale": true,
    "isBestSeller": true,
    "inStock": true,
    "description": "Lossless wireless in-ear monitors with custom graphene drivers, beamforming quad microphones, and wireless charging case.",
    "images": [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAG8qwu8PQm-tsEaM_sK7xqCHzTlMtlSyf9Auh7MOunv2Lwi7T2_L4oy9y6g7c_Z7RYGbRuHRIL1ILRgm4hUJXWiwObkDIZmT7gUAP7oa4Jn3JoI3YkXHFAQP2MUUAasuxP1SKZ3uGtOFlPnxUBV8gaVP-PoxkfFt9cMckizpQJJKLQE7ZFk6cxjuwnQNr_qJNB7A-oFzfC6ewtPJXxKcQ1TawznuYqR9wlHRlkY8-_"
    ],
    "variants": [
      {
        "name": "Obsidian Black",
        "hex": "#111827",
        "imageIndex": 0
      }
    ],
    "features": [
      "Custom Graphene Excursion Drivers for Audiophile Bass Precision",
      "Quad Beamforming Microphones with Wind-Noise Reduction",
      "Fast Wireless Qi Charging + Rapid USB-C Recharge",
      "IPX7 Water Resistance for Active Workouts"
    ],
    "specs": {
      "Drivers": "10mm Custom Ultra-Rigid Graphene Drivers",
      "Battery Life": "8 Hours Single Play / 32 Hours Total",
      "Bluetooth": "Bluetooth 5.3 Low Latency Multipoint",
      "Weight": "4.8 grams per bud"
    },
    "inTheBox": [
      "2x TECHNO True Wireless Earbuds (L/R)",
      "1x Wireless Charging Case",
      "3x Sets Memory Foam & Silicone Ear Tips",
      "1x USB-C Cable"
    ]
  },
  {
    "id": "techno-aero-pods-wireless-active",
    "title": "TECHNO Aero Pods Wireless Active",
    "shortTitle": "Aero Pods Active",
    "series": "AERO SERIES",
    "category": "Airbuds",
    "price": 129.0,
    "compareAtPrice": 179.0,
    "rating": 4.8,
    "reviewCount": 110,
    "isSale": true,
    "isBestSeller": false,
    "inStock": true,
    "description": "Ultra-compact ergonomic true wireless earbuds featuring sub-bass boost chamber, touch controls, and IPX7 sweat resistance.",
    "images": [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDh1IgBMLixmfXRjfWHp9PSVT5mPv9rZ36a-CChq9MkYaX2BwKJgYbnM-ZjWjYu5jHIhKzJJs84PPrlTeUYwFsaQrvNqWziYLf0ixkyF7OhorelxtCeCLVPNRQS8Tjx46zQEliwNGITgCxK1R6wSovEuic027_elWMMuDtLQYk9J5RC-PJq_IuyZ7tLUc18iLaHaDY1ii3aXyaTLnmqr3rncIiploDU46yNECEh6cpj"
    ],
    "variants": [
      {
        "name": "Matte Slate",
        "hex": "#374151",
        "imageIndex": 0
      }
    ],
    "features": [
      "Ergonomic Concha Contour for Zero Slip During Sprints",
      "Sub-Bass Acoustic Resonator Tube for Deep Punchy Impact",
      "Capacitive Touch Panels on Stems",
      "IPX7 Submersible Waterproofing"
    ],
    "specs": {
      "Drivers": "10mm Bio-Cellulose Diaphragms",
      "Battery": "7 Hours Buds / 28 Hours Total",
      "Weight": "3.9 grams Ultra-Light"
    },
    "inTheBox": [
      "2x TECHNO Aero Pods Wireless Active Earbuds",
      "1x Charging Pod Case",
      "3x Pairs Sport Grip Tips",
      "1x Fast Charging Cord"
    ]
  },
  {
    "id": "techno-reference-tws-balanced-armature",
    "title": "TECHNO Reference TWS Balanced Armature Buds",
    "shortTitle": "Reference TWS Buds",
    "series": "AERO SERIES",
    "category": "Airbuds",
    "price": 179.0,
    "compareAtPrice": 239.0,
    "rating": 5.0,
    "reviewCount": 78,
    "isSale": true,
    "isBestSeller": true,
    "inStock": true,
    "description": "Triple-driver hybrid configuration featuring Knowles balanced armature and 10mm DLC dynamic woofer. Delivers certified 24-bit/96kHz LDAC lossless wireless audiophile sound.",
    "images": [
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=800&q=80"
    ],
    "variants": [
      {
        "name": "Pure Obsidian",
        "hex": "#111827",
        "imageIndex": 0
      }
    ],
    "features": [
      "Triple-Driver Hybrid Architecture (Knowles Balanced Armature + 10mm DLC)",
      "Lossless LDAC Transmission at 990 kbps (Hi-Res Audio Certified)",
      "Precision Charging Case with Battery Indicator LEDs",
      "Custom 10-Band Parametric EQ Calibration via TECHNO App"
    ],
    "specs": {
      "Acoustic System": "Dual Knowles BA + 10mm Diamond-Like Carbon Dynamic",
      "Frequency Response": "10Hz - 45,000Hz Ultra-Wide",
      "Audio Codecs": "LDAC, aptX Lossless, AAC, SBC",
      "Battery": "7 Hours (LDAC On) / 30 Hours Total with Case",
      "Weight": "5.1 grams per earbud"
    },
    "inTheBox": [
      "2x TECHNO Reference TWS Earbuds",
      "1x Charging Case",
      "6x Sets SpinFit & Memory Foam Tips",
      "1x Braided USB-C Cable"
    ]
  },
  {
    "id": "techno-nano-stealth-wireless-buds",
    "title": "TECHNO Nano Buds Ultra-Mini Stealth Earbuds",
    "shortTitle": "Nano Buds Stealth",
    "series": "AERO SERIES",
    "category": "Airbuds",
    "price": 89.0,
    "compareAtPrice": 129.0,
    "rating": 4.8,
    "reviewCount": 167,
    "isSale": true,
    "isBestSeller": true,
    "inStock": true,
    "description": "Compact stealth wireless earbuds. Low-profile in-concha fit delivers punchy Hi-Fi sound and passive noise isolation with 24 hours total battery reserve.",
    "images": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80"
    ],
    "variants": [
      {
        "name": "Stealth Black",
        "hex": "#18181B",
        "imageIndex": 0
      }
    ],
    "features": [
      "Ultra-Low Profile 3.4g Flush Fit Design",
      "Passive Noise Blocking (-26dB) Without Ear Canal Pressure Fatigue",
      "Pocketable Micro Capsule Charging Case",
      "Bluetooth 5.3 Instant Auto-Connect"
    ],
    "specs": {
      "Driver": "6mm Custom Micro Dynamic Driver",
      "Form Factor": "Ultra-Miniature Flush Ear-Canal Fit",
      "Battery": "6 Hours Continuous Play / 24 Hours with Capsule Case",
      "Weight": "3.4 grams"
    },
    "inTheBox": [
      "2x TECHNO Nano Buds (L/R)",
      "1x Capsule Charging Case",
      "3x Soft-Touch Silicon Tips",
      "1x USB-C Cable"
    ]
  },
  {
    "id": "techno-apex-75-mechanical-keyboard",
    "title": "TECHNO Apex 75 Low-Profile Mechanical Keyboard",
    "shortTitle": "Apex 75 Keyboard",
    "series": "DESK SERIES",
    "category": "Keyboards",
    "price": 149.0,
    "compareAtPrice": 199.0,
    "rating": 4.9,
    "reviewCount": 162,
    "isSale": true,
    "isBestSeller": true,
    "inStock": true,
    "description": "CNC machined aluminum 75% wireless mechanical keyboard. Features hot-swappable low-profile switches, custom acoustic dampening pads, and 1000Hz polling rate.",
    "images": [
      "https://shoaibhussainq18-collab.github.io/141633443434/images/keyboard-minimal.jpg"
    ],
    "variants": [
      {
        "name": "Space Gray Anodized",
        "hex": "#4B5563",
        "imageIndex": 0
      },
      {
        "name": "Matte Obsidian",
        "hex": "#111111",
        "imageIndex": 0
      }
    ],
    "features": [
      "CNC Machined 6063 Aerospace Aluminum Unibody Top Plate",
      "Hot-Swappable Low-Profile Tactile Switches with Factory Pre-Lube",
      "Tri-Mode Connectivity: 2.4GHz Ultra-Low Latency, Bluetooth 5.3, USB-C",
      "Dual Acoustic PORON Gaskets and IXPE Sound Dampening Sheet",
      "220 Hours Wireless Battery Life with 4000mAh Cell"
    ],
    "specs": {
      "Form Factor": "75% Compact Layout (84 Keys)",
      "Switch Type": "TECHNO Low-Profile Mechanical Switches (Hot-Swappable)",
      "Keycaps": "Premium Doubleshot PBT Ergonomic Profile",
      "Connectivity": "Wireless 2.4GHz (1000Hz), Bluetooth 5.3, USB-C",
      "Battery": "4000mAh Rechargeable (Up to 220 Hours)",
      "Weight": "680 grams"
    },
    "inTheBox": [
      "1x TECHNO Apex 75 Mechanical Keyboard",
      "1x 2.4GHz Ultra-Slim USB-A Receiver",
      "1x Braided USB-C Cable (1.8m)",
      "1x Dual Switch & Keycap Puller Tool"
    ]
  },
  {
    "id": "techno-cyberboard-65-gasket-keyboard",
    "title": "TECHNO Cyberboard 65% Gasket-Mount Keyboard",
    "shortTitle": "Cyberboard 65 Gasket",
    "series": "DESK SERIES",
    "category": "Keyboards",
    "price": 179.0,
    "compareAtPrice": 249.0,
    "rating": 5.0,
    "reviewCount": 114,
    "isSale": true,
    "isBestSeller": true,
    "inStock": true,
    "description": "Heavyweight CNC anodized aluminum 65% custom keyboard. Built with pure PORON gasket suspension, flexible poly-carbonate plate, and deep acoustic thock.",
    "images": [
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80",
      "https://shoaibhussainq18-collab.github.io/141633443434/images/keyboard-minimal.jpg"
    ],
    "variants": [
      {
        "name": "Anodized Silver",
        "hex": "#D1D5DB",
        "imageIndex": 0
      },
      {
        "name": "Deep Midnight Purple",
        "hex": "#581C87",
        "imageIndex": 0
      }
    ],
    "features": [
      "Solid 1.2kg CNC Milled 6063 Aluminum Chassis with Brass Accent Weight",
      "True Gasket-Mount Isolation Eliminates Harsh Bottom-Out Vibrations",
      "Factory Lubed Mechanical Switches with Custom Thock Acoustics",
      "Custom RGB South-Facing LEDs with Underglow Diffuser Strip"
    ],
    "specs": {
      "Form Factor": "65% Exploded Layout (68 Keys)",
      "Mounting": "Multi-Layer PORON Gasket Isolation Mount",
      "Plate": "CNC Precision Polycarbonate Flex-Cut Plate",
      "Switches": "Hot-Swap 5-Pin Compatible (Pre-Lubed Linear 45g)",
      "Weight": "1250 grams solid desktop anchor"
    },
    "inTheBox": [
      "1x TECHNO Cyberboard 65 Mechanical Keyboard",
      "1x Coiled Aviator USB-C Custom Cable",
      "1x Aluminum Keycap & Switch Puller",
      "1x Acrylic Dust Cover"
    ]
  },
  {
    "id": "techno-matrix-80-tkl-tournament-keyboard",
    "title": "TECHNO Matrix 80 Tenkeyless Tournament Keyboard",
    "shortTitle": "Matrix 80 TKL",
    "series": "DESK SERIES",
    "category": "Keyboards",
    "price": 169.0,
    "compareAtPrice": 229.0,
    "rating": 4.9,
    "reviewCount": 96,
    "isSale": true,
    "isBestSeller": false,
    "inStock": true,
    "description": "Tournament tenkeyless board equipped with mechanical switches, rapid trigger reset, hot-swap PCB sockets, and aircraft-grade aluminum top plate.",
    "images": [
      "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80",
      "https://shoaibhussainq18-collab.github.io/141633443434/images/keyboard-minimal.jpg"
    ],
    "variants": [
      {
        "name": "Tournament Matte Black",
        "hex": "#111827",
        "imageIndex": 0
      }
    ],
    "features": [
      "1000Hz Ultra-Low Latency Tournament Polling Engine",
      "Hot-Swappable 5-Pin Mechanical Switch Sockets",
      "Aircraft-Grade Anodized Aluminum Top Plate",
      "High-Durability Textured PBT Keycaps"
    ],
    "specs": {
      "Layout": "80% Tenkeyless (87 Keys ANSI)",
      "Switches": "TECHNO Custom Mechanical Linear Switches (Hot-Swappable)",
      "Keycaps": "Doubleshot PBT Textured Profile",
      "Weight": "980 grams"
    },
    "inTheBox": [
      "1x TECHNO Matrix 80 TKL Keyboard",
      "1x Detachable High-Speed Braided USB-C Cable",
      "1x Keycap Puller Tool"
    ]
  },
  {
    "id": "techno-cyberacoustic-rgb-gaming-keyboard",
    "title": "TECHNO CyberAcoustic RGB Mechanical Keyboard",
    "shortTitle": "CyberAcoustic RGB Keyboard",
    "series": "DESK SERIES",
    "category": "Keyboards",
    "price": 139.0,
    "compareAtPrice": 189.0,
    "rating": 4.8,
    "reviewCount": 88,
    "isSale": true,
    "isBestSeller": false,
    "inStock": true,
    "description": "Full-spectrum RGB mechanical keyboard with sound-dampening silicon base, responsive linear mechanical switches, and wireless Bluetooth 5.3 connection.",
    "images": [
      "https://images.unsplash.com/photo-1626958390898-162d3577f293?auto=format&fit=crop&w=800&q=80"
    ],
    "variants": [
      {
        "name": "Cyber Black Edition",
        "hex": "#09090B",
        "imageIndex": 0
      }
    ],
    "features": [
      "Per-Key South-Facing RGB Backlight with 18 Custom Lighting Presets",
      "Pre-Lubed Linear Mechanical Switches with Satisfying Tactile Return",
      "Sound-Absorbing Silicone Base Pad for Clean Acoustic Resonance",
      "Tri-Mode Wireless Connectivity: 2.4GHz, Bluetooth 5.3, USB-C"
    ],
    "specs": {
      "Layout": "75% Layout (84 Keys)",
      "Switches": "Hot-Swap Mechanical Linear Red (45g)",
      "Battery": "3000mAh Lithium-Polymer (Up to 180 Hours)",
      "Weight": "720 grams"
    },
    "inTheBox": [
      "1x TECHNO CyberAcoustic RGB Keyboard",
      "1x USB-C Braided Cable",
      "1x 2.4GHz Nano Wireless Receiver",
      "1x Keycap & Switch Puller"
    ]
  },
  {
    "id": "techno-ultra-slim-aluminum-wireless-keyboard",
    "title": "TECHNO Ultra-Slim Aluminum Wireless Keyboard",
    "shortTitle": "Ultra-Slim Aluminum Keyboard",
    "series": "DESK SERIES",
    "category": "Keyboards",
    "price": 119.0,
    "compareAtPrice": 169.0,
    "rating": 4.9,
    "reviewCount": 105,
    "isSale": true,
    "isBestSeller": true,
    "inStock": true,
    "description": "Minimalist low-profile aluminum wireless keyboard. Scissor-switch quiet keycaps, multi-device fast switching, and ultra-thin 12mm profile.",
    "images": [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80"
    ],
    "variants": [
      {
        "name": "Anodized Silver",
        "hex": "#E5E7EB",
        "imageIndex": 0
      },
      {
        "name": "Space Gray",
        "hex": "#4B5563",
        "imageIndex": 0
      }
    ],
    "features": [
      "Precision CNC Anodized Aluminum Top Enclosure",
      "Whisper-Quiet Scissor Switch Key Travel (1.5mm)",
      "Bluetooth 5.3 Multi-Pairing with Instant 1-Key Device Switch",
      "Type-C Rechargeable with 3 Months Battery on a Single Charge"
    ],
    "specs": {
      "Form Factor": "Compact Tenkeyless (78 Keys)",
      "Thickness": "12mm Ultra-Slim Profile",
      "Battery": "Rechargeable Lithium-Ion (3 Months Typical)",
      "Weight": "420 grams"
    },
    "inTheBox": [
      "1x TECHNO Ultra-Slim Aluminum Keyboard",
      "1x USB-C Charging Cable",
      "1x User Manual"
    ]
  },
  {
    "id": "techno-magflow-magnetic-powerbank",
    "title": "TECHNO MagFlow 10,000mAh Magnetic Power Bank",
    "shortTitle": "MagFlow 10K Power Bank",
    "series": "DESK SERIES",
    "category": "Hardware & Power",
    "price": 59.0,
    "compareAtPrice": 79.0,
    "rating": 4.9,
    "reviewCount": 115,
    "isSale": true,
    "isBestSeller": true,
    "inStock": true,
    "description": "Minimalist aerospace titanium and frosted glass magnetic wireless power bank. Features glowing numeric LED battery percentage readout and 20W PD two-way fast charging.",
    "images": [
      "https://shoaibhussainq18-collab.github.io/141633443434/images/powerbank-mag.jpg"
    ],
    "variants": [
      {
        "name": "Natural Titanium",
        "hex": "#9E9E9E",
        "imageIndex": 0
      },
      {
        "name": "Frosted Obsidian",
        "hex": "#1A1A1A",
        "imageIndex": 0
      }
    ],
    "features": [
      "Snap-On MagSafe / Qi2 Compatible Magnetic Wireless Charging (15W)",
      "Glowing Micro-LED Percentage Battery Display",
      "20W Power Delivery 3.0 Bi-Directional Fast USB-C Port",
      "Ultra-Strong 12N Neodymium N52 Magnetic Locking Grip",
      "Aircraft-Grade CNC Aluminum Alloy Heat-Dissipation Enclosure"
    ],
    "specs": {
      "Capacity": "10,000mAh / 38.5Wh (TSA Approved for Flight Carry-on)",
      "Wireless Output": "5W / 7.5W / 10W / 15W Max Qi2 Fast Wireless",
      "USB-C In/Out": "5V/3A, 9V/2.22A, 12V/1.67A (20W PD Max)",
      "Safety Protection": "Overcharge, Overcurrent, Short-Circuit, Foreign Object Detection",
      "Weight": "190 grams ultra-slim"
    },
    "inTheBox": [
      "1x TECHNO MagFlow 10,000mAh Power Bank",
      "1x Braided USB-C Fast-Charging Cable",
      "1x User Manual & 2-Year Warranty"
    ]
  },
  {
    "id": "techno-ambient-sound-speaker",
    "title": "TECHNO Acoustic 360 Spatial Speaker",
    "shortTitle": "Acoustic 360 Speaker",
    "series": "SERIES X ACOUSTICS",
    "category": "Hardware & Power",
    "price": 199.0,
    "compareAtPrice": 299.0,
    "rating": 4.9,
    "reviewCount": 87,
    "isSale": true,
    "isBestSeller": true,
    "inStock": true,
    "description": "Room-filling 360-degree spatial audio speaker with dual passive radiators, anodized aluminum grille, and 24-hour party link.",
    "images": [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA-W_rcjQf5aG06Qb1Iv-KAE0yA-Rx9jt-GI0HUUAS8I6GmDHk3kcGmsy8oZaO1b2BjJSL9tioWadPryMF9MbbPPW_jGc2ENahFtbjUgX9b1i9oT6NWbNTPBhAf5sH03TuiIeofYpZirGVZMKgQBRaetp2I-uhcJN-E_B_r6xww6f-jboykMdQjODjceAYV3ayxkjsw7OngAE4bfXX6srj3UXRiI2csvOfChB3sb-LH"
    ],
    "variants": [
      {
        "name": "Anodized Silver",
        "hex": "#E5E7EB",
        "imageIndex": 0
      }
    ],
    "features": [
      "Omnidirectional 360-Degree Spatial Sound Dispersion",
      "Dual Opposing High-Excursion Passive Bass Radiators",
      "Machined Aluminum Acoustic Dispersion Cones",
      "24-Hour Battery Life with USB-C Fast Charge"
    ],
    "specs": {
      "Power Output": "45W RMS Pure Audio Output",
      "Frequency Range": "40Hz - 22,000Hz Room-Filling Sound",
      "Battery": "24 Hours Continuous Playtime",
      "Weight": "620 grams"
    },
    "inTheBox": [
      "1x TECHNO Acoustic 360 Spatial Speaker",
      "1x Fast Charging USB-C Cable",
      "1x User Manual"
    ]
  },
  {
    "id": "techno-macbook-pro-dock",
    "title": "TECHNO Precision Aluminum Laptop Stand & Hub",
    "shortTitle": "Aluminum Laptop Stand & Hub",
    "series": "DESK SERIES",
    "category": "Hardware & Power",
    "price": 89.0,
    "compareAtPrice": 119.0,
    "rating": 4.9,
    "reviewCount": 94,
    "isSale": true,
    "isBestSeller": false,
    "inStock": true,
    "description": "Aviation-grade aluminum cooling dock with integrated 8-in-1 Thunderbolt 4 hub and 100W Power Delivery pass-through.",
    "images": [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCx7Jgh1N1qZ284iW8WUK4D0OEI3-jeN5eqhd-tJ9OPSzbC65Bt0-RRi76Fqr2ZrjWDU7G3lT1q7iHXfGanJ5N9eNDMras3ciq48VA3witABMWbQXx2nbfHukyhTlOQ-Fl-x5ycX8FZNBrDw6YKBbsBpV2ZWpevtVh5nEkmoO2QXivJNP8Ck-18R8W34h5n0pdZO98ADFqToh67VLgzZWkEn8KdV-rAgZznhSWyGpSp"
    ],
    "variants": [
      {
        "name": "Space Gray Aluminum",
        "hex": "#4B5563",
        "imageIndex": 0
      }
    ],
    "features": [
      "Solid CNC Machined 6063 Aluminum Cooling Heatsink Stand",
      "8-in-1 Ports: 4K 60Hz HDMI, 100W PD USB-C, 3x USB 3.2, SD/TF, Gigabit LAN",
      "Ergonomic 15-Degree Elevation for Posture and Airflow",
      "Non-Slip Protective Silicone Anti-Scratch Inlays"
    ],
    "specs": {
      "Material": "100% Solid Aerospace Aluminum Alloy",
      "Ports": "8 High-Speed Ports with 10Gbps Data Transfer",
      "Power Delivery": "100W USB-C PD 3.0 Pass-Through",
      "Weight": "410 grams"
    },
    "inTheBox": [
      "1x TECHNO Aluminum Laptop Stand & Hub",
      "1x High-Speed Host USB-C Cable",
      "1x Quick Setup Guide"
    ]
  },
  {
    "id": "techno-65w-gan-fast-charger",
    "title": "TECHNO 65W GaN Fast Charger",
    "shortTitle": "65W GaN Fast Charger",
    "series": "DESK SERIES",
    "category": "Hardware & Power",
    "price": 29.0,
    "compareAtPrice": 39.0,
    "rating": 4.9,
    "reviewCount": 91,
    "isSale": true,
    "isBestSeller": false,
    "inStock": true,
    "description": "Ultra-compact Gallium Nitride (GaN) fast wall charger with dual USB-C Power Delivery 3.0 ports for rapid laptop, watch, and audio charging.",
    "images": [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBUuK-w8kpF5b6vQunu6nIVXOlBsp5EiMfu5vqoy-6PwuVUdPPN-28ElvZfF3Nvrrr-fhnEbcncLrcIqLVnBwej9U-pZvlpcckomCMPWxUwcvA4i6xQHxFCXsFlNH7XzR4HkNbv3yRaFiwWEEh-hBClRoeJxFn7ChJnLsCBn9o6w7fOq-bg5t8sAd4Isa8xiWSG7-2gmPfdIk9xXzWxD533fRNIhYD-DVHH2sI1sajy"
    ],
    "variants": [
      {
        "name": "Arctic White",
        "hex": "#F5F5F7",
        "imageIndex": 0
      }
    ],
    "features": [
      "Gallium Nitride (GaN III) Technology: 50% Smaller with Zero Overheating",
      "65W Max Single Port Output: Charges a MacBook Pro from 0 to 50% in 30 mins",
      "Dual USB-C Intelligent Power Distribution",
      "Foldable Travel Prongs for Compact Bag Portability"
    ],
    "specs": {
      "Total Power": "65W Max Power Delivery 3.0 / PPS",
      "Technology": "GaN III High-Efficiency Semiconductors",
      "Weight": "95 grams Pocket Size"
    },
    "inTheBox": [
      "1x TECHNO 65W GaN Fast Wall Charger",
      "1x Instruction Manual & Safety Certifications"
    ]
  },
  {
    "id": "techno-magnetic-travel-case",
    "title": "TECHNO Magnetic Travel Case",
    "shortTitle": "Magnetic Travel Case",
    "series": "DESK SERIES",
    "category": "Hardware & Power",
    "price": 39.0,
    "compareAtPrice": 49.0,
    "rating": 4.8,
    "reviewCount": 46,
    "isSale": true,
    "isBestSeller": false,
    "inStock": true,
    "description": "Molded ballistic nylon protective travel case with quick magnetic latch and integrated cable organizer pouch for TECHNO headphones and smart gear.",
    "images": [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAt6zaJzvIbUuI7To-98uJpJp5-9RT8--CMqTBc5QkB_YmXSLq1eSo3Pi4Pp2QBFRGzN3TpsgnczhH9i9b96KLilstYsfqrpG-GDpH0ggJRdOanU0Xd92CyKmZDDkdCk18ReP8U_KBMNpp44SqKbwM_xiWci870q9PdLLihVrB5w6W4TVNKwNfGIgjOiSwPxW1oN6N2kPmbfMBCWZnnzp1iyYXRmr_VZ2xUwpaSjdSf"
    ],
    "variants": [
      {
        "name": "Standard Matte",
        "hex": "#1A1A1A",
        "imageIndex": 0
      }
    ],
    "features": [
      "Molded Ballistic 1680D Water-Repellent Outer Shell",
      "Quick Magnetic Auto-Align Snap Latch",
      "Soft Velvet Interior Lining Prevents Hardware Scratches",
      "Internal Zippered Cable and Dongle Mesh Pocket"
    ],
    "specs": {
      "Material": "1680D Ballistic Nylon + EVA Hardshell",
      "Dimensions": "210mm x 180mm x 55mm",
      "Weight": "130 grams"
    },
    "inTheBox": [
      "1x TECHNO Magnetic Travel Case",
      "1x Carabiner Clip"
    ]
  }
];

const CURRENCIES = {
  USD: { symbol: "$", rate: 1.0, label: "USD" },
  EUR: { symbol: "€", rate: 0.92, label: "EUR" },
  GBP: { symbol: "£", rate: 0.79, label: "GBP" },
  CAD: { symbol: "CA$", rate: 1.35, label: "CAD" },
  PKR: { symbol: "Rs ", rate: 278.0, label: "PKR" },
  AED: { symbol: "AED ", rate: 3.67, label: "AED" }
};

const BLOG_ARTICLES = [
  {
    id: "science-of-silence-anc",
    title: "The Science of Silence: How Hybrid ANC Cancels 99.8% of Ambient Noise",
    category: "Acoustic Engineering",
    date: "October 2026",
    readTime: "5 min read",
    snippet: "Exploring how dual feedforward and feedback microphones invert ambient wave frequencies in microseconds to create pure auditory isolation.",
    author: "Dr. Elena Vance, Lead Acoustic Engineer",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhzeAfkVnIFbTvX5yZrgkk251E9hSCkp2M3Tn1tOYXoiXBjmcMpqf-hgPIOxHC_e1AyLBA4CoNA1K75G0w001pXRLWovNJbkjW-wiOPU8aL5Afplz6EY8pv-IIGA83yrunIDWXxvwOzxj_62ipNjL6N8CLb-pNQBP1tnJl84S7XOF7n76FfWn2mtgFxafWH6xPMJFSq0_goaPS-xc1_xxKgnoB36GO60vykpjbi3M7",
    content: `
      <p class="mb-4">Noise cancellation is often understood simply as blocking sound. But true active noise cancellation is active wave physics. At TECHNO, our acoustic laboratory approached the Wireless Pro design with a single directive: acoustic invisibility.</p>
      <h3 class="text-lg font-bold text-black mt-6 mb-3">Feedforward vs. Feedback Microphones</h3>
      <p class="mb-4">By placing outward microphones to intercept ambient decibels milliseconds before they reach the ear canal, combined with internal reference microphones analyzing inner cavity reflections, the TECHNO DSP calculates inverse anti-waves with sub-millisecond precision.</p>
      <p class="mb-4">The result is a sound floor below 12dB—cleaner than a professional recording booth in deep midnight.</p>
    `
  },
  {
    id: "chrono-ultra-titanium-engineering",
    title: "Inside Chrono Ultra: Engineering a Grade 5 Titanium Smartwatch",
    category: "Hardware Architecture",
    date: "October 2026",
    readTime: "6 min read",
    snippet: "How CNC micro-milling and sapphire crystallization allow the Chrono Ultra to achieve 100m dive resistance in an ultra-slim 12mm silhouette.",
    author: "Klaus Hoffmann, Head of Industrial Design",
    image: "https://shoaibhussainq18-collab.github.io/141633443434/images/smartwatch-ultra.jpg",
    content: `
      <p class="mb-4">Smartwatches are typically burdened by plastic bezels and fragile glass. With the Chrono Ultra, we selected Grade 5 Titanium—the exact alloy utilized in rocket propellant housings and supersonic aerospace wings.</p>
      <h3 class="text-lg font-bold text-black mt-6 mb-3">Mohs Scale 9 Sapphire Protection</h3>
      <p class="mb-4">The 1.43-inch AMOLED display is guarded by lab-grown synthetic sapphire crystal. Only diamond can scratch this surface. Coupled with dual-frequency L1+L5 GPS telemetry, the Chrono Ultra is designed for marathon mountaineers and urban purists alike.</p>
    `
  },
  {
    id: "lossless-bluetooth-future",
    title: "Lossless Bluetooth 5.3 & Next-Gen Audio Codecs Explained",
    category: "Technology",
    date: "September 2026",
    readTime: "4 min read",
    snippet: "Why bitrates over 990 kbps finally bring wired audiophile mastering fidelity into ultra-low-latency wireless headsets.",
    author: "Marcus Chen, Audio Hardware Architect",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkIbnZpshtyNmE0iWr11pFI9uPaRi-kEOabvsUs72354KDYfTp1dn3EoOzyRXJC1rdgrte2w_yyY-BQU8ecXDdDZKaMQuAyEDshaDka0Lp_wR9oUdEeKnCgftMEpn90K-xuUEshlcNEjenK-opYcwE8-DmRv7BTuAYRnYx1NbSjTtRpd1Cq56mSljRxIxnCX_bH8QExJE2Su0wkKA-yybhGgdBrM3r65GZuaO0m9kP",
    content: `
      <p class="mb-4">For years, wireless audio meant audio compromise. High frequencies were compressed, harmonics flattened, and soundstage narrowed into low-bitrate streams.</p>
      <p class="mb-4">With the integration of Bluetooth 5.3 and custom LDAC/aptX Adaptive pipelines in the TECHNO platform, listeners experience full 24-bit/96kHz high-resolution audio over the air without dropouts or compression artifacts.</p>
    `
  }
];

// =========================================================================
// 2. TECHNO STORE APPLICATION CLASS
// =========================================================================

class TechnoApp {
  constructor() {
    this.cart = this.loadCart();
    this.currency = "USD";
    this.discountCode = "";
    this.discountRate = 0.0;
    this.currentView = "home";
    this.searchQuery = "";
    this.selectedProduct = TECHNO_PRODUCTS[0];
    this.selectedVariant = TECHNO_PRODUCTS[0].variants[0];
    this.selectedImageIndex = 0;
    this.productQuantity = 1;
    this.productActiveTab = "specs";
    this.currentOrder = this.loadLatestOrder();

    // Default Seed Cart with user snippet items if fresh session
    if (this.cart.length === 0) {
      this.cart = [
        {
          id: TECHNO_PRODUCTS[0].id,
          title: TECHNO_PRODUCTS[0].title,
          shortTitle: TECHNO_PRODUCTS[0].shortTitle,
          price: TECHNO_PRODUCTS[0].price,
          variant: "Matte White / Silver",
          image: TECHNO_PRODUCTS[0].images[0],
          quantity: 1
        },
        {
          id: TECHNO_PRODUCTS[1].id,
          title: TECHNO_PRODUCTS[1].title,
          shortTitle: TECHNO_PRODUCTS[1].shortTitle,
          price: TECHNO_PRODUCTS[1].price,
          variant: "Natural Titanium",
          image: TECHNO_PRODUCTS[1].images[0],
          quantity: 1
        }
      ];
      this.saveCart();
    }

    this.init();
  }

  init() {
    window.addEventListener("hashchange", () => this.handleHashChange());
    this.handleHashChange();
    this.updateCartUI();
  }

  handleHashChange() {
    const rawHash = window.location.hash.replace("#", "") || "home";
    const parts = rawHash.split("/");
    const route = parts[0] || "home";
    const param = parts[1] || null;

    this.currentView = route;
    this.updateActiveNav(route);
    window.scrollTo({ top: 0, behavior: "smooth" });

    const container = document.getElementById("appContainer");
    if (!container) return;

    switch (route) {
      case "home":
        container.innerHTML = this.renderHomeView();
        break;
      case "shop":
        container.innerHTML = this.renderShopView(param);
        break;
      case "collections":
        container.innerHTML = this.renderCollectionsView();
        break;
      case "product":
        const prod = param ? (TECHNO_PRODUCTS.find(p => p.id === param) || TECHNO_PRODUCTS[0]) : TECHNO_PRODUCTS[0];
        this.selectedProduct = prod;
        this.selectedVariant = prod.variants[0] || { name: "Default", hex: "#000" };
        this.selectedImageIndex = 0;
        this.productQuantity = 1;
        container.innerHTML = this.renderProductView();
        break;
      case "about":
        container.innerHTML = this.renderAboutView();
        break;
      case "contact":
        container.innerHTML = this.renderContactView();
        break;
      case "blog":
        container.innerHTML = this.renderBlogView();
        break;
      case "cart":
        container.innerHTML = this.renderCartView();
        break;
      case "checkout":
        container.innerHTML = this.renderCheckoutView();
        break;
      case "order-confirmation":
        container.innerHTML = this.renderConfirmationView();
        break;
      case "track-order":
        container.innerHTML = this.renderTrackOrderView();
        break;
      case "privacy":
        container.innerHTML = this.renderPrivacyView();
        break;
      case "refund":
        container.innerHTML = this.renderRefundView();
        break;
      case "shipping":
        container.innerHTML = this.renderShippingView();
        break;
      case "terms":
        container.innerHTML = this.renderTermsView();
        break;
      default:
        container.innerHTML = this.renderHomeView();
    }

    container.classList.remove("view-enter");
    void container.offsetWidth;
    container.classList.add("view-enter");
  }

  navigate(route, params = {}) {
    if (params.category) {
      window.location.hash = `${route}/${encodeURIComponent(params.category)}`;
    } else if (params.productId) {
      window.location.hash = `${route}/${params.productId}`;
    } else {
      window.location.hash = route;
    }
  }

  updateActiveNav(route) {
    document.querySelectorAll(".nav-link").forEach(link => {
      const target = link.getAttribute("data-nav");
      if (target === route) {
        link.classList.add("active");
        link.classList.remove("text-gray-600");
      } else {
        link.classList.remove("active");
        link.classList.add("text-gray-600");
      }
    });
  }

  // =========================================================================
  // 3. CURRENCY & PRICING UTILITIES
  // =========================================================================

  formatPrice(amountInUSD) {
    const cur = CURRENCIES[this.currency] || CURRENCIES.USD;
    const converted = amountInUSD * cur.rate;
    if (this.currency === "PKR") {
      return `${cur.symbol}${Math.round(converted).toLocaleString()} ${cur.label}`;
    }
    return `${cur.symbol}${converted.toFixed(2)} ${cur.label}`;
  }

  changeCurrency(newCurrency) {
    this.currency = newCurrency;
    this.showToast(`Currency updated to ${newCurrency}`);
    this.updateCartUI();
    this.handleHashChange();
  }

  // =========================================================================
  // 4. CART & STATE MANAGEMENT
  // =========================================================================

  loadCart() {
    try {
      const stored = localStorage.getItem("techno_cart");
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem("techno_cart", JSON.stringify(this.cart));
    } catch (e) {}
  }

  loadLatestOrder() {
    try {
      const stored = localStorage.getItem("techno_latest_order");
      return stored ? JSON.parse(stored) : {
        orderNumber: "TECHNO-89241",
        date: "Today",
        status: "Processing & Packaging",
        carrier: "DHL Express Priority",
        trackingNumber: "DHL-US-99382194",
        customerName: "Alex Mercer",
        email: "alex.mercer@example.com",
        address: "742 Evergreen Terrace, Springfield, OR 97477",
        items: [
          { title: "TECHNO Chrono Ultra Titanium Smartwatch", variant: "Natural Titanium", price: 349.0, quantity: 1 }
        ],
        total: 349.0
      };
    } catch (e) {
      return null;
    }
  }

  saveLatestOrder(order) {
    this.currentOrder = order;
    try {
      localStorage.setItem("techno_latest_order", JSON.stringify(order));
    } catch (e) {}
  }

  addToCart(productId, quantity = 1, variantName = null) {
    const product = TECHNO_PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const variant = variantName || (product.variants[0] ? product.variants[0].name : "Standard");
    const existing = this.cart.find(item => item.id === productId && item.variant === variant);

    if (existing) {
      existing.quantity += quantity;
    } else {
      this.cart.push({
        id: product.id,
        title: product.title,
        shortTitle: product.shortTitle || product.title,
        price: product.price,
        variant: variant,
        image: product.images[0],
        quantity: quantity
      });
    }

    this.saveCart();
    this.updateCartUI();
    this.showToast(`Added ${quantity}x "${product.shortTitle || product.title}" to cart!`);
    this.openCartDrawer();
  }

  addBundleToCart() {
    const p1 = TECHNO_PRODUCTS[0];
    const p2 = TECHNO_PRODUCTS[13]; // Travel Case
    const p3 = TECHNO_PRODUCTS[14]; // GaN Charger

    this.addToCart(p1.id, 1, "Matte White / Silver");
    this.addToCart(p2.id, 1, "Standard Matte");
    this.addToCart(p3.id, 1, "Arctic White");

    this.applyDiscount("BUNDLE15");
    this.showToast("3-Item Audio Workspace Bundle added with 15% discount applied!");
  }

  updateQuantity(index, delta) {
    if (this.cart[index]) {
      this.cart[index].quantity += delta;
      if (this.cart[index].quantity <= 0) {
        this.cart.splice(index, 1);
        this.showToast("Item removed from cart");
      }
      this.saveCart();
      this.updateCartUI();
      if (this.currentView === "cart") {
        document.getElementById("appContainer").innerHTML = this.renderCartView();
      }
    }
  }

  removeFromCart(index) {
    if (this.cart[index]) {
      const removed = this.cart.splice(index, 1);
      this.saveCart();
      this.updateCartUI();
      this.showToast(`Removed "${removed[0].shortTitle}" from cart`);
      if (this.currentView === "cart") {
        document.getElementById("appContainer").innerHTML = this.renderCartView();
      }
    }
  }

  getCartSubtotal() {
    return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  getCartTotal() {
    const subtotal = this.getCartSubtotal();
    const discount = subtotal * this.discountRate;
    const discountedSubtotal = subtotal - discount;
    const shipping = (discountedSubtotal >= 100 || discountedSubtotal === 0) ? 0 : 15.0;
    const estimatedTax = discountedSubtotal * 0.08;
    return {
      subtotal,
      discount,
      discountedSubtotal,
      shipping,
      tax: estimatedTax,
      total: discountedSubtotal + shipping + estimatedTax
    };
  }

  applyDiscount(code) {
    const cleanCode = (code || "").trim().toUpperCase();
    if (cleanCode === "TECHNO15" || cleanCode === "BUNDLE15" || cleanCode === "VIP15") {
      this.discountCode = cleanCode;
      this.discountRate = 0.15;
      this.showToast(`Success! 15% discount applied with code ${cleanCode}`);
    } else if (cleanCode === "WELCOME20") {
      this.discountCode = cleanCode;
      this.discountRate = 0.20;
      this.showToast(`Success! 20% New Member discount applied!`);
    } else {
      this.discountCode = "";
      this.discountRate = 0.0;
      this.showToast("Invalid promo code. Try TECHNO15", "error");
    }
    this.updateCartUI();
    if (this.currentView === "cart") {
      document.getElementById("appContainer").innerHTML = this.renderCartView();
    }
  }

  updateCartUI() {
    const totalCount = this.cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.getElementById("cartCountBadge");
    if (badge) {
      badge.textContent = totalCount;
      badge.classList.toggle("hidden", totalCount === 0);
    }

    const drawerCount = document.getElementById("drawerItemCount");
    if (drawerCount) {
      drawerCount.textContent = `${totalCount} item${totalCount === 1 ? '' : 's'}`;
    }

    const subtotal = this.getCartSubtotal();
    const freeShippingThreshold = 100;
    const remaining = Math.max(0, freeShippingThreshold - subtotal);
    const percent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

    const noticeEl = document.getElementById("freeShippingNotice");
    const percentEl = document.getElementById("freeShippingPercent");
    const barEl = document.getElementById("freeShippingBar");

    if (noticeEl && barEl && percentEl) {
      if (subtotal >= freeShippingThreshold) {
        noticeEl.innerHTML = `<span class="text-emerald-600 font-bold">✓ Free Express Delivery Unlocked!</span>`;
        percentEl.textContent = "100%";
        barEl.style.width = "100%";
        barEl.className = "bg-emerald-500 h-full transition-all duration-500";
      } else {
        noticeEl.textContent = `Add ${this.formatPrice(remaining)} more for Free Express Delivery`;
        percentEl.textContent = `${percent}%`;
        barEl.style.width = `${percent}%`;
        barEl.className = "bg-black h-full transition-all duration-500";
      }
    }

    const drawerContainer = document.getElementById("drawerCartItems");
    if (drawerContainer) {
      if (this.cart.length === 0) {
        drawerContainer.innerHTML = `
          <div class="py-12 text-center text-gray-500 flex flex-col items-center">
            <svg class="w-12 h-12 text-gray-300 mb-3" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25c-.67 0-1.188-.578-1.119-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
            </svg>
            <p class="text-sm font-semibold text-gray-900 mb-1">Your cart is currently empty</p>
            <p class="text-xs text-gray-400 mb-4">Discover our high-resolution audio & tech collection</p>
            <button onclick="technoApp.toggleCartDrawer(); technoApp.navigate('shop');" class="bg-black text-white text-xs font-semibold px-5 py-2.5 rounded-lg uppercase tracking-wider hover:bg-neutral-800 transition">
              Explore Catalog
            </button>
          </div>
        `;
      } else {
        drawerContainer.innerHTML = this.cart.map((item, index) => `
          <div class="pt-4 first:pt-0 flex space-x-3 items-center">
            <img src="${item.image}" alt="${item.title}" class="w-16 h-16 object-contain bg-[#F9F9F9] rounded-lg border border-gray-100 p-1"/>
            <div class="flex-1 min-w-0">
              <h4 class="text-xs font-bold text-gray-900 truncate">${item.shortTitle}</h4>
              <p class="text-[11px] text-gray-500">${item.variant}</p>
              <p class="text-xs font-bold text-black mt-1">${this.formatPrice(item.price)}</p>
            </div>
            <div class="flex items-center space-x-1 border border-gray-200 rounded-md bg-white">
              <button onclick="technoApp.updateQuantity(${index}, -1)" class="px-2 py-0.5 text-xs text-gray-600 hover:text-black">-</button>
              <span class="text-xs font-semibold px-1 text-gray-900">${item.quantity}</span>
              <button onclick="technoApp.updateQuantity(${index}, 1)" class="px-2 py-0.5 text-xs text-gray-600 hover:text-black">+</button>
            </div>
            <button onclick="technoApp.removeFromCart(${index})" title="Remove item" class="text-gray-400 hover:text-red-500 p-1 transition">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
        `).join("");
      }
    }

    const drawerSubtotal = document.getElementById("drawerSubtotal");
    const drawerTotal = document.getElementById("drawerTotal");
    if (drawerSubtotal && drawerTotal) {
      const totals = this.getCartTotal();
      drawerSubtotal.textContent = this.formatPrice(totals.subtotal);
      drawerTotal.textContent = this.formatPrice(totals.total);
    }
  }

  toggleCartDrawer() {
    const drawer = document.getElementById("cartDrawer");
    const overlay = document.getElementById("cartDrawerOverlay");
    if (!drawer || !overlay) return;

    const isOpen = !drawer.classList.contains("translate-x-full");
    if (isOpen) {
      this.closeCartDrawer();
    } else {
      this.openCartDrawer();
    }
  }

  openCartDrawer() {
    const drawer = document.getElementById("cartDrawer");
    const overlay = document.getElementById("cartDrawerOverlay");
    if (!drawer || !overlay) return;
    drawer.classList.remove("translate-x-full");
    overlay.classList.remove("opacity-0", "pointer-events-none");
    overlay.classList.add("opacity-100");
    this.updateCartUI();
  }

  closeCartDrawer() {
    const drawer = document.getElementById("cartDrawer");
    const overlay = document.getElementById("cartDrawerOverlay");
    if (!drawer || !overlay) return;
    drawer.classList.add("translate-x-full");
    overlay.classList.add("opacity-0", "pointer-events-none");
    overlay.classList.remove("opacity-100");
  }

  toggleMobileMenu() {
    const menu = document.getElementById("mobileMenu");
    if (menu) {
      menu.classList.toggle("hidden");
    }
  }

  openSearchModal() {
    const modal = document.getElementById("searchModal");
    const box = document.getElementById("searchModalBox");
    const input = document.getElementById("searchInput");
    if (!modal) return;
    modal.classList.remove("hidden");
    setTimeout(() => {
      modal.classList.remove("opacity-0");
      box.classList.remove("scale-95");
      box.classList.add("scale-100");
      if (input) input.focus();
    }, 10);
    this.handleLiveSearch("");
  }

  closeSearchModal() {
    const modal = document.getElementById("searchModal");
    const box = document.getElementById("searchModalBox");
    if (!modal) return;
    modal.classList.add("opacity-0");
    box.classList.remove("scale-100");
    box.classList.add("scale-95");
    setTimeout(() => modal.classList.add("hidden"), 200);
  }

  setSearchTerm(term) {
    const input = document.getElementById("searchInput");
    if (input) input.value = term;
    this.handleLiveSearch(term);
  }

  handleLiveSearch(query) {
    const q = (query || "").trim().toLowerCase();
    const resultsContainer = document.getElementById("searchResultsList");
    if (!resultsContainer) return;

    const matched = TECHNO_PRODUCTS.filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.category.toLowerCase().includes(q) || 
      p.series.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );

    if (matched.length === 0) {
      resultsContainer.innerHTML = `
        <div class="py-8 text-center text-gray-500">
          <p class="text-sm font-medium">No tech hardware found matching "${query}"</p>
          <p class="text-xs text-gray-400 mt-1">Try searching "smartwatch", "headphones", "keyboard", "airbuds", or "powerbank".</p>
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = matched.map(product => `
      <div class="flex items-center justify-between py-2 group cursor-pointer hover:bg-gray-50 p-2 rounded-xl transition" onclick="technoApp.closeSearchModal(); technoApp.navigate('product', {productId: '${product.id}'})">
        <div class="flex items-center space-x-3">
          <img src="${product.images[0]}" alt="${product.title}" class="w-12 h-12 object-contain bg-white rounded-lg border border-gray-200 p-1"/>
          <div>
            <h5 class="text-xs font-bold text-gray-900 group-hover:text-black">${product.title}</h5>
            <span class="text-[10px] text-gray-400 uppercase tracking-wider">${product.category}</span>
          </div>
        </div>
        <div class="text-right">
          <span class="text-xs font-bold text-black">${this.formatPrice(product.price)}</span>
          <span class="block text-[10px] text-emerald-600 font-semibold">In Stock</span>
        </div>
      </div>
    `).join("");
  }

  showToast(message, type = "success") {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `glass-dark text-white px-4 py-3 rounded-xl shadow-2xl flex items-center space-x-3 text-xs font-medium border border-neutral-700 pointer-events-auto transition-all duration-300 transform translate-y-4 opacity-0`;
    
    const icon = type === "success" 
      ? `<svg class="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>`
      : `<svg class="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"/></svg>`;

    toast.innerHTML = `
      ${icon}
      <span>${message}</span>
      <button onclick="this.parentElement.remove()" class="text-neutral-400 hover:text-white ml-2 text-xs">✕</button>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.remove("translate-y-4", "opacity-0");
    }, 10);

    setTimeout(() => {
      toast.classList.add("opacity-0", "translate-y-2");
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  handleNewsletter(event) {
    event.preventDefault();
    const input = document.getElementById("newsletterEmail");
    if (input && input.value) {
      this.showToast(`Thank you! 15% discount code TECHNO15 sent to ${input.value}`);
      input.value = "";
    }
  }

  setProductImage(index) {
    this.selectedImageIndex = index;
    const mainImg = document.getElementById("mainProductImg");
    if (mainImg && this.selectedProduct.images[index]) {
      mainImg.src = this.selectedProduct.images[index];
    }
    document.querySelectorAll(".thumb-btn").forEach((btn, i) => {
      btn.classList.toggle("border-black", i === index);
      btn.classList.toggle("border-2", i === index);
      btn.classList.toggle("border-gray-200", i !== index);
    });
  }

  setProductVariant(variantName) {
    const found = this.selectedProduct.variants.find(v => v.name === variantName);
    if (found) {
      this.selectedVariant = found;
      const label = document.getElementById("selectedVariantLabel");
      if (label) label.textContent = found.name;
      if (found.imageIndex !== undefined && this.selectedProduct.images[found.imageIndex]) {
        this.setProductImage(found.imageIndex);
      }
      document.querySelectorAll(".variant-btn").forEach(btn => {
        const name = btn.getAttribute("data-variant");
        btn.classList.toggle("ring-2", name === variantName);
        btn.classList.toggle("ring-black", name === variantName);
        btn.classList.toggle("ring-offset-2", name === variantName);
      });
    }
  }

  setProductQty(delta) {
    this.productQuantity = Math.max(1, this.productQuantity + delta);
    const input = document.getElementById("productQtyInput");
    if (input) input.value = this.productQuantity;
  }

  setProductTab(tab) {
    this.productActiveTab = tab;
    document.querySelectorAll(".tab-nav-btn").forEach(btn => {
      const t = btn.getAttribute("data-tab");
      const active = t === tab;
      btn.classList.toggle("border-black", active);
      btn.classList.toggle("text-black", active);
      btn.classList.toggle("border-transparent", !active);
      btn.classList.toggle("text-gray-400", !active);
    });

    const tabContainer = document.getElementById("productTabContent");
    if (tabContainer) {
      tabContainer.innerHTML = this.renderProductTabContent(tab);
    }
  }

  // =========================================================================
  // 5. TEMPLATES & PAGE VIEWS
  // =========================================================================

  // VIEW 1: HOME PAGE
  renderHomeView() {
    const featured = TECHNO_PRODUCTS[0];
    const watchFeature = TECHNO_PRODUCTS[1]; // Chrono Ultra
    const bestSellers = [TECHNO_PRODUCTS[0], TECHNO_PRODUCTS[1], TECHNO_PRODUCTS[3], TECHNO_PRODUCTS[4]];

    return `
      <!-- Hero Banner -->
      <section class="relative bg-neutral-950 text-white overflow-hidden" data-purpose="hero-section">
        <div class="absolute inset-0 bg-gradient-to-r from-black via-neutral-900/90 to-transparent z-10"></div>
        <img src="${featured.images[0]}" alt="TECHNO Hero Acoustic" class="absolute right-0 top-0 bottom-0 h-full w-full lg:w-3/5 object-contain object-right opacity-30 lg:opacity-90 transform lg:translate-x-12 filter contrast-125 select-none pointer-events-none"/>
        
        <div class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col justify-center min-h-[560px]">
          <div class="max-w-2xl space-y-6">
            <span class="inline-flex items-center text-xs font-bold tracking-[0.3em] uppercase bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-neutral-300">
              <span class="w-2 h-2 rounded-full bg-emerald-400 mr-2 pulse-glow"></span>
              Next-Gen Precision Hardware 2026
            </span>
            <h1 class="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
              Sound Refined.<br/>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">Silence Redefined.</span>
            </h1>
            <p class="text-sm sm:text-base text-neutral-300 max-w-lg font-normal leading-relaxed">
              Experience audiophile-grade acoustic isolation, Grade 5 titanium smartwatches, and tactile mechanical workspaces. Engineered for creators and audiophiles.
            </p>
            <div class="flex flex-wrap items-center gap-4 pt-2">
              <button onclick="technoApp.navigate('product')" class="bg-white text-black hover:bg-neutral-200 font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition shadow-xl flex items-center gap-2">
                <span>Explore Flagship Pro</span>
                <span class="text-sm">→</span>
              </button>
              <button onclick="technoApp.navigate('shop')" class="bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-xl border border-white/20 transition backdrop-blur-sm">
                View Full Catalog (25 Precision Tech Instruments)
              </button>
            </div>
            <div class="pt-6 flex items-center space-x-6 text-xs text-neutral-400">
              <div class="flex items-center space-x-1 text-white">
                <span>★★★★★</span>
                <span class="font-bold ml-1">4.9/5</span>
              </div>
              <span>•</span>
              <span>15,000+ Verified Tech Enthusiasts</span>
              <span>•</span>
              <span class="text-emerald-400 font-medium">Free Global Express</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Smartwatch Spotlight Feature Banner -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div class="bg-gradient-to-br from-neutral-900 via-neutral-950 to-black text-white rounded-3xl p-8 sm:p-12 border border-neutral-800 overflow-hidden relative group cursor-pointer" onclick="technoApp.navigate('product', {productId: '${watchFeature.id}'})">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-20">
            <div class="lg:col-span-7 space-y-4">
              <span class="text-[10px] font-bold tracking-[0.3em] uppercase bg-white/20 px-3 py-1 rounded-full backdrop-blur-md">New Release</span>
              <h2 class="text-3xl sm:text-4xl font-black uppercase tracking-tight">TECHNO Chrono Ultra Titanium</h2>
              <p class="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-lg">
                Forged from Grade 5 aerospace titanium with sapphire crystal AMOLED optics, dual-band GPS, and 14-day battery life. The ultimate wrist instrument.
              </p>
              <div class="flex items-center gap-4 pt-2">
                <span class="text-2xl font-bold text-white">${this.formatPrice(watchFeature.price)}</span>
                <span class="text-sm text-neutral-500 line-through">${this.formatPrice(watchFeature.compareAtPrice)}</span>
                <button class="bg-white text-black hover:bg-neutral-200 text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-lg transition">
                  Inspect Chrono Watch →
                </button>
              </div>
            </div>
            <div class="lg:col-span-5 flex justify-center">
              <img src="${watchFeature.images[0]}" alt="${watchFeature.title}" class="max-h-[320px] object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl"/>
            </div>
          </div>
        </div>
      </section>

      <!-- Shop By Category Grid -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full" data-purpose="category-grid">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
          <div>
            <span class="text-xs font-bold tracking-widest uppercase text-gray-400">Curated Systems</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-black mt-1">EXPLORE CATEGORIES</h2>
          </div>
          <a href="#collections" onclick="technoApp.navigate('collections')" class="text-xs font-bold uppercase tracking-wider text-black hover:underline mt-2 sm:mt-0 flex items-center gap-1">
            Browse All Collections →
          </a>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <!-- 1. Smartwatches -->
          <div onclick="technoApp.navigate('shop', {category: 'Smartwatches'})" class="group cursor-pointer bg-[#F8F8F8] hover:bg-white border border-gray-200 hover:border-black rounded-2xl p-5 transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
            <div class="aspect-square bg-white rounded-xl p-4 flex items-center justify-center border border-gray-100 mb-3 overflow-hidden">
              <img alt="Smartwatches" class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" src="https://shoaibhussainq18-collab.github.io/141633443434/images/smartwatch-ultra.jpg"/>
            </div>
            <div>
              <span class="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Titanium &amp; Ceramic</span>
              <h3 class="text-sm font-bold text-black flex items-center justify-between">
                <span>Smartwatches</span>
                <span class="group-hover:translate-x-1 transition-transform">→</span>
              </h3>
            </div>
          </div>

          <!-- 2. Headphones -->
          <div onclick="technoApp.navigate('shop', {category: 'Headphones'})" class="group cursor-pointer bg-[#F8F8F8] hover:bg-white border border-gray-200 hover:border-black rounded-2xl p-5 transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
            <div class="aspect-square bg-white rounded-xl p-4 flex items-center justify-center border border-gray-100 mb-3 overflow-hidden">
              <img alt="Headphones" class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhzeAfkVnIFbTvX5yZrgkk251E9hSCkp2M3Tn1tOYXoiXBjmcMpqf-hgPIOxHC_e1AyLBA4CoNA1K75G0w001pXRLWovNJbkjW-wiOPU8aL5Afplz6EY8pv-IIGA83yrunIDWXxvwOzxj_62ipNjL6N8CLb-pNQBP1tnJl84S7XOF7n76FfWn2mtgFxafWH6xPMJFSq0_goaPS-xc1_xxKgnoB36GO60vykpjbi3M7"/>
            </div>
            <div>
              <span class="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Acoustic Reference</span>
              <h3 class="text-sm font-bold text-black flex items-center justify-between">
                <span>Headphones</span>
                <span class="group-hover:translate-x-1 transition-transform">→</span>
              </h3>
            </div>
          </div>

          <!-- 3. Airbuds -->
          <div onclick="technoApp.navigate('shop', {category: 'Airbuds'})" class="group cursor-pointer bg-[#F8F8F8] hover:bg-white border border-gray-200 hover:border-black rounded-2xl p-5 transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
            <div class="aspect-square bg-white rounded-xl p-4 flex items-center justify-center border border-gray-100 mb-3 overflow-hidden">
              <img alt="Airbuds" class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80"/>
            </div>
            <div>
              <span class="text-[10px] uppercase font-bold text-gray-400 tracking-wider">True Wireless TWS</span>
              <h3 class="text-sm font-bold text-black flex items-center justify-between">
                <span>Airbuds &amp; Earbuds</span>
                <span class="group-hover:translate-x-1 transition-transform">→</span>
              </h3>
            </div>
          </div>

          <!-- 4. Keyboards -->
          <div onclick="technoApp.navigate('shop', {category: 'Keyboards'})" class="group cursor-pointer bg-[#F8F8F8] hover:bg-white border border-gray-200 hover:border-black rounded-2xl p-5 transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
            <div class="aspect-square bg-white rounded-xl p-4 flex items-center justify-center border border-gray-100 mb-3 overflow-hidden">
              <img alt="Keyboards" class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" src="https://shoaibhussainq18-collab.github.io/141633443434/images/keyboard-minimal.jpg"/>
            </div>
            <div>
              <span class="text-[10px] uppercase font-bold text-gray-400 tracking-wider">CNC Mechanical</span>
              <h3 class="text-sm font-bold text-black flex items-center justify-between">
                <span>Mechanical Keyboards</span>
                <span class="group-hover:translate-x-1 transition-transform">→</span>
              </h3>
            </div>
          </div>
        </div>
      </section>

      <!-- Best Sellers Grid -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 w-full border-t border-gray-100" data-purpose="related-products">
        <div class="text-center mb-10">
          <span class="text-xs font-semibold tracking-widest text-gray-400 uppercase">Engineered for Perfection</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold uppercase tracking-widest text-black mt-1">BEST SELLING HARDWARE</h2>
          <p class="text-xs text-gray-500 uppercase tracking-widest mt-1">Precision instruments and smart tech accessories</p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          ${bestSellers.map(product => `
            <div class="group flex flex-col items-center cursor-pointer" onclick="technoApp.navigate('product', {productId: '${product.id}'})">
              <div class="relative w-full aspect-square bg-[#FBFBFB] border border-gray-100 rounded-xl overflow-hidden flex items-center justify-center p-6 mb-4 transition hover:shadow-lg">
                <span class="absolute bottom-3 left-3 bg-black text-white text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full z-10">
                  Sale
                </span>
                <img alt="${product.title}" class="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300" src="${product.images[0]}"/>
              </div>
              <h4 class="text-sm font-medium text-gray-900 group-hover:text-black text-center truncate max-w-full">${product.shortTitle}</h4>
              <div class="flex items-center space-x-2 mt-1">
                <span class="text-xs text-gray-400 line-through">${this.formatPrice(product.compareAtPrice)}</span>
                <span class="text-xs font-bold text-black">${this.formatPrice(product.price)}</span>
              </div>
              <button onclick="event.stopPropagation(); technoApp.addToCart('${product.id}', 1)" class="mt-2 text-[11px] uppercase tracking-wider font-semibold text-gray-700 hover:text-black py-1 px-3 border border-gray-200 rounded-md hover:border-black transition">
                Quick Add +
              </button>
            </div>
          `).join("")}
        </div>
      </section>

      <!-- Frequently Bought Together Interactive Bundle -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full" data-purpose="frequently-bought-bundle">
        <div class="bg-[#FBFBFB] border border-gray-200 rounded-2xl p-6 sm:p-8">
          <div class="flex items-center gap-2 mb-2">
            <span class="w-2 h-2 rounded-full bg-black"></span>
            <h3 class="text-xl font-bold uppercase tracking-tight">Frequently Bought Together</h3>
          </div>
          <p class="text-xs text-gray-500 mb-6">Complete your audio workspace bundle and get an extra 15% discount on accessories.</p>
          
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div class="flex flex-wrap items-center gap-4">
              <div class="flex items-center space-x-3 bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                <img alt="Pro Headphone" class="w-14 h-14 object-contain rounded-lg" src="${TECHNO_PRODUCTS[0].images[0]}"/>
                <div>
                  <p class="text-xs font-bold text-gray-900">TECHNO Headphone Pro</p>
                  <p class="text-xs font-medium text-black">${this.formatPrice(199.00)}</p>
                </div>
              </div>
              <span class="text-gray-400 font-bold text-lg">+</span>
              <div class="flex items-center space-x-3 bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                <img alt="Hard Travel Case" class="w-14 h-14 object-contain rounded-lg" src="${TECHNO_PRODUCTS[13].images[0]}"/>
                <div>
                  <p class="text-xs font-bold text-gray-900">Magnetic Travel Case</p>
                  <p class="text-xs font-medium text-black">${this.formatPrice(39.00)}</p>
                </div>
              </div>
              <span class="text-gray-400 font-bold text-lg">+</span>
              <div class="flex items-center space-x-3 bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                <img alt="Fast Charger" class="w-14 h-14 object-contain rounded-lg" src="${TECHNO_PRODUCTS[14].images[0]}"/>
                <div>
                  <p class="text-xs font-bold text-gray-900">65W GaN Fast Charger</p>
                  <p class="text-xs font-medium text-black">${this.formatPrice(29.00)}</p>
                </div>
              </div>
            </div>

            <div class="lg:border-l lg:border-gray-200 lg:pl-8 flex flex-col justify-center">
              <div class="mb-2">
                <span class="text-xs text-gray-500 uppercase tracking-wider block">Bundle Price (15% OFF):</span>
                <div class="flex items-baseline space-x-2">
                  <span class="text-2xl font-black text-black">${this.formatPrice(227.00)}</span>
                  <span class="text-xs text-gray-400 line-through">${this.formatPrice(267.00)}</span>
                </div>
              </div>
              <button onclick="technoApp.addBundleToCart()" class="bg-black hover:bg-neutral-800 text-white text-xs font-semibold px-6 py-3 rounded-lg uppercase tracking-wider transition shadow-sm">
                Add 3 Items To Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  // VIEW 2: SHOP / CATALOG PAGE
  renderShopView(filterCategory = null) {
    const selectedCat = filterCategory ? decodeURIComponent(filterCategory) : "All";
    const categories = [
      "All",
      "Smartwatches",
      "Headphones",
      "Airbuds",
      "Keyboards",
      "Hardware & Power"
    ];

    const filtered = selectedCat === "All"
      ? TECHNO_PRODUCTS
      : TECHNO_PRODUCTS.filter(p => p.category.toLowerCase().includes(selectedCat.toLowerCase().split(" ")[0]));

    return `
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <!-- Breadcrumbs -->
        <nav class="flex items-center space-x-2 text-xs text-gray-500 font-medium mb-6">
          <a class="hover:text-black transition" href="#home" onclick="technoApp.navigate('home')">Home</a>
          <span>/</span>
          <span class="text-black">All Tech Hardware</span>
        </nav>

        <!-- Header -->
        <div class="border-b border-gray-200 pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 class="text-3xl font-extrabold uppercase tracking-tight text-black">FLAGSHIP TECH &amp; AUDIO CATALOG</h1>
            <p class="text-xs text-gray-500 uppercase tracking-widest mt-1">Displaying ${filtered.length} precision hardware instruments</p>
          </div>
          
          <!-- Category Filter Pills -->
          <div class="flex flex-wrap gap-2 text-xs">
            ${categories.map(cat => `
              <button onclick="technoApp.navigate('shop', {category: '${cat === "All" ? "" : cat}'})" class="px-4 py-2 rounded-full border transition ${selectedCat === cat || (cat === 'All' && selectedCat === 'All') ? 'bg-black text-white border-black font-semibold' : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'}">
                ${cat}
              </button>
            `).join("")}
          </div>
        </div>

        <!-- Products Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          ${filtered.map(product => `
            <div class="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between" onclick="technoApp.navigate('product', {productId: '${product.id}'})">
              <div class="relative w-full aspect-square bg-[#FAFAFA] p-8 flex items-center justify-center cursor-pointer overflow-hidden">
                ${product.isSale ? `<span class="absolute top-4 left-4 bg-black text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full z-10">Sale</span>` : ''}
                <img src="${product.images[0]}" alt="${product.title}" class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"/>
              </div>

              <div class="p-6 flex flex-col flex-1 justify-between space-y-4">
                <div>
                  <div class="flex items-center justify-between text-[11px] text-gray-400 font-semibold mb-1">
                    <span>${product.series}</span>
                    <span class="text-amber-500 flex items-center gap-1">★ ${product.rating}</span>
                  </div>
                  <h3 class="text-sm font-bold text-gray-900 group-hover:text-black leading-snug line-clamp-2">${product.title}</h3>
                  <p class="text-xs text-gray-500 mt-2 line-clamp-2">${product.description}</p>
                </div>

                <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div class="flex items-baseline space-x-2">
                    <span class="text-base font-bold text-black">${this.formatPrice(product.price)}</span>
                    ${product.compareAtPrice ? `<span class="text-xs text-gray-400 line-through">${this.formatPrice(product.compareAtPrice)}</span>` : ''}
                  </div>
                  
                  <button onclick="event.stopPropagation(); technoApp.addToCart('${product.id}', 1)" class="bg-black hover:bg-neutral-800 text-white text-xs font-semibold px-4 py-2 rounded-lg uppercase tracking-wider transition">
                    Add
                  </button>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </section>
    `;
  }

  // VIEW 3: COLLECTIONS / CATEGORIES PAGE
  renderCollectionsView() {
    return `
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <nav class="flex items-center space-x-2 text-xs text-gray-500 font-medium mb-6">
          <a class="hover:text-black transition" href="#home" onclick="technoApp.navigate('home')">Home</a>
          <span>/</span>
          <span class="text-black">Curated Collections</span>
        </nav>

        <div class="text-center max-w-xl mx-auto mb-12">
          <span class="text-xs font-bold uppercase tracking-widest text-gray-400">Pure Hardware Ecosystems</span>
          <h1 class="text-3xl font-extrabold uppercase tracking-tight text-black mt-1">CURATED TECH COLLECTIONS</h1>
          <p class="text-xs text-gray-500 mt-2">Explore 4 specialized hardware ecosystems featuring titanium smartwatches, studio headphones, true wireless earbuds, and CNC mechanical keyboards.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Collection 1: Smartwatches -->
          <div class="relative bg-neutral-900 text-white rounded-3xl overflow-hidden p-8 sm:p-12 flex flex-col justify-between min-h-[380px] group cursor-pointer" onclick="technoApp.navigate('shop', {category: 'Smartwatches'})">
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
            <img src="https://shoaibhussainq18-collab.github.io/141633443434/images/smartwatch-ultra.jpg" alt="Smartwatches Collection" class="absolute right-0 bottom-0 w-2/3 h-full object-contain object-right opacity-60 group-hover:scale-105 transition-transform duration-500"/>
            <div class="relative z-20">
              <span class="text-[10px] font-bold tracking-widest uppercase bg-white/20 px-3 py-1 rounded-full backdrop-blur-md">Titanium &amp; Ceramic</span>
              <h2 class="text-2xl sm:text-3xl font-black uppercase tracking-tight mt-4">Smartwatches &amp; Chrono</h2>
              <p class="text-xs text-neutral-300 max-w-xs mt-2">Grade 5 titanium unibody, sapphire AMOLED displays, dual-band GPS, and clinical PPG telemetry.</p>
            </div>
            <div class="relative z-20 flex items-center space-x-2 font-bold text-xs uppercase tracking-wider group-hover:translate-x-1 transition-transform">
              <span>View Smartwatches</span>
              <span>→</span>
            </div>
          </div>

          <!-- Collection 2: Headphones -->
          <div class="relative bg-[#FAFAFA] border border-gray-200 text-black rounded-3xl overflow-hidden p-8 sm:p-12 flex flex-col justify-between min-h-[380px] group cursor-pointer" onclick="technoApp.navigate('shop', {category: 'Headphones'})">
            <div class="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent z-10"></div>
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhzeAfkVnIFbTvX5yZrgkk251E9hSCkp2M3Tn1tOYXoiXBjmcMpqf-hgPIOxHC_e1AyLBA4CoNA1K75G0w001pXRLWovNJbkjW-wiOPU8aL5Afplz6EY8pv-IIGA83yrunIDWXxvwOzxj_62ipNjL6N8CLb-pNQBP1tnJl84S7XOF7n76FfWn2mtgFxafWH6xPMJFSq0_goaPS-xc1_xxKgnoB36GO60vykpjbi3M7" alt="Headphones Collection" class="absolute right-0 bottom-0 w-2/3 h-full object-contain object-right opacity-70 group-hover:scale-105 transition-transform duration-500"/>
            <div class="relative z-20">
              <span class="text-[10px] font-bold tracking-widest uppercase bg-black text-white px-3 py-1 rounded-full">Series X Acoustics</span>
              <h2 class="text-2xl sm:text-3xl font-black uppercase tracking-tight mt-4">Over-Ear Headphones</h2>
              <p class="text-xs text-gray-600 max-w-xs mt-2">Active Noise Cancellation reference monitors with custom titanium and planar magnetic drivers.</p>
            </div>
            <div class="relative z-20 flex items-center space-x-2 font-bold text-xs uppercase tracking-wider group-hover:translate-x-1 transition-transform">
              <span>View Headphones</span>
              <span>→</span>
            </div>
          </div>

          <!-- Collection 3: Airbuds & TWS -->
          <div class="relative bg-[#FAFAFA] border border-gray-200 text-black rounded-3xl overflow-hidden p-8 sm:p-12 flex flex-col justify-between min-h-[380px] group cursor-pointer" onclick="technoApp.navigate('shop', {category: 'Airbuds'})">
            <div class="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent z-10"></div>
            <img src="https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80" alt="Airbuds Collection" class="absolute right-0 bottom-0 w-2/3 h-full object-contain object-right opacity-70 group-hover:scale-105 transition-transform duration-500"/>
            <div class="relative z-20">
              <span class="text-[10px] font-bold tracking-widest uppercase bg-black text-white px-3 py-1 rounded-full">Aero Series</span>
              <h2 class="text-2xl sm:text-3xl font-black uppercase tracking-tight mt-4">Airbuds &amp; Earbuds</h2>
              <p class="text-xs text-gray-600 max-w-xs mt-2">True Wireless Earbuds with lossless LDAC audio, hybrid ANC, and fast wireless charging cases.</p>
            </div>
            <div class="relative z-20 flex items-center space-x-2 font-bold text-xs uppercase tracking-wider group-hover:translate-x-1 transition-transform">
              <span>View Airbuds</span>
              <span>→</span>
            </div>
          </div>

          <!-- Collection 4: Mechanical Keyboards -->
          <div class="relative bg-neutral-900 text-white rounded-3xl overflow-hidden p-8 sm:p-12 flex flex-col justify-between min-h-[380px] group cursor-pointer" onclick="technoApp.navigate('shop', {category: 'Keyboards'})">
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
            <img src="https://shoaibhussainq18-collab.github.io/141633443434/images/keyboard-minimal.jpg" alt="Keyboards Collection" class="absolute right-0 bottom-0 w-2/3 h-full object-contain object-right opacity-60 group-hover:scale-105 transition-transform duration-500"/>
            <div class="relative z-20">
              <span class="text-[10px] font-bold tracking-widest uppercase bg-white/20 px-3 py-1 rounded-full backdrop-blur-md">Desk Series</span>
              <h2 class="text-2xl sm:text-3xl font-black uppercase tracking-tight mt-4">Mechanical Keyboards</h2>
              <p class="text-xs text-neutral-300 max-w-xs mt-2">Low-profile CNC aerospace aluminum mechanical keyboards with hot-swappable switches and tri-mode wireless.</p>
            </div>
            <div class="relative z-20 flex items-center space-x-2 font-bold text-xs uppercase tracking-wider group-hover:translate-x-1 transition-transform">
              <span>View Keyboards</span>
              <span>→</span>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderProductView() {
    const p = this.selectedProduct || TECHNO_PRODUCTS[0];
    const activeImage = p.images[this.selectedImageIndex] || p.images[0];

    return `
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2 w-full" data-purpose="breadcrumbs">
        <nav class="flex items-center space-x-2 text-xs text-gray-500 font-medium">
          <a class="hover:text-black transition" href="#home" onclick="technoApp.navigate('home')">Home</a>
          <span>/</span>
          <a class="hover:text-black transition" href="#shop" onclick="technoApp.navigate('shop')">Hardware Catalog</a>
          <span>/</span>
          <a class="hover:text-black transition" href="#shop" onclick="technoApp.navigate('shop', {category: '${p.category}'})">${p.category}</a>
          <span>/</span>
          <span class="text-black font-normal">${p.title}</span>
        </nav>
      </section>

      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <!-- Gallery Column (7 cols) -->
          <div class="lg:col-span-7 flex flex-col space-y-4" data-purpose="product-gallery">
            <div class="w-full bg-[#FAFAFA] rounded-2xl border border-gray-100 flex items-center justify-center relative p-8 sm:p-12 overflow-hidden group">
              <span class="absolute top-4 left-4 z-10 bg-black text-white text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full">
                Sale
              </span>
              <img id="mainProductImg" alt="${p.title}" class="w-full max-h-[520px] object-contain transition-transform duration-500 group-hover:scale-105" src="${activeImage}"/>
              <button onclick="technoApp.showToast('Full resolution inspection active')" aria-label="Expand image" class="absolute bottom-4 right-4 bg-white/80 backdrop-blur border border-gray-200 p-2 rounded-full hover:bg-white text-gray-700 transition">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </button>
            </div>

            <!-- Thumbnails List -->
            <div class="grid grid-cols-4 gap-3 sm:gap-4">
              ${p.images.map((img, idx) => `
                <button onclick="technoApp.setProductImage(${idx})" class="thumb-btn aspect-square bg-[#F7F7F7] rounded-xl ${idx === this.selectedImageIndex ? 'border-2 border-black' : 'border border-gray-200 hover:border-gray-400'} p-2 flex items-center justify-center transition" type="button">
                  <img alt="Thumbnail ${idx + 1}" class="object-contain w-full h-full" src="${img}"/>
                </button>
              `).join("")}
            </div>
          </div>

          <!-- Info & Actions Column (5 cols) -->
          <div class="lg:col-span-5 flex flex-col space-y-6" data-purpose="product-info-panel">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-semibold tracking-widest text-gray-400 uppercase">${p.series}</span>
                <span class="inline-flex items-center text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
                  In Stock &amp; Ready to Ship
                </span>
              </div>
              <h1 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-950 uppercase leading-snug">
                ${p.title}
              </h1>
              
              <div class="flex items-center mt-3 space-x-2">
                <div class="flex text-black text-sm">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <span class="text-xs font-semibold text-gray-900">${p.rating}</span>
                <span class="text-xs text-gray-400">•</span>
                <a class="text-xs text-gray-500 hover:text-black underline underline-offset-2 transition" href="javascript:void(0)" onclick="technoApp.setProductTab('reviews'); document.getElementById('productTabsSection').scrollIntoView({behavior: 'smooth'})">${p.reviewCount} Verified Tech Reviews</a>
              </div>
            </div>

            <!-- Pricing Tier -->
            <div class="p-4 bg-gray-50/70 border border-gray-200/60 rounded-xl flex items-center justify-between">
              <div class="flex items-baseline space-x-3">
                <span class="text-3xl font-bold tracking-tight text-black">${this.formatPrice(p.price)}</span>
                ${p.compareAtPrice ? `<span class="text-base font-normal text-gray-400 line-through">${this.formatPrice(p.compareAtPrice)}</span>` : ''}
              </div>
              <span class="text-xs font-bold text-white bg-black px-2.5 py-1 rounded-md">SAVE ${this.formatPrice(p.compareAtPrice - p.price)}</span>
            </div>

            <p class="text-sm text-gray-600 leading-relaxed">
              ${p.description}
            </p>

            <!-- Color Selection -->
            <div class="space-y-3 pt-2" data-purpose="color-selector">
              <div class="flex justify-between text-xs font-semibold">
                <span class="text-gray-500 uppercase tracking-wider">Finish / Variant:</span>
                <span id="selectedVariantLabel" class="text-black font-bold">${this.selectedVariant.name}</span>
              </div>
              <div class="flex items-center space-x-3">
                ${p.variants.map((v) => `
                  <button data-variant="${v.name}" onclick="technoApp.setProductVariant('${v.name}')" class="variant-btn w-8 h-8 rounded-full border border-gray-300 p-0.5 flex items-center justify-center hover:border-gray-500 focus:outline-none transition ${v.name === this.selectedVariant.name ? 'ring-2 ring-black ring-offset-2' : ''}">
                    <span class="w-full h-full rounded-full border border-gray-300" style="background-color: ${v.hex};"></span>
                  </button>
                `).join("")}
              </div>
            </div>

            <!-- Key Feature Highlights -->
            <ul class="space-y-2 text-xs text-gray-700 border-t border-b border-gray-100 py-4" data-purpose="key-bullets">
              ${(p.features || [
                "Engineered with premium aerospace alloy and sapphire crystal",
                "Ultra-fast charging with universal USB-C Power Delivery",
                "High-performance telemetry with precision firmware calibration",
                "2-Year Comprehensive Hardware Warranty included"
              ]).map(f => `
                <li class="flex items-center">
                  <svg class="w-4 h-4 mr-2 text-black flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  ${f}
                </li>
              `).join("")}
            </ul>

            <!-- Action Area -->
            <div class="space-y-3 pt-2" data-purpose="purchase-actions">
              <div class="flex items-center space-x-3">
                <div class="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white h-12 w-32">
                  <button onclick="technoApp.setProductQty(-1)" class="px-3 py-2 text-gray-600 hover:text-black hover:bg-gray-100 transition h-full font-medium text-lg">-</button>
                  <input id="productQtyInput" class="w-full text-center border-none focus:ring-0 text-sm font-semibold p-0" readonly="" type="text" value="${this.productQuantity}"/>
                  <button onclick="technoApp.setProductQty(1)" class="px-3 py-2 text-gray-600 hover:text-black hover:bg-gray-100 transition h-full font-medium text-lg">+</button>
                </div>
                <button onclick="technoApp.addToCart('${p.id}', technoApp.productQuantity, technoApp.selectedVariant.name)" class="flex-1 bg-brand-black hover:bg-neutral-800 text-white font-medium text-sm h-12 rounded-lg transition-all flex items-center justify-center space-x-2 uppercase tracking-wider">
                  <span>Add to Cart</span>
                  <span>•</span>
                  <span>${this.formatPrice(p.price * this.productQuantity)}</span>
                </button>
              </div>
              
              <button onclick="technoApp.addToCart('${p.id}', technoApp.productQuantity, technoApp.selectedVariant.name); technoApp.closeCartDrawer(); technoApp.navigate('checkout')" class="w-full bg-[#5A31F4] hover:bg-[#4623cf] text-white font-semibold text-sm h-12 rounded-lg transition flex items-center justify-center space-x-1.5 shadow-sm">
                <span>Buy with</span>
                <span class="font-extrabold italic tracking-tight text-base">Shop Pay</span>
              </button>
            </div>

            <!-- Trust Features Grid -->
            <div class="grid grid-cols-3 gap-2 pt-3 border-t border-gray-100 text-center" data-purpose="guarantee-badges">
              <div class="p-2">
                <svg class="w-5 h-5 mx-auto mb-1 text-gray-700" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <p class="text-[11px] font-semibold text-gray-900">2-Year Warranty</p>
                <p class="text-[10px] text-gray-500">Full replacement</p>
              </div>
              <div class="p-2">
                <svg class="w-5 h-5 mx-auto mb-1 text-gray-700" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <p class="text-[11px] font-semibold text-gray-900">30-Day Trial</p>
                <p class="text-[10px] text-gray-500">Money back</p>
              </div>
              <div class="p-2">
                <svg class="w-5 h-5 mx-auto mb-1 text-gray-700" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.25V3.75c0-.621-.504-1.125-1.125-1.125h-9c-.621 0-1.125.504-1.125 1.125v10.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <p class="text-[11px] font-semibold text-gray-900">Free Express</p>
                <p class="text-[10px] text-gray-500">Over $100 order</p>
              </div>
            </div>

          </div>
        </div>
      </main>

      <!-- Technical Specifications & Reviews Tabs -->
      <section id="productTabsSection" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full" data-purpose="product-specification-tabs">
        <div class="border-b border-gray-200">
          <div class="flex space-x-8 text-sm font-semibold tracking-wide uppercase overflow-x-auto">
            <button data-tab="specs" onclick="technoApp.setProductTab('specs')" class="tab-nav-btn border-b-2 ${this.productActiveTab === 'specs' ? 'border-black text-black' : 'border-transparent text-gray-400'} pb-3 transition whitespace-nowrap">Technical Specifications</button>
            <button data-tab="box" onclick="technoApp.setProductTab('box')" class="tab-nav-btn border-b-2 ${this.productActiveTab === 'box' ? 'border-black text-black' : 'border-transparent text-gray-400'} pb-3 transition whitespace-nowrap">What's in the Box</button>
            <button data-tab="reviews" onclick="technoApp.setProductTab('reviews')" class="tab-nav-btn border-b-2 ${this.productActiveTab === 'reviews' ? 'border-black text-black' : 'border-transparent text-gray-400'} pb-3 transition whitespace-nowrap">Reviews (${p.reviewCount})</button>
            <button data-tab="shipping" onclick="technoApp.setProductTab('shipping')" class="tab-nav-btn border-b-2 ${this.productActiveTab === 'shipping' ? 'border-black text-black' : 'border-transparent text-gray-400'} pb-3 transition whitespace-nowrap">Shipping &amp; Warranty</button>
          </div>
        </div>

        <div id="productTabContent">
          ${this.renderProductTabContent(this.productActiveTab)}
        </div>
      </section>

      <!-- Related Hardware Section -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full border-t border-gray-100" data-purpose="related-products">
        <div class="text-center mb-12">
          <h2 class="text-2xl sm:text-3xl font-extrabold uppercase tracking-widest text-black">YOU MAY ALSO BE INTERESTED IN</h2>
          <p class="text-xs text-gray-500 uppercase tracking-widest mt-1">Complementary hardware from the TECHNO lab</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          ${TECHNO_PRODUCTS.filter(item => item.id !== p.id).slice(0, 4).map(prod => `
            <div class="group flex flex-col items-center cursor-pointer" onclick="technoApp.navigate('product', {productId: '${prod.id}'})">
              <div class="relative w-full aspect-square bg-[#FBFBFB] border border-gray-100 rounded-xl overflow-hidden flex items-center justify-center p-6 mb-4 transition hover:shadow-md">
                <span class="absolute bottom-3 left-3 bg-black text-white text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full">
                  Sale
                </span>
                <img alt="${prod.title}" class="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300" src="${prod.images[0]}"/>
              </div>
              <h4 class="text-sm font-medium text-gray-900 group-hover:text-black text-center truncate max-w-full">${prod.shortTitle}</h4>
              <div class="flex items-center space-x-2 mt-1">
                <span class="text-xs text-gray-400 line-through">${this.formatPrice(prod.compareAtPrice)}</span>
                <span class="text-xs font-bold text-black">${this.formatPrice(prod.price)}</span>
              </div>
            </div>
          `).join("")}
        </div>
      </section>
    `;
  }

  renderProductTabContent(tab) {
    const p = this.selectedProduct || TECHNO_PRODUCTS[0];

    if (tab === "specs") {
      const specs = p.specs || {};
      const entries = Object.entries(specs);
      const half = Math.ceil(entries.length / 2);
      const col1 = entries.slice(0, half);
      const col2 = entries.slice(half);

      return `
        <div class="py-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          <div class="space-y-4">
            <h4 class="font-bold uppercase tracking-wider text-xs text-gray-400">Technical Specifications</h4>
            <dl class="divide-y divide-gray-100">
              ${col1.map(([k, v]) => `
                <div class="py-2.5 flex justify-between">
                  <dt class="text-gray-500 font-medium">${k}</dt>
                  <dd class="font-bold text-black text-right pl-4">${v}</dd>
                </div>
              `).join("")}
            </dl>
          </div>
          <div class="space-y-4">
            <h4 class="font-bold uppercase tracking-wider text-xs text-gray-400">Architecture &amp; Materials</h4>
            <dl class="divide-y divide-gray-100">
              ${col2.map(([k, v]) => `
                <div class="py-2.5 flex justify-between">
                  <dt class="text-gray-500 font-medium">${k}</dt>
                  <dd class="font-bold text-black text-right pl-4">${v}</dd>
                </div>
              `).join("")}
            </dl>
          </div>
        </div>
      `;
    }

    if (tab === "box") {
      const boxItems = (p.inTheBox && p.inTheBox.length > 0) ? p.inTheBox : [
        `1x ${p.title}`,
        `1x High-Speed Braided Fast-Charging Cable`,
        `1x Precision Protective Travel Carrier / Dock`,
        `1x TECHNO Authenticity Card & 2-Year International Warranty Certificate`
      ];

      return `
        <div class="py-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          <div class="space-y-4">
            <h4 class="font-bold uppercase tracking-wider text-xs text-gray-400">Included in the Box</h4>
            <ul class="space-y-3">
              ${boxItems.map(item => `
                <li class="flex items-center space-x-3 text-gray-800 font-medium">
                  <span class="w-1.5 h-1.5 rounded-full bg-black shrink-0"></span>
                  <span>${item}</span>
                </li>
              `).join("")}
            </ul>
          </div>
          <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col justify-center">
            <h5 class="text-xs uppercase font-bold tracking-wider text-black mb-2">Sustainable &amp; Anti-Tamper Packaging</h5>
            <p class="text-xs text-gray-600 leading-relaxed">
              Every TECHNO instrument is sealed with tamper-evident holographic tape and packaged in 100% recyclable FSC-certified paperboard printed with non-toxic soy inks. Zero single-use plastics.
            </p>
          </div>
        </div>
      `;
    }

    if (tab === "reviews") {
      return `
        <div class="py-8 space-y-8">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <div class="md:col-span-4 text-center md:border-r md:border-gray-200">
              <span class="text-5xl font-black text-black">${p.rating}</span>
              <div class="flex justify-center text-amber-500 text-lg my-1">★★★★★</div>
              <p class="text-xs text-gray-500">Based on ${p.reviewCount} verified tech reviews</p>
            </div>
            <div class="md:col-span-8 space-y-1.5 text-xs text-gray-600">
              <div class="flex items-center space-x-3">
                <span class="w-12 text-right">5 Star</span>
                <div class="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div class="bg-black h-full w-[95%]"></div>
                </div>
                <span class="w-8 font-semibold text-right">95%</span>
              </div>
              <div class="flex items-center space-x-3">
                <span class="w-12 text-right">4 Star</span>
                <div class="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div class="bg-black h-full w-[4%]"></div>
                </div>
                <span class="w-8 font-semibold text-right">4%</span>
              </div>
              <div class="flex items-center space-x-3">
                <span class="w-12 text-right">3 Star</span>
                <div class="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div class="bg-black h-full w-[1%]"></div>
                </div>
                <span class="w-8 font-semibold text-right">1%</span>
              </div>
            </div>
          </div>

          <div class="space-y-4">
            <div class="p-4 border border-gray-100 rounded-xl space-y-2">
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <span class="font-bold text-xs text-black">Julian R.</span>
                  <span class="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-semibold">Verified Buyer</span>
                </div>
                <span class="text-xs text-gray-400">2 days ago</span>
              </div>
              <div class="text-amber-500 text-xs">★★★★★</div>
              <p class="text-xs text-gray-700 leading-relaxed">
                "The build quality is astonishing. The titanium tolerances and sapphire finish feel like something from a luxury watchmaker. Unmatched battery life."
              </p>
            </div>
          </div>
        </div>
      `;
    }

    if (tab === "shipping") {
      return `
        <div class="py-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          <div class="space-y-4">
            <h4 class="font-bold uppercase tracking-wider text-xs text-gray-400">Global Dispatch &amp; Transit</h4>
            <dl class="divide-y divide-gray-100">
              <div class="py-2.5 flex justify-between">
                <dt class="text-gray-500">Dispatch Speed</dt>
                <dd class="font-medium text-black">Same-day dispatch for orders before 2 PM PST</dd>
              </div>
              <div class="py-2.5 flex justify-between">
                <dt class="text-gray-500">DHL Express Priority</dt>
                <dd class="font-medium text-black">2 - 3 business days worldwide</dd>
              </div>
              <div class="py-2.5 flex justify-between">
                <dt class="text-gray-500">Free Shipping Threshold</dt>
                <dd class="font-medium text-black">Orders over $100.00 USD</dd>
              </div>
            </dl>
          </div>
          <div class="space-y-4">
            <h4 class="font-bold uppercase tracking-wider text-xs text-gray-400">2-Year Full Hardware Warranty</h4>
            <p class="text-xs text-gray-600 leading-relaxed">
              Every unit includes our comprehensive 2-year warranty against manufacturing anomalies, battery degradation, and sensor performance. 30-day money-back guarantee with prepaid DHL return labels.
            </p>
          </div>
        </div>
      `;
    }
  }

  // VIEW 5: ABOUT US PAGE
  renderAboutView() {
    return `
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <nav class="flex items-center space-x-2 text-xs text-gray-500 font-medium mb-8">
          <a class="hover:text-black transition" href="#home" onclick="technoApp.navigate('home')">Home</a>
          <span>/</span>
          <span class="text-black">About TECHNO</span>
        </nav>

        <div class="border-b border-gray-200 pb-16 mb-16">
          <span class="text-xs font-bold uppercase tracking-widest text-gray-400">Design Philosophy</span>
          <h1 class="text-4xl sm:text-6xl font-black uppercase tracking-tight text-black mt-3 mb-6 max-w-3xl leading-none">
            PURE MINIMALIST HARDWARE ARCHITECTURE.
          </h1>
          <p class="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
            Founded in 2021 by industrial architects and hardware engineers, TECHNO designs uncompromising personal technology: aerospace titanium timepieces, acoustic headphones, and tactile workspace gear.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div class="space-y-4">
            <span class="text-3xl font-black text-black">01</span>
            <h3 class="text-lg font-bold uppercase text-black">Titanium &amp; Ceramics</h3>
            <p class="text-xs text-gray-600 leading-relaxed">
              We machine from Grade 5 titanium, zirconia ceramics, and sapphire crystal. Materials built to survive decades without cosmetic fatigue.
            </p>
          </div>
          <div class="space-y-4">
            <span class="text-3xl font-black text-black">02</span>
            <h3 class="text-lg font-bold uppercase text-black">Acoustics &amp; Telemetry</h3>
            <p class="text-xs text-gray-600 leading-relaxed">
              From 40mm titanium excursion headphone drivers to 8-channel PPG heart rate sensors, our hardware is calibrated for laboratory accuracy.
            </p>
          </div>
          <div class="space-y-4">
            <span class="text-3xl font-black text-black">03</span>
            <h3 class="text-lg font-bold uppercase text-black">Zero Distraction</h3>
            <p class="text-xs text-gray-600 leading-relaxed">
              We reject noisy RGB gimmicks and cheap plastic casings. Every chamfered edge serves ergonomic comfort and sensory calm.
            </p>
          </div>
        </div>

        <div class="bg-black text-white p-8 sm:p-12 rounded-3xl grid grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-20">
          <div>
            <span class="text-3xl sm:text-5xl font-black">500K+</span>
            <p class="text-xs text-neutral-400 uppercase tracking-widest mt-2">Active Tech Users</p>
          </div>
          <div>
            <span class="text-3xl sm:text-5xl font-black">42+</span>
            <p class="text-xs text-neutral-400 uppercase tracking-widest mt-2">Patents &amp; Design Awards</p>
          </div>
          <div>
            <span class="text-3xl sm:text-5xl font-black">99.4%</span>
            <p class="text-xs text-neutral-400 uppercase tracking-widest mt-2">Customer Satisfaction</p>
          </div>
          <div>
            <span class="text-3xl sm:text-5xl font-black">120+</span>
            <p class="text-xs text-neutral-400 uppercase tracking-widest mt-2">Countries Dispatched</p>
          </div>
        </div>
      </section>
    `;
  }

  // VIEW 6: CONTACT US PAGE
  renderContactView() {
    return `
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <nav class="flex items-center space-x-2 text-xs text-gray-500 font-medium mb-8">
          <a class="hover:text-black transition" href="#home" onclick="technoApp.navigate('home')">Home</a>
          <span>/</span>
          <span class="text-black">Contact &amp; Support</span>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div class="lg:col-span-5 space-y-8">
            <div>
              <span class="text-xs font-bold uppercase tracking-widest text-gray-400">Support 24/7</span>
              <h1 class="text-3xl font-black uppercase tracking-tight text-black mt-1 mb-3">GET IN TOUCH</h1>
              <p class="text-xs text-gray-600 leading-relaxed">
                Have questions regarding smartwatch compatibility, ANC headphone calibration, or bulk orders? Our engineering support team is standing by.
              </p>
            </div>

            <div class="space-y-4">
              <div class="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-start space-x-3">
                <svg class="w-5 h-5 text-black flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
                <div>
                  <h4 class="text-xs font-bold text-black uppercase">Direct Support Email</h4>
                  <p class="text-xs text-gray-600">support@techno-audio.com</p>
                  <span class="text-[10px] text-gray-400">Average response: 2 hours</span>
                </div>
              </div>

              <div class="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-start space-x-3">
                <svg class="w-5 h-5 text-black flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>
                <div>
                  <h4 class="text-xs font-bold text-black uppercase">Global Flagship Studio</h4>
                  <p class="text-xs text-gray-600">440 Acoustic Blvd, San Francisco, CA 94107</p>
                  <span class="text-[10px] text-gray-400">Mon - Fri: 9:00 AM - 6:00 PM PST</span>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-7 bg-[#FAFAFA] border border-gray-200 rounded-3xl p-8 sm:p-10 shadow-sm">
            <h2 class="text-xl font-bold uppercase tracking-tight text-black mb-2">Send an Inquiry</h2>
            <p class="text-xs text-gray-500 mb-6">Fill in your information and a member of our team will respond directly.</p>

            <form onsubmit="event.preventDefault(); technoApp.showToast('Message sent! Ticket ID #TC-' + Math.floor(100000 + Math.random() * 900000)); this.reset();" class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-gray-700 uppercase mb-1">First &amp; Last Name</label>
                  <input type="text" required placeholder="Alex Mercer" class="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-xs text-black focus:ring-black focus:border-black"/>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-700 uppercase mb-1">Email Address</label>
                  <input type="email" required placeholder="alex@example.com" class="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-xs text-black focus:ring-black focus:border-black"/>
                </div>
              </div>

              <div>
                <label class="block text-xs font-semibold text-gray-700 uppercase mb-1">Topic</label>
                <select class="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-xs text-black focus:ring-black focus:border-black">
                  <option>Smartwatch &amp; Sensor Support</option>
                  <option>Headphone &amp; Audio Firmware</option>
                  <option>Order &amp; Shipping Status</option>
                  <option>Warranty &amp; Replacement</option>
                  <option>Wholesale &amp; Press</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-semibold text-gray-700 uppercase mb-1">Message</label>
                <textarea rows="4" required placeholder="Describe your inquiry..." class="w-full bg-white border border-gray-300 rounded-lg p-3 text-xs text-black focus:ring-black focus:border-black"></textarea>
              </div>

              <button type="submit" class="w-full bg-black hover:bg-neutral-800 text-white font-medium text-xs h-12 rounded-lg transition uppercase tracking-wider">
                Transmit Message
              </button>
            </form>
          </div>
        </div>
      </section>
    `;
  }

  // VIEW 7: BLOG / NEWS JOURNAL PAGE
  renderBlogView() {
    return `
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <nav class="flex items-center space-x-2 text-xs text-gray-500 font-medium mb-8">
          <a class="hover:text-black transition" href="#home" onclick="technoApp.navigate('home')">Home</a>
          <span>/</span>
          <span class="text-black">TECHNO Journal</span>
        </nav>

        <div class="border-b border-gray-200 pb-10 mb-12">
          <span class="text-xs font-bold uppercase tracking-widest text-gray-400">Engineering Insights</span>
          <h1 class="text-4xl font-black uppercase tracking-tight text-black mt-2">TECHNO JOURNAL &amp; RESEARCH</h1>
          <p class="text-xs text-gray-500 mt-2">Deep dives into titanium metallurgy, sapphire crystal optics, and lossless audio wireless pipelines.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          ${BLOG_ARTICLES.map(article => `
            <article class="bg-[#FAFAFA] border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div class="aspect-video bg-neutral-900 overflow-hidden relative">
                <img src="${article.image}" alt="${article.title}" class="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-500"/>
                <span class="absolute top-3 left-3 bg-black/80 backdrop-blur text-white text-[10px] font-semibold px-2.5 py-1 rounded-md">
                  ${article.category}
                </span>
              </div>

              <div class="p-6 flex flex-col flex-1 justify-between space-y-4">
                <div>
                  <div class="flex items-center space-x-2 text-[11px] text-gray-400 mb-2">
                    <span>${article.date}</span>
                    <span>•</span>
                    <span>${article.readTime}</span>
                  </div>
                  <h3 class="text-base font-bold text-black hover:underline cursor-pointer" onclick="technoApp.openBlogModal('${article.id}')">${article.title}</h3>
                  <p class="text-xs text-gray-600 mt-2 line-clamp-3 leading-relaxed">${article.snippet}</p>
                </div>

                <div class="pt-4 border-t border-gray-200 flex items-center justify-between">
                  <span class="text-[11px] text-gray-500 font-medium">${article.author.split(",")[0]}</span>
                  <button onclick="technoApp.openBlogModal('${article.id}')" class="text-xs font-bold uppercase tracking-wider text-black flex items-center gap-1 hover:translate-x-1 transition-transform">
                    Read →
                  </button>
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      </section>

      <div id="blogModal" class="fixed inset-0 bg-black/60 backdrop-blur-md z-50 hidden opacity-0 transition-opacity duration-300 flex items-center justify-center p-4">
        <div class="bg-white w-full max-w-2xl rounded-3xl max-h-[85vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative" id="blogModalBox">
          <button onclick="technoApp.closeBlogModal()" class="absolute top-6 right-6 p-2 text-gray-400 hover:text-black bg-gray-100 rounded-full transition">
            ✕
          </button>
          <div id="blogModalContent"></div>
        </div>
      </div>
    `;
  }

  openBlogModal(articleId) {
    const article = BLOG_ARTICLES.find(a => a.id === articleId);
    if (!article) return;

    const modal = document.getElementById("blogModal");
    const content = document.getElementById("blogModalContent");
    if (!modal || !content) return;

    content.innerHTML = `
      <span class="text-[11px] uppercase font-bold tracking-widest text-gray-400">${article.category} • ${article.date}</span>
      <h2 class="text-2xl font-black uppercase text-black mt-2 mb-4 leading-snug">${article.title}</h2>
      <div class="flex items-center space-x-3 mb-6 pb-4 border-b border-gray-100">
        <div class="w-8 h-8 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center">T</div>
        <div>
          <p class="text-xs font-bold text-black">${article.author}</p>
          <p class="text-[10px] text-gray-400">${article.readTime}</p>
        </div>
      </div>
      <div class="prose text-xs text-gray-700 leading-relaxed space-y-4">
        ${article.content}
      </div>
      <div class="mt-8 pt-4 border-t border-gray-100 flex justify-between items-center text-xs">
        <span class="text-gray-400">Share this article</span>
        <button onclick="technoApp.showToast('Article link copied to clipboard!')" class="text-black font-semibold underline">Copy Link</button>
      </div>
    `;

    modal.classList.remove("hidden");
    setTimeout(() => modal.classList.remove("opacity-0"), 10);
  }

  closeBlogModal() {
    const modal = document.getElementById("blogModal");
    if (!modal) return;
    modal.classList.add("opacity-0");
    setTimeout(() => modal.classList.add("hidden"), 200);
  }

  // VIEW 8: CART PAGE
  renderCartView() {
    const totals = this.getCartTotal();

    if (this.cart.length === 0) {
      return `
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full text-center">
          <div class="max-w-md mx-auto space-y-4">
            <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto text-gray-400">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25c-.67 0-1.188-.578-1.119-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"/></svg>
            </div>
            <h1 class="text-2xl font-bold uppercase tracking-tight text-black">Your Shopping Cart is Empty</h1>
            <p class="text-xs text-gray-500">Discover our precision watches, headphones, and workspace gear.</p>
            <button onclick="technoApp.navigate('shop')" class="mt-4 bg-black text-white text-xs font-semibold px-8 py-3.5 rounded-lg uppercase tracking-wider hover:bg-neutral-800 transition">
              Browse Best Sellers
            </button>
          </div>
        </section>
      `;
    }

    return `
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <h1 class="text-3xl font-extrabold uppercase tracking-tight text-black mb-8">SHOPPING CART</h1>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div class="lg:col-span-8 space-y-6">
            <div class="bg-gray-50 p-4 rounded-xl border border-gray-200">
              <div class="flex justify-between text-xs font-medium mb-1.5">
                <span>${totals.subtotal >= 100 ? '✓ Free Express Worldwide Delivery Unlocked!' : `Add ${this.formatPrice(Math.max(0, 100 - totals.subtotal))} more for Free Express Delivery`}</span>
                <span class="font-bold text-black">${Math.min(100, Math.round((totals.subtotal / 100) * 100))}%</span>
              </div>
              <div class="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <div class="bg-black h-full transition-all duration-500" style="width: ${Math.min(100, (totals.subtotal / 100) * 100)}%;"></div>
              </div>
            </div>

            <div class="border border-gray-200 rounded-2xl overflow-hidden divide-y divide-gray-100">
              ${this.cart.map((item, index) => `
                <div class="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div class="flex items-center space-x-4 w-full sm:w-auto">
                    <img src="${item.image}" alt="${item.title}" class="w-20 h-20 object-contain bg-[#FAFAFA] rounded-xl border border-gray-100 p-2"/>
                    <div>
                      <h3 class="text-sm font-bold text-black">${item.title}</h3>
                      <p class="text-xs text-gray-500 mt-0.5">Finish: ${item.variant}</p>
                      <p class="text-xs font-bold text-black mt-2">${this.formatPrice(item.price)}</p>
                    </div>
                  </div>

                  <div class="flex items-center justify-between sm:justify-end space-x-6 w-full sm:w-auto pt-2 sm:pt-0">
                    <div class="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white h-9 w-28">
                      <button onclick="technoApp.updateQuantity(${index}, -1)" class="px-3 text-gray-600 hover:text-black transition h-full font-medium">-</button>
                      <input class="w-full text-center border-none focus:ring-0 text-xs font-semibold p-0" readonly="" type="text" value="${item.quantity}"/>
                      <button onclick="technoApp.updateQuantity(${index}, 1)" class="px-3 text-gray-600 hover:text-black transition h-full font-medium">+</button>
                    </div>

                    <span class="text-sm font-bold text-black w-24 text-right">${this.formatPrice(item.price * item.quantity)}</span>

                    <button onclick="technoApp.removeFromCart(${index})" title="Remove item" class="text-gray-400 hover:text-red-500 p-1">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
                    </button>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>

          <div class="lg:col-span-4 bg-[#FAFAFA] border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 class="text-base font-bold uppercase tracking-wider text-black">Order Summary</h3>

            <div class="space-y-2">
              <label class="block text-xs font-semibold text-gray-600 uppercase">Promo or Gift Code</label>
              <div class="flex space-x-2">
                <input id="cartCouponInput" type="text" placeholder="TECHNO15" value="${this.discountCode}" class="flex-1 uppercase font-mono bg-white border border-gray-300 rounded-lg px-3 py-2 text-xs text-black focus:ring-black focus:border-black"/>
                <button onclick="technoApp.applyDiscount(document.getElementById('cartCouponInput').value)" class="bg-black text-white px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition">
                  Apply
                </button>
              </div>
              ${this.discountRate > 0 ? `<p class="text-[11px] text-emerald-600 font-semibold">✓ ${Math.round(this.discountRate * 100)}% Discount active</p>` : ''}
            </div>

            <div class="space-y-3 text-xs pt-4 border-t border-gray-200">
              <div class="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span class="font-semibold text-black">${this.formatPrice(totals.subtotal)}</span>
              </div>
              ${totals.discount > 0 ? `
                <div class="flex justify-between text-emerald-600 font-semibold">
                  <span>Discount (${this.discountCode})</span>
                  <span>-${this.formatPrice(totals.discount)}</span>
                </div>
              ` : ''}
              <div class="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span class="font-semibold text-black">${totals.shipping === 0 ? 'FREE Express' : this.formatPrice(totals.shipping)}</span>
              </div>
              <div class="flex justify-between text-gray-600">
                <span>Estimated Tax (8%)</span>
                <span class="font-semibold text-black">${this.formatPrice(totals.tax)}</span>
              </div>
              <div class="flex justify-between text-base font-black text-black pt-3 border-t border-gray-200">
                <span>Total</span>
                <span>${this.formatPrice(totals.total)}</span>
              </div>
            </div>

            <button onclick="technoApp.navigate('checkout')" class="w-full bg-black hover:bg-neutral-800 text-white font-medium text-xs h-12 rounded-lg transition uppercase tracking-wider flex items-center justify-center space-x-2">
              <span>Checkout Now</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </section>
    `;
  }

  // VIEW 9: CHECKOUT PAGE
  renderCheckoutView() {
    const totals = this.getCartTotal();

    return `
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div class="flex items-center justify-between border-b border-gray-200 pb-6 mb-8">
          <div class="cursor-pointer" onclick="technoApp.navigate('home')">
            <span class="text-2xl font-black uppercase tracking-[0.25em] text-black">TECHNO</span>
            <span class="text-[9px] tracking-[0.35em] text-gray-400 uppercase block">Secure Checkout</span>
          </div>
          <button onclick="technoApp.navigate('cart')" class="text-xs font-semibold text-gray-600 hover:text-black">
            Return to Cart
          </button>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div class="lg:col-span-7 space-y-8">
            <div class="border border-gray-200 rounded-2xl p-6 bg-gray-50/50 space-y-3">
              <span class="text-xs font-semibold uppercase tracking-wider text-gray-400 block text-center">Express Checkout</span>
              <div class="grid grid-cols-3 gap-3">
                <button onclick="technoApp.simulateExpressPay('Shop Pay')" class="bg-[#5A31F4] hover:bg-[#4623cf] text-white py-3 rounded-lg font-bold text-xs flex items-center justify-center transition shadow-sm">
                  Shop Pay
                </button>
                <button onclick="technoApp.simulateExpressPay('Apple Pay')" class="bg-black text-white py-3 rounded-lg font-bold text-xs flex items-center justify-center hover:bg-neutral-800 transition shadow-sm">
                  Apple Pay
                </button>
                <button onclick="technoApp.simulateExpressPay('PayPal')" class="bg-[#FFC439] text-[#003087] py-3 rounded-lg font-bold text-xs flex items-center justify-center hover:bg-[#f2b930] transition shadow-sm">
                  PayPal
                </button>
              </div>
              <div class="relative flex py-2 items-center">
                <div class="flex-grow border-t border-gray-200"></div>
                <span class="flex-shrink mx-4 text-[10px] uppercase font-bold tracking-wider text-gray-400">OR</span>
                <div class="flex-grow border-t border-gray-200"></div>
              </div>
            </div>

            <form id="checkoutForm" onsubmit="technoApp.processOrder(event)" class="space-y-8">
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <h2 class="text-base font-bold uppercase tracking-wider text-black">Contact Information</h2>
                  <span class="text-xs text-gray-400">Step 1 of 3</span>
                </div>
                <input id="checkoutEmail" type="email" required placeholder="alex.mercer@example.com" value="alex.mercer@example.com" class="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-xs text-black focus:ring-black focus:border-black"/>
              </div>

              <div class="space-y-4 pt-4 border-t border-gray-200">
                <h2 class="text-base font-bold uppercase tracking-wider text-black">Delivery Address</h2>
                <div class="grid grid-cols-2 gap-4">
                  <input id="checkoutFirstName" type="text" required placeholder="First name" value="Alex" class="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-xs text-black focus:ring-black focus:border-black"/>
                  <input id="checkoutLastName" type="text" required placeholder="Last name" value="Mercer" class="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-xs text-black focus:ring-black focus:border-black"/>
                </div>
                <input id="checkoutAddress" type="text" required placeholder="Address" value="742 Evergreen Terrace" class="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-xs text-black focus:ring-black focus:border-black"/>
                <div class="grid grid-cols-3 gap-4">
                  <input id="checkoutCity" type="text" required placeholder="City" value="Springfield" class="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-xs text-black focus:ring-black focus:border-black"/>
                  <input id="checkoutState" type="text" required placeholder="State / Region" value="OR" class="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-xs text-black focus:ring-black focus:border-black"/>
                  <input id="checkoutZip" type="text" required placeholder="Postal / ZIP" value="97477" class="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-xs text-black focus:ring-black focus:border-black"/>
                </div>
              </div>

              <div class="space-y-4 pt-4 border-t border-gray-200">
                <h2 class="text-base font-bold uppercase tracking-wider text-black">Payment Details</h2>
                <div class="border border-black rounded-xl p-4 bg-gray-50/40 space-y-4">
                  <div class="flex justify-between items-center">
                    <span class="text-xs font-bold text-black">Credit / Debit Card (256-Bit SSL Encrypted)</span>
                    <div class="flex space-x-1 text-[10px] font-bold text-gray-500">
                      <span>VISA</span><span>•</span><span>MC</span><span>•</span><span>AMEX</span>
                    </div>
                  </div>
                  <input type="text" placeholder="Card number (4000 1234 5678 9010)" value="4000 1234 5678 9010" required class="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-xs text-black focus:ring-black focus:border-black font-mono"/>
                  <div class="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="MM / YY" value="12/28" required class="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-xs text-black focus:ring-black focus:border-black font-mono"/>
                    <input type="text" placeholder="CVV" value="842" required class="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-xs text-black focus:ring-black focus:border-black font-mono"/>
                  </div>
                </div>
              </div>

              <button id="payNowBtn" type="submit" class="w-full bg-black hover:bg-neutral-800 text-white font-medium text-sm h-14 rounded-xl transition uppercase tracking-wider flex items-center justify-center space-x-2 shadow-xl">
                <span>Authorize &amp; Pay ${this.formatPrice(totals.total)}</span>
              </button>
            </form>
          </div>

          <div class="lg:col-span-5 bg-[#FAFAFA] border border-gray-200 rounded-3xl p-6 sm:p-8 space-y-6 lg:sticky lg:top-28">
            <h3 class="text-sm font-bold uppercase tracking-wider text-black">Order Summary (${this.cart.length} items)</h3>
            
            <div class="space-y-4 max-h-[300px] overflow-y-auto divide-y divide-gray-100 pr-1">
              ${this.cart.map(item => `
                <div class="pt-3 first:pt-0 flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <div class="relative">
                      <img src="${item.image}" alt="${item.title}" class="w-12 h-12 object-contain bg-white rounded-lg border border-gray-200 p-1"/>
                      <span class="absolute -top-1.5 -right-1.5 bg-black text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">${item.quantity}</span>
                    </div>
                    <div>
                      <h4 class="text-xs font-bold text-gray-900 line-clamp-1">${item.shortTitle}</h4>
                      <p class="text-[10px] text-gray-500">${item.variant}</p>
                    </div>
                  </div>
                  <span class="text-xs font-bold text-black">${this.formatPrice(item.price * item.quantity)}</span>
                </div>
              `).join("")}
            </div>

            <div class="space-y-2.5 text-xs pt-4 border-t border-gray-200">
              <div class="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span class="font-semibold text-black">${this.formatPrice(totals.subtotal)}</span>
              </div>
              ${totals.discount > 0 ? `
                <div class="flex justify-between text-emerald-600 font-semibold">
                  <span>Discount (${this.discountCode})</span>
                  <span>-${this.formatPrice(totals.discount)}</span>
                </div>
              ` : ''}
              <div class="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span class="font-semibold text-emerald-700">FREE Express</span>
              </div>
              <div class="flex justify-between text-gray-600">
                <span>Estimated Taxes (8%)</span>
                <span class="font-semibold text-black">${this.formatPrice(totals.tax)}</span>
              </div>
              <div class="flex justify-between text-lg font-black text-black pt-3 border-t border-gray-200">
                <span>Total Due</span>
                <span>${this.formatPrice(totals.total)}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  simulateExpressPay(provider) {
    this.showToast(`Connecting to ${provider} secure authorization...`);
    setTimeout(() => {
      this.processOrder(null);
    }, 1200);
  }

  processOrder(event) {
    if (event) event.preventDefault();
    const btn = document.getElementById("payNowBtn");
    if (btn) {
      btn.innerHTML = `<span class="inline-block animate-spin mr-2">⚙</span> Encrypting &amp; Transmitting...`;
      btn.disabled = true;
    }

    const orderNum = "TECHNO-" + Math.floor(10000 + Math.random() * 90000);
    const totals = this.getCartTotal();
    const email = document.getElementById("checkoutEmail") ? document.getElementById("checkoutEmail").value : "alex.mercer@example.com";
    const firstName = document.getElementById("checkoutFirstName") ? document.getElementById("checkoutFirstName").value : "Alex";
    const lastName = document.getElementById("checkoutLastName") ? document.getElementById("checkoutLastName").value : "Mercer";
    const address = document.getElementById("checkoutAddress") ? document.getElementById("checkoutAddress").value : "742 Evergreen Terrace";
    const city = document.getElementById("checkoutCity") ? document.getElementById("checkoutCity").value : "Springfield";
    const state = document.getElementById("checkoutState") ? document.getElementById("checkoutState").value : "OR";
    const zip = document.getElementById("checkoutZip") ? document.getElementById("checkoutZip").value : "97477";

    const newOrder = {
      orderNumber: orderNum,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      status: "Confirmed • Packaging at SF Hub",
      carrier: "DHL Express Priority Air",
      trackingNumber: "DHL-" + Math.floor(10000000 + Math.random() * 90000000),
      customerName: `${firstName} ${lastName}`,
      email: email,
      address: `${address}, ${city}, ${state} ${zip}`,
      items: [...this.cart],
      total: totals.total,
      subtotal: totals.subtotal,
      discount: totals.discount,
      tax: totals.tax
    };

    setTimeout(() => {
      this.saveLatestOrder(newOrder);
      this.cart = [];
      this.saveCart();
      this.updateCartUI();
      this.navigate("order-confirmation");
    }, 1400);
  }

  // VIEW 10: ORDER CONFIRMATION
  renderConfirmationView() {
    const order = this.currentOrder || this.loadLatestOrder();

    return `
      <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div class="bg-gray-50 border border-gray-200 rounded-3xl p-8 sm:p-12 text-center space-y-4">
          <div class="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg pulse-glow">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
          </div>
          <span class="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">Order Authorized &amp; Confirmed</span>
          <h1 class="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">Thank you, ${order.customerName.split(" ")[0]}!</h1>
          <p class="text-xs text-gray-500 max-w-md mx-auto leading-relaxed">
            Your hardware order has been placed. A confirmation receipt and tracking code have been dispatched to <strong class="text-black">${order.email}</strong>.
          </p>

          <div class="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button onclick="technoApp.navigate('track-order')" class="bg-black hover:bg-neutral-800 text-white text-xs font-semibold px-6 py-3 rounded-lg uppercase tracking-wider transition">
              Track Shipment Live →
            </button>
            <button onclick="window.print()" class="bg-white border border-gray-300 hover:border-black text-black text-xs font-semibold px-6 py-3 rounded-lg uppercase tracking-wider transition">
              Print Receipt
            </button>
          </div>
        </div>

        <div class="mt-8 bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-6">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-gray-200 gap-2">
            <div>
              <span class="text-[10px] font-bold uppercase tracking-widest text-gray-400">Order Reference</span>
              <p class="text-lg font-black text-black">${order.orderNumber}</p>
            </div>
            <div class="sm:text-right">
              <span class="text-[10px] font-bold uppercase tracking-widest text-gray-400">Estimated Delivery</span>
              <p class="text-xs font-bold text-black">3 - 4 Business Days (${order.carrier})</p>
            </div>
          </div>

          <div class="space-y-4 divide-y divide-gray-100">
            ${order.items.map(item => `
              <div class="pt-3 first:pt-0 flex items-center justify-between">
                <div class="flex items-center space-x-3">
                  <img src="${item.image}" alt="${item.title}" class="w-12 h-12 object-contain bg-gray-50 rounded-lg border border-gray-100 p-1"/>
                  <div>
                    <h4 class="text-xs font-bold text-black">${item.title}</h4>
                    <p class="text-[10px] text-gray-500">${item.variant} • Qty: ${item.quantity}</p>
                  </div>
                </div>
                <span class="text-xs font-bold text-black">${this.formatPrice(item.price * item.quantity)}</span>
              </div>
            `).join("")}
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-gray-200 text-xs">
            <div>
              <h4 class="font-bold uppercase tracking-wider text-gray-400 mb-2">Shipping Destination</h4>
              <p class="font-medium text-black">${order.customerName}</p>
              <p class="text-gray-600">${order.address}</p>
            </div>
            <div class="space-y-1.5 text-right sm:border-l sm:border-gray-100 sm:pl-8">
              <div class="flex justify-between text-gray-500">
                <span>Shipping</span>
                <span class="font-semibold text-emerald-600">FREE Express</span>
              </div>
              <div class="flex justify-between text-sm font-black text-black pt-2 border-t border-gray-100">
                <span>Total Paid</span>
                <span>${this.formatPrice(order.total)} USD</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  // VIEW 11: TRACK ORDER PAGE
  renderTrackOrderView() {
    const order = this.currentOrder || this.loadLatestOrder();

    return `
      <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <nav class="flex items-center space-x-2 text-xs text-gray-500 font-medium mb-8">
          <a class="hover:text-black transition" href="#home" onclick="technoApp.navigate('home')">Home</a>
          <span>/</span>
          <span class="text-black">Track Shipment</span>
        </nav>

        <div class="text-center max-w-lg mx-auto mb-10">
          <span class="text-xs font-bold uppercase tracking-widest text-gray-400">Live Logistics Telemetry</span>
          <h1 class="text-3xl font-black uppercase tracking-tight text-black mt-1">TRACK YOUR ORDER</h1>
          <p class="text-xs text-gray-500 mt-2">Enter your order reference number and email to inspect live dispatch milestones.</p>
        </div>

        <div class="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 mb-10 shadow-sm">
          <form onsubmit="event.preventDefault(); technoApp.showToast('Logistics data refreshed with carrier satellites');" class="grid grid-cols-1 sm:grid-cols-12 gap-4">
            <div class="sm:col-span-5">
              <label class="block text-xs font-semibold text-gray-700 uppercase mb-1">Order Number</label>
              <input type="text" id="trackOrderNum" value="${order.orderNumber}" required class="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-xs text-black focus:ring-black focus:border-black font-mono"/>
            </div>
            <div class="sm:col-span-5">
              <label class="block text-xs font-semibold text-gray-700 uppercase mb-1">Email Address</label>
              <input type="email" id="trackEmail" value="${order.email}" required class="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-xs text-black focus:ring-black focus:border-black"/>
            </div>
            <div class="sm:col-span-2 flex items-end">
              <button type="submit" class="w-full bg-black hover:bg-neutral-800 text-white font-semibold text-xs h-10 rounded-lg transition uppercase tracking-wider">
                Track
              </button>
            </div>
          </form>
        </div>

        <div class="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-gray-100 gap-4">
            <div>
              <span class="text-xs text-gray-400 font-semibold uppercase tracking-wider">Carrier &amp; Tracking Code</span>
              <p class="text-base font-bold text-black">${order.carrier} • <code class="font-mono text-xs bg-gray-100 px-2 py-0.5 rounded">${order.trackingNumber}</code></p>
            </div>
            <span class="inline-flex items-center text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
              <span class="w-2 h-2 rounded-full bg-emerald-500 mr-2 pulse-glow"></span>
              In Transit • On Schedule
            </span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-4 gap-6 relative">
            <div class="space-y-2">
              <div class="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold">✓</div>
              <h4 class="text-xs font-bold text-black uppercase">1. Order Placed</h4>
              <p class="text-[10px] text-gray-400">Oct 06, 09:15 AM PST</p>
            </div>
            <div class="space-y-2">
              <div class="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold">✓</div>
              <h4 class="text-xs font-bold text-black uppercase">2. Calibration &amp; Pack</h4>
              <p class="text-[10px] text-gray-400">Oct 06, 11:30 AM PST</p>
            </div>
            <div class="space-y-2">
              <div class="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold animate-pulse">3</div>
              <h4 class="text-xs font-bold text-black uppercase">3. In Transit (Air)</h4>
              <p class="text-[10px] text-gray-400">San Francisco Hub Departure</p>
            </div>
            <div class="space-y-2 opacity-40">
              <div class="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs font-bold">4</div>
              <h4 class="text-xs font-bold text-black uppercase">4. Delivery</h4>
              <p class="text-[10px] text-gray-400">Est. 2-3 business days</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  // VIEW 12: PRIVACY POLICY PAGE
  renderPrivacyView() {
    return `
      <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <h1 class="text-3xl font-extrabold uppercase tracking-tight text-black mb-4">PRIVACY POLICY</h1>
        <p class="text-xs text-gray-400 uppercase tracking-widest mb-8">Last Updated: October 2026 • GDPR &amp; CCPA Compliant</p>
        <div class="prose text-xs text-gray-700 leading-relaxed space-y-6">
          <section>
            <h2 class="text-sm font-bold uppercase text-black mb-2">1. Overview and Commitment</h2>
            <p>At TECHNO Inc., we respect your personal privacy. We do not sell your personal data, biosensor telemetry, or listening records to third-party ad brokers.</p>
          </section>
        </div>
      </section>
    `;
  }

  // VIEW 13: REFUND & RETURN POLICY PAGE
  renderRefundView() {
    return `
      <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <h1 class="text-3xl font-extrabold uppercase tracking-tight text-black mb-4">REFUND &amp; RETURN POLICY</h1>
        <p class="text-xs text-gray-400 uppercase tracking-widest mb-8">30-Day Risk-Free Trial • 2-Year Hardware Warranty</p>
        <div class="prose text-xs text-gray-700 leading-relaxed space-y-6">
          <section>
            <h2 class="text-sm font-bold uppercase text-black mb-2">1. 30-Day Risk-Free Trial</h2>
            <p>If for any reason you are not thoroughly captivated within 30 days of receiving your hardware, you are entitled to return it for a 100% full refund with prepaid DHL return labels.</p>
          </section>
        </div>
      </section>
    `;
  }

  // VIEW 14: SHIPPING POLICY PAGE
  renderShippingView() {
    return `
      <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <h1 class="text-3xl font-extrabold uppercase tracking-tight text-black mb-4">SHIPPING POLICY</h1>
        <p class="text-xs text-gray-400 uppercase tracking-widest mb-8">Fast Worldwide Delivery from Automated Fulfillment Hubs</p>
        <div class="prose text-xs text-gray-700 leading-relaxed space-y-6">
          <section>
            <h2 class="text-sm font-bold uppercase text-black mb-2">1. Processing and Same-Day Dispatch</h2>
            <p>All in-stock hardware orders placed before 2:00 PM PST are calibrated and handed over to DHL Express on the same day.</p>
          </section>
        </div>
      </section>
    `;
  }

  // VIEW 15: TERMS OF SERVICE PAGE
  renderTermsView() {
    return `
      <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <h1 class="text-3xl font-extrabold uppercase tracking-tight text-black mb-4">TERMS OF SERVICE</h1>
        <p class="text-xs text-gray-400 uppercase tracking-widest mb-8">Effective Date: October 2026</p>
        <div class="prose text-xs text-gray-700 leading-relaxed space-y-6">
          <section>
            <h2 class="text-sm font-bold uppercase text-black mb-2">1. Acceptance of Terms</h2>
            <p>By accessing or purchasing from the TECHNO flagship portal, you agree to be bound by these Terms of Service.</p>
          </section>
        </div>
      </section>
    `;
  }
}

window.technoApp = new TechnoApp();
