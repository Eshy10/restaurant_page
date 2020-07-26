const navbar = (() => {
  const nav = document.createElement('nav');
  nav.setAttribute('class', 'navbar navbar-expand-lg navbar-dark bg-danger fixed-top');
  const containerDiv = document.createElement('div');
  containerDiv.setAttribute('class', 'container');
  const navBrand = document.createElement('a');
  navBrand.setAttribute('class', 'navbar-brand font-weight-bold');
  navBrand.setAttribute('href', '#');
  navBrand.innerHTML = 'EatBite<i class="fas fa-grin-tongue"></i>';
  const button = document.createElement('button');
  button.setAttribute('class', 'navbar-toggler');
  button.setAttribute('type', 'button');
  button.setAttribute('data-toggle', 'collapse');
  button.setAttribute('data-target', '#navbarResponsive');
  button.setAttribute('aria-controls', 'navbarResponsive');
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-label', 'Toggle navigation');
  const span = document.createElement('span');
  span.setAttribute('class', 'navbar-toggler-icon');
  button.appendChild(span);
  const navCollapse = document.createElement('div');
  navCollapse.setAttribute('class', 'collapse navbar-collapse');
  navCollapse.setAttribute('id', 'navbarResponsive');
  const navList = document.createElement('ul');
  navList.setAttribute('class', 'navbar-nav ml-auto');
  navList.setAttribute('id', 'nav-tab');
  navList.innerHTML = `
    <li class="nav-item active">
    <a class="nav-link" href="#">Home
          <span class="sr-only">(current)</span>
        </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#Menu">Menu</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#Contact">Contact</a>
  </li>
    `;
  containerDiv.appendChild(navBrand);
  containerDiv.appendChild(button);
  containerDiv.appendChild(navCollapse);
  navCollapse.appendChild(navList);
  nav.appendChild(containerDiv);
  return nav;
})();

export default navbar;