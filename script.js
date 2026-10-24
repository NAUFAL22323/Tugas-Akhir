        // ===== LOGIKA FITUR RATING =====
        document.addEventListener('DOMContentLoaded', function() {
            const stars = document.querySelectorAll('.star-rating i');
            const statusText = document.getElementById('rating-status');
            
            // Cek apakah user sudah pernah memberi rating sebelumnya di browser ini
            const savedRating = localStorage.getItem('portfolioRating');
            if (savedRating) {
                kunciBintang(savedRating);
                statusText.innerText = `Terima kasih! Anda telah memberi rating ${savedRating} bintang.`;
            } else {
                aktifkanFiturRating();
            }

            function aktifkanFiturRating() {
                stars.forEach(star => {
                    // Efek saat kursor masuk (Hover)
                    star.addEventListener('mouseover', function() {
                        const currentVal = this.getAttribute('data-value');
                        sorotBintang(currentVal);
                    });

                    // Efek saat kursor keluar jika belum klik
                    star.addEventListener('mouseout', function() {
                        resetBintang();
                    });

                    // Efek saat bintang di-klik
                    star.addEventListener('click', function() {
                        const clickedVal = this.getAttribute('data-value');
                        localStorage.setItem('portfolioRating', clickedVal);
                        kunciBintang(clickedVal);
                        statusText.innerText = `MAKASIH BUAT YANG UDAH RATING ${clickedVal} KONTOL`;
                        
                        // Menonaktifkan event listener agar tidak bisa diubah lagi
                        hilangkanEventRating();
                    });
                });
            }

            function sorotBintang(value) {
                stars.forEach(star => {
                    if (parseInt(star.getAttribute('data-value')) <= value) {
                        star.classList.replace('fa-regular', 'fa-solid');
                        star.style.color = '#d4af37'; // Emas terang
                        star.style.transform = 'scale(1.15)';
                    } else {
                        star.classList.replace('fa-solid', 'fa-regular');
                        star.style.color = '#666';
                        star.style.transform = 'scale(1)';
                    }
                });
            }

            function resetBintang() {
                stars.forEach(star => {
                    star.classList.replace('fa-solid', 'fa-regular');
                    star.style.color = '#666';
                    star.style.transform = 'scale(1)';
                });
            }

                function kunciBintang(value) {
        const stars = document.querySelectorAll('.star-rating i');
        stars.forEach(star => {
            if (parseInt(star.getAttribute('data-value')) <= value) {
                star.classList.replace('fa-regular', 'fa-solid');
                star.style.color = '#f3cf55'; // Warna emas portofolio
            } else {
                star.classList.replace('fa-solid', 'fa-regular');
                star.style.color = '#333'; // Meredupkan sisanya
            }
            star.style.cursor = 'default';
            star.style.transform = 'none';
        });
    }


            function hilangkanEventRating() {
                // Mengganti elemen bintang dengan clone dirinya sendiri untuk memutus Event Listener
                const oldContainer = document.querySelector('.star-rating');
                const newContainer = oldContainer.cloneNode(true);
                oldContainer.parentNode.replaceChild(newContainer, oldContainer);
            }
        });