/**
 * Premium Armenia Tours - Translations and Data Module
 * Languages: Armenian (hy), Russian (ru), English (en)
 */

let currentLang = "hy";
document.documentElement.setAttribute("lang", currentLang);
window.localStorage.setItem("armenia_tour_lang", currentLang);

const translations = {
  hy: {
    // Navbar
    nav_tours: "Տուրեր",
    nav_about: "Մեր մասին",
    nav_team: "Մեր թիմը",
    nav_contacts: "Կապ",
    nav_logo: "ARMENIA TOURS",

    // Hero
    hero_badge: "ՊՐԵՄԻՈՒՄ ՃԱՆԱՊԱՐՀՈՐԴՈՒԹՅՈՒՆՆԵՐ",
    hero_title: "Բացահայտեք<br><span class='text-emerald-400'>Հայաստանի</span> Ոգին",
    hero_subtitle: "Անմոռանալի պահեր, վեհաշուք լեռներ, հնագույն վանքեր և անգերազանցելի հյուրընկալություն: Զգացեք Հայաստանը մեր պրեմիում դասի էքսկուրսիաներով:",
    hero_cta: "Ամրագրել տուր",
    hero_scroll: "Սահեցրեք ներքև",

    // Filters
    filter_title: "Գտեք ձեր կատարյալ տուրը",
    filter_all: "Բոլորը",
    filter_region: "Տարածաշրջան",

    filter_region_vayots_dzor: "Վայոց Ձոր",
    filter_region_armavir: "Արմավիր",
    filter_region_kotayk: "Կոտայք",
    filter_region_aragatsotn: "Արագածոտն",
    filter_region_syunik: "Սյունիք",
    filter_region_shirak: "Շիրակ",
    filter_region_tavush: "Տավուշ",
    filter_region_gegharkunik: "Գեղարքունիք",
    filter_region_lori: "Լոռի",
    filter_region_ararat: "Արարատ",
    filter_duration: "Տևողություն",
    filter_duration_1: "1 Օր",
    filter_duration_2: "2 Օր",
    filter_duration_3: "3+ Օր",
    filter_price: "Արժեք",
    filter_price_low: "Մինչև 60,000 ֏",
    filter_price_med: "60,000 - 120,000 ֏",
    filter_price_high: "120,000+ ֏",
    view_carousel: "Կարուսել",
    view_grid: "Ցանց",

    // Showcase
    showcase_badge: "ՄԵՐ ՏՈՒՐԵՐԸ",
    showcase_title: "18 Պրեմիում Ճանապարհորդություններ",
    showcase_subtitle: "Ընտրեք մեր մանրակրկիտ մշակված երթուղիներից: Յուրաքանչյուր տուր ներառում է պրեմիում սպասարկում, անվտանգություն և էմոցիոնալ փորձառություններ:",
    tour_days: "օր",
    tour_amd: "֏",
    tour_details_btn: "Մանրամասն",

    // Tour Details
    details_route: "Երթուղու մանրամասներ",
    details_route_stops: "կանգառներ",
    details_prev: "Նախորդ",
    details_next: "Հաջորդ",
    details_autoplay: "Ավտոմատ",
    details_landmark_title: "Տեսարժան վայր",

    // Booking Panel
    book_now: "Ամրագրել հիմա",
    book_msg: "Բարև ձեզ! Ցանկանում եմ ամրագրել հետևյալ տուրը՝ ",
    book_telegram: "Telegram",
    book_whatsapp: "WhatsApp",
    book_instagram: "Instagram",
    book_close: "Փակել",

    // Price Calculator
    calc_title: "Արժեքի հաշվիչ",
    calc_subtitle: "Հաշվարկեք տուրի արժեքը՝ կախված մասնակիցների քանակից:",
    calc_date: "Ընտրեք ամսաթիվը",
    calc_people: "Մասնակիցների քանակը",
    calc_type_private: "Անհատական տուր (1-3 անձ)",
    calc_type_group: "Խմբային տուր (4-7 անձ)",
    calc_type_discount: "Զեղչված արժեք (8+ անձ)",
    calc_price_per_person: "Անձի արժեքը՝",
    calc_total: "Ընդհանուր արժեքը՝",
    calc_guide_title: "Անհատական ուղեկցորդ",
    calc_guide_subtitle: "Պրոֆեսիոնալ տեղական մասնագետ (+20,000 ֏)",

    // Achievements
    ach_title: "Մեր նվաճումները թվերով",
    ach_travelers_label: "Գոհ Ճանապարհորդներ",
    ach_tours_label: "Ավարտված Տուրեր",
    ach_experience_label: "Տարիների Փորձ",
    ach_rating_label: "Միջին Գնահատական",

    // Why Armenia
    why_title: "Ինչու՞ Հայաստան",
    why_subtitle: "Երկիր, որը հմայում է առաջին իսկ հայացքից և մնում սրտում ընդմիշտ:",
    why_1_title: "Հնագույն Ժառանգություն",
    why_1_desc: "Աշխարհի առաջին քրիստոնյա երկիրը՝ հազարամյա տաճարներով և հարուստ պատմությամբ:",
    why_2_title: "Վեհաշուք Բնություն",
    why_2_desc: "Զմրուխտե անտառներ, բարձրադիր լճեր և ձյունապատ լեռներ, որոնք կտրում են շունչը:",
    why_3_title: "Պրեմիում Սպասարկում",
    why_3_desc: "Բարձրակարգ ամենագնացներ, պրոֆեսիոնալ գիդեր և ապահովության ամենաբարձր ստանդարտներ:",
    why_4_title: "Լեգենդար Հյուրընկալություն",
    why_4_desc: "Համեղագույն խոհանոց, հինավուրց գինեգործական ավանդույթներ և անկեղծ ժպիտներ:",

    // Team
    team_badge: "ՄԵՐ ԹԻՄԸ",
    team_title: "Բացառիկ Գիդեր և Փորձագետներ",
    team_subtitle: "Մարդիկ, ովքեր սիրահարված են Հայաստանին և պատրաստ են փոխանցել այդ սերը ձեզ:",
    team_highlight: "ՍԵՂՄԵՔ ԸՆԴԳԾԵԼՈՒ ՀԱՄԱՐ",

    // Testimonials
    test_title: "Ճանապարհորդների տպավորությունները",
    test_subtitle: "Ինչ են պատմում մեր հյուրերը իրենց անմոռանալի արկածների մասին:",

    // Immersive visual card
    immersive_badge: "ԱՆԶՈՒԳԱԿԱՆ ՏԵՍԱՐԱՆ",
    immersive_title: "Ստեղծելով հուշեր՝ կերտված լեռներով և ժառանգությամբ",
    immersive_desc: "Մեր բարձրակարգ լոգիստիկան և ընտրված լեռնային ուղիները երաշխավորում են անվտանգ, հարմարավետ և շքեղ ճանապարհորդություն նույնիսկ Հարավային Կովկասի ամենաանհասանելի անկյուններում:",

    // Footer
    footer_desc: "Պրեմիում դասի տուրեր Հայաստանում: Մենք ստեղծում ենք հիշողություններ, որոնք մնում են ողջ կյանքում:",
    footer_nav: "Նավարկում",
    footer_contacts: "Կոնտակտներ",
    footer_socials: "Սոց. ցանցեր",
    footer_address: "Հայաստան, ք. Երևան, Ամիրյան 4/6",
    footer_rights: "© 2026 Premium Armenia Tours. Բոլոր իրավունքները պաշտպանված են:"
  },

  ru: {
    // Navbar
    nav_tours: "Туры",
    nav_about: "О нас",
    nav_team: "Наша команда",
    nav_contacts: "Контакты",
    nav_logo: "ARMENIA TOURS",

    // Hero
    hero_badge: "ПРЕМИАЛЬНЫЕ ПУТЕШЕСТВИЯ",
    hero_title: "Откройте Душу<br><span class='text-emerald-400'>Армении</span>",
    hero_subtitle: "Незабываемые моменты, величественные горы, древние храмы и непревзойденное гостеприимство. Почувствуйте Армению с нашими премиум экскурсиями.",
    hero_cta: "Забронировать тур",
    hero_scroll: "Прокрутите вниз",

    // Filters
    filter_title: "Найдите свой идеальный тур",
    filter_all: "Все",
    filter_region: "Регион",

    filter_region_vayots_dzor: "Вайоц Дзор",
    filter_region_armavir: "Армавир",
    filter_region_kotayk: "Котайк",
    filter_region_aragatsotn: "Арагацотн",
    filter_region_syunik: "Сюник",
    filter_region_shirak: "Ширак",
    filter_region_tavush: "Тавуш",
    filter_region_gegharkunik: "Гегаркуник",
    filter_region_lori: "Лори",
    filter_region_ararat: "Арарат",
    filter_duration: "Длительность",
    filter_duration_1: "1 День",
    filter_duration_2: "2 Дня",
    filter_duration_3: "3+ Дней",
    filter_price: "Стоимость",
    filter_price_low: "До 60,000 ֏",
    filter_price_med: "60,000 - 120,000 ֏",
    filter_price_high: "120,000+ ֏",
    view_carousel: "Карусель",
    view_grid: "Плитка",

    // Showcase
    showcase_badge: "НАШИ ТУРЫ",
    showcase_title: "18 Премиальных Маршрутов",
    showcase_subtitle: "Выберите один из наших тщательно проработанных туров. Каждый тур включает премиум-сервис, безопасность и эмоциональный опыт.",
    tour_days: "дн",
    tour_amd: "֏",
    tour_details_btn: "Подробнее",

    // Tour Details
    details_route: "Детали маршрута",
    details_route_stops: "остановок",
    details_prev: "Назад",
    details_next: "Вперед",
    details_autoplay: "Авто",
    details_landmark_title: "Достопримечательность",

    // Booking Panel
    book_now: "Забронировать сейчас",
    book_msg: "Здравствуйте! Я хочу забронировать следующий тур: ",
    book_telegram: "Telegram",
    book_whatsapp: "WhatsApp",
    book_instagram: "Instagram",
    book_close: "Закрыть",

    // Price Calculator
    calc_title: "Калькулятор стоимости",
    calc_subtitle: "Рассчитайте стоимость тура в зависимости от количества человек.",
    calc_date: "Выберите дату",
    calc_people: "Количество участников",
    calc_type_private: "Индивидуальный тур (1-3 чел)",
    calc_type_group: "Групповой тур (4-7 чел)",
    calc_type_discount: "Со скидкой (8+ чел)",
    calc_price_per_person: "Цена за человека:",
    calc_total: "Общая стоимость:",
    calc_guide_title: "Услуги гида",
    calc_guide_subtitle: "Профессиональный местный эксперт (+20 000 ֏)",

    // Achievements
    ach_title: "Наши достижения в цифрах",
    ach_travelers_label: "Довольных туристов",
    ach_tours_label: "Проведено туров",
    ach_experience_label: "Лет опыта",
    ach_rating_label: "Средняя оценка",

    // Why Armenia
    why_title: "Почему Армения",
    why_subtitle: "Страна, которая очаровывает с первого взгляда и остается в сердце навсегда.",
    why_1_title: "Древнейшее Наследие",
    why_1_desc: "Первая христианская страна в мире с тысячелетними храмами и богатейшей историей.",
    why_2_title: "Величественная Природа",
    why_2_desc: "Изумрудные леса, высокогорные озера и заснеженные вершины, от которых захватывает дух.",
    why_3_title: "Премиальный Сервис",
    why_3_desc: "Комфортабельные внедорожники, профессиональные гиды и высочайшие стандарты безопасности.",
    why_4_title: "Легендарное Гостеприимство",
    why_4_desc: "Изысканная национальная кухня, древние винодельческие традиции и искренние улыбки.",

    // Team
    team_badge: "НАША КОМАНДА",
    team_title: "Исключительные Гиды и Эксперты",
    team_subtitle: "Люди, которые влюблены в Армению и готовы передать эту любовь вам.",
    team_highlight: "НАЖМИТЕ ДЛЯ ВЫДЕЛЕНИЯ",

    // Testimonials
    test_title: "Отзывы путешественников",
    test_subtitle: "Что рассказывают наши гости о своих незабываемых приключениях.",

    // Immersive visual card
    immersive_badge: "НЕПОВТОРИМЫЙ ВИД",
    immersive_title: "Создавая воспоминания, высеченные в горах и наследии",
    immersive_desc: "Наша премиальная логистика и отборные горные тропы гарантируют безопасное, комфортное и роскошное путешествие даже в самых потаенных уголках Южного Кавказа.",

    // Footer
    footer_desc: "Туры премиум-класса в Армении. Мы создаем воспоминания, которые остаются на всю жизнь.",
    footer_nav: "Навигация",
    footer_contacts: "Контакты",
    footer_socials: "Соц. сети",
    footer_address: "Армения, г. Ереван, Амиряна 4/6",
    footer_rights: "© 2026 Premium Armenia Tours. Все права защищены."
  },

  en: {
    // Navbar
    nav_tours: "Tours",
    nav_about: "About",
    nav_team: "Our Team",
    nav_contacts: "Contacts",
    nav_logo: "ARMENIA TOURS",

    // Hero
    hero_badge: "PREMIUM EXPEDITIONS",
    hero_title: "Discover the Soul<br><span class='text-emerald-400'>of Armenia</span>",
    hero_subtitle: "Unforgettable moments, majestic mountains, ancient monasteries, and unparalleled hospitality. Experience Armenia with our bespoke premium excursions.",
    hero_cta: "Book a Tour",
    hero_scroll: "Scroll down",

    // Filters
    filter_title: "Find Your Perfect Journey",
    filter_all: "All",
    filter_region: "Region",

    filter_region_vayots_dzor: "Vayots Dzor",
    filter_region_armavir: "Armavir",
    filter_region_kotayk: "Kotayk",
    filter_region_aragatsotn: "Aragatsotn",
    filter_region_syunik: "Syunik",
    filter_region_shirak: "Shirak",
    filter_region_tavush: "Tavush",
    filter_region_gegharkunik: "Gegharkunik",
    filter_region_lori: "Lori",
    filter_region_ararat: "Ararat",
    filter_duration: "Duration",
    filter_duration_1: "1 Day",
    filter_duration_2: "2 Days",
    filter_duration_3: "3+ Days",
    filter_price: "Price",
    filter_price_low: "Under 60,000 ֏",
    filter_price_med: "60,000 - 120,000 ֏",
    filter_price_high: "120,000+ ֏",
    view_carousel: "Carousel",
    view_grid: "Grid",

    // Showcase
    showcase_badge: "OUR TOURS",
    showcase_title: "18 Premium Journeys",
    showcase_subtitle: "Choose from our meticulously designed itineraries. Each tour includes premium service, ultimate safety, and emotional immersion.",
    tour_days: "days",
    tour_amd: "֏",
    tour_details_btn: "Explore",

    // Tour Details
    details_route: "Itinerary Details",
    details_route_stops: "stops",
    details_prev: "Previous",
    details_next: "Next",
    details_autoplay: "Autoplay",
    details_landmark_title: "Landmark Sights",

    // Booking Panel
    book_now: "Book Now",
    book_msg: "Hello! I am interested in booking the following tour: ",
    book_telegram: "Telegram",
    book_whatsapp: "WhatsApp",
    book_instagram: "Instagram",
    book_close: "Close",

    // Price Calculator
    calc_title: "Cost Calculator",
    calc_subtitle: "Calculate your tour price instantly based on group size.",
    calc_date: "Select Date",
    calc_people: "Number of People",
    calc_type_private: "Private Tour (1-3 guests)",
    calc_type_group: "Group Tour (4-7 guests)",
    calc_type_discount: "Discounted Price (8+ guests)",
    calc_price_per_person: "Price per person:",
    calc_total: "Total Cost:",
    calc_guide_title: "Personal Guide Service",
    calc_guide_subtitle: "Professional local expert (+20,000 ֏)",

    // Achievements
    ach_title: "Our Achievements in Numbers",
    ach_travelers_label: "Happy Explorers",
    ach_tours_label: "Completed Tours",
    ach_experience_label: "Years of Experience",
    ach_rating_label: "Average Rating",

    // Why Armenia
    why_title: "Why Armenia",
    why_subtitle: "A land that captivates you at first glance and remains in your heart forever.",
    why_1_title: "Ancient Heritage",
    why_1_desc: "The world's first Christian nation, filled with millennia-old monasteries and rich history.",
    why_2_title: "Majestic Nature",
    why_2_desc: "Emerald forests, high-altitude alpine lakes, and dramatic snow-capped peaks that will take your breath away.",
    why_3_title: "Premium Service",
    why_3_desc: "High-end SUVs, certified expert guides, and the absolute highest safety standards.",
    why_4_title: "Legendary Hospitality",
    why_4_desc: "Mouthwatering national cuisine, ancient winemaking traditions, and warm, genuine smiles.",

    // Team
    team_badge: "OUR TEAM",
    team_title: "Exceptional Guides & Experts",
    team_subtitle: "Passionate professionals deeply in love with Armenia, ready to craft your perfect memory.",
    team_highlight: "TAP TO HIGHLIGHT",

    // Testimonials
    test_title: "Guest Testimonials",
    test_subtitle: "What our global travelers say about their life-changing adventures with us.",

    // Immersive visual card
    immersive_badge: "IMMERSIVE LOOK",
    immersive_title: "Crafting Memories Built On Mountains & Heritage",
    immersive_desc: "Our high-end logistics and handpicked mountain pathways guarantee a safe, comfortable, and luxury voyage even in the deepest wilderness of the South Caucasus.",

    // Footer
    footer_desc: "Luxury travel experiences in Armenia. We craft lifelong memories through safety and hospitality.",
    footer_nav: "Navigation",
    footer_contacts: "Contacts",
    footer_socials: "Social Media",
    footer_address: "4/6 Amiryan St, Yerevan, Armenia",
    footer_rights: "© 2026 Premium Armenia Tours. All rights reserved."
  }
};

