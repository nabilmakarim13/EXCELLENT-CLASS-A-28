document.addEventListener('DOMContentLoaded', () => {

    // --- 1. NAVIGASI TAB MENU ---
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.app-section');

    function switchSection(targetId) {
        navLinks.forEach(l => l.classList.remove('active'));
        sections.forEach(s => s.classList.add('hidden'));

        const activeLink = document.querySelector(`.nav-links a[href="#${targetId}"]`);
        const targetSection = document.getElementById(targetId);

        if (activeLink) activeLink.classList.add('active');
        if (targetSection) targetSection.classList.remove('hidden');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            switchSection(targetId);
        });
    });

    // --- 2. FITUR PENCARIAN SUPER AKURAT (CARI DI SEMUA BAGIAN) ---
    const searchInput = document.getElementById('memberSearch');

    searchInput.addEventListener('input', function(e) {
        const keyword = e.target.value.toLowerCase().trim();

        // Clean up highlight sebelumnya
        document.querySelectorAll('.search-highlight').forEach(el => el.classList.remove('search-highlight'));

        if (keyword === "") return;

        let foundElement = null;
        let foundSectionId = "";

        // A. Cari di Kartu Pengurus Utama
        const cards = document.querySelectorAll('.card[data-name]');
        cards.forEach(card => {
            const name = card.getAttribute('data-name').toLowerCase();
            if (name.includes(keyword)) {
                card.classList.add('search-highlight');
                if (!foundElement) {
                    foundElement = card;
                    foundSectionId = card.closest('.app-section').id;
                }
            }
        });

        // B. Cari di Anggota Seksi 7K
        const listItems = document.querySelectorAll('.member-list li');
        listItems.forEach(item => {
            const name = item.textContent.toLowerCase();
            const dataName = (item.getAttribute('data-name') || '').toLowerCase();
            if (name.includes(keyword) || dataName.includes(keyword)) {
                item.classList.add('search-highlight');
                if (!foundElement) {
                    foundElement = item;
                    foundSectionId = item.closest('.app-section').id;
                }
            }
        });

        // C. Cari di Jadwal Piket
        const piketItems = document.querySelectorAll('.subject-item');
        piketItems.forEach(item => {
            const name = item.textContent.toLowerCase();
            if (name.includes(keyword)) {
                item.classList.add('search-highlight');
                if (!foundElement) {
                    foundElement = item;
                    foundSectionId = item.closest('.app-section').id;
                    
                    // Buka tab hari piketnya otomatis
                    const dayContent = item.closest('.day-content');
                    if (dayContent) {
                        document.querySelectorAll('.day-content').forEach(d => d.classList.add('hidden'));
                        dayContent.classList.remove('hidden');
                        
                        const dayId = dayContent.id;
                        document.querySelectorAll('.tab-btn').forEach(b => {
                            if (b.getAttribute('data-day') === dayId) b.classList.add('active');
                            else b.classList.remove('active');
                        });
                    }
                }
            }
        });

        // D. Cari di Daftar Siswa Presensi
        const newsItems = document.querySelectorAll('.news-item');
        newsItems.forEach(item => {
            const name = item.textContent.toLowerCase();
            if (name.includes(keyword)) {
                item.classList.add('search-highlight');
                if (!foundElement) {
                    foundElement = item;
                    foundSectionId = item.closest('.app-section').id;
                }
            }
        });

        // Jika ketemu, otomatis ganti tab dan scroll ke lokasi nama itu!
        if (foundElement && foundSectionId) {
            switchSection(foundSectionId);
            foundElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });

    // --- 3. JADWAL PIKET TABS ---
    const tabBtns = document.querySelectorAll('.tab-btn');
    const dayContents = document.querySelectorAll('.day-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const day = this.getAttribute('data-day');

            tabBtns.forEach(b => b.classList.remove('active'));
            dayContents.forEach(c => c.classList.add('hidden'));

            this.classList.add('active');
            const targetContent = document.getElementById(day);
            if (targetContent) targetContent.classList.remove('hidden');
        });
    });

    // --- 4. MODAL DETAIL POP-UP ---
    const modal = document.getElementById('memberModal');
    const closeBtn = document.querySelector('.close-modal');
    const modalName = document.getElementById('modalName');
    const modalRole = document.getElementById('modalRole');
    const modalDept = document.getElementById('modalDept');

    function openModal(name, role, dept) {
        modalName.textContent = name;
        modalRole.textContent = role || 'Anggota Kelas';
        modalDept.textContent = dept || 'Aetherienz (VII-A)';
        modal.classList.remove('hidden');
        setTimeout(() => modal.style.opacity = '1', 10);
    }

    function closeModal() {
        modal.style.opacity = '0';
        setTimeout(() => modal.classList.add('hidden'), 300);
    }

    document.querySelectorAll('.card[data-name]').forEach(card => {
        card.addEventListener('click', () => {
            openModal(
                card.getAttribute('data-name'),
                card.getAttribute('data-role'),
                card.getAttribute('data-dept')
            );
        });
    });

    document.querySelectorAll('.member-list li').forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            openModal(
                item.getAttribute('data-name') || item.textContent,
                item.getAttribute('data-role') || 'Anggota Seksi',
                'Aetherienz (VII-A)'
            );
        });
    });

    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
});
