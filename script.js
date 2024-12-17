// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fetch GitHub Repositories
fetch('https://api.github.com/users/yourusername/repos')
    .then(response => response.json())
    .then(data => {
        const portfolioGrid = document.querySelector('.portfolio-grid');
        data.forEach(repo => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || 'No description available.'}</p>
                <a href="${repo.html_url}" target="_blank" class="btn">View on GitHub</a>
            `;
            portfolioGrid.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching GitHub data:', error));
