const contentArea = document.getElementById('content-area');
const navLinks = document.querySelectorAll('nav a');

function loadContent(url) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      contentArea.innerHTML = data;
      // Update active link after content loads
      updateActiveLink();
    })
    .catch(error => {
      contentArea.innerHTML = `Error loading content: ${error}`;
    });
}

function addScript(jsUrl) {
  var s = document.createElement('script');
  s.setAttribute('type', 'text/javascript');
  s.setAttribute('src', jsUrl);
  document.getElementsByTagName('body')[0].appendChild(s);
}
window.onload = function() {
  addScript('js/product-actions.js');
}
function updateActiveLink() {
  const currentURL = window.location.href;
  navLinks.forEach(link => {
    link.classList.remove('active'); // Remove active class from all links
    if (link.href === currentURL) {
      link.classList.add('active'); // Add active class to matching link
    }
  });
}

// Load products.html on page load (assuming it's in the same folder)
loadContent('sales.html');

// Navigation link click event listener code with active link update
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    loadContent(link.href);
  });
});

// Call updateActiveLink initially to set active link on page load
updateActiveLink();
