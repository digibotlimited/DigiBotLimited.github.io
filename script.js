const themeSwitcher = document.getElementById('themeSwitcher');
const body = document.body;

themeSwitcher.addEventListener('click', () => {
    if (body.classList.contains('dark')) {
        body.classList.replace('dark', 'light');
        themeSwitcher.textContent = 'Dark Mode';
    } else {
        body.classList.replace('light', 'dark');
        themeSwitcher.textContent = 'Light Mode';
    }
});
