document.addEventListener('DOMContentLoaded', () => {
    // 1. Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const fadeUpElements = document.querySelectorAll('.fade-in-up');
    fadeUpElements.forEach(el => observer.observe(el));

    // 2. Notification Logic
    const activateAlertBtn = document.getElementById('activateAlertBtn');
    const notificationPopup = document.getElementById('notification-popup');
    const closeNotificationBtn = document.getElementById('closeNotificationBtn');

    if (activateAlertBtn) {
        activateAlertBtn.addEventListener('click', () => {
            notificationPopup.style.display = 'flex';
            // Trigger reflow to restart animation
            void notificationPopup.offsetWidth; 
            notificationPopup.style.animation = 'pop-in-out 5s ease-in-out forwards';
        });
    }

    if (closeNotificationBtn) {
        closeNotificationBtn.addEventListener('click', () => {
            notificationPopup.style.display = 'none';
        });
    }

    // Hide notification after animation ends
    notificationPopup.addEventListener('animationend', (event) => {
        if (event.animationName === 'pop-in-out') {
            notificationPopup.style.display = 'none';
        }
    });
});