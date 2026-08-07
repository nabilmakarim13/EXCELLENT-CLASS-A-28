document.addEventListener('DOMContentLoaded', () => {

    // --- 1. NAVIGASI HALAMAN (TABBING) ---
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.app-section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Hapus class active dari nav dan sembunyikan semua section
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.add('hidden'));

            // Tambahkan active ke yang diklik dan tunjukkan section yang sesuai
            this.classList.add('active');
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).classList.remove('hidden');
        });
    });

    // --- 2. FITUR PENCARIAN PENGURUS ---
    const searchInput = document.getElementById('memberSearch');
    const allCards = document.querySelectorAll('.card[data-name]');
    const allListItems = document.querySelectorAll('.member-list li[data-name]');

    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();

        // Reset highlights
        allCards.forEach(c => c.classList.remove('search-highlight'));
        allListItems.forEach(i => i.classList.remove('text-accent'));

        if (searchTerm === "") return;

        let found = false;

        // Cari di kartu utama
        allCards.forEach(card => {
            const name = card.getAttribute('data-name').toLowerCase();
            if (name.includes(searchTerm)) {
                card.classList.add('search-highlight');
                if (!found) { // Scroll ke item pertama yang ditemukan
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    found = true;
                }
            }
        });

        // Cari di list seksi
        allListItems.forEach(item => {
            const name = item.getAttribute('data-name').toLowerCase();
            if (name.includes(searchTerm)) {
                item.classList.add('text-accent');
                if (!found) {
                    item.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    found = true;
                }
            }
        });
    });

    // --- 3. MODAL DETAIL ANGGOTA ---
    const modal = document.getElementById('memberModal');
    const closeBtn = document.querySelector('.close-modal');
    const modalName = document.getElementById('modalName');
    const modalRole = document.getElementById('modalRole');
    const modalDept = document.getElementById('modalDept');

    // Fungsi Buka Modal
    function openModal(element) {
        const name = element.getAttribute('data-name');
        const role = element.getAttribute('data-role');
        const dept = element.getAttribute('data-dept');

        if (name) {
            modalName.textContent = name;
            modalRole.textContent = role;
            modalDept.textContent = dept;
            modal.classList.remove('hidden');
            // Tambahkan sedikit delay untuk animasi css
            setTimeout(() => modal.style.opacity = '1', 10); 
        }
    }

    // Fungsi Tutup Modal
    function closeModal() {
        modal.style.opacity = '0';
        setTimeout(() => modal.classList.add('hidden'), 300); // Sesuai durasi transisi CSS
    }

    // Event Listener untuk elemen yang bisa diklik
    allCards.forEach(card => {
        card.addEventListener('click', () => openModal(card));
    });

    allListItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation(); // Cegah bubbling
            openModal(item);
        });
    });

    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    // Tutup dengan tombol Esc
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
    });


    // --- 4. INTERAKSI JADWAL PELAJARAN (TABS) ---
    const tabBtns = document.querySelectorAll('.tab-btn');
    const dayContents = document.querySelectorAll('.day-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const day = this.getAttribute('data-day');

            // Reset tabs dan konten
            tabBtns.forEach(b => b.classList.remove('active'));
            dayContents.forEach(c => {
                c.classList.add('hidden');
                c.classList.remove('active');
            });

            // Aktifkan tab dan konten yang dipilih
            this.classList.add('active');
            const targetContent = document.getElementById(day);
            targetContent.classList.remove('hidden');
            setTimeout(() => targetContent.classList.add('active'), 10);
        });
    });
});