// Database of 18 Tours with real places and prices
const toursData =[
  {
    id: "khor-virap-jermuk",
    price: 70000,
    region: "Vayots Dzor",
    duration: 1,
    image: "/img/img_khor-virap-jermuk_1.webp", 
    title: {
      hy: "Խոր Վիրապ, Նորավանք և Ջերմուկ",
      ru: "Хор Вирап, Нораванк и Курорт Джермук",
      en: "Khor Virap, Noravank & Jermuk Resort"
    },
    description: {
      hy: "Բացահայտեք Հայաստանի հարավի մարգարիտները՝ Արարատի տեսարանից մինչև Ջերմուկի հիդրոթերմալ աղբյուրներն ու Նորավանքի կիրճերը:",
      ru: "Откройте для себя жемчужины юга Армении: от священного вида на Арарат до гидротермальных источников Джермука и каньонов Нораванка.",
      en: "Discover the gems of southern Armenia: from the sacred view of Ararat to the hydrothermal springs of Jermuk and canyons of Noravank."
    },
    stops: [
      {
        title: { hy: "Խոր Վիրապ", ru: "Монастырь Хор Вирап", en: "Khor Virap Monastery" },
        desc: {
          hy: "Պատմական վանք բիբլիական Արարատ լեռան փեշերին, որտեղից բացվում է ամենատպավորիչ տեսարանը:",
          ru: "Знаменитый монастырь у самого подножия горы Арарат, колыбель христианства в Армении.",
          en: "The historic monastery right at the foot of Mount Ararat, offering the most iconic panoramic views."
        },
        photo: "/img/img_khor-virap-jermuk_1.jpg"
      },
      {
        title: { hy: "Նորավանք", ru: "Монастырский комплекс Нораванк", en: "Noravank Monastery Complex" },
        desc: {
          hy: "XIII դարի հոյակերտ ճարտարապետական համալիր՝ շրջապատված հեքիաթային կարմիր ժայռերով:",
          ru: "Великолепный монастырский комплекс XIII века, спрятанный среди ущелья величественных красных скал.",
          en: "A magnificent 13th-century monastery complex nested inside a dramatic gorge of sheer red cliffs."
        },
        photo: "/img/img_khor-virap-jermuk_2.jpg"
      },
      {
        title: { hy: "Արենի-1 Քարանձավ", ru: "Пещера Арени-1 (Пещера птиц)", en: "Areni-1 Cave (Birds' Cave)" },
        desc: {
          hy: "Հնագիտական հրաշք, որտեղ հայտնաբերվել են աշխարհի հնագույն կոշիկն ու գինեգործարանը:",
          ru: "Уникальный археологический памятник, где были найдены древнейшая в мире кожаная обувь и винодельня.",
          en: "An archaeological wonder where the world's oldest leather shoe and winery were discovered."
        },
        photo: "/img/img_khor-virap-jermuk_3.jpg"
      },
      {
        title: { hy: "Արենիի Գինու Գործարան", ru: "Винный завод Арени", en: "Areni Wine Factory" },
        desc: {
          hy: "Պրեմիում դասի հայկական ավանդական գինիների դեգուստացիա տեղական լավագույն խաղողի տեսակներից:",
          ru: "Эксклюзивная дегустация аутентичных армянских вин из эндемичного сорта винограда Арени.",
          en: "Exclusive wine tasting of traditional Armenian wines crafted from the historic local Areni grape."
        },
        photo: "/img/img_khor-virap-jermuk_4.jpg"
      },
      {
        title: { hy: "Ջերմուկ Առողջարան", ru: "Курортный город Джермук", en: "Jermuk Resort City" },
        desc: {
          hy: "Հանրահայտ առողջարանային քաղաք՝ հայտնի իր բուժիչ հանքային ջրերով, գեղեցիկ ջրվեժով և ճոպանուղով:",
          ru: "Знаменитый высокогорный курорт, известный своими питьевыми галереями, водопадом «Волосы русалки» и чистейшим воздухом.",
          en: "A famous alpine spa-resort town, renowned for its healing mineral water galleries and picturesque waterfalls."
        },
        photo: "/img/img_khor-virap-jermuk_5.jpg"
      }
    ]
  },
  {
    id: "echmiadzin-holy-tour",
    price: 25000,
    region: "Armavir",
    duration: 1,
    image: "/img/img_echmiadzin-holy-tour_1.jpg",
    title: {
      hy: "Սրբազան Էջմիածին և Զվարթնոց",
      ru: "Священный Эчмиадзин и Звартноц",
      en: "Sacred Echmiadzin & Zvartnots"
    },
    description: {
      hy: "Ճանապարհորդություն դեպի հայ քրիստոնեական մշակույթի սիրտը: ՅՈՒՆԵՍԿՕ-ի համաշխարհային ժառանգության հնագույն տաճարներ:",
      ru: "Путешествие в духовное сердце Армении. Шедевры раннесредневековой архитектуры VII века, охраняемые ЮНЕСКО.",
      en: "A spiritual journey to the heart of Armenian faith. Masterpieces of 7th-century architecture protected by UNESCO."
    },
    stops: [
      {
        title: { hy: "Զվարթնոց Տաճար", ru: "Храм Звартноц", en: "Zvartnots Cathedral" },
        desc: {
          hy: "VII դարի հզոր և ունիկալ ճարտարապետական հուշարձան, «Զվարթունների տաճար»:",
          ru: "Уникальный памятник раннесредневековой архитектуры VII века, величественный Храм Бдящих Сил.",
          en: "A unique monument of 7th-century early medieval architecture, the majestic Cathedral of Vigilant Forces."
        },
        photo: "/img/img_echmiadzin-holy-tour_1.jpg"
      },
      {
        title: { hy: "Սուրբ Հռիփսիմե", ru: "Церковь Святой Рипсиме", en: "St. Hripsime Church" },
        desc: {
          hy: "Հայկական դասական ճարտարապետության կատարյալ նմուշներից մեկը՝ կառուցված 618 թվականին:",
          ru: "Один из совершенных образцов армянской крестово-купольной архитектуры VII века, выдержавший века.",
          en: "One of the most flawless examples of Armenian cross-domed architecture built in 618 AD, standing strong for centuries."
        },
        photo: "/img/img_echmiadzin-holy-tour_2.jpg"
      },
      {
        title: { hy: "Սուրբ Գայանե", ru: "Церковь Святой Гаяне", en: "St. Gayane Church" },
        desc: {
          hy: "VII դարի հնամենի և խորհրդավոր տաճար, որն աչքի է ընկնում իր ներդաշնակ համաչափություններով:",
          ru: "Древний и гармоничный храм VII века, возведенный над усыпальницей святой мученицы Гаяне.",
          en: "An ancient, harmonious 7th-century church erected over the burial site of the holy martyr St. Gayane."
        },
        photo: "/img/img_echmiadzin-holy-tour_3.jpg"
      },
      {
        title: { hy: "Մայր Տաճար Էջմիածին", ru: "Эчмиадзинский кафедральный собор", en: "Echmiadzin Cathedral" },
        desc: {
          hy: "Աշխարհում առաջին պետական քրիստոնեական տաճարը, հայ առաքելական եկեղեցու կենտրոնը:",
          ru: "Первый в мире официальный государственный христианский собор, основанный в начале IV века.",
          en: "The first official state-built Christian cathedral in the world, founded in the early 4th century."
        },
        photo: "/img/img_echmiadzin-holy-tour_4.jpg"
      }
    ]
  },
  {
    id: "khor-virap-noravank-express",
    price: 50000,
    region: "Vayots Dzor",
    duration: 1,
    image: "/img/img_khor-virap-noravank-express_1.jpg",
    title: {
      hy: "Հարավային Էքսպրես. Խոր Վիրապ և Նորավանք",
      ru: "Южный Экспресс: Хор Вирап и Нораванк",
      en: "Southern Express: Khor Virap & Noravank"
    },
    description: {
      hy: "Կենտրոնացված տուր հարավային ուղղությամբ՝ պատմական վանքեր, հնագույն գինեգործության գաղտնիքներ և տեղական լավագույն գինիներ:",
      ru: "Насыщенный винно-исторический тур: великие святыни ущелий, тайны древней цивилизации и премиальная дегустация вин.",
      en: "A rich wine and history tour: legendary mountain shrines, secrets of ancient civilizations, and premium wine tasting."
    },
    stops: [
      {
        title: { hy: "Խոր Վիրապ", ru: "Монастырь Хор Вирап", en: "Khor Virap Monastery" },
        desc: {
          hy: "Արարատի հոյակապ տեսարանով հանրահայտ վանքը, որտեղ սկիզբ է առել Հայաստանի քրիստոնեությունը:",
          ru: "Один из самых известных монастырей Армении у подножия Арарата, место заточения Григория Просветителя.",
          en: "One of Armenia's most iconic landmarks, holding a dramatic history right in front of Mt. Ararat."
        },
        photo: "/img/img_khor-virap-noravank-express_1.jpg"
      },
      {
        title: { hy: "Արենիի Գինու Գործարան", ru: "Винный завод — Дегустация", en: "Areni Wine Factory & Tasting" },
        desc: {
          hy: "Ծանոթացում հայկական հնագույն գինեգործական ավանդույթներին և պրեմիում տեսականու համտես:",
          ru: "Интерактивная экскурсия по заводу с дегустацией редких выдержанных сортов вин и фруктовых наливок.",
          en: "An interactive factory tour combined with rich tastings of aged endemic wines and fruit nectars."
        },
        photo: "/img/img_khor-virap-jermuk_4.jpg"
      },
      {
        title: { hy: "Արենի-1 Քարանձավ", ru: "Пещера птиц (Арени-1)", en: "Birds' Cave (Areni-1)" },
        desc: {
          hy: "Քարանձավ, որտեղ հայտնաբերվել են ավելի քան 5500 տարվա պատմություն ունեցող գավաթներ և կոշիկ:",
          ru: "Уникальный археологический объект, скрывающий артефакты возрастом более 5 500 лет.",
          en: "A world-class archaeological complex hiding historical artifacts dating back over 5,500 years."
        },
        photo: "/img/img_khor-virap-jermuk_3.jpg"
      },
      {
        title: { hy: "Նորավանք", ru: "Монастырь Нораванк", en: "Noravank Monastery" },
        desc: {
          hy: "Ճարտարապետ Մոմիկի հանճարեղ ստեղծագործությունը՝ թաքնված կարմրավուն ժայռերի կիրճում:",
          ru: "Шедевр средневекового зодчества мастера Момика, окруженный пылающими охрой скалами ущелья.",
          en: "A high-medieval architectural masterpiece by master Momik, surrounded by blazing red rock walls."
        },
        photo: "/img/img_khor-virap-jermuk_2.jpg"
      }
    ]
  },
  {
    id: "garni-geghard-classic",
    price: 50000,
    region: "Kotayk",
    duration: 1,
    image: "/img/img_garni-geghard-classic_1.jpg",
           
    title: {
      hy: "Գառնի, Գեղարդ և Քարերի Սիմֆոնիա",
      ru: "Гарни, Гегард и Симфония Камней",
      en: "Garni, Geghard & Symphony of Stones"
    },
    description: {
      hy: "Հայաստանի դասական երթուղին. հեթանոսական տաճար, ժайռափոր վանք, հայտնի կիրճն ու հիասքանչ ջրամբարը:",
      ru: "Классический и самый контрастный маршрут: языческий храм, высеченный в скале монастырь и чудо природной геометрии.",
      en: "The classic must-see itinerary: a pagan temple, a cave-monastery, and a jaw-dropping geometric gorge."
    },
    stops: [
      {
        title: { hy: "Չարենցի Կամար", ru: "Арка Чаренца", en: "Charents Arch" },
        desc: {
          hy: "Հրաշալի դիտակետ, որտեղից բացվում է բանաստեղծական և անկրկնելի տեսարան դեպի Արարատ լեռը:",
          ru: "Знаменитая смотровая площадка, обрамляющая панорамный вид на заснеженную вершину горы Арарат.",
          en: "A beautiful stone monument designed perfectly to frame the breathtaking panorama of Mt. Ararat."
        },
        photo: "/img/img_garni-geghard-classic_1.jpg"
      },
      {
        title: { hy: "Գառնիի Տաճար", ru: "Языческий храм Гарни", en: "Garni Pagan Temple" },
        desc: {
          hy: "Հելլենիստական դարաշրջանի միակ պահպանված հեթանոսական տաճարը ողջ տարածաշրջանում (I դար):",
          ru: "Единственный сохранившийся языческий храм в регионе, величественный памятник эллинизма I века н.э.",
          en: "The only surviving Greco-Roman pagan temple in the post-Soviet space, dating back to the 1st century AD."
        },
        photo: "/img/img_garni-geghard-classic_2.jpg"
      },
      {
        title: { hy: "Քարերի Սիմֆոնիա", ru: "Симфония Камней", en: "Symphony of Stones" },
        desc: {
          hy: "Բազալտե հսկայական սյուներ Ազատ գետի կիրճում, որոնք հիշեցնում են երաժշտական երեհան:",
          ru: "Фантастические базальтовые скалы ущелья Гарни, напоминающие гигантский орган ручной работы.",
          en: "Breathtaking basalt organ-pipe structures filling the Garni gorge, shaped by natural volcanic forces."
        },
        photo: "/img/img_garni-geghard-classic_3.jpg"
      },
      {
        title: { hy: "Գեղարդավանք", ru: "Монастырь Гегард", en: "Geghard Cave Monastery" },
        desc: {
          hy: "IV դարի ժայռափոր առասպելական վանք, որտեղ դարեր շարունակ պահվել է Սուրբ Գեղարդը:",
          ru: "Потрясающий скальный монастырь IV века, занесенный в ЮНЕСКО. Часть храмов высечена прямо внутри утеса.",
          en: "An astonishing 4th-century cave monastery where churches are carved directly inside solid mountain rock."
        },
        photo: "/img/img_garni-geghard-classic_4.jpg"
      },
      {
        title: { hy: "Ազատի Ջրամբար", ru: "Азатское водохранилище", en: "Azat Reservoir" },
        desc: {
          hy: "Տպավորիչ ջրամբար՝ շրջապատված լուսնային լանդշաֆտ հիշեցնող սարերով:",
          ru: "Живописное водохранилище с бирюзовой водой, окруженное марсианскими каньонами и складчатыми горами.",
          en: "A scenic reservoir with turquoise waters surrounded by abstract, Martian-like clay canyons."
        },
        photo: "/img/img_garni-geghard-classic_5.jpg"
      },
      {
        title: { hy: "Խոր Վիրապ", ru: "Монастырь Хор Вирап", en: "Khor Virap Finish" },
        desc: {
          hy: "Տուրի եզրափակում Հայաստանի ամենահայտնի սրբավայրում՝ Արարատ լեռան հայացքի ներքո:",
          ru: "Финальная точка у подножия великой горы, закрепляющая яркие эмоции от поездки.",
          en: "The grand finale at the legendary base of Mt. Ararat, completing your historical loop."
        },
        photo: "/img/img_khor-virap-jermuk_1.jpg"
      }
    ]
  },

  {
    id: "aragats-amberd-adventure",
    price: 50000,
    region: "Aragatsotn",
    duration: 1,
    image: "/img/img_aragats-amberd-adventure_1.jpg",
    title: {
      hy: "Արագածի բարձունքներ. Ամբերդ և Քարի Լիճ",
      ru: "Высоты Арагаца: Амберд и Озеро Кари",
      en: "Heights of Aragats: Amberd & Lake Kari"
    },
    description: {
      hy: "Բարձրլեռնային էքսկուրսիա դեպի Հայաստանի ամենաբարձր գագաթի լանջերը՝ միջնադարյան բերդեր և տառերի պուրակ:",
      ru: "Высокогорное приключение к склонам самой высокой горы Армении, средневековым замкам и ледниковым озерам.",
      en: "An alpine adventure to the slopes of Armenia's highest mountain, medieval cloud fortresses, and glacial lakes."
    },
    stops: [
      {
        title: { hy: "Հովհաննավանք", ru: "Монастырь Ованаванк", en: "Ohanavank Monastery" },
        desc: {
          hy: "XIII դարի վեհաշուք վանք Քասախի հսկայական և խորը կիրճի եզրին:",
          ru: "Величественный средневековый монастырский комплекс XIII века, эффектно парящий над глубоким каньоном реки Касах.",
          en: "A majestic 13th-century monastery complex dramatically perched on the edge of the deep Kasakh river gorge."
        },
        photo: "/img/img_aragats-amberd-adventure_1.jpg"
      },
      {
        title: { hy: "Սաղմոսավանք", ru: "Монастырь Сагмосаванк", en: "Saghmosavank Monastery" },
        desc: {
          hy: "«Սաղմոսների վանք»՝ հայտնի իր յուրահատուկ տեսարանով, հնամենի ձեռագրերով և հոգևոր ուժով:",
          ru: "Знаменитый «Монастырь псалмов» XIII века, известный своей невероятной акустикой и панорамами.",
          en: "The beautiful 13th-century 'Monastery of Psalms', famous for its breathtaking canyon views and spirituality."
        },
        photo: "/img/img_aragats-amberd-adventure_2.jpg"
      },
      {
        title: { hy: "Հայոց Տառերի Պուրակ", ru: "Памятник армянскому алфавиту", en: "Armenian Alphabet Monument" },
        desc: {
          hy: "Տուֆից կերտված հսկայական տառեր Արագածի փեշերին՝ նվիրված հայոց գրերի ստեղծմանը:",
          ru: "Уникальный мемориальный комплекс из гигантских букв, высеченных из разноцветного туфа прямо под открытым небом.",
          en: "A unique open-air monument featuring giant stone-carved letters celebrating the native Armenian script."
        },
        photo: "/img/img_aragats-amberd-adventure_3.jpg"
      },
      {
        title: { hy: "Ամբերդ Ամրոց", ru: "Средневековая крепость Амберд", en: "Amberd Medieval Fortress" },
        desc: {
          hy: "VII դարի անառիկ ամրոց-քաղաք ամպերի մեջ՝ ծովի մակարդակից 2300 մետր բարձրության վրա:",
          ru: "Средневековый замок-крепость VII века, расположенный на высоте 2300 метров на пересечении горных рек.",
          en: "A 7th-century cloud-kissed castle-fortress standing at 2,300 meters above sea level between two deep alpine rivers."
        },
        photo: "/img/img_aragats-amberd-adventure_4.jpg"
      },
      {
        title: { hy: "Քարի Լիճ", ru: "Высокогорное озеро Кари", en: "Glacial Lake Kari" },
        desc: {
          hy: "Բյուրեղյա մաքրության հայելային լիճ Արագած լեռան սառնամանիքային բարձունքներում (3200մ):",
          ru: "Фантастическое ледниковое озеро на высоте 3200 метров у подножия заснеженных пиков Арагаца.",
          en: "An otherworldly glacial lake sitting at an altitude of 3,200 meters near the jagged stone peaks of Mt. Aragats."
        },
        photo: "/img/img_aragats-amberd-adventure_5.jpg"
      }
    ]
  },

  {
    id: "tatev-wings-two-days",
    price: 120000,
    region: "Syunik",
    duration: 2,
    image: "/img/img_tatev-wings-two-days_1.jpg",
    title: {
      hy: "Հարավային Հրաշքներ. Տաթև և Սյունիք (2 օր)",
      ru: "Чудеса Юга: Крылья Татева и Сюник (2 дня)",
      en: "Wonders of the South: Tatev & Syunik (2 Days)"
    },
    description: {
      hy: "Երկօրյա բացառիկ ճանապարհորդություն դեպի Սյունիքի սիրտը: Քարանձավային քաղաքներ, աշխարհի ամենաերկար ճոպանուղին և հնագույն Մեգալիթներ:",
      ru: "Двухдневное премиальное путешествие к сердцу Сюника. Пещерные города, самая длинная канатная дорога в мире и мегалиты Караунджа.",
      en: "An exclusive two-day journey to the heart of Syunik. Cave cities, the world's longest cable car, and ancient megaliths of Karahunj."
    },
    stops: [
      {
        title: { hy: "Խնձորեսկ", ru: "Пещерный город Хндзореск", en: "Khndzoresk Cave Town" },
        desc: {
          hy: "Հնագույն քարանձավային քաղաք և հանրահայտ ճոճվող կամուրջը խորը կիրճի վրայով:",
          ru: "Древний пещерный город и знаменитый подвесной («качающийся») мост над глубоким зеленым ущельем.",
          en: "Ancient cave city and the famous swinging suspension bridge hanging over a dramatic deep gorge."
        },
        photo: "/img/img_tatev-wings-two-days_1.jpg"
      },
      {
        title: { hy: "Տաթևի Թևեր", ru: "Канатная дорога «Крылья Татева»", en: "Wings of Tatev Aerial Tramway" },
        desc: {
          hy: "Աշխարհի ամենաերկար հետադարձելի ճոպանուղին, թռիչք Որոտանի կիրճի վրայով:",
          ru: "Самая длинная в мире реверсивная канатная дорога, дарящая полет птицы над Воротанским ущельем.",
          en: "The world's longest reversible aerial tramway, offering a bird's-eye flight over the Vorotan Gorge."
        },
        photo: "/img/img_tatev-wings-two-days_2.jpg"
      },
      {
        title: { hy: "Տաթևի Վանք", ru: "Монастырь Татев", en: "Tatev Monastery" },
        desc: {
          hy: "IX դարի հզոր և վեհաշուք վանական համալիր՝ կանգնած ժայռի կատարին:",
          ru: "Величественный средневековый монастырский комплекс IX века, неприступная твердыня над глубоким обрывом.",
          en: "A majestic 9th-century medieval monastery complex, historically perched on the edge of a massive cliff."
        },
        photo: "/img/img_tatev-wings-two-days_3.jpg"
      },
      {
        title: { hy: "Սատանի Կամուրջ", ru: "Чёртов мост", en: "Devil's Bridge" },
        desc: {
          hy: "Բնական յուրօրինակ կամուրջ՝ հարուստ թերմալ տաք աղբյուրներով և քարանձավներով:",
          ru: "Уникальный природный мост, созданный из травертина, окруженный целебными минеральными источниками.",
          en: "A stunning natural travertine bridge surrounded by warm mineral springs and stalactite caves."
        },
        photo: "/img/img_tatev-wings-two-days_4.jpg"
      },
      {
        title: { hy: "Քարահունջ (Զորաց Քարեր)", ru: "Караундж (Зорац Карер)", en: "Karahunj (Zorats Karer)" },
        desc: {
          hy: "Աշխարհի ամենահին մեգալիթյան հուշարձաններից մեկը, հնագույն աստղադիտարան:",
          ru: "Один из древнейших мегалитических комплексов в мире — «армянский Стоунхендж», бывший обсерваторией.",
          en: "One of the world's oldest megalithic monuments—often called 'Armenian Stonehenge'—an ancient observatory."
        },
        photo: "/img/img_tatev-wings-two-days_5.jpg"
      },
      {
        title: { hy: "Շաքիի Ջրվեժ", ru: "Водопад Шаки", en: "Shaki Waterfall" },
        desc: {
          hy: "Հայաստանի ամենագեղեցիկ և հզոր ջրվեժներից մեկը՝ թաքնված Սյունիքի լեռներում:",
          ru: "Один из самых живописных и мощных водопадов Армении, ниспадающий каскадами из базальтового ущелья.",
          en: "One of Armenia's most picturesque and powerful waterfalls, cascading down a beautiful basalt gorge."
        },
        photo: "/img/img_tatev-wings-two-days_6.jpg"
      }
    ]
  },
  {
    id: "gyumri-cultural-capital",
    price: 50000,
    region: "Shirak",
    duration: 1,
    image: "/img/img_gyumri-cultural-capital_1.jpg",
    title: {
      hy: "Գյումրի. Մշակութային Մայրաքաղաք",
      ru: "Гюмри — Культурная Столица",
      en: "Gyumri — The Cultural Capital"
    },
    description: {
      hy: "Բացահայտեք Գյումրիի յուրահատուկ կոլորիտը, սև և կարմիր տուֆից կառուցված հին փողոցներն ու հարուստ պատմությունը:",
      ru: "Погрузитесь в атмосферу самого колоритного города Армении: старинные кварталы из черного туфа, юмор и традиции.",
      en: "Immerse yourself in Armenia's most colorful city: historic quarters of black and red tuff, authentic art, and warm hospitality."
    },
    stops: [
      {
        title: { hy: "Ապարանի Ֆուդկորտ", ru: "Фудкорт Апарана", en: "Aparan Foodcourt Stop" },
        desc: {
          hy: "Համեղ կանգառ ճանապարհին՝ ավանդական հայկական խոհանոցի և թարմ թխված թոնրի լավաշի համտես:",
          ru: "Отличное место для отдыха в дороге: пробуем знаменитый апаранский лаваш и аутентичные кавказские блюда.",
          en: "A perfect lifestyle rest stop to enjoy freshly baked local bread and authentic Armenian culinary delights."
        },
        photo: "/img/img_gyumri-cultural-capital_2.jpg"
      },
      {
        title: { hy: "Հառիճավանք", ru: "Монастырь Аричаванк", en: "Harichavank Monastery" },
        desc: {
          hy: "VII-XIII դարերի վանական հզոր համալիր, միջնադարյան հայ ճարտարապետության գլուխգործոց:",
          ru: "Один из крупнейших и старейших монастырских комплексов Армении, величественный памятник зодчества.",
          en: "One of the largest and oldest monastery complexes in Armenia, a pristine monument of medieval engineering."
        },
        photo: "/img/img_gyumri-cultural-capital_1.jpg"
      },
      {
        title: { hy: "Վարդանանց Հրապարակ", ru: "Площадь Вардананц", en: "Vardanants Square" },
        desc: {
          hy: "Գյումրիի սիրտն ու գլխավոր հրապարակը՝ զարդարված հոյակապ շատրվաններով և արձանախմբով:",
          ru: "Главная историческая площадь города Гюмри с величественными фонтанами и панорамным обзором.",
          en: "The grand central square of Gyumri, flanked by historical buildings and beautiful monumental fountains."
        },
        photo: "/img/img_gyumri-cultural-capital_3.jpg"
      },
      {
        title: { hy: "Սուրբ Ամենափրկիչ Եկեղեցի", ru: "Церковь Святого Спасителя", en: "Holy Saviour Church" },
        desc: {
          hy: "Գյումրիի գլխավոր խորհրդանիշներից մեկը, որը վեր է հառնել երկրաշարժից հետո:",
          ru: "Монументальный храм из черного туфа, главный символ стойкости города Гюмри.",
          en: "The iconic black tuff church, standing proud as a supreme symbol of Gyumri’s spiritual resilience."
        },
        photo: "/img/img_gyumri-cultural-capital_4.jpg"
      },
      {
        title: { hy: "Սև Բերդ", ru: "Чёрная крепость", en: "The Black Fortress" },
        desc: {
          hy: "XIX դարի ռուսական կայսերական հզոր կլոր ամրոց՝ կառուցված քաղաքի բարձունքին:",
          ru: "Уникальное фортификационное сооружение XIX века, круглая цитадель с потрясающей акустикой.",
          en: "A massive 19th-century Imperial Russian military fortification, offering majestic circular acoustics."
        },
        photo: "/img/img_gyumri-cultural-capital_5.jpg"
      },
      {
        title: { hy: "Աբովյան Փողոց և Կումայրի", ru: "Улица Абовяна и Кумайри", en: "Abovyan Street & Kumayri District" },
        desc: {
          hy: "Պատմական թաղամաս XIX դարի ճարտարապետությամբ, ֆիլմերի նկարահանման սիրված վայրեր:",
          ru: "Старый город Александрополь с аутентичными коваными балконами и фасадами из темного резного туфа.",
          en: "The ancient urban core of Alexandropol, showcasing rich 19th-century architecture and carved tuff facades."
        },
        photo: "/img/img_gyumri-cultural-capital_6.jpg"
      }
    ]
  },
  {
    id: "tsaghkadzor-sevan-adventure",
    price: 40000,
    region: "Kotayk",
    duration: 1,
    image: "/img/img_tsaghkadzor-sevan-adventure_1.jpg",
    title: {
      hy: "Ծաղկաձորի Բարձունքներ և Սևանա Լիճ",
      ru: "Драйв в Цахкадзоре и Жемчужина Севан",
      en: "Tsaghkadzor Heights & Lake Sevan"
    },
    description: {
      hy: "Ակտիվ հանգստի և պատմության կատարյալ համադրություն. լեռնային ճոպանուղի, զիփլայն և բարձրլեռնային Սևանը:",
      ru: "Идеальный микс адреналина и природы: канатная дорога в горах, полеты на зиплайне и величие высокогорного Севана.",
      en: "The ultimate blend of high-altitude adventure and history: mountain chairlifts, ziplining, and the blue waters of Sevan."
    },
    stops: [
      {
        title: { hy: "Ծաղկաձոր Առողջարան", ru: "Курорт Цахкадзор", en: "Tsaghkadzor Alpine Resort" },
        desc: {
          hy: "Հայաստանի ամենահայտնի լեռնադահուկային և անտառային առողջարանային քաղաքը:",
          ru: "Знаменитый горный оазис, окруженный густыми изумрудными лесами и заснеженными хребтами.",
          en: "Armenia's premier alpine town, surrounded by lush velvet forests and panoramic ski peaks."
        },
        photo: "/img/img_tsaghkadzor-sevan-adventure_1.jpg"
      },
      {
        title: { hy: "Ծաղկաձորի Ճոպանուղի", ru: "Горная канатная дорога", en: "Tsaghkadzor Ropeway Ride" },
        desc: {
          hy: "Թռիչք դեպի Թեժենիս լեռան լանջեր, որտեղից բացվում է հիասքանչ տեսարան դեպի ողջ հովիտը:",
          ru: "Подъем на современных открытых подъемниках на гору Тегенис с панорамами на кавказские хребты.",
          en: "An alpine ride up Mount Teghenis, revealing endless scenic horizons across the Armenian highlands."
        },
        photo: "/img/img_tsaghkadzor-sevan-adventure_2.jpg"
      },
      {
        title: { hy: "Կեչառիս Վանական Համալիր", ru: "Монастырь Кечарис", en: "Kecharis Monastery Complex" },
        desc: {
          hy: "XI-XIII դարերի թագավորական վանական համալիր՝ Ծաղկաձորի սրտում:",
          ru: "Средневековый монастырский комплекс XI–XIII веков, духовное сердце древних армянских князей.",
          en: "A royal 11th to 13th-century medieval monastery complex settled peacefully within the resort's heart."
        },
        photo: "/img/img_tsaghkadzor-sevan-adventure_3.jpg"
      },
      {
        title: { hy: "Զիփլայն Ադրենալին", ru: "Полет на Зиплайне", en: "Zipline Extreme Experience" },
        desc: {
          hy: "Էքստրեմալ թռիչք անտառների և կիրճերի վրայով՝ բարձրությունից վայելելով բնության գեղեցկությունը:",
          ru: "Заряд адреналина во время скоростного полета над горными ущельями и верхушками вековых сосен.",
          en: "A high-speed adrenaline flight on a zipline wire stretching over deep mountain valleys and pine trees."
        },
        photo: "/img/img_tsaghkadzor-sevan-adventure_4.jpg"
      },
      {
        title: { hy: "Սևանա Լիճ", ru: "Высокогорное озеро Севан", en: "Alpine Lake Sevan" },
        desc: {
          hy: "Կովկասի խոշորագույն բարձրլեռնային լիճը, որին անվանում են Հայաստանի կապույտ մարգարիտ:",
          ru: "Гигантское лазурное зеркало Кавказа, расположенное на высоте почти 2000 метров над уровнем моря.",
          en: "The crown jewel of Armenia—a massive turquoise alpine lake shimmering at 1,900 meters high."
        },
        photo: "/img/img_tsaghkadzor-sevan-adventure_5.jpg"
      },
      {
        title: { hy: "Սևանավանք", ru: "Монастырь Севанаվանք", en: "Sevanavank Monastery" },
        desc: {
          hy: "IX դարի հնամենի վանք թերակղզու բարձունքին, որտեղից բացվում է լճի անկրկնելի տեսարանը:",
          ru: "Древний аскетичный монастырь IX века из черного камня, возвышающийся на панорамном полуострове.",
          en: "An ancient 9th-century monastery built of dark volcanic stone, framing the single best panorama of the lake."
        },
        photo: "/img/img_tsaghkadzor-sevan-adventure_6.jpg"
      }
    ]
  },
  {
    id: "sevan-dilijan-tavush",
    price: 70000,
    region: "Tavush",
    duration: 1,
    image: "/img/img_sevan-dilijan-tavush_1.jpg",
    title: {
      hy: "Կապույտ Սևան, Դիլիջան և Տավուշի Գաղտնիքները",
      ru: "Лазурный Севан, Дилижан и Легенды Тавуша",
      en: "Azure Sevan, Dilijan & Tavush Hidden Gems"
    },
    description: {
      hy: "Հրաշալի ճանապարհորդություն դեպի Հայաստանի հյուսիս՝ Սևանի ափերից մինչև Դիլիջանի խիտ անտառներ ու գինու մառաններ:",
      ru: "Путешествие в «Армянскую Швейцарию»: заповедные реликтовые леса, средневековая интеллигенция и дегустация вин Иջևանա.",
      en: "A journey to 'Armenian Switzerland': emerald national reserves, traditional woodcraft, and rich boutique wine cellars."
    },
    stops: [
      {
        title: { hy: "Սևանա Լիճ և Սևանավանք", ru: "Озеро Севан и Севанаванк", en: "Lake Sevan & Sevanavank" },
        desc: {
          hy: "Հիասքանչ բարձրլեռնային լիճը և IX դարի պատմական վանքը կապույտ հորիզոնի ֆոնին:",
          ru: "Знакомство с высокогорной жемчужиной и подъем к черным куполам древнего островного монастыря.",
          en: "Introduction to the giant alpine jewel and a walk to the volcanic stone domes of the historic monastery."
        },
        photo: "/img/img_sevan-dilijan-tavush_1.jpg"
      },
      {
        title: { hy: "Հին Դիլիջան", ru: "Исторический квартал Старый Дилижан", en: "Old Dilijan Sharambeyan Street" },
        desc: {
          hy: "XIX դարի ավանդական փայտե պատշգամբներով փողոց, արհեստավորների տներ և հարմարավետ մթնոլորտ:",
          ru: "Исторический квартал с аутентичными резными деревянными балконами и ремесленными мастерскими.",
          en: "A romantic heritage street boasting 19th-century carved wood balconies and active art workshops."
        },
        photo: "/img/img_sevan-dilijan-tavush_2.jpg"
      },
      {
        title: { hy: "«Միմինո» Հուշարձան", ru: "Памятник героям фильма «Мимино»", en: "Mimino Movie Monument" },
        desc: {
          hy: "Հանրահայտ և սիրված ֆիլմի հերոսների հուշարձանը՝ նվիրված անկեղծ ընկերությանը:",
          ru: "Легендарный памятник трем культовым персонажам советского кино, символизирующий дружбу народов.",
          en: "The legendary bronze monument dedicated to the beloved characters of the classic Soviet movie Mimino."
        },
        photo: "/img/img_sevan-dilijan-tavush_3.jpg"
      },
      {
        title: { hy: "Գոշավանք", ru: "Մոնաստիր Գոշավանք", en: "Goshavank Monastery" },
        desc: {
          hy: "XII-XIII դարերի խոշոր հոգևոր և գիտական կենտրոն, որը հիմնադրել է Մխիթար Գոշը:",
          ru: "Великолепный культурный комплекс XII-XIII веков, родина первой армянской судебной конституции.",
          en: "A beautiful 12th-century medieval academy founded by modern code-of-law thinker Mkhitar Gosh."
        },
        photo: "/img/img_sevan-dilijan-tavush_4.jpg"
      },
      {
        title: { hy: "Իջևանի Գինու Գործարան", ru: "Иджеванский винный завод", en: "Ijevan Wine & Brandy Factory" },
        desc: {
          hy: "Տավուշի լավագույն գինիների, մրգային օղիների և հնեցված կոնյակների դեգուստացիա հին մառաններում:",
          ru: "Экскурсия по историческим погребам с дегустацией изысканных виноградных и эксклюзивных гранатовых вин.",
          en: "A VIP walk into deep historical cellars featuring premium tastings of award-winning pomegranate wines."
        },
        photo: "/img/img_sevan-dilijan-tavush_5.jpg"
      },
      {
        title: { hy: "Մակարավանք", ru: "Մոնաստիր Մակարավանք", en: "Makaravank Monastery Hidden Gem" },
        desc: {
          hy: "X-XIII դարերի գաղտնի վանական համալիր՝ թաքնված Տավուշի անտառապատ լեռների խորքում:",
          ru: "Уединенный шедевр резьбы по камню, спрятанный в густых девственных лесах Тавушского региона.",
          en: "An isolated 10th-century stone carving masterpiece hidden within the pristine deep forests of Tavush."
        },
        photo: "/img/img_sevan-dilijan-tavush_6.jpg"
      }
    ]
  },
  {
    id: "ashtarak-traditions-voskevaz",
    price: 45000,
    region: "Aragatsotn",
    duration: 1,
    image: "/img/img_ashtarak-traditions-voskevaz_1.jpg",
    title: {
      hy: "Հին Աշտարակ և Ոսկեվազ Գինու Դղյակ",
      ru: "Древний Аштарак и Винный Замок Воскеваз",
      en: "Ancient Ashtarak & Voskevaz Wine Castle"
    },
    description: {
      hy: "Ճանապարհորդություն դեպի Հայաստանի ամենահին քաղաքներից մեկը. վաղ քրիստոնեական եկեղեցիներ և հեքիաթային գինու դղյակ:",
      ru: "Винно-историческое погружение: три знаковых средневековых храма Аштарака и премиальный замок виноделия.",
      en: "A rich boutique tour: three legendary early-Christian shrines of Ashtarak mixed with a fairy-tale wine castle."
    },
    stops: [
      {
        title: { hy: "Ծիրանավոր Եկեղեցի", ru: "Церковь Циранавор", en: "Tsiranavor Ancient Church" },
        desc: {
          hy: "V-VI դարերի Ծիրանավոր բազիլիկ եկեղեցին, Աշտարակի հնագույն պաշտպանական սրբավայրը:",
          ru: "Монументальная базилика V–VI веков, один из древнейших фортифицированных раннехристианских храмов.",
          en: "A monumental 5th-century early Christian basilica, standing as one of the oldest stone-built fortifications."
        },
        photo: "/img/img_ashtarak-traditions-voskevaz_1.jpg"
      },
      {
        title: { hy: "Սպիտակավոր Եկեղեցի", ru: "Церковь Спитакавор", en: "Spitakavor Shret Church" },
        desc: {
          hy: "XIII դարի նրբագեղ եկեղեցի Քասախի կիրճի բարձունքին, որն աչքի է ընկնում իր լռությամբ:",
          ru: "Уютный средневековый храм XIII века, известный своей поэтичной уединенной атмосферой над обрывом ущелья.",
          en: "A charming 13th-century shrine perched beautifully above a gorge, famous for its serene spiritual silence."
        },
        photo: "/img/img_ashtarak-traditions-voskevaz_2.jpg"
      },
      {
        title: { hy: "Կարմրավոր Եկեղեցի", ru: "Церковь Кармравор", en: "Karmravor Red Roof Church" },
        desc: {
          hy: "VII դարի կատարյալ պահպանված եկեղեցի՝ իր նախնական կղմինդրե տանիքով և հնամենի խաչքարերով:",
          ru: "Уникальный храм VII века, полностью сохранивший свою первозданную черепичную кровлю со времен постройки.",
          en: "A perfectly preserved 7th-century architectural cross-dome jewel keeping its original clay-tiled roof intact."
        },
        photo: "/img/img_ashtarak-traditions-voskevaz_3.jpg"
      },
      {
        title: { hy: "Ոսկեվազ Գինու Գործարան", ru: "Винный завод «Воскеваз»", en: "Voskevaz Winery Castle" },
        desc: {
          hy: "Հեքիաթային միջնադարյան դղյակի ոճով կառուցված գործարան, որտեղ կարասներում հնեցվում են պրեմիում գինիները:",
          ru: "Потрясающий винный арт-замок, где аутентичные вина выдерживаются в глиняных амфорах-карасах.",
          en: "An artistic medieval-style winery castle aging premium single-estate wines in traditional clay karas amphoras."
        },
        photo: "/img/img_ashtarak-traditions-voskevaz_4.jpg"
      }
    ]
  },
  {
    id: "aragats-cloud-fortress",
    price: 50000,
    region: "Aragatsotn",
    duration: 1,
    image: "/img/img_aragats-cloud-fortress_1.jpg",
    title: {
      hy: "Արագածի Գաղտնիքները. Տեղեր, Ամբերդ և Քարի Լիճ",
      ru: "Тайны Арагаца: Монастырь Тегер, Амберд и Озеро Кари",
      en: "Aragats Alpine Secrets: Tegher, Amberd & Lake Kari"
    },
    description: {
      hy: "Բարձրլեռնային էքսկուրսիա դեպի Հայաստանի ամենաբարձր լեռան լանջերը՝ միջնադարյան անառիկ ամրոցներ և տիեզերական լճեր:",
      ru: "Высокогорный премиум-маршрут: монументальный монастырь на склонах Арагаца, замок в облаках и ледниковое озеро.",
      en: "A luxury high-altitude expedition: a medieval stone sanctuary, a sky fortress at 2300m, and an alpine glacial lake."
    },
    stops: [
      {
        title: { hy: "Տեղերի Վանք", ru: "Монастырь Тегер", en: "Tegher Monastery Sanctuary" },
        desc: {
          hy: "XIII դարի խիստ և զուսպ վանական համալիր՝ Արագածի լանջին, որտեղից բացվում է Արարատյան դաշտի տեսարանը:",
          ru: "Суровый и величественный монастырь XIII века на горном склоне с лучшими панорамами на Араратскую долину.",
          en: "A dark, powerful 13th-century mountain sanctuary offering majestic birds-eye views over the Ararat Valley."
        },
        photo: "/img/img_aragats-cloud-fortress_1.jpg"
      },
      {
        title: { hy: "Ամբերդ Ամրոց", ru: "Средневековая крепость Амберд", en: "Amberd Medieval Castle Fortress" },
        desc: {
          hy: "VII դարի իշխանական անառիկ ամրոց ծովի մակարդակից 2300 մետր բարձրության վրա:",
          ru: "Феодальный замок VII века, парящий среди облаков на стыке крутых скалистых каньонов горных рек.",
          en: "An invincible 7th-century princely citadel guarding the high ridges between sheer rocky canyons."
        },
        photo: "/img/img_aragats-amberd-adventure_4.jpg"
      },
      {
        title: { hy: "Քարի Լիճ", ru: "Высокогорное озеро Кари", en: "Glacial Lake Kari Expedition" },
        desc: {
          hy: "Սառցադաշտային անդորր 3200 մետր բարձրության վրա՝ Արագած լեռան հարավային գագաթի անմիջապես ներքո:",
          ru: "Кристально чистое космическое озеро на высоте 3200 метров у подножия вечных снегов Арагаца.",
          en: "A crystal-clear volcanic lake resting at an altitude of 3,200 meters directly under sub-alpine jagged peaks."
        },
        photo: "/img/img_aragats-amberd-adventure_5.jpg"
      }
    ]
  },
  {
    id: "sevan-gastronomy-jermuk",
    price: 80000,
    region: "Gegharkunik",
    duration: 1,
    image: "/img/img_tsaghkadzor-sevan-adventure_5.jpg",
    title: {
      hy: "Մետաքսի Ճանապարհ. Սևան, Գաստրո-Պոդիում և Ջերմուկ",
      ru: "Шёлковый Путь: Севан, Гастро-Сыроварня и Джермук",
      en: "The Silk Road: Sevan, Gourmet Cheese & Jermuk"
    },
    description: {
      hy: "Բացառիկ երթուղի Մետաքսի ճանապարհով. բարձրլեռնային լիճ, հայկական պրեմիում պանիրների համտես, միջնադարյան Քարավանատուն և Ջերմուկի ջրվեժները:",
      ru: "Эксклюзивный гастрономический и исторический гранд-тур через древний Селимский перевал к термальным водам.",
      en: "A premium gastro-historical expedition crossing the high Vardenyats pass down to boutique wineries and spas."
    },
    stops: [
      {
        title: { hy: "Սևանա Լիճ", ru: "Высокогорное озеро Севан", en: "Alpine Jewel Lake Sevan" },
        desc: {
          hy: "Հանգիստ և հիասքանչ տեսարաններ Կովկասի ամենամեծ բարձրլեռնային լճի ափին:",
          ru: "Панорамная остановка у безграничной лазурной глади великого кавказского озера.",
          en: "A scenic morning arrival by the sweeping turquoise shoreline of the high-altitude sea."
        },
        photo: "/img/img_tsaghkadzor-sevan-adventure_5.jpg"
      },
      {
        title: { hy: "Հայրավանք", ru: "Монастырь Айраванк", en: "Hayravank Monastery" },
        desc: {
          hy: "IX դարի ժայռոտ հրվանդանին կառուցված վանք, որտեղից լիճը բացվում է ողջ գեղեցկությամբ:",
          ru: "Редкой красоты уединенный монастырь IX века, стоящий прямо на отвесной скале у самой воды.",
          en: "A rugged 9th-century stone monastery dramatically framing the endless blue water horizons."
        },
        photo: "/img/img_sevan-gastronomy-jermuk_2.jpg"
      },
      {
        title: { hy: "Պրեմիում Սիրանոց", ru: "Крафтовая сыроварня", en: "Boutique Aged Cheese Cellar" },
        desc: {
          hy: "Գաստրոնոմիական էքսկուրսիա. գինու և կոնյակի մեջ հնեցված բացառիկ հայկական պանիրների համտես:",
          ru: "Эксклюзивная дегустация редких сортов крафтового сыра, выдержанных в алкоголе и глиняных горшках.",
          en: "A luxury tasting of organic artisan cheeses carefully aged in local wines, brandies, and underground pits."
        },
        photo: "/img/img_sevan-gastronomy-jermuk_3.jpg"
      },
      {
        title: { hy: "Վարդենյաց (Սելիմի) Լեռնանցք", ru: "Селимский перевал", en: "Vardenyats (Selim) Mountain Pass" },
        desc: {
          hy: "Հայաստանի ամենագեղեցիկ և բարձրադիր լեռնային ոլորանները, Մետաքսի մեծ ճանապարհի սիրտը:",
          ru: "Один из самых захватывающих и живописных альпийских перевалов с панорамными видами на 360 градусов.",
          en: "One of the country's most breath-taking mountain passes winding high along the ancient trading tracks."
        },
        photo: "/img/img_sevan-gastronomy-jermuk_4.jpg"
      },
      {
        title: { hy: "Օրբելյանների Քարավանատուն", ru: "Караван-сарай Орбелянов", en: "Orbelian's Silk Road Caravanserai" },
        desc: {
          hy: "XIV դարի հիանալի պահպանված օազիս, որտեղ գիշերում էին հին աշխարհի առևտրականների քարավանները:",
          ru: "Великолепно сохранившийся каменный постоялый двор 1332 года, принимавший купцов Великого шелкового пути.",
          en: "A perfectly preserved basalt stone inn built in 1332 to host trading caravans travelling from Europe to China."
        },
        photo: "/img/img_sevan-gastronomy-jermuk_5.jpg"
      },
      {
        title: { hy: "Ջերմուկ Առողջարան", ru: "Курортный город Джермук", en: "Jermuk Mineral Waters & Waterfall" },
        desc: {
          hy: "Հանքային բուժիչ ջրերի պատկերասրահ և հանրահայտ ջրվեժի վայելում:",
          ru: "Прогулка по питьевой галерее и отдых у знаменитого каскадного водопада «Волосы русалки».",
          en: "A relaxing stroll along the hot thermal springs gallery and the legendary cascading waterfalls."
        },
        photo: "/img/img_khor-virap-jermuk_5.jpg"
      },
      {
        title: { hy: "Արենիի Գինու Գործարան", ru: "Винный завод Арени", en: "Areni Vineyards & Winery Finale" },
        desc: {
          hy: "Տուրի ավարտը հանրահայտ Արենի գյուղում՝ հազարամյա ավանդույթներով գինիների համտեսով:",
          ru: "Финальный аккорд в легендарном селе Арени с дегустацией ярких выдержанных вин региона Вайоц Дзор.",
          en: "The grand finale tasting inside the historical cradle of winemaking in the Vayots Dzor province."
        },
        photo: "/img/img_khor-virap-jermuk_4.jpg"
      }
    ]
  },

  // //////////////////////////////////////////////////////////////
  // //////////////////////////////////////////////////////////////
  
  
{
    id: "haghpat-sanahin-akhtala",
    price: 80000,
    region: "Lori",
    duration: 1,
    image: "/img/img_haghpat-sanahin-akhtala_1.jpg", 
    title: {
      hy: "Հաղպատ, Սանահին և Ախթալա",
      ru: "Ахпат, Санаин и Ахтала",
      en: "Haghpat, Sanahin & Akhtala"
    },
    description: {
      hy: "Բացահայտեք Լոռվա հրաշքները՝ ՅՈՒՆԵՍԿՕ-ի համաշխարհային ժառանգության հռչակավոր վանքերն ու Ախթալայի միջնադարյան բերդ-վանքը:",
      ru: "Откройте для себя чудеса Лори: знаменитые монастыри из списка всемирного наследия ЮНЕСКО и средневековый монастырь-крепость Ахтала.",
      en: "Discover the wonders of Lori: the famous UNESCO World Heritage monasteries and the medieval fortress-monastery of Akhtala."
    },
    stops: [
      {
        title: { hy: "Հաղպատի վանք", ru: "Монастырь Ахпат", en: "Haghpat Monastery" },
        desc: {
          hy: "X դարի հայկական միջնադարյան ճարտարապետության ակնառու հուշարձան, որը ներառված է ՅՈՒՆԵՍԿՕ-ի ցանկում:",
          ru: "Выдающийся памятник армянской средневековой архитектуры X века, включенный в список ЮНЕСКО.",
          en: "An outstanding monument of 10th-century Armenian medieval architecture, listed as a UNESCO World Heritage site."
        },
        photo: "/img/img_haghpat-sanahin-akhtala_1.jpg"
      },
      {
        title: { hy: "Սանահինի վանք", ru: "Монастырь Санаин", en: "Sanahin Monastery" },
        desc: {
          hy: "X դարի եզակի վանական համալիր, որը հանդիսանում էր միջնադարյան Հայաստանի հոգևոր և կրթական կարևոր կենտրոններից մեկը:",
          ru: "Уникальный монастырский комплекс X века, бывший важным духовным и образовательным центром средневековой Армении.",
          en: "A unique 10th-century monastery complex that served as a major spiritual and educational hub in medieval Armenia."
        },
        photo: "/img/img_haghpat-sanahin-akhtala_2.jpg"
      },
      {
        title: { hy: "Ախթալայի վանք", ru: "Монастырь Ахтала", en: "Akhtala Monastery" },
        desc: {
          hy: "Միջնադարյան բերդ-վանք, որը հայտնի է իր հոյակապ և եզակի պահպանված որմնանկարներով:",
          ru: "Средневековый монастырь-крепость, знаменитый своими великолепными и уникально сохранившимися фресками.",
          en: "A medieval fortress-monastery, famous for its magnificent and uniquely preserved beautiful frescoes."
        },
        photo: "/img/img_haghpat-sanahin-akhtala_3.jpg"
      }
    ]
},






{
    id: "sevan-dilijan-haghartsin-parz",
    price: 50000,
    region: "Gegharkunik, Tavush",
    duration: 1,
    image: "/img/img_sevan-dilijan-haghartsin-parz_1.jpg", 
    title: {
      hy: "Սևան, Դիլիջան, Հաղարծին և Պարզ Լիճ",
      ru: "Севан, Дилижан, Агарцин и Озеро Парз",
      en: "Sevan, Dilijan, Haghartsin & Parz Lake"
    },
    description: {
      hy: "Բացահայտեք Սևանա լճի կապույտ գեղեցկությունը և Դիլիջանի անտառային հրաշքները՝ պատմական վանքերով ու գեղատեսիլ լճերով հանդերձ:",
      ru: "Откройте для себя голубую красу озера Севан и лесные чудеса Дилижана с историческими монастырями и живописными озерами.",
      en: "Discover the blue beauty of Lake Sevan and the forest wonders of Dilijan, complete with historic monasteries and picturesque lakes."
    },
    stops: [
      {
        title: { hy: "Սևանա լիճ", ru: "Озеро Севан", en: "Lake Sevan" },
        desc: {
          hy: "Կովկասի խոշորագույն բարձրադիր լիճը, որը հայտնի է իր զարմանահրաշ կապուտակ ջրերով և լեռնային համայնապատկերով:",
          ru: "Крупнейшее высокогорное озеро Кавказа, известное своими потрясающими лазурными водами и горными пейзажами.",
          en: "The largest alpine lake in the Caucasus, famous for its stunning azure waters and mountain landscapes."
        },
        photo: "/img/img_sevan-dilijan-haghartsin-parz_1.jpg"
      },
      {
        title: { hy: "Սևանավանք", ru: "Монастырь Севанаванк", en: "Sevanavank Monastery" },
        desc: {
          hy: "IX դարի հնագույն վանական համալիր Սևանի թերակղզում, որտեղից բացվում է հիասքանչ տեսարան դեպի լիճը:",
          ru: "Древний монастырь IX века на Севанском полуострове, откуда открывается великолепный вид на озеро.",
          en: "An ancient 9th-century monastery on the Sevan peninsula, offering breathtaking views of the lake."
        },
        photo: "/img/img_sevan-dilijan-haghartsin-parz_2.jpg"
      },
      {
        title: { hy: "Հին Դիլիջան", ru: "Старый Дилижан", en: "Old Dilijan" },
        desc: {
          hy: "Հարմարավետ պատմական թաղամաս՝ ավանդական փայտյա պատշգամբներով, արհեստանոցներով և 19-րդ դարի մթնոլորտով:",
          ru: "Уютный исторический квартал с традиционными деревянными балконами, мастерскими и атмосферой XIX века.",
          en: "A cozy historic quarter with traditional wooden balconies, craft workshops, and a 19th-century atmosphere."
        },
        photo: "/img/img_sevan-dilijan-haghartsin-parz_3.jpg"
      },
      {
        title: { hy: "«Միմինո» ֆիլմի հերոսների հուշարձան", ru: "Памятник героям фильма «Мимино»", en: "Mimino Movie Heroes Monument" },
        desc: {
          hy: "Հայտնի և սիրված հուշարձան Դիլիջանում՝ նվիրված անկեղծ ընկերությանը և կինոյի լեգենդներին:",
          ru: "Знаменитый и любимый памятник в Дилижане, посвященный искренней дружбе и легендам кино.",
          en: "A famous and beloved monument in Dilijan, dedicated to sincere friendship and cinema legends."
        },
        photo: "/img/img_sevan-dilijan-haghartsin-parz_4.jpg"
      },
      {
        title: { hy: "Հաղարծնի վանք", ru: "Монастырь Агарцин", en: "Haghartsin Monastery" },
        desc: {
          hy: "Դիլիջանի խիտ անտառների մեջ թաքնված հեքիաթային միջնադարյան վանական համալիր:",
          ru: "Сказочный средневековый монастырский комплекс, спрятанный в густых лесах Дилижана.",
          en: "A fairytale medieval monastery complex hidden deep within the lush forests of Dilijan."
        },
        photo: "/img/img_sevan-dilijan-haghartsin-parz_5.jpg"
      },
      {
        title: { hy: "Պարզ լիճ", ru: "Озеро Парз", en: "Parz Lake" },
        desc: {
          hy: "Գեղատեսիլ անտառային լիճ Դիլիջանի ազգային պարկում՝ կատարյալ հանգստի և բնության գրկում զբոսնելու համար:",
          ru: "Живописное лесное озеро в Дилижанском национальном парке, идеальное для отдыха и прогулок на природе.",
          en: "A picturesque forest lake in Dilijan National Park, perfect for relaxation and walking in nature."
        },
        photo: "/img/img_sevan-dilijan-haghartsin-parz_6.jpg"
      }
    ]
},



{
    id: "khor-virap-noravank-shaki-tatev",
    price: 100000,
    region: "Ararat, Vayots Dzor, Syunik",
    duration: 1,
    image: "/img/img_khor-virap-noravank-shaki-tatev_1.jpg", 
    title: {
      hy: "Խոր Վիրապ, Նորավանք, Շաքի և Տաթև",
      ru: "Хор Вирап, Нораванк, Шаки и Татев",
      en: "Khor Virap, Noravank, Shaki & Tatev"
    },
    description: {
      hy: "Բացահայտեք Հայաստանի հարավի հրաշքները՝ Արարատի տեսարանից և Արենիի գինիներից մինչև Շաքիի ջրվեժն ու մեծասքանչ Տաթևի վանքը:",
      ru: "Откройте для себя чудеса юга Армении: от видов на Арарат и вин Арени до водопада Шаки и величественного монастыря Татев.",
      en: "Discover the wonders of southern Armenia: from views of Ararat and Areni wines to the Shaki waterfall and the majestic Tatev Monastery."
    },
    stops: [
      {
        title: { hy: "Խոր Վիրապ", ru: "Монастырь Хор Вирап", en: "Khor Virap Monastery" },
        desc: {
          hy: "Հռչակավոր վանք բիբլիական Արարատ լեռան փեշերին՝ Հայաստանում քրիստոնեության օրրանը:",
          ru: "Знаменитый монастырь у самого подножия горы Арарат, колыбель христианства в Армении.",
          en: "The famous monastery right at the foot of Mount Ararat, the cradle of Christianity in Armenia."
        },
        photo: "/img/img_khor-virap-noravank-shaki-tatev_1.jpg"
      },
      {
        title: { hy: "Նորավանք", ru: "Монастырь Нораванк", en: "Noravank Monastery" },
        desc: {
          hy: "XIII դարի ամենագեղեցիկ վանական համալիրներից մեկը՝ շրջապատված հրաշագեղ կարմիր ժայռերով:",
          ru: "Один из самых красивых монастырских комплексов XIII века, окруженный величественными красными скалами.",
          en: "One of the most beautiful 13th-century monastery complexes, surrounded by magnificent red cliffs."
        },
        photo: "/img/img_khor-virap-noravank-shaki-tatev_2.jpg"
      },
      {
        title: { hy: "Արենիի գինու գործարան", ru: "Винный завод Арени", en: "Areni Winery" },
        desc: {
          hy: "Ավանդական գինեգործարան, որտեղ սպասվում է տեղական հայկական գինիների հաճելի դեգուստացիա:",
          ru: "Традиционная винодельня, где вас ждет дегустация изысканных местных армянских вин.",
          en: "A traditional winery where you can enjoy a wine tasting of local Armenian wines."
        },
        photo: "/img/img_khor-virap-noravank-shaki-tatev_3.jpg"
      },
      {
        title: { hy: "Արենի-1 («Թռչունների քարանձավ»)", ru: "Пещера Арени-1 «Пещера птиц»", en: "Areni-1 Cave (Birds Cave)" },
        desc: {
          hy: "Հնագույն քարանձավ, որտեղ հայտնաբերվել է աշխարհի ամենահին կաշվե կոշիկն ու գինեգործարանը:",
          ru: "Древняя пещера, где была обнаружена старейшая в мире кожаная обувь и древнейшая винодельня.",
          en: "An ancient cave where the world's oldest leather shoe and earliest winery were discovered."
        },
        photo: "/img/img_khor-virap-noravank-shaki-tatev_4.jpg"
      },
      {
        title: { hy: "Շաքիի ջրվեժ", ru: "Водопад Шаки", en: "Shaki Waterfall" },
        desc: {
          hy: "Հայաստանի ամենագեղեցիկ և հզոր ջրվեժներից մեկը, որը թաքնված է Սիսիանի կիրճում:",
          ru: "Один из самых красивых и мощных водопадов Армении, скрытый в ущелье Сисиана.",
          en: "One of the most beautiful and powerful waterfalls in Armenia, hidden in the Sisian gorge."
        },
        photo: "/img/img_khor-virap-noravank-shaki-tatev_5.jpg"
      },
      {
        title: { hy: "«Տաթևի թևեր» կանոնուղի", ru: "Канатная дорога «Крылья Татева»", en: "Wings of Tatev Cable Car" },
        desc: {
          hy: "Աշխարհի ամենաերկար հետադարձելի խցիկավոր ճոպանուղին, որն անցնում է Որոտանի կիրճի վրայով:",
          ru: "Самая длинная в мире пассажирская канатная дорога двойного реверсивного типа, проходящая над Воротанским ущельем.",
          en: "The world's longest reversible aerial tramway, flying over the breathtaking Vorotan Gorge."
        },
        photo: "/img/img_khor-virap-noravank-shaki-tatev_6.jpg"
      },
      {
        title: { hy: "Տաթևի վանք", ru: "Монастырь Татев", en: "Tatev Monastery" },
        desc: {
          hy: "IX դարի մեծասքանչ վանական համալիր, որը հանդիսանում էր միջնադարյան Հայաստանի հոգևոր ու կրթական խոշորագույն կենտրոնը:",
          ru: "Величественный монастырский комплекс IX века, бывший крупнейшим духовным и научным центром средневековой Армении.",
          en: "A majestic 9th-century monastery complex that served as a major spiritual and educational center of medieval Armenia."
        },
        photo: "/img/img_khor-virap-noravank-shaki-tatev_7.jpg"
      }
    ]
},

{
    id: "garni-geghard-azat-symphony",
    price: 30000,
    region: "Kotayk, Ararat",
    duration: 1,
    image: "/img/img_garni-geghard-azat-symphony_1.jpg", 
    title: {
      hy: "Չարենցի կամար, Գառնի, Գեղարդ և Ազատի ջրամբար",
      ru: "Арка Чаренца, Гарни, Гегард и Азатское водохранилище",
      en: "Charents Arch, Garni, Geghard & Azat Reservoir"
    },
    description: {
      hy: "Բացահայտեք Հայաստանի պատմամշակութային գանձերը՝ հեթանոսական տաճարից ու ժայռափոր վանքից մինչև Ազատի կիրճի բնական հրաշքները:",
      ru: "Откройте для себя исторические сокровища Армении: от языческого храма и скального монастыря до природных чудес ущелья реки Азат.",
      en: "Discover Armenia's historic treasures: from a pagan temple and cave monastery to the natural wonders of the Azat River gorge."
    },
    stops: [
      {
        title: { hy: "Չարենցի կամար", ru: "Арка Чаренца", en: "Charents Arch" },
        desc: {
          hy: "Հանրահայտ դիտահրապարակ, որտեղից բացվում է բիբլիական Արարատ լեռան ամենահիասքանչ տեսարաններից մեկը:",
          ru: "Популярная смотровая площадка, откуда открывается один из самых потрясающих видов на библейскую гору Арарат.",
          en: "A popular viewpoint offering one of the most breathtaking panoramic views of Mount Ararat."
        },
        photo: "/img/img_garni-geghard-azat-symphony_1.jpg"
      },
      {
        title: { hy: "Գառնիի տաճար", ru: "Храм Гарни", en: "Garni Temple" },
        desc: {
          hy: "Հայաստանի տարածքում պահպանված միակ հելլենիստական հեթանոսական տաճարը՝ կառուցված I դարում:",
          ru: "Единственный сохранившийся на территории Армении и всего СНГ языческий храм в эллинистическом стиле, построенный в I веке.",
          en: "The only surviving Hellenistic pagan temple in Armenia and the former Soviet Union, built in the 1st century."
        },
        photo: "/img/img_garni-geghard-azat-symphony_2.jpg"
      },
      {
        title: { hy: "Քարերի սիմֆոնիա", ru: "Симфония камней", en: "Symphony of Stones" },
        desc: {
          hy: "Ազատ գետի կիրճում գտնվող բազալտե հսկայական սյուներից կազմված յուրօրինակ բնական հուշարձան:",
          ru: "Уникальное природное образование из базальтовых колонн в ущелье реки Азат, напоминающее гигантский орган.",
          en: "A unique natural formation of basalt columns in the Azat River gorge, closely resembling a giant musical organ."
        },
        photo: "/img/img_garni-geghard-azat-symphony_3.jpg"
      },
      {
        title: { hy: "Գեղարդավանք", ru: "Монастырь Гегард", en: "Geghard Monastery" },
        desc: {
          hy: "ՅՈՒՆԵՍԿՕ-ի համաշխարհային ժառանգության մաս հանդիսացող միջնադարյան հռչակավոր ժայռափոր վանական համալիր:",
          ru: "Знаменитый средневековый монастырский комплекс, частично высеченный в скалах и включенный в список ЮНЕСКО.",
          en: "The famous medieval cave monastery complex, partially carved directly into the solid rock and listed by UNESCO."
        },
        photo: "/img/img_garni-geghard-azat-symphony_4.jpg"
      },
      {
        title: { hy: "Ազատի ջրամբար", ru: "Азатское водохранилище", en: "Azat Reservoir" },
        desc: {
          hy: "Գեղատեսիլ արհեստական լիճ՝ շրջապատված հրաշալի լեռնային լանդշաֆտներով և տպավորիչ բնությամբ:",
          ru: "Живописное водохранилище, окруженное марсианскими горными пейзажами и создающее потрясающий контраст с водой.",
          en: "A picturesque reservoir surrounded by canyon landscapes, creating a stunning contrast with the blue water."
        },
        photo: "/img/img_garni-geghard-azat-symphony_5.jpg"
      }
    ]
},


{
    id: "garni-geghard-sevanavank",
    price: 50000,
    region: "Kotayk, Gegharkunik",
    duration: 1,
    image: "/img/img_garni-geghard-azat-symphony_1.jpg", 
    title: {
      hy: "Չարենցի կամար, Գառնի, Գեղարդ և Սևան",
      ru: "Арка Чаренца, Гарни, Гегард и Севан",
      en: "Charents Arch, Garni, Geghard & Sevan"
    },
    description: {
      hy: "Այս երթուղին համատեղում է հնագույն պատմությունը, եզակի ճարտարապետությունը, գեղատեսիլ բնությունը և Հայաստանի ամենագեղեցիկ համայնապատկերային տեսարանները:",
      ru: "Этот маршрут сочетает древнюю историю, уникальную архитектуру, живописную природу и самые красивые панорамные виды Армении.",
      en: "This route combines ancient history, unique architecture, picturesque nature, and the most beautiful panoramic views of Armenia."
    },
    stops: [
      {
        title: { hy: "Չարենցի կամար", ru: "Арка Чаренца", en: "Charents Arch" },
        desc: {
          hy: "Դիտահրապարակ բիբլիական Արարատ լեռան ցնցող համայնապատկերային տեսարանով:",
          ru: "Смотровая площадка с великолепным панорамным видом на гору Арарат.",
          en: "A viewpoint with a magnificent panoramic view of Mount Ararat."
        },
        photo: "/img/img_garni-geghard-azat-symphony_1.jpg"
      },
      {
        title: { hy: "Գառնիի տաճար", ru: "Храм Гарни", en: "Garni Temple" },
        desc: {
          hy: "Հայաստանի տարածքում պահպանված միակ հեթանոսական տաճարը՝ կառուցված մեր թվարկության I դարում:",
          ru: "Единственный сохранившийся языческий храм Армении, построенный в I веке нашей эры.",
          en: "The only surviving pagan temple in Armenia, built in the 1st century AD."
        },
        photo: "/img/img_garni-geghard-azat-symphony_2.jpg"
      },
      {
        title: { hy: "Քարերի սիմֆոնիա", ru: "Симфония камней", en: "Symphony of Stones" },
        desc: {
          hy: "Բազալտե սյուներից կազմված յուրօրինակ բնական հուշարձան, որը հիշեցնում է հսկայական երգեհոնի խողովակներ:",
          ru: "Уникальный природный памятник из базальтовых колонн, напоминающих трубы гигантского органа.",
          en: "A unique natural monument of basalt columns resembling the pipes of a giant organ."
        },
        photo: "/img/img_garni-geghard-azat-symphony_3.jpg"
      },
      {
        title: { hy: "Գեղարդավանք", ru: "Монастырь Гегард", en: "Geghard Monastery" },
        desc: {
          hy: "Ակնառու վանական համալիր, որը մասամբ փորված է ժայռի մեջ և ներառված է ՅՈՒՆԵՍԿՕ-ի Համաշխարհային ժառանգության ցանկում:",
          ru: "Выдающийся монастырский комплекс, частично высеченный в скале, включённый в список Всемирного наследия ЮНЕСКО.",
          en: "An outstanding monastery complex, partially carved into the rock, included in the UNESCO World Heritage list."
        },
        photo: "/img/img_garni-geghard-azat-symphony_4.jpg"
      },
      {
        title: { hy: "Սևանա լիճ", ru: "Озеро Севан", en: "Lake Sevan" },
        desc: {
          hy: "Կովկասի խոշորագույն բարձրադիր լիճը, որին անվանում են Հայաստանի մարգարիտ:",
          ru: "Крупнейшее высокогорное озеро Кавказа, которое называют жемчужиной Армении.",
          en: "The largest alpine lake in the Caucasus, often called the pearl of Armenia."
        },
        photo: "/img/img_sevan-dilijan-haghartsin-parz_1.jpg"
      },
      {
        title: { hy: "Սևանավանք", ru: "Монастырь Севанаванк", en: "Sevanavank Monastery" },
        desc: {
          hy: "IX դարի հնագույն վանք Սևանի թերակղզում, որտեղից բացվում է հիասքանչ տեսարան դեպի լիճը:",
          ru: "Древний монастырь IX века, расположенный на полуострове Севан, откуда открывается великолепный вид на озеро.",
          en: "An ancient 9th-century monastery located on the Sevan peninsula, offering a magnificent view of the lake."
        },
        photo: "/img/img_garni-geghard-sevanavank_6.jpg"
      }
    ]
},


  
  // //////////////////////////////////////////////////////////////
  // //////////////////////////////////////////////////////////////
  
  {
    id: "tatev-wings",
    price: 85000,
    region: "South",
    duration: 2,
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=1200", // Epic gorge
    title: {
      hy: "Տաթևի Թևեր և Կարմիր Կիրճեր",
      ru: "Крылья Татева и Красные Каньоны",
      en: "Wings of Tatev & Red Canyons"
    },
    description: {
      hy: "Ճանապարհորդություն դեպի Հայաստանի հարավային հրաշքներ: Թռիչք աշխարհի ամենաերկար հետադարձելի ճոպանուղով և հնագույն Նորավանքի կարմիր ժայռերը:",
      ru: "Путешествие к южным чудесам Армении. Полет на самой длинной реверсивной канатной дороге в мире и величественные красные скалы монастыря Нораванк.",
      en: "A journey to the southern wonders of Armenia. Fly on the world's longest reversible aerial tramway and explore the dramatic red canyons of Noravank."
    },
    stops: [
      {
        title: {
          hy: "Երևան — Պրեմիում Մեկնարկ",
          ru: "Ереван — Премиум Старт",
          en: "Yerevan — Premium Departure"
        },
        desc: {
          hy: "Մեր շքեղ սրահից մեկնում ենք հատուկ պատրաստված պրեմիում դասի արտաճանապարհային մեքենաներով՝ փորձառու էքսկուրսավարի հետ միասին:",
          ru: "Отправление из нашего роскошного офиса на специально подготовленном премиальном внедорожнике в сопровождении опытного гида.",
          en: "Departure from our luxury lounge in a custom-built premium SUV, guided by our elite tour conductor."
        },
        photo: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=1200",
        landmark: {
          title: {
            hy: "Հանրապետության Հրապարակ",
            ru: "Площадь Республики",
            en: "Republic Square"
          },
          desc: {
            hy: "Երևանի սիրտը՝ շրջապատված վարդագույն տուֆե շենքերով և երգող շատրվաններով:",
            ru: "Сердце Еревана, обрамленное величественными зданиями из розового туфа и поющими фонтанами.",
            en: "The grand heart of Yerevan, framed by pink tuff masterpieces and the singing fountains."
          },
          photo: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=600"
        }
      },
      {
        title: {
          hy: "Խոր Վիրապ — Սրբազան Տեսարան",
          ru: "Хор Вирап — Священный Вид",
          en: "Khor Virap — Sacred Vista"
        },
        desc: {
          hy: "Խոր Վիրապի հնագույն վանքը, որտեղից բացվում է Հայաստանում ամենամոտ և գեղեցիկ տեսարանը դեպի բիբլիական Արարատ լեռը:",
          ru: "Древнейший монастырь Хор Вирап, откуда открывается самый захватывающий и близкий вид на библейскую гору Арарат.",
          en: "The historic Khor Virap Monastery, offering the closest and most majestic view of the biblical Mount Ararat."
        },
        photo: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200",
        landmark: {
          title: {
            hy: "Գրիգոր Լուսավորչի Խուցը",
            ru: "Яма Григория Просветителя",
            en: "Pit of Gregory the Illuminator"
          },
          desc: {
            hy: "Այն վայրը, որտեղ 13 տարի բանտարկված է եղել Սուրբ Գրիգոր Լուսավորիչը:",
            ru: "Глубокая подземная темница, где святой Григорий Просветитель томился в заточении 13 лет.",
            en: "The deep underground dungeon where St. Gregory the Illuminator was imprisoned for 13 years."
          },
          photo: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=600"
        }
      },
      "Areni_Cave", "Noravank", "Shaki_Waterfall", "Karahunj", "Tatev_Monastery", "Wings_Of_Tatev", "Goris", "Khndzoresk_Bridge", "Halidzor", "Yeghegnadzor", "Areni_Winery"
    ]
  }
  
];

