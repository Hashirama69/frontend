// ============================================================================
// ТОТАЛЬНЫЙ РЕЕСТР КОНКРЕТНЫХ МОДЕЛЕЙ КОМПЛЕКТУЮЩИХ ПК CORE INDEX (2015 - 2026)
// ============================================================================

export const embeddedHardwareDatabase = [
  // ==========================================
  // 1. ЦЕНТРАЛЬНЫЕ ПРОЦЕССОРЫ (КАТЕГОРИЯ: processors)
  // ==========================================

  // --- Intel Core & Ultra (Конкретные модели по эпохам ТЗ) ---
  { id: 101, sysId: "intel-6", name: "Intel Core i7-6700K (Skylake)", category: "processors", brand: "Intel", year: 2015, power: 15, specs: "4 ядра / 8 потоков | 4.0-4.2 ГГц | 8MB L3 Cache", tdp: 91, arch: "14нм / Skylake LGA1151" },
  { id: 102, sysId: "intel-7", name: "Intel Core i7-7700K (Kaby Lake)", category: "processors", brand: "Intel", year: 2017, power: 18, specs: "4 ядра / 8 потоков | 4.2-4.5 ГГц | 8MB L3 Cache", tdp: 91, arch: "14нм / Kaby Lake LGA1151" },
  { id: 103, sysId: "intel-8", name: "Intel Core i7-8700K (Coffee Lake)", category: "processors", brand: "Intel", year: 2017, power: 32, specs: "6 ядер / 12 потоков | 3.7-4.7 ГГц | 12MB L3 Cache", tdp: 95, arch: "14нм / Coffee Lake LGA1151v2" },
  { id: 104, sysId: "intel-9", name: "Intel Core i9-9900K (Coffee Lake Refresh)", category: "processors", brand: "Intel", year: 2018, power: 42, specs: "8 ядер / 16 потоков | 3.6-5.0 ГГц | 16MB L3 Cache", tdp: 95, arch: "14нм / Coffee Lake R" },
  { id: 105, sysId: "intel-10", name: "Intel Core i5-10400F (Comet Lake)", category: "processors", brand: "Intel", year: 2020, power: 35, specs: "6 ядер / 12 потоков | 2.9-4.3 ГГц | 12MB L3 Cache", tdp: 65, arch: "14нм / Comet Lake LGA1200" },
  { id: 106, sysId: "intel-10", name: "Intel Core i9-10900K (Comet Lake)", category: "processors", brand: "Intel", year: 2020, power: 50, specs: "10 ядер / 20 потоков | 3.7-5.3 ГГц | 20MB L3 Cache", tdp: 125, arch: "14нм / Comet Lake LGA1200" },
  { id: 107, sysId: "intel-11", name: "Intel Core i9-11900K (Rocket Lake)", category: "processors", brand: "Intel", year: 2021, power: 55, specs: "8 ядер / 16 потоков | 3.5-5.3 ГГц | 16MB L3 | PCIe 4.0", tdp: 125, arch: "14нм / Rocket Lake LGA1200" },
  { id: 108, sysId: "intel-12", name: "Intel Core i9-12900K (Alder Lake)", category: "processors", brand: "Intel", year: 2021, power: 72, specs: "16 ядер (8P+8E) | 24 потока | DDR5 | PCIe 5.0", tdp: 125, arch: "10нм / Alder Lake LGA1700" },
  { id: 109, sysId: "intel-12", name: "Intel Core i5-12400F (Alder Lake)", category: "processors", brand: "Intel", year: 2021, power: 48, specs: "6 ядер / 12 потоков | 2.5-4.4 ГГц | 18MB L3 Cache", tdp: 65, arch: "10нм / Alder Lake LGA1700" },
  { id: 110, sysId: "intel-13", name: "Intel Core i9-13900K (Raptor Lake)", category: "processors", brand: "Intel", year: 2022, power: 85, specs: "24 ядра (8P+16E) | 32 потока | 5.8 ГГц max", tdp: 125, arch: "10нм / Raptor Lake LGA1700" },
  { id: 111, sysId: "intel-14", name: "Intel Core i9-14900KS (Raptor Lake Refresh)", category: "processors", brand: "Intel", year: 2024, power: 90, specs: "24 ядра (8P+16E) | Отборный кремний | До 6.2 ГГц", tdp: 150, arch: "10нм / Raptor Lake-R" },
  { id: 112, sysId: "intel-u100", name: "Intel Core Ultra 7 155H (Meteor Lake)", category: "processors", brand: "Intel", year: 2023, power: 70, specs: "16 ядер (6P+8E+2LP) | Встроенная графика Xe-LP", tdp: 28, arch: "7нм / Meteor Lake Мобильный" },
  { id: 113, sysId: "intel-u200s", name: "Intel Core Ultra 9 285K (Arrow Lake)", category: "processors", brand: "Intel", year: 2024, power: 98, specs: "24 ядра (8P+16E) | Без Hyper-Threading | Блок NPU", tdp: 125, arch: "3нм / Arrow Lake LGA1851" },
  { id: 114, sysId: "intel-u300", name: "Intel Core Ultra 9 390K (Линейка 2025–2026)", category: "processors", brand: "Intel", year: 2026, power: 110, specs: "Архитектура Panther Lake / Bartlett Lake-S чисто из P-ядер", tdp: 125, arch: "2нм / Системы 2026 года" },
  { id: 115, sysId: "intel-xeon-w", name: "Intel Xeon W9-3495X", category: "processors", brand: "Intel", year: 2023, power: 105, specs: "56 ядер / 112 потоков | Экспертная рабочая станция", tdp: 350, arch: "14нм / LGA4677" },
  { id: 116, sysId: "intel-x", name: "Intel Core i9-10980XE Extreme Edition", category: "processors", brand: "Intel", year: 2019, power: 60, specs: "18 ядер / 36 потоков | Платформа Cascade Lake-X", tdp: 165, arch: "14нм / LGA2066" },

  // --- AMD Ryzen & FX (Конкретные модели по эпохам ТЗ) ---
  { id: 171, sysId: "amd-fx", name: "AMD FX-8350 (Piledriver)", category: "processors", brand: "AMD", year: 2015, power: 12, specs: "8 вычислительных модулей | Частота 4.0-4.2 ГГц", tdp: 125, arch: "32нм / Сокет AM3+" },
  { id: 172, sysId: "amd-fx", name: "AMD FX-6300 (Piledriver)", category: "processors", brand: "AMD", year: 2015, power: 9, specs: "6 вычислительных модулей | Частота 3.5-4.1 ГГц", tdp: 95, arch: "32нм / Сокет AM3+" },
  { id: 173, sysId: "amd-r1000", name: "AMD Ryzen 7 1800X (Zen)", category: "processors", brand: "AMD", year: 2017, power: 24, specs: "8 ядер / 16 потоков | 3.6-4.0 ГГц | 16MB L3 Cache", tdp: 95, arch: "14нм / Первая волна AM4" },
  { id: 174, sysId: "amd-r2000", name: "AMD Ryzen 5 2600 (Zen+)", category: "processors", brand: "AMD", year: 2018, power: 30, specs: "6 ядер / 12 потоков | 3.4-3.9 ГГц | 16MB L3 Cache", tdp: 65, arch: "12нм / Оптимизация AM4" },
  { id: 175, sysId: "amd-r3000", name: "AMD Ryzen 5 3600 (Zen 2)", category: "processors", brand: "AMD", year: 2019, power: 45, specs: "6 ядер / 12 потоков | 3.6-4.2 ГГц | 32MB L3 Cache", tdp: 65, arch: "7нм / Чиплетный народный хит" },
  { id: 176, sysId: "amd-r3000", name: "AMD Ryzen 9 3950X (Zen 2)", category: "processors", brand: "AMD", year: 2019, power: 65, specs: "16 ядер / 32 потока | Впервые на массовом AM4 сокете", tdp: 105, arch: "7нм / Чиплетный флагман" },
  { id: 177, sysId: "amd-r4000", name: "AMD Ryzen 7 4750G (Zen 2 APU)", category: "processors", brand: "AMD", year: 2020, power: 48, specs: "8 ядер / 16 потоков | Встроенное видеоядро Radeon Vega 8", tdp: 65, arch: "7нм / Монолитный кристалл AM4" },
  { id: 178, sysId: "amd-r5000", name: "AMD Ryzen 5 5600X (Zen 3)", category: "processors", brand: "AMD", year: 2020, power: 58, specs: "6 ядер / 12 потоков | Огромный скачок IPC", tdp: 65, arch: "7нм / Zen 3 Архитектура" },
  { id: 179, sysId: "amd-r5000x3d", name: "AMD Ryzen 7 5800X3D (3D V-Cache)", category: "processors", brand: "AMD", year: 2022, specs: "8 ядер / 16 потоков | Легендарный чип со 100MB кэша", power: 75, tdp: 105, arch: "7нм / Финал платформы AM4" },
  { id: 180, sysId: "amd-r7000", name: "AMD Ryzen 9 7950X (Zen 4)", category: "processors", brand: "AMD", year: 2022, power: 88, specs: "16 ядер / 32 потока | Частоты до 5.7 ГГц | Только DDR5", tdp: 170, arch: "5нм / Переход на сокет AM5" },
  { id: 181, sysId: "amd-r7000x3d", name: "AMD Ryzen 7 7800X3D (3D V-Cache)", category: "processors", brand: "AMD", year: 2023, power: 96, specs: "8 ядер / 16 потоков | Игровой эталон мира с 104MB кэша", tdp: 120, arch: "5нм / Игровое ядро AM5" },
  { id: 182, sysId: "amd-r8000", name: "AMD Ryzen 7 8700G (Hawk Point APU)", category: "processors", brand: "AMD", year: 2024, power: 76, specs: "8 ядер / 16 потоков | Мощная встроенная графика RDNA 3", tdp: 65, arch: "4нм / APU сокет AM5" },
  { id: 183, sysId: "amd-r9000", name: "AMD Ryzen 9 9950X (Zen 5)", category: "processors", brand: "AMD", year: 2024, power: 102, specs: "16 ядер / 32 потока | ИИ-оптимизированная архитектура", tdp: 170, arch: "4нм / Поколение Zen 5" },
  { id: 184, sysId: "amd-r9000x3d", name: "AMD Ryzen 7 9800X3D (Линейка 2024–2026)", category: "processors", brand: "AMD", year: 2024, power: 108, specs: "8 ядер | Перевернутый кристалл CCD под слой кэша", tdp: 120, arch: "4нм / Игровой бестселлер" },
  { id: 185, sysId: "amd-r9000x3d", name: "AMD Ryzen 9 9950X3D (Линейка 2024–2026)", category: "processors", brand: "AMD", year: 2025, power: 115, specs: "16 ядер / 32 потока | Кэш второго поколения | Ультимативный флагман", tdp: 120, arch: "4нм / Zen 5 Топ" },
  { id: 186, sysId: "amd-ripper-7", name: "AMD Ryzen Threadripper PRO 7995WX", category: "processors", brand: "AMD", year: 2023, power: 120, specs: "96 ядер / 192 потока | Король многопоточных вычислений", tdp: 350, arch: "5нм / Сокет sTR5 / sWRX8" },
  ,
  // ==========================================
  // 2. ГРАФИЧЕСКИЕ ЧИПЫ И АРХИТЕКТУРЫ (КАТЕГОРИЯ: videocards)
  // ==========================================

  // --- NVIDIA GeForce (Конкретные флагманы и народные хиты) ---
  { id: 201, sysId: "nv-gtx900", name: "NVIDIA GeForce GTX 970", category: "videocards", brand: "NVIDIA", year: 2015, power: 18, specs: "4GB GDDR5 | 256-bit | Архитектура Максвелл", tdp: 145, arch: "28нм / Эпоха чистой растровой графики" },
  { id: 202, sysId: "nv-gtx10", name: "NVIDIA GeForce GTX 1060 (6GB)", category: "videocards", brand: "NVIDIA", year: 2016, power: 28, specs: "6GB GDDR5 | 192-bit | Архитектура Паскаль", tdp: 120, arch: "16нм / Главный долгожитель Steam" },
  { id: 203, sysId: "nv-gtx10", name: "NVIDIA GeForce GTX 1080 Ti", category: "videocards", brand: "NVIDIA", year: 2016, power: 45, specs: "11GB GDDR5X | 352-bit | Легендарный суперфлагман", tdp: 250, arch: "16нм / Архитектурный шедевр Pascal" },
  { id: 204, sysId: "nv-gtx16", name: "NVIDIA GeForce GTX 1660 SUPER", category: "videocards", brand: "NVIDIA", year: 2019, power: 34, specs: "6GB GDDR6 | Чип Turing без ядер трассировки лучей", tdp: 125, arch: "12нм / Народное эконом-решение" },
  { id: 205, sysId: "nv-rtx20", name: "NVIDIA GeForce RTX 2060", category: "videocards", brand: "NVIDIA", year: 2018, power: 40, specs: "6GB GDDR6 | Первое появление RT-ядер и тензоров DLSS", tdp: 160, arch: "12нм / Turing Архитектура" },
  { id: 206, sysId: "nv-rtx30", name: "NVIDIA GeForce RTX 3060 (12GB)", category: "videocards", brand: "NVIDIA", year: 2020, power: 55, specs: "12GB GDDR6 | 192-bit | Эпоха майнинг-кризиса", tdp: 170, arch: "8нм / Поколение Ampere" },
  { id: 207, sysId: "nv-rtx30", name: "NVIDIA GeForce RTX 3080 FE", category: "videocards", brand: "NVIDIA", year: 2020, power: 75, specs: "10GB GDDR6X | 320-bit | Сверхмощный шаг вперед", tdp: 320, arch: "8нм / Поколение Ampere флагман" },
  { id: 208, sysId: "nv-rtx40", name: "NVIDIA GeForce RTX 4090 Founders Edition", category: "videocards", brand: "NVIDIA", year: 2022, power: 100, specs: "24GB GDDR6X | Генерация кадров DLSS 3.0 | 12VHPWR разъем", tdp: 450, arch: "4нм / Архитектура Ada Lovelace" },
  { id: 209, sysId: "nv-rtx40s", name: "NVIDIA GeForce RTX 4080 SUPER", category: "videocards", brand: "NVIDIA", year: 2024, power: 92, specs: "16GB GDDR6X | Полноценный кристалл для стабильного 4K", tdp: 320, arch: "4нм / Ada Lovelace Обновление" },
  { id: 210, sysId: "nv-rtx50", name: "NVIDIA GeForce RTX 5080", category: "videocards", brand: "NVIDIA", year: 2026, power: 108, specs: "16GB нового стандарта видеопамяти GDDR7 | Буст ИИ", tdp: 400, arch: "3нм / Архитектура Blackwell 2026" },
  { id: 211, sysId: "nv-rtx50", name: "NVIDIA GeForce RTX 5090 FE", category: "videocards", brand: "NVIDIA", year: 2026, power: 120, specs: "32GB GDDR7 | Шина 512-bit | Алгоритмы DLSS 4/4.5", tdp: 600, arch: "3нм / Абсолютный флагман Blackwell" },

  // --- AMD Radeon (Конкретные модели по эпохам ТЗ) ---
  { id: 251, sysId: "amd-rx300", name: "AMD Radeon R9 Fury X", category: "videocards", brand: "AMD", year: 2015, power: 22, specs: "4GB | Первое экспериментальное использование памяти HBM", tdp: 275, arch: "28нм / Архитектура GCN" },
  { id: 252, sysId: "amd-rx400", name: "AMD Radeon RX 580 (8GB)", category: "videocards", brand: "AMD", year: 2016, power: 26, specs: "8GB GDDR5 | 256-bit | Король бюджетного гейминга", tdp: 185, arch: "14нм / Легендарная Polaris" },
  { id: 253, sysId: "amd-vega", name: "AMD Radeon RX Vega 64", category: "videocards", brand: "AMD", year: 2017, power: 38, specs: "8GB HBM2 | Высокое энергопотребление и турбинное охлаждение", tdp: 295, arch: "14нм / Архитектура Vega" },
  { id: 254, sysId: "amd-rx5000", name: "AMD Radeon RX 5700 XT", category: "videocards", brand: "AMD", year: 2019, power: 48, specs: "8GB GDDR6 | Старт архитектуры RDNA 1 без лучей", tdp: 225, arch: "7нм / Чисто игровое ядро" },
  { id: 255, sysId: "amd-rx6000", name: "AMD Radeon RX 6800 XT", category: "videocards", brand: "AMD", year: 2020, power: 72, specs: "16GB GDDR6 | Фирменный Infinity Cache | Трассировка RT", tdp: 300, arch: "7нм / Архитектура RDNA 2" },
  { id: 256, sysId: "amd-rx7000", name: "AMD Radeon RX 7900 XTX", category: "videocards", brand: "AMD", year: 2022, power: 90, specs: "24GB GDDR6 | Первые в мире графические чиплеты", tdp: 355, arch: "5нм / Архитектура RDNA 3" },
  { id: 257, sysId: "amd-rx9000", name: "AMD Radeon RX 9070 XT", category: "videocards", brand: "AMD", year: 2026, power: 102, specs: "16GB VRAM базовая | Ускоренные RT-движки | Апскейлер FSR 4", tdp: 280, arch: "3нм / Поколение RDNA 4" },

  // --- Intel Arc (Конкретные дискретные карты) ---
  { id: 291, sysId: "intel-arc-a", name: "Intel Arc A770 (16GB)", category: "videocards", brand: "Intel", year: 2022, power: 45, specs: "16GB GDDR6 | Превосходная производительность в DirectX 12", tdp: 225, arch: "6нм / Дебют Alchemist Xe-HPG" },
  { id: 292, sysId: "intel-arc-b", name: "Intel Arc B580 Battlemage", category: "videocards", brand: "Intel", year: 2025, power: 62, specs: "12GB GDDR6 | Полное исправление проблем старых драйверов", tdp: 190, arch: "4нм / Архитектура Xe2-HPG" },
  ,
  // ==========================================
  // 3. ОПЕРАТИВНАЯ ПАМЯТЬ (КАТЕГОРИЯ: ram)
  // ==========================================
  { id: 301, sysId: "ram-ddr4", name: "Kingston FURY Beast DDR4 16GB", category: "ram", brand: "DDR4", year: 2017, power: 35, specs: "Частота 3200 МГц | Чипы Samsung B-Die | Профиль XMP 2.0", tdp: 1.35, arch: "Форм-фактор DIMM для ПК" },
  { id: 302, sysId: "ram-ddr5", name: "Corsair Dominator Titanium DDR5 32GB", category: "ram", brand: "DDR5", year: 2024, power: 85, specs: "Скорость разгона 6400-8000 МГц | Профили Intel XMP 3.0 / AMD EXPO", tdp: 1.4, arch: "Зрелая DDR5 премиум-сегмента" },
  { id: 303, sysId: "ram-camm2", name: "Crucial Premium CAMM2 32GB", category: "ram", brand: "CAMM2", year: 2026, power: 110, specs: "Частота 8400+ МГц | Установка плашмя на плату | Минимальные задержки", tdp: 1.1, arch: "Некстген форм-фактор памяти 2026 года" },

  // ==========================================
  // 4. НАКОПИТЕЛИ ДАННЫХ (КАТЕГОРИЯ: storage)
  // ==========================================
  { id: 401, sysId: "ssd-sata", name: "Kingston A400 480GB (SATA III)", category: "storage", brand: "SATA", year: 2015, power: 15, specs: "Формат 2.5 дюйма | Скорость чтения 500 МБ/с | Запись 450 МБ/с", tdp: 3, arch: "Интерфейс SATA III протокол" },
  { id: 402, sysId: "ssd-pcie3", name: "Samsung 970 EVO Plus 1TB (M.2)", category: "storage", brand: "PCIe 3.0", year: 2018, power: 42, specs: "Формат M.2 2280 | Ключ M-Key | Скорость чтения до 3500 МБ/с", tdp: 6, arch: "Протокол NVMe 1.3 / Шина PCIe 3.0 x4" },
  { id: 403, sysId: "ssd-pcie4", name: "Samsung 980 PRO 2TB (PCIe 4.0)", category: "storage", brand: "PCIe 4.0", year: 2021, power: 78, specs: "Контроллер Elpis | Скорость до 7000 МБ/с | Буст DirectStorage", tdp: 7, arch: "NVMe 1.4 / Шина PCIe 4.0 x4" },
  { id: 404, sysId: "ssd-pcie5", name: "Crucial T700 2TB (Некстген PCIe 5.0)", category: "storage", brand: "PCIe 5.0", year: 2024, power: 105, specs: "Контроллер Phison E26 | Скорость чтения до 14500 МБ/с", tdp: 12, arch: "NVMe 2.0 / Требует массивного радиатора" },
  { id: 405, sysId: "hdd-sata", name: "WD Gold 4TB Enterprise (HDD)", category: "storage", brand: "HDD", year: 2015, power: 5, specs: "Жесткий диск 3.5\" SATA III | Скорость 7200 RPM | Большой архив", tdp: 9, arch: "Магнитные пластины для NAS хранилищ" },
  // ==========================================
  // 5. МАТЕРИНСКИЕ ПЛАТЫ И ЧИПСЕТЫ (КАТЕГОРИЯ: motherboards)
  // ==========================================
  { id: 501, sysId: "chip-intel-300", name: "ASUS ROG Maximus Z390 Hero", category: "motherboards", brand: "Intel", year: 2018, power: 35, specs: "Чипсет Intel Z390 | Фазы питания под Core i9-9900K", tdp: 95, arch: "Платформа LGA1151v2" },
  { id: 502, sysId: "chip-intel-700", name: "MSI MPG Z790 Carbon WiFi", category: "motherboards", brand: "Intel", year: 2023, power: 80, specs: "Чипсет Intel Z790 под Raptor Lake | Поддержка DDR5 памяти", tdp: 125, arch: "Платформа LGA1700" },
  { id: 503, sysId: "chip-intel-800", name: "ASUS ROG Maximus Z890 BTF", category: "motherboards", brand: "Intel", year: 2024, power: 100, specs: "Чипсет Intel Z890 | 10-слойный текстолит | Скрытый монтаж BTF", tdp: 150, arch: "Некстген сокет LGA1851 обратное подключение" },
  { id: 504, sysId: "chip-amd-400", name: "Gigabyte B450 AORUS Elite", category: "motherboards", brand: "AMD", year: 2018, power: 30, specs: "Чипсет AMD B450 | Легендарный массовый узел под Ryzen 3600/5600X", tdp: 65, arch: "Долговечный сокет AM4" },
  { id: 505, sysId: "chip-amd-600", name: "MSI B650M Project Zero", category: "motherboards", brand: "AMD", year: 2023, power: 75, specs: "Чипсет AMD B650 AM5 | Разъемы питания вынесены на тыльную сторону", tdp: 100, arch: "Платформа скрытого монтажа Project Zero" },
  { id: 506, sysId: "chip-amd-800", name: "Gigabyte X870E AORUS Master", category: "motherboards", brand: "AMD", year: 2024, power: 102, specs: "Топовый чипсет AMD X870E | Мосфеты DrMOS и силовые этапы SPS", tdp: 170, arch: "Оверклокерская база под сокет AM5 Stealth" },

  // ==========================================
  // 6. ПЕРИФЕРИЯ, БП И КОРПУСА (КАТЕГОРИЯ: peripherals)
  // ==========================================
  { id: 601, sysId: "psu-atx2", name: "SeaSonic Focus GX-750W Gold", category: "peripherals", brand: "PSU", year: 2016, power: 30, specs: "Стандарт ATX 2.4 / ATX 2.52 | Японские конденсаторы", tdp: 750, arch: "Привычные старые кабели питания 6+2 pin" },
  { id: 602, sysId: "psu-atx30", name: "be quiet! Dark Power 13 1000W", category: "peripherals", brand: "PSU", year: 2022, power: 85, specs: "Стандарт ATX 3.0 | Силовой кабель питания видеокарт 12VHPWR (600W)", tdp: 1000, arch: "Компоновка под суперфлагманы RTX 4090" },
  { id: 603, sysId: "psu-atx31", name: "Corsair RM1200x Shift ATX 3.1", category: "peripherals", brand: "PSU", year: 2025, power: 105, specs: "Безопасный доработанный разъем 12V-2x6 | Полупроводники GaN", tdp: 1200, arch: "Стандарт ATX 3.1 с укороченными сигнальными пинами" },
  { id: 604, sysId: "case-aquarium", name: "Lian Li O11 Vision Aquarium", category: "peripherals", brand: "CASE", year: 2024, power: 95, specs: "Панорамный корпус-аквариум | Три стеклянные грани без стойки", tdp: 0, arch: "Экосистема скрытой разводки кабелей Lian Li L-Connect" }
];

export const availableCategories = [
  { id: 'processors', name: 'Процессоры' },
  { id: 'videocards', name: 'Видеокарты' },
  { id: 'ram', name: 'Оперативная память' },
  { id: 'storage', name: 'Накопители данных' },
  { id: 'motherboards', name: 'Материнские платы (Чипсеты)' },
  { id: 'peripherals', name: 'Периферия и Корпуса' }
];

export const embeddedGamesDatabase = [
  { id: 'game-1', name: 'Cyberpunk 2077: Phantom Liberty', reqPower: 70, desc: "REDengine со трассировкой путей." },
  { id: 'game-2', name: 'Grand Theft Auto VI (GTA 6)', reqPower: 95, desc: "Некстген RAGE. Экстремальный вес на CPU и VRAM." },
  { id: 'game-3', name: 'S.T.A.L.K.E.R. 2: Heart of Chornobyl', reqPower: 80, desc: "Архитектура UE5. Высокие требования к кэшу и потокам." },
  { id: 'game-4', name: 'EA SPORTS FC 27', reqPower: 35, desc: "Frostbite Engine. Оптимальная нагрузка с упором на герцовку." }
];
