document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. DATA SISWA (32 SISWA KELAS 8A)
    // ==========================================
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

    // POPULATE DROPDOWN SELECT NAMA & TINGKAT KESULITAN
    const selectNameEl = document.getElementById('playerSelectName');
    if (selectNameEl) {
        daftarSiswa.forEach(s => {
            const opt = document.createElement('option');
            opt.value = `${s.no}|${s.name}`;
            opt.textContent = `${s.no}. ${s.name}`;
            selectNameEl.appendChild(opt);
        });
    }

    // ==========================================
    // 2. DATA JADWAL PELAJARAN
    // ==========================================
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

    // RENDER DAFTAR SISWA
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

    // RENDER JADWAL MAPEL
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

    // NAVIGASI TAB MENU
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

    // PENCARIAN DROPDOWN AUTOMATIC
    const searchInput = document.getElementById('memberSearch');
    const searchBox = document.querySelector('.search-box');

    if (searchInput && searchBox) {
        const dropdown = document.createElement('div');
        dropdown.className = 'search-results-dropdown';
        searchBox.appendChild(dropdown);

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
                    hasil.push({ title: s.name, category: `👤 Daftar Siswa (Absen ${s.no})`, sectionId: 'siswa' });
                }
            });

            if (hasil.length > 0) {
                dropdown.classList.add('active');
                hasil.forEach(item => {
                    const el = document.createElement('div');
                    el.className = 'search-result-item';
                    el.innerHTML = `<span class="search-title">${item.title}</span><span class="search-category">${item.category}</span>`;
                    el.addEventListener('click', () => {
                        switchSection(item.sectionId);
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
            if (!searchBox.contains(e.target)) dropdown.classList.remove('active');
        });
    }

    // TAB PIKET & MAPEL
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const day = this.getAttribute('data-day');
            const parent = this.closest('.timetable-container');
            parent.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            parent.querySelectorAll('.day-content').forEach(c => c.classList.add('hidden'));
            this.classList.add('active');
            const target = document.getElementById(day);
            if (target) target.classList.remove('hidden');
        });
    });

    // TALKBACK SUARA & MODAL POPUP
    function formatTeksSuara(text) {
        if (!text) return "";
        return text.toLowerCase().replace(/Althaf/gi, "Altaf").replace(/S.Pd./gi, "Sarjana Pendidikan");
    }

    function speakText(text) {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(formatTeksSuara(text));
            utterance.lang = 'id-ID';
            window.speechSynthesis.speak(utterance);
        }
    }

    const modal = document.getElementById('memberModal');
    const closeBtn = document.querySelector('.close-modal');

    function openModal(name, role, dept) {
        if (!modal) return;
        document.getElementById('modalName').textContent = name;
        document.getElementById('modalRole').innerHTML = role ? `<strong>${role}</strong>` : 'Anggota Kelas';
        document.getElementById('modalDept').textContent = dept || 'Kelas 8A';
        modal.classList.remove('hidden');
        setTimeout(() => modal.style.opacity = '1', 10);
        speakText(`${name}, ${role || 'Anggota Kelas'}, ${dept}`);
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
            if (name) openModal(name, card.getAttribute('data-role'), card.getAttribute('data-dept'));
        });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

    // JAM DIGITAL & KALENDER
    function updateClockAndCalendar() {
        const now = new Date();
        const clockEl = document.getElementById('digitalClock');
        if (clockEl) {
            clockEl.textContent = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
        }
        const namaHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
        const namaBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
        if (document.getElementById('currentDay')) document.getElementById('currentDay').textContent = namaHari[now.getDay()];
        if (document.getElementById('currentDate')) document.getElementById('currentDate').textContent = `${now.getDate()} ${namaBulan[now.getMonth()]} ${now.getFullYear()}`;
    }
    setInterval(updateClockAndCalendar, 1000);
    updateClockAndCalendar();

    // AUDIO PLAYER MINIMALIS
    const bgMusic = document.getElementById('bgMusic');
    const playMusicBtn = document.getElementById('playMusicBtn');
    if (bgMusic && playMusicBtn) {
        playMusicBtn.addEventListener('click', () => {
            if (bgMusic.paused) {
                bgMusic.play();
                playMusicBtn.textContent = '❚❚';
            } else {
                bgMusic.pause();
                playMusicBtn.textContent = '▶';
            }
        });
    }

    // ==========================================================================
    // 3. SYSTEM GAME TTS (MODE LEVEL + PENILAIAN 15 SOAL + LEADERBOARD)
    // ==========================================================================
    const firebaseConfig = {
        apiKey: "AIzaSyAlXUbJFmikfqYk3jcpZryQUIrrklfh440",
        authDomain: "excellent-class-a-28.firebaseapp.com",
        databaseURL: "https://excellent-class-a-28-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "excellent-class-a-28",
        storageBucket: "excellent-class-a-28.firebasestorage.app",
        messagingSenderId: "144398051170",
        appId: "1:144398051170:web:3ba7d6cb0ae256c5402e3b"
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const database = firebase.database();
    const lbRef = database.ref('leaderboard_tts');

    // DYNAMIC LEVEL SELECTOR IN LOBBY
    const ttsLobbyCard = document.getElementById('ttsLobby');
    if (ttsLobbyCard && !document.getElementById('playerSelectLevel')) {
        const levelGroup = document.createElement('div');
        levelGroup.className = 'input-group-name';
        levelGroup.style.marginTop = '10px';
        levelGroup.innerHTML = `
            <select id="playerSelectLevel">
                <option value="Mudah">🟢 Tingkat: Mudah (Siswa SMP)</option>
                <option value="Sedang" selected>🟡 Tingkat: Sedang (Standar Class 8A)</option>
                <option value="Sulit">🔴 Tingkat: Sulit (Olimpiade/HOTs)</option>
            </select>
        `;
        const playBtnEl = document.getElementById('startTtsGameBtn');
        if (playBtnEl) ttsLobbyCard.insertBefore(levelGroup, playBtnEl);
    }

    // LEADERBOARD REAL-TIME + PODIUM TOP 3
    function listenLiveLeaderboard() {
        const lbList = document.getElementById('leaderboardList');
        const podiumContainer = document.getElementById('podiumContainer');
        if (!lbList) return;

        lbRef.orderByChild('detik').limitToFirst(20).on('value', (snapshot) => {
            lbList.innerHTML = '';
            
            if (!snapshot.exists()) {
                lbList.innerHTML = '<li class="lb-item"><span>Belum ada skor live...</span></li>';
                if (podiumContainer) podiumContainer.classList.add('hidden');
                return;
            }

            let rankList = [];
            snapshot.forEach((childSnapshot) => {
                rankList.push(childSnapshot.val());
            });

            if (podiumContainer) {
                if (rankList.length >= 1) {
                    podiumContainer.classList.remove('hidden');
                    
                    document.getElementById('podium1Name').textContent = rankList[0].nama ? rankList[0].nama.split(' ')[0] : "-";
                    document.getElementById('podium1Time').textContent = `${rankList[0].detik}s`;

                    if (rankList[1]) {
                        document.getElementById('podium2Name').textContent = rankList[1].nama.split(' ')[0];
                        document.getElementById('podium2Time').textContent = `${rankList[1].detik}s`;
                    } else {
                        document.getElementById('podium2Name').textContent = "-";
                        document.getElementById('podium2Time').textContent = "-";
                    }

                    if (rankList[2]) {
                        document.getElementById('podium3Name').textContent = rankList[2].nama.split(' ')[0];
                        document.getElementById('podium3Time').textContent = `${rankList[2].detik}s`;
                    } else {
                        document.getElementById('podium3Name').textContent = "-";
                        document.getElementById('podium3Time').textContent = "-";
                    }
                }
            }

            let index = 1;
            rankList.forEach((data) => {
                const li = document.createElement('li');
                li.className = 'lb-item';
                
                const m = Math.floor(data.detik / 60);
                const s = data.detik % 60;
                const timeText = m > 0 ? `${m}m ${s}s` : `${s} Detik`;

                li.innerHTML = `
                    <div class="lb-left">
                        <span class="lb-rank">#${index}</span>
                        <span class="lb-absen">Absen ${data.noAbsen}</span>
                        <span>${data.nama} <small style="opacity:0.7;">(${data.level || 'Sedang'})</small></span>
                    </div>
                    <div class="lb-right">
                        <span class="text-accent">${timeText}</span>
                        <span class="lb-bsk">${data.bsk || '0B / 0S / 0K'}</span>
                    </div>
                `;
                lbList.appendChild(li);
                index++;
            });
        });
    }

    listenLiveLeaderboard();

    // VARIABEL DAN KOORDINAT 15 SOAL TTS
    let currentPlayerAbsen = "";
    let currentPlayerName = "";
    let currentLevel = "Sedang";
    let secondsElapsed = 0;
    let timerInterval = null;

    const ttsQuestionsData = [
        { id: 1, type: 'H', x: 0, y: 0, answer: 'PEMBIASAN' },
        { id: 4, type: 'H', x: 2, y: 2, answer: 'ANTITHESIS' },
        { id: 6, type: 'H', x: 4, y: 4, answer: 'DEMAK' },
        { id: 8, type: 'H', x: 6, y: 6, answer: 'MENJALA' },
        { id: 10, type: 'H', x: 8, y: 8, answer: 'MOBILITAS' },
        { id: 12, type: 'H', x: 8, y: 10, answer: 'TASAMUH' },
        { id: 14, type: 'H', x: 10, y: 12, answer: 'MENGAPA' },
        { id: 15, type: 'H', x: 2, y: 14, answer: 'RIMA' },

        { id: 2, type: 'V', x: 1, y: 0, answer: 'KLOROPLAS' },
        { id: 3, type: 'V', x: 0, y: 2, answer: 'DIAMETER' },
        { id: 5, type: 'V', x: 2, y: 4, answer: 'PERSUASI' },
        { id: 7, type: 'V', x: 4, y: 6, answer: 'IDGHAMBIGHUNNAH' },
        { id: 9, type: 'V', x: 6, y: 8, answer: 'WALLACE' },
        { id: 11, type: 'V', x: 8, y: 10, answer: 'ENTAR' },
        { id: 13, type: 'V', x: 0, y: 12, answer: 'UNSUR' }
    ];

    let ttsBoardMap = {};

    function generateTTSCoordinates() {
        ttsBoardMap = {};
        ttsQuestionsData.forEach(q => {
            const letters = q.answer.split('');
            letters.forEach((char, idx) => {
                const posX = q.type === 'H' ? q.x + idx : q.x;
                const posY = q.type === 'V' ? q.y + idx : q.y;
                const key = `${posX}_${posY}`;

                if (!ttsBoardMap[key]) {
                    ttsBoardMap[key] = { letter: char, num: idx === 0 ? q.id : null };
                } else if (idx === 0) {
                    ttsBoardMap[key].num = q.id;
                }
            });
        });
    }

    function initTTSBoard() {
        const ttsBoard = document.getElementById('ttsBoard');
        if (!ttsBoard) return;

        generateTTSCoordinates();
        ttsBoard.innerHTML = '';

        const maxX = 18;
        const maxY = 16;

        ttsBoard.style.gridTemplateColumns = `repeat(${maxX}, 28px)`;
        ttsBoard.style.gridTemplateRows = `repeat(${maxY}, 28px)`;

        for (let y = 0; y < maxY; y++) {
            for (let x = 0; x < maxX; x++) {
                const key = `${x}_${y}`;
                const cellData = ttsBoardMap[key];

                const cellDiv = document.createElement('div');
                cellDiv.className = 'tts-cell';

                if (cellData) {
                    cellDiv.classList.add('active-cell');

                    if (cellData.num) {
                        const numSpan = document.createElement('span');
                        numSpan.className = 'cell-num';
                        numSpan.textContent = cellData.num;
                        cellDiv.appendChild(numSpan);
                    }

                    const input = document.createElement('input');
                    input.type = 'text';
                    input.maxLength = 1;
                    input.dataset.key = key;

                    input.addEventListener('keydown', (e) => {
                        if (e.key === 'Backspace' && input.value === '') {
                            input.value = '';
                        }
                    });

                    cellDiv.appendChild(input);
                }
                ttsBoard.appendChild(cellDiv);
            }
        }
    }

    function startTtsTimer() {
        clearInterval(timerInterval);
        secondsElapsed = 0;
        
        timerInterval = setInterval(() => {
            secondsElapsed++;
            const minutes = String(Math.floor(secondsElapsed / 60)).padStart(2, '0');
            const seconds = String(secondsElapsed % 60).padStart(2, '0');
            
            const timerDisplay = document.getElementById('ttsTimerDisplay');
            if (timerDisplay) {
                timerDisplay.textContent = `${minutes}:${seconds}`;
            }
        }, 1000);
    }

    // TOMBOL PLAY
    const startBtn = document.getElementById('startTtsGameBtn');
    const selectName = document.getElementById('playerSelectName');
    const ttsLobby = document.getElementById('ttsLobby');
    const ttsPlayArea = document.getElementById('ttsPlayArea');
    const activePlayerName = document.getElementById('activePlayerName');

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            const val = selectName ? selectName.value : "";
            if (!val) {
                alert("Harap pilih namamu dari daftar siswa terlebih dahulu!");
                return;
            }

            const parts = val.split('|');
            currentPlayerAbsen = parts[0];
            currentPlayerName = parts[1];

            const selectLevelEl = document.getElementById('playerSelectLevel');
            if (selectLevelEl) currentLevel = selectLevelEl.value;

            if (activePlayerName) {
                activePlayerName.textContent = `Absen ${currentPlayerAbsen} - ${currentPlayerName} (${currentLevel})`;
            }

            if (ttsLobby) ttsLobby.classList.add('hidden');
            if (ttsPlayArea) ttsPlayArea.classList.remove('hidden');

            initTTSBoard();
            startTtsTimer();
        });
    }

    // SUBMIT JAWABAN (AKUMULASI DARI TOTAL 15 SOAL)
    const submitBtn = document.getElementById('submitTtsBtn');
    const statusText = document.getElementById('ttsStatus');

    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            let hitungBenar = 0;
            let hitungSalah = 0;
            let hitungKosong = 0;

            // Evaluasi per nomor soal (1 Sampai 15 Soal)
            ttsQuestionsData.forEach(q => {
                const letters = q.answer.split('');
                let isAnyEmpty = false;
                let isAnyWrong = false;

                letters.forEach((char, idx) => {
                    const posX = q.type === 'H' ? q.x + idx : q.x;
                    const posY = q.type === 'V' ? q.y + idx : q.y;
                    const key = `${posX}_${posY}`;

                    const inputEl = document.querySelector(`.tts-cell input[data-key="${key}"]`);
                    if (inputEl) {
                        const val = inputEl.value.toUpperCase().trim();
                        if (!val) {
                            isAnyEmpty = true;
                        } else if (val !== char) {
                            isAnyWrong = true;
                        }
                    }
                });

                if (isAnyEmpty) {
                    hitungKosong++;
                } else if (isAnyWrong) {
                    hitungSalah++;
                } else {
                    hitungBenar++;
                }
            });

            // Kunci Papan & Hentikan Timer
            clearInterval(timerInterval);
            document.querySelectorAll('.tts-cell.active-cell input').forEach(inp => inp.disabled = true);
            submitBtn.disabled = true;
            submitBtn.style.opacity = "0.5";

            const bskText = `${hitungBenar}B / ${hitungSalah}S / ${hitungKosong}K`;

            statusText.style.color = "#2575fc";
            statusText.textContent = `🔒 Jawaban Terkunci! Hasil Kamu: ${bskText} dari 15 Soal (${secondsElapsed} Detik). Skor telah terkirim ke Live Leaderboard!`;

            // Langsung Kirim Ke Firebase Leaderboard
            lbRef.push({
                noAbsen: currentPlayerAbsen,
                nama: currentPlayerName,
                level: currentLevel,
                detik: secondsElapsed,
                bsk: bskText,
                timestamp: Date.now()
            });
        });
    }
});
