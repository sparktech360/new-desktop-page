// Theme toggle
const themeToggleBtn = document.getElementById('toggle-theme');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// Load theme from localStorage
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }

  // Highlight visited apps
  document.querySelectorAll('.app-link').forEach(link => {
    const appName = link.dataset.name;
    if (localStorage.getItem(`visited-${appName}`)) {
      link.style.border = '2px solid limegreen';
    }

    link.addEventListener('click', () => {
      localStorage.setItem(`visited-${appName}`, 'true');
    });
  });
});
