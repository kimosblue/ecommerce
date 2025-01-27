document.addEventListener('DOMContentLoaded', () => {
    // Burger menu functionality
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');

    // Toggle navigation
    burger?.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && nav.classList.contains('nav-active')) {
            nav.classList.remove('nav-active');
        }
    });

    // Close menu when clicking on a link
    navLinks?.addEventListener('click', () => {
        nav.classList.remove('nav-active');
    });

    // Favorites functionality
    const removeFavoriteButtons = document.querySelectorAll('.remove-favorite');
    
    removeFavoriteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const productCard = button.closest('.product-card');
            
            // Add fade-out animation
            productCard.style.opacity = '0';
            productCard.style.transform = 'scale(0.8)';
            
            // Remove the product card after animation
            setTimeout(() => {
                productCard.remove();
                updateFavoriteCount();
            }, 300);
        });
    });

    // Update favorite count in the header
    function updateFavoriteCount() {
        const favoriteCount = document.querySelector('.icon-link[href="favorites.html"] .icon-count');
        const productCards = document.querySelectorAll('.favorites-section .product-card');
        if (favoriteCount) {
            favoriteCount.textContent = productCards.length;
        }
    }
});