window.toursData = toursData; 

// Landmark descriptions dictionary to feed route stops dynamically
const landmarksLibrary = {
  Yerevan: {
    title: { hy: "Երևան (Մեկնարկ)", ru: "Ереван (Старт)", en: "Yerevan (Departure)" },
    desc: { hy: "Մեկնարկ մեր հարմարավետ գրասենյակից կամ հյուրանոցից պրեմիում դասի ամենագնացով:", ru: "Старт из нашего комфортного офиса или отеля на премиум-внедорожнике.", en: "Departure from our boutique office or your hotel in a premium SUV." },
    photo: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=600"
  },
  Khor_Virap: {
    title: { hy: "Խոր Վիրապի վանք", ru: "Монастырь Хор Вирап", en: "Khor Virap Monastery" },
    desc: { hy: "Հայաստանի սիրտը, որտեղից բացվում է լավագույն տեսարանը դեպի սրբազան Արարատ լեռը:", ru: "Сердце Армении, откуда открывается самый близкий и величественный вид на гору Арарат.", en: "The cradle of Armenian Christianity with a breathtaking, close-up view of sacred Mount Ararat." },
    photo: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=600"
  },
  Areni_Cave: {
    title: { hy: "Արենի-1 Քարանձավ", ru: "Пещера Арени-1", en: "Areni-1 Cave" },
    desc: { hy: "Հնագույն քարանձավ, որտեղ հայտնաբերվել է աշխարհի ամենահին կաշվե կոշիկը (6000 տարեկան):", ru: "Уникальная пещера, где были найдены древнейшая кожаная туфля в мире (6000 лет) и винодельня.", en: "Archaeological cave where the world's oldest leather shoe (6000 years old) and winery were discovered." },
    photo: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600"
  },
  Noravank: {
    title: { hy: "Նորավանքի համալիր", ru: "Монастырь Нораванк", en: "Noravank Monastery" },
    desc: { hy: "Ճարտարապետական գլուխգործոց՝ շրջապատված հեքիաթային կարմիր ժայռերով:", ru: "Шедевр средневекового зодчества Момика, зажатый в ущелье кирпично-красных скал.", en: "A medieval architectural masterpiece designed by Momik, framed by towering red-brick cliffs." },
    photo: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600"
  },
  Tatev_Monastery: {
    title: { hy: "Տաթևի Վանք", ru: "Татевский Монастырь", en: "Tatev Monastery" },
    desc: { hy: "9-րդ դարի հոգևոր և գիտական կենտրոն՝ կախված անդնդախոր Որոտանի կիրճի վրա:", ru: "Величественный замок веры IX века, парящий над бездонным ущельем реки Воротан.", en: "A magnificent 9th-century fortress of faith, perched high over the deep Vorotan River Gorge." },
    photo: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=600"
  },
  Wings_Of_Tatev: {
    title: { hy: "Տաթևի Թևեր ճոպանուղի", ru: "Канатная дорога «Крылья Татева»", en: "Wings of Tatev Cableway" },
    desc: { hy: "Աշխարհի ամենաերկար հետադարձելի ճոպանուղին (5752 մետր)՝ ամպերի վրայով:", ru: "Самая длинная пассажирская канатная дорога маятникового типа в мире (5752 м). Полет над облаками.", en: "The world's longest reversible double-track cableway (5752m), offering a breathtaking flight over clouds." },
    photo: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=600"
  },
  Sevanavank: {
    title: { hy: "Սևանավանք", ru: "Монастырь Севанаванк", en: "Sevanavank Monastery" },
    desc: { hy: "Սևանա լճի թերակղզու գագաթին գտնվող սև տուֆից կառուցված հնագույն վանքը:", ru: "Древний монастырь из черного туфа на вершине полуострова с панорамой бескрайнего озера.", en: "Ancient black-tuff monastery built on the peninsula, commanding a panoramic view of Lake Sevan." },
    photo: "https://images.unsplash.com/photo-1580985186259-253cb12b591b?q=80&w=600"
  },
  Haghartsin_Monastery: {
    title: { hy: "Հաղարծին Վանք", ru: "Монастырь Агарцин", en: "Haghartsin Monastery" },
    desc: { hy: "Խորը անտառների մեջ թաքնված սպիտակ քարե հրաշքը՝ վերականգնված պրեմիում որակով:", ru: "Спрятанное в густых лесах белокаменное чудо средневековья, полностью отреставрированное.", en: "A magical white-stone monastery hidden in deep temperate forests, beautifully preserved." },
    photo: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=600"
  },
  Garni_Temple: {
    title: { hy: "Գառնիի հելլենիստական տաճար", ru: "Языческий Храм Гарни", en: "Garni Hellenistic Temple" },
    desc: { hy: "Միակ հունահռոմեական տաճարը ողջ նախկին ԽՍՀՄ տարածքում՝ կառուցված 1-ին դարում:", ru: "Единственный сохранившийся языческий античный храм на территории СНГ, воздвигнутый в I в.", en: "The only standing Greco-Roman pagan temple in the former Soviet Union, erected in the 1st century AD." },
    photo: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600"
  },
  Symphony_Of_Stones: {
    title: { hy: "Քարերի Սիմֆոնիա", ru: "Симфония Камней", en: "Symphony of Stones" },
    desc: { hy: "Բազալտե հսկայական սյուներ Ազատի կիրճում, որոնք հիշեցնում են եկեղեցական երգեհոն:", ru: "Грандиозные базальтовые скалы-шестигранники в ущелье Азат, напоминающие гигантский орган.", en: "Colossal hexagonal basalt columns lining the Azat River Gorge, mimicking a giant cathedral organ." },
    photo: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600"
  },
  Geghard_Cave: {
    title: { hy: "Գեղարդավանք (Ժայռափոր)", ru: "Скальный Монастырь Гегард", en: "Geghard Cave Monastery" },
    desc: { hy: "ՅՈՒՆԵՍԿՕ-ի ժառանգություն հանդիսացող վանք՝ ամբողջությամբ փորված հսկա ժայռի մեջ:", ru: "Объект ЮНЕСКО. Монастырь, залы которого полностью высечены вручную внутри цельной скалы.", en: "A UNESCO-listed cave monastery where massive prayer halls are carved entirely inside solid rock." },
    photo: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600"
  },
  Amberd_Fortress: {
    title: { hy: "Ամբերդ Ամրոց", ru: "Крепость Амберд", en: "Amberd Fortress" },
    desc: { hy: "Անառիկ ամրոց Արագածի լանջին՝ ծովի մակարդակից 2300մ բարձրության վրա:", ru: "Средневековый замок на южном склоне горы Арагац на высоте 2300 метров над уровнем моря.", en: "An impregnable medieval stronghold on the southern slope of Mt Aragats, 2300m above sea level." },
    photo: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=600"
  }
};

