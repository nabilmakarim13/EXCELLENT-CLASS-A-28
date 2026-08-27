document.addEventListener('DOMContentLoaded', () => {

    // 1. DATA SISWA (32 SISWA KELAS 8A)
    const daftarSiswa = [
        { no: "01", name: "AISHA RIDA SAKHI", gender: "P", role: "Seksi Ketertiban" },
        { no: "02", name: "ALFARIL HAIDAR ABDULLAH", gender: "L", role: "Seksi Kesehatan" },
        { no: "03", name: "ALTHAF QAISHAR MAZZA", gender: "L", role: "Sekretaris 1 & Seksi Kebersihan" },
        { no: "04", name: "ARYA AGIS SAKHA", gender: "L", role: "Sekretaris 2 & Seksi Keindahan" },
        { no: "05", name: "ASNA ZAYYANA DZATIL IZZAH", gender: "P", role: "Ketua Kelas & Seksi Keagamaan" },
        { no: "06", name: "CANKA WILLY LOKANANTA", gender: "L", role: "Seksi Keindahan" },
        { no: "07", name: "DZAKIYYA TALITA SAKHI", gender: "P", role: "Wakil Ketua & Seksi Keamanan" },
        { no: "08", name: "FAIZ WAFIY RIZQULLAH", gender: "L", role: "Bendahara 2 & Seksi Ketertiban" },
        { no: "09", name: "FARZANA AZHAR ARKANANTA", gender: "L", role: "Seksi Keamanan" },
        { no: "10", name: "HANAYA SYAQUILA ABRORY", gender: "P", role: "Bendahara 1 & Seksi Kesehatan" },
        { no: "11", name: "IZZAT ARYA PUTRA", gender: "L", role: "Seksi Kesehatan" },
        { no: "12", name: "KAUREEN AMMARA HANIFA", gender: "P", role: "Seksi Kesehatan" },
        { no: "13", name: "MAHIRA HASNA KAMILA", gender: "P", role: "Seksi Keagamaan" },
        { no: "14", name: "MEZZALUNA AZKADINA ADNI", gender: "P", role: "Seksi Kebersihan" },
        { no: "15", name: "MICHAYLA QUEENSHA AHMAD", gender: "P", role: "Seksi Keagamaan" },
        { no: "16", name: "MOCH. BAHAUDDIN FADLAN AIDYL FITHRO", gender: "L", role: "Seksi Keamanan" },
        { no: "17", name: "MOHAMMAD ARIYAH NUR AZAM", gender: "L", role: "Seksi Kekeluargaan" },
        { no: "18", name: "MOHAMMAD KAFABY ABQARY", gender: "L", role: "Seksi Keindahan" },
        { no: "19", name: "MUCHAMAD MIFZAL FADLY ALFAEYZA", gender: "L", role: "Seksi Ketertiban" },
        { no: "20", name: "MUHAMMAD ARIQ FAJRI", gender: "L", role: "Seksi Kekeluargaan" },
        { no: "21", name: "MUHAMMAD DAFFA THEO PUTRA", gender: "L", role: "Seksi Kebersihan" },
        { no: "22", name: "MUHAMMAD FARHAN FATTAH EL-IZMY", gender: "L", role: "Seksi Kekeluargaan" },
        { no: "23", name: "MUHAMMAD IHYA'UL KAFA", gender: "L", role: "Seksi Ketertiban" },
        { no: "24", name: "MUHAMMAD IRFAN SYANDANA", gender: "L", role: "Seksi Ketertiban" },
        { no: "25", name: "NABIL RIZKI MAKARIM", gender: "L", role: "Seksi Kekeluargaan" },
        { no: "26", name: "NAURAH MIZA ANINDYA", gender: "P", role: "Seksi Keamanan" },
        { no: "27", name: "NAZZALA ISNA PUTRI RAMADHANI", gender: "P", role: "Seksi Kesehatan" },
        { no: "28", name: "RADITYA PUTRA VALENZIO", gender: "L", role: "Seksi Keindahan" },
        { no: "29", name: "SAVIRA AZRA ZAHRA", gender: "P", role: "Seksi Kebersihan" },
        { no: "30", name: "TANAYA FADIA ALTHAFINA", gender: "P", role: "Seksi Keagamaan" },
        { no: "31", name: "ZAVIRA QAINA AL ZALIFA", gender: "P", role: "Seksi Keagamaan" },
        { no: "32", name: "ZAVIRA SETYONINGSIH", gender: "P", role: "Seksi Kebersihan" }
    ];

    // 2. DATA JADWAL PELAJARAN
    const jadwalMapel = {
        "senin-mapel": [
            { time: "06:45 - 07:40", name: "Pembiasaan Pagi / Upacara (Jam 1)", teacher: "-", break: true },
            { time: "07:40 - 09:00", name: "PJOK (Jam 2-3)", teacher: "B. Listia", break: false },
            { time: "09:00 - 09:40", name: "BJA / B. Jawa (Jam 4)", teacher: "B. Kunti", break: false },
            { time: "09:40 - 10:05", name: "ISTIRAHAT PERTAMA", teacher: "-", break: true },
            { time: "10:05 - 11:25", name: "AA / Akidah Akhlak (Jam 5-6)", teacher: "B. Fajri", break: false },
            { time: "11:25 - 12:30", name: "ISHOMA", teacher: "-", break: true },
            { time: "12:30 - 13:50", name: "PP / Pancasila (Jam 7-8)", teacher: "B. Atik", break: false }
        ],
        "selasa-mapel": [
            { time: "06:45 - 07:00", name: "Pembiasaan Pagi", teacher: "-", break: true },
            { time: "07:00 - 08:20", name: "QH / Al-Qur'an Hadis (Jam 1-2)", teacher: "B. Nikmafatin", break: false },
            { time: "08:20 - 09:40", name: "BIN / Bahasa Indonesia (Jam 3-4)", teacher: "B. Tazqiya", break: false },
            { time: "09:40 - 10:05", name: "ISTIRAHAT PERTAMA", teacher: "-", break: true },
            { time: "10:05 - 11:25", name: "FKH / Fiqih (Jam 5-6)", teacher: "B. Uswah", break: false },
            { time: "11:25 - 12:30", name: "ISHOMA", teacher: "-", break: true },
            { time: "12:30 - 13:50", name: "SKI (Jam 7-8)", teacher: "P. Irul", break: false }
        ],
        "rabu-mapel": [
            { time: "06:45 - 07:00", name: "Pembiasaan Pagi", teacher: "-", break: true },
            { time: "07:00 - 07:40", name: "Riset (Jam 1)", teacher: "B. Enik", break: false },
            { time: "07:40 - 09:00", name: "BIN / Bahasa Indonesia (Jam 2-3)", teacher: "B. Tazqiya", break: false },
            { time: "09:00 - 09:40", name: "BING / Bahasa Inggris (Jam 4)", teacher: "B. Silvana", break: false },
            { time: "09:40 - 10:05", name: "ISTIRAHAT PERTAMA", teacher: "-", break: true },
            { time: "10:05 - 11:25", name: "IPS (Jam 5-6)", teacher: "B. Anik", break: false },
            { time: "11:25 - 12:30", name: "ISHOMA", teacher: "-", break: true },
            { time: "12:30 - 13:50", name: "MAT / Matematika (Jam 7-8)", teacher: "B. Luluk", break: false }
        ],
        "kamis-mapel": [
            { time: "06:45 - 07:00", name: "Pembiasaan Pagi", teacher: "-", break: true },
            { time: "07:00 - 08:20", name: "IPA (Jam 1-2)", teacher: "B. Dewi Zul", break: false },
            { time: "08:20 - 09:00", name: "BIN / Bahasa Indonesia (Jam 3)", teacher: "B. Tazqiya", break: false },
            { time: "09:00 - 09:40", name: "IPS (Jam 4)", teacher: "B. Anik", break: false },
            { time: "09:40 - 10:05", name: "ISTIRAHAT PERTAMA", teacher: "-", break: true },
            { time: "10:05 - 11:25", name: "BAR / Bahasa Arab (Jam 5-6)", teacher: "B. Ririn", break: false },
            { time: "11:25 - 12:30", name: "ISHOMA", teacher: "-", break: true },
            { time: "12:30 - 13:50", name: "BING / Bahasa Inggris (Jam 7-8)", teacher: "B. Silvana", break: false }
        ],
        "jumat-mapel": [
            { time: "06:45 - 07:40", name: "Pembiasaan Pagi", teacher: "-", break: true },
            { time: "07:40 - 09:00", name: "IPA (Jam 2-3)", teacher: "B. Dewi Zul", break: false },
            { time: "09:00 - 09:40", name: "BK (Jam 4)", teacher: "B. Maria", break: false },
            { time: "09:40 - 10:05", name: "ISTIRAHAT PERTAMA", teacher: "-", break: true },
            { time: "10:05 - 11:25", name: "INF / Informatika (Jam 5-6)", teacher: "P. Rozi", break: false }
        ],
        "sabtu-mapel": [
            { time: "06:45 - 07:00", name: "Pembiasaan Pagi", teacher: "-", break: true },
            { time: "07:00 - 08:20", name: "MAT / Matematika (Jam 1-2)", teacher: "B. Luluk", break: false },
            { time: "08:20 - 09:00", name: "BAR / Bahasa Arab (Jam 3)", teacher: "B. Ririn", break: false },
            { time: "09:00 - 09:40", name: "SBD / Seni Budaya (Jam 4)", teacher: "B. Mujinem", break: false },
            { time: "09:40 - 10:05", name: "ISTIRAHAT PERTAMA", teacher: "-", break: true },
            { time: "10:05 - 10:45", name: "SBD / Seni Budaya (Jam 5)", teacher: "B. Mujinem", break: false }
        ]
    };

    // 3. RENDER DAFTAR SISWA
    const siswaContainer = document.getElementById('siswaContainer');
    if (siswaContainer) {
        siswaContainer.innerHTML = daftarSiswa.map(s => {
            const genderClass = s.gender === 'P' ? 'female' : 'male';
            const genderIcon = s.gender === 'P' ? '♀' : '♂';
            return `
                <div class="news-item ${genderClass}" data-name="${s.name}" data-role="${s.role}" data-gender="${s.gender}">
                    <span class="news-date">${s.no}</span>
                    <p class="news-text" style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
                        <span>${s.name}</span>
                        <span class="gender-badge">${genderIcon}</span>
                    </p>
                </div>
            `;
        }).join('');
    }

    // 4. RENDER JADWAL MAPEL
    const mapelContent = document.getElementById('mapelContent');
    if (mapelContent) {
        mapelContent.innerHTML = Object.keys(jadwalMapel).map((dayKey, index) => {
            const cardsHtml = jadwalMapel[dayKey].map(item => `
                <div class="schedule-card-item ${item.break ? 'break-card' : ''}">
                    <span class="time-badge">${item.time}</span>
                    <div class="subject-info">
                        <div class="subject-title">${item.name}</div>
                    </div>
                    ${item.teacher !== '-' ? `<span class="teacher-badge">${item.teacher}</span>` : ''}
                </div>
            `).join('');

            return `
                <div id="${dayKey}" class="day-content ${index === 0 ? 'active' : 'hidden'}">
                    <div class="schedule-cards-container">
                        ${cardsHtml}
                    </div>
                </div>
            `;
        }).join('');
    }

    // 5. NAVIGASI TAB MENU
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.app-section');

    function switchSection(targetId) {
        navLinks.forEach(l => l.classList.remove('active'));
        sections.forEach(s => s.classList.add('hidden'));

        const activeLink = document.querySelector(`.nav-links a[href="#${targetId}"]`);
        const targetSection = document.getElementById(targetId);

        if (activeLink) {
            activeLink.classList.add('active');
            activeLink.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
        if (targetSection) targetSection.classList.remove('hidden');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            switchSection(this.getAttribute('href').substring(1));
        });
    });

    // 6. FITUR PENCARIAN DROPDOWN
    const searchInput = document.getElementById('memberSearch');
    const searchBox = document.querySelector('.search-box');

    if (searchInput && searchBox) {
        const dropdown = document.createElement('div');
        dropdown.className = 'search-results-dropdown';
        searchBox.appendChild(dropdown);

        const dataPiket = [
            { nama: "Izzat, Althaf, Nabil, Daffa, Farhan", hari: "Senin" },
            { nama: "Ariq, Radit, Agis, Dzakiyya, Canka, Mahira", hari: "Selasa" },
            { nama: "Zavira, Kaureen, Haidar, Kafaby, Savira", hari: "Rabu" },
            { nama: "Nizza, Hanaya, Luna, Naurah, Baha", hari: "Kamis" },
            { nama: "Irfan, Fadly, Azam, Faiz, Kafa, Arzan", hari: "Jumat" },
            { nama: "Adni, Asna, Aisha, Michayla, Tanaya", hari: "Sabtu" }
        ];

        searchInput.addEventListener('input', function(e) {
            const keyword = e.target.value.toLowerCase().trim();
            dropdown.innerHTML = '';

            if (keyword === "") {
                dropdown.classList.remove('active');
                return;
            }

            let hasil = [];

            daftarSiswa.forEach(s => {
                if (s.name.toLowerCase().includes(keyword)) {
                    hasil.push({ 
                        title: s.name, 
                        category: `👤 Daftar Siswa (Absen ${s.no})`, 
                        sectionId: 'siswa' 
                    });

                    if (s.role.includes("Ketua") || s.role.includes("Sekretaris") || s.role.includes("Bendahara")) {
                        hasil.push({ 
                            title: s.name, 
                            category: `🏛️ Struktur Organisasi (${s.role.split('&')[0].trim()})`, 
                            sectionId: 'struktur' 
                        });
                    }

                    if (s.role.toLowerCase().includes("seksi")) {
                        hasil.push({ 
                            title: s.name, 
                            category: `🤝 Seksi 7K (${s.role})`, 
                            sectionId: 'seksi-7k' 
                        });
                    }
                }
            });

            dataPiket.forEach(p => {
                if (p.nama.toLowerCase().includes(keyword)) {
                    hasil.push({ 
                        title: `Piket Hari ${p.hari}`, 
                        category: `🧹 Jadwal Piket Kebersihan`, 
                        sectionId: 'piket' 
                    });
                }
            });

            if ("tazqiyatul fithriya".includes(keyword) || "ibu tazqiyatul".includes(keyword) || "wali kelas".includes(keyword)) {
                hasil.push({
                    title: "Ibu Tazqiyatul Fithriya, S.Pd.",
                    category: "🏛️ Struktur Organisasi (Wali Kelas)",
                    sectionId: "struktur"
                });
            }

            if (hasil.length > 0) {
                dropdown.classList.add('active');
                hasil.forEach(item => {
                    const el = document.createElement('div');
                    el.className = 'search-result-item';
                    el.innerHTML = `
                        <span class="search-title">${item.title}</span>
                        <span class="search-category">${item.category}</span>
                    `;
                    el.addEventListener('click', () => {
                        switchSection(item.sectionId);
                        const targetSec = document.getElementById(item.sectionId);
                        if (targetSec) targetSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        dropdown.classList.remove('active');
                        searchInput.value = '';
                    });
                    dropdown.appendChild(el);
                });
            } else {
                dropdown.classList.add('active');
                dropdown.innerHTML = `<div class="search-result-item"><span class="search-title">Tidak ditemukan...</span></div>`;
            }
        });

        document.addEventListener('click', function(e) {
            if (!searchBox.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    }

    // 7. TAB PIKET & MAPEL
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const day = this.getAttribute('data-day');
            const parent = this.closest('.timetable-container');
            
            parent.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            parent.querySelectorAll('.day-content').forEach(c => {
                c.classList.add('hidden');
            });

            this.classList.add('active');
            const target = document.getElementById(day);
            if (target) {
                target.classList.remove('hidden');
            }
        });
    });

    // 8. FORMATTER TEKS SUARA (TALKBACK)
    function formatTeksSuara(text) {
        if (!text) return "";
        
        let formatted = text.toLowerCase().replace(/(?:^|\s|-)\S/g, function(a) { 
            return a.toUpperCase(); 
        });

        formatted = formatted
            .replace(/Althaf/gi, "Altaf")
            .replace(/S.Pd./gi, "Sarjana Pendidikan")
            .replace(/Pjok/gi, "P-J-O-K")
            .replace(/Mtsn/gi, "M-T-S-N")
            .replace(/T\.A\./gi, "Tahun Ajaran");

        return formatted;
    }

    // 9. FUNGSI TALKBACK SUARA
    function speakText(text) {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            
            const teksSuara = formatTeksSuara(text);
            const utterance = new SpeechSynthesisUtterance(teksSuara);
            
            const isEnglish = /\b(class|dashboard|structure|section|member|timetable|all|rights|reserved)\b/i.test(text);
            
            utterance.lang = isEnglish ? 'en-US' : 'id-ID';
            utterance.rate = 0.9;
            utterance.pitch = 1;
            
            window.speechSynthesis.speak(utterance);
        }
    }

    // 10. MODAL POP-UP
    const modal = document.getElementById('memberModal');
    const closeBtn = document.querySelector('.close-modal');
    const modalName = document.getElementById('modalName');
    const modalRole = document.getElementById('modalRole');
    const modalDept = document.getElementById('modalDept');

    function openModal(name, role, dept) {
        if (!modal) return;
        modalName.textContent = name;
        modalRole.innerHTML = role ? `<strong>${role}</strong>` : 'Anggota Kelas';
        modalDept.textContent = dept || 'Kelas 8A';

        modal.classList.remove('hidden');
        setTimeout(() => modal.style.opacity = '1', 10);

        const ucapan = `${name}, ${role || 'Anggota Kelas'}, ${dept}`;
        speakText(ucapan);
    }

    function closeModal() {
        if (!modal) return;
        modal.style.opacity = '0';
        setTimeout(() => modal.classList.add('hidden'), 300);
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    }

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            const name = card.getAttribute('data-name');
            if (name) {
                const role = card.getAttribute('data-role');
                const dept = card.getAttribute('data-dept') || 'Pengurus Inti Kelas 8A';
                openModal(name, role, dept);
            }
        });
    });

    document.querySelectorAll('.member-list li').forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const name = item.getAttribute('data-name') || item.textContent.replace(/^[0-9]+\.\s*/, '');
            const role = item.getAttribute('data-role') || 'Pengurus Seksi';
            openModal(name, role, `Pengurus ${role} Kelas 8A`);
        });
    });

    document.addEventListener('click', (e) => {
        const newsItem = e.target.closest('.news-item[data-name]');
        if (newsItem) {
            const name = newsItem.getAttribute('data-name');
            const role = newsItem.getAttribute('data-role') || 'Anggota Kelas';
            const gender = newsItem.getAttribute('data-gender') === 'L' ? 'Siswa Laki-Laki' : 'Siswa Perempuan';
            openModal(name, role, `${gender} Kelas 8A`);
        }
    });

    const headerTitle = document.querySelector('.logo-text');
    if (headerTitle) {
        headerTitle.addEventListener('click', () => {
            openModal("Aetherienz A'28", "Kelas 8A", "MTsN 2 Kota Kediri");
        });
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

    // 11. TOMBOL BACK TO TOP
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = 'block';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 12. OTOMATIS TAB HARI INI
    const days = ['minggu', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu'];
    const today = days[new Date().getDay()];

    if (today !== 'minggu') {
        const activePiketBtn = document.querySelector(`.tab-btn[data-day="${today}"]`);
        const activeMapelBtn = document.querySelector(`.tab-btn[data-day="${today}-mapel"]`);
        if (activePiketBtn) activePiketBtn.click();
        if (activeMapelBtn) activeMapelBtn.click();
    }

    // 13. FITUR DARK MODE TOGGLE
    const themeToggleBtn = document.getElementById('themeToggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            themeToggleBtn.textContent = isDark ? '☀️' : '🌙';
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });

        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
            themeToggleBtn.textContent = '☀️';
        }
    }

    // 14. FITUR JAM DIGITAL REAL-TIME & KALENDER OTOMATIS
    function updateClockAndCalendar() {
        const now = new Date();

        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        const clockEl = document.getElementById('digitalClock');
        if (clockEl) {
            clockEl.textContent = `${hours}:${minutes}:${seconds}`;
        }

        const namaHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
        const namaBulan = [
            'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
            'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
        ];

        const hari = namaHari[now.getDay()];
        const tgl = now.getDate();
        const bulan = namaBulan[now.getMonth()];
        const tahun = now.getFullYear();

        const dayEl = document.getElementById('currentDay');
        const dateEl = document.getElementById('currentDate');

        if (dayEl) dayEl.textContent = hari;
        if (dateEl) dateEl.textContent = `${tgl} ${bulan} ${tahun}`;
    }

    setInterval(updateClockAndCalendar, 1000);
    updateClockAndCalendar();

    // 15. FITUR MINI AUDIO PLAYER
    const bgMusic = document.getElementById('bgMusic');
    const playMusicBtn = document.getElementById('playMusicBtn');
    const musicStatus = document.getElementById('musicStatus');

    if (bgMusic && playMusicBtn) {
        playMusicBtn.addEventListener('click', () => {
            if (bgMusic.paused) {
                bgMusic.play();
                playMusicBtn.textContent = '❚❚';
                playMusicBtn.classList.add('playing');
                if (musicStatus) musicStatus.textContent = 'Memutar...';
            } else {
                bgMusic.pause();
                playMusicBtn.textContent = '▶';
                playMusicBtn.classList.remove('playing');
                if (musicStatus) musicStatus.textContent = 'Dijeda';
            }
        });
    }
});
