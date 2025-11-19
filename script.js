// --- Daktilo Efekti Değişkenleri ---
const textElement = document.querySelector('.multiple-text');
const titlesTR = ["Mobil Geliştiriciyim", "Web Geliştiriciyim", "Frontend Developerım", "Backend Developerım"];
const titlesEN = ["a Mobile Developer", "a Web Developer", "a Frontend Developer", "a Backend Developer"];

let currentTitles = titlesTR;
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isDeleting = false;
let typeTimeout;

function type() {
    if (count === currentTitles.length) {
        count = 0;
    }
    currentText = currentTitles[count];

    if (isDeleting) {
        letter = currentText.slice(0, --index);
    } else {
        letter = currentText.slice(0, ++index);
    }

    textElement.textContent = letter;

    let typeSpeed = 100;

    if (isDeleting) {
        typeSpeed = 50;
    }

    if (!isDeleting && letter.length === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && letter.length === 0) {
        isDeleting = false;
        count++;
        typeSpeed = 500;
    }

    typeTimeout = setTimeout(type, typeSpeed);
}

type();

// --- Navbar Toggle ---
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// --- Scroll Active Link ---
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// --- Dil Çevirisi ---
const translations = {
    tr: {
        nav_home: "Ana Sayfa",
        nav_about: "Hakkımda",
        nav_skills: "Yetenekler",
        nav_portfolio: "Projeler",
        home_hello: "Merhaba, Ben",
        home_iam: "Ben",
        home_desc: "Mobil ve web teknolojileriyle modern çözümler üreten, öğrenmeye tutkulu bir geliştiriciyim.",
        btn_contact: "Bana Ulaş",
        about_heading: "Hakkımda",
        about_sub: "Mobil & Web Geliştirici",
        about_text: "Doğuş Üniversitesi'nde Bilgisayar Programcılığı öğrencisiyim. Mobil uygulama geliştirmeye odaklanıyorum. Temel programlama dilleri ve geliştirme araçları konusunda deneyimim var ve bilgilerimi pratik projelerde uygulamaya hevesliyim. Hem iOS hem de Android platformları için standart geliştirme uygulamalarını takip ederek ve anlaşılır, işlevsel kodlar kullanarak uygulama geliştirmekle ilgileniyorum. Amacım, mobil uygulama geliştirme konusunda profesyonel deneyim kazanmak ve güvenilir ve kullanılabilir yazılım çözümleri sunarak teknik becerilerimi geliştirmeye devam etmek. Bir ekibin parçası olmak ve ekip olarak çalışmak istiyorum.",
        birth_date: "Doğum Yılı: 2005",
        skills_heading: "Teknik",
        proj_heading: "Son",
        p_cafe_title: "Kafe Otomasyonu",
        p_cafe_desc: "Müşteri menüsü, şifreli garson/admin panelleri, stok takibi, ciro yönetimi ve veri yedekleme içeren kapsamlı sistem.",
        p_flight_title: "Yolcu Uçak Bileti Paneli",
        p_flight_desc: "Kullanıcıların uçak bileti satın almasını, sorgulamasını ve iade işlemlerini gerçekleştirmesini sağlayan otomasyon.",
        p_alarm_title: "Konum Bazlı Alarm",
        p_alarm_desc: "Hedeflenen coğrafi konuma ulaşıldığında kullanıcıyı uyaran ve alarm çalan web/mobil tabanlı sistem.",
        p1_title: "IP to Binary Dönüştürücü",
        p1_desc: "Kullanıcı dostu bir arayüz ile IP adreslerini ikili (binary) formata çeviren web tabanlı bir araç.",
        p2_title: "Personel Takip Sistemi",
        p2_desc: "Şirket içi personel yönetimini sağlayan, veritabanı bağlantılı kapsamlı bir yönetim paneli.",
        p3_title: "FIFA Serisi Takip Sitesi",
        p3_desc: "Oyun skorlarını ve serileri kaydetmek için tasarlanmış, yüksek görsel kalitede interaktif web sitesi."
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_skills: "Skills",
        nav_portfolio: "Projects",
        home_hello: "Hello, I am",
        home_iam: "I am",
        home_desc: "A passionate developer creating modern solutions with mobile and web technologies.",
        btn_contact: "Contact Me",
        about_heading: "About Me",
        about_sub: "Mobile & Web Developer",
        about_text: "I am a Computer Programming student at Doğuş University. I focus on mobile app development. I have experience in fundamental programming languages and development tools, and I am eager to apply my knowledge in practical projects. I am interested in developing applications for both iOS and Android platforms by following standard development practices and using clear, functional code. My goal is to gain professional experience in mobile app development and continue improving my technical skills by providing reliable and usable software solutions. I want to be part of a team and work collaboratively.",
        birth_date: "Birth Year: 2005",
        skills_heading: "Technical",
        proj_heading: "Latest",
        p_cafe_title: "Cafe Automation",
        p_cafe_desc: "Comprehensive system with customer menu, secure waiter/admin panels, stock tracking, revenue management, and data backup.",
        p_flight_title: "Flight Ticket Panel",
        p_flight_desc: "Automation allowing users to purchase, query, and return flight tickets seamlessly.",
        p_alarm_title: "Location Based Alarm",
        p_alarm_desc: "Web/mobile system that triggers an alarm and alerts the user when a specific geographic location is reached.",
        p1_title: "IP to Binary Converter",
        p1_desc: "A web-based tool that converts IP addresses to binary format with a user-friendly interface.",
        p2_title: "Personnel Tracking System",
        p2_desc: "A comprehensive database-connected management panel for internal personnel management.",
        p3_title: "FIFA Series Tracker",
        p3_desc: "An interactive website with high visual quality designed to record game scores and series."
    }
};

const langBtn = document.getElementById('lang-btn');
let currentLang = 'tr';

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'tr' ? 'en' : 'tr';
    
    // DÜZELTME: Tekrar "EN" yapıldı.
    langBtn.innerText = currentLang === 'tr' ? 'TR' : 'EN';
    
    updateLanguage(currentLang);
    
    clearTimeout(typeTimeout);
    currentTitles = currentLang === 'tr' ? titlesTR : titlesEN;
    count = 0;
    index = 0;
    currentText = "";
    isDeleting = false;
    type();
});

function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang][key]) {
            if(key === 'skills_heading' || key === 'proj_heading' || key === 'about_heading'){
                let spanText = "";
                if(lang === 'tr'){
                    if(key === 'skills_heading') spanText = "Teknik <span>Yetenekler</span>";
                    if(key === 'proj_heading') spanText = "Son <span>Projelerim</span>";
                    if(key === 'about_heading') spanText = "Hakkımda <span>Ben Kimim?</span>";
                } else {
                    if(key === 'skills_heading') spanText = "Technical <span>Skills</span>";
                    if(key === 'proj_heading') spanText = "Latest <span>Projects</span>";
                    if(key === 'about_heading') spanText = "About <span>Me</span>";
                }
                el.innerHTML = spanText;
            } else {
                el.innerText = translations[lang][key];
            }
        }
    });
}