// Get the current year and set it in the footer
document.addEventListener('DOMContentLoaded', (event) => {
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
  });
  