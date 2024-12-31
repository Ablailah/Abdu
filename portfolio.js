// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth',
            });
        }
    });
});

// Form Submission Alert
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    form.reset();
});

function expandImage(img) {
    const modal = document.getElementById("imageModal");
    const expandedImg = document.getElementById("expandedImg");
    expandedImg.src = img.src;
    modal.style.display = "flex";
}

function closeModal(event) {
    const modal = document.getElementById("imageModal");
    if (event.target === modal || event.target.classList.contains("close-btn")) {
        modal.style.display = "none";
    }
}