const defaultLandmarkPhotos = [
  "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=600",
  "https://images.unsplash.com/photo-1580985186259-253cb12b591b?q=80&w=600",
  "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=600",
  "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600",
  "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=600",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=600",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=600",
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=600",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=600",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600"
];

// Helper to expand and format stops into structured object
function getStopsForTour(tourId, stopsKeys) {
  if (!stopsKeys) return [];
  return stopsKeys.map((item, index) => {
    // If the item is already a fully custom stop object
    if (typeof item === "object" && item !== null) {
      return {
        key: item.key || `custom_stop_${index}`,
        title: item.title,
        desc: item.desc,
        photo: item.photo,
        hasLandmark: item.hasLandmark !== undefined ? item.hasLandmark : (item.landmark ? true : false),
        landmark: item.landmark || null
      };
    }

    const key = item;
    // If we have detailed info in the library, use it
    if (landmarksLibrary[key]) {
      return {
        key: key,
        title: landmarksLibrary[key].title,
        desc: landmarksLibrary[key].desc,
        photo: landmarksLibrary[key].photo,
        hasLandmark: !!landmarksLibrary[key].landmark,
        landmark: landmarksLibrary[key].landmark || null
      };
    }
    
    // Otherwise generate clean, realistic placeholder stop data dynamically
    const cleanName = key.replace(/_/g, " ");
    const randomPhoto = defaultLandmarkPhotos[index % defaultLandmarkPhotos.length];
    
    return {
      key: key,
      title: {
        hy: `${cleanName} (Կանգառ ${index + 1})`,
        ru: `${cleanName} (Остановка ${index + 1})`,
        en: `${cleanName} (Stop ${index + 1})`
      },
      desc: {
        hy: `Հիասքանչ տեսարաններ և պրեմիում հանգիստ ${cleanName} գեղեցիկ վայրում: Մեր գիդը կներկայացնի ամբողջ պատմությունը:`,
        ru: `Живописные виды и премиальный отдых в районе ${cleanName}. Наш гид расскажет вам все тайны этого места.`,
        en: `Stunning panoramic views and premium relaxation at ${cleanName}. Our guide will unveil its amazing secrets.`
      },
      photo: randomPhoto,
      hasLandmark: index % 4 === 1, // Some stops have landmark cards in the corner
      landmark: {
        title: {
          hy: `${cleanName} - Տեսարժան վայր`,
          ru: `${cleanName} - Достопримечательность`,
          en: `${cleanName} - Landmark`
        },
        desc: {
          hy: `Բացահայտեք ${cleanName}-ի հնագույն գաղտնիքները մեր էքսկուրսիայի ընթացքում:`,
          ru: `Откройте для себя древние секреты места ${cleanName} в нашей экскурсии.`,
          en: `Discover the ancient secrets of ${cleanName} during our tour.`
        },
        photo: randomPhoto
      }
    };
  });
}

// Global active tour variable, initialized to first tour
let activeTour = toursData[0];
