import './styles/style.scss';
import navbar from './js/navbar';
import header from './js/header';
import { menu, Menu } from './js/menu';
import { sectionTestimonial, Testimonial } from './js/testimonial';
import callAction from './js/call';
import footer from './js/footer';

const content = document.querySelector('#content');
content.appendChild(navbar);
content.appendChild(header);
content.appendChild(menu);
content.appendChild(sectionTestimonial);
content.appendChild(callAction);
content.appendChild(footer);
/* eslint-disable */
const headerTime = (() => {
      /* eslint-enable */
  const countDownDate = new Date('Jan 5, 2021 15:37:25').getTime();
  const x = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = document.querySelector('.day');
    const hours = document.querySelector('.month');
    const minutes = document.querySelector('.minute');
    const seconds = document.querySelector('.second');

    days.textContent = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours.textContent = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes.textContent = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds.textContent = Math.floor((distance % (1000 * 60)) / 1000);
    if (distance < 0) {
      clearInterval(x);
      document.getElementById('countdown-title').innerHTML = 'EXPIRED';
    }
  }, 1000);
})();
/* eslint-disable */
const menuDisplay = (() => {
      /* eslint-enable */
  const allMenu = document.querySelector('.menu-obj');
  const menuCategoryBtn = document.querySelector('.menu-btn');

  const displayTestimonial = (testimonialItems) => {
    const testimonial = document.querySelector('#test');
    const displayTest = testimonialItems.map((item) => ` 
      <div class="col-lg-4">
            <div class="testimonial-item mx-auto mb-5 mb-lg-0">
      <img class="img-fluid rounded-circle mb-3" src=${item.image} alt="image">
      <h5>${item.name}</h5>
      <p class="font-weight-light mb-0">${item.text}</p>
      </div>
      </div>
      `).join('');
    testimonial.innerHTML = displayTest;
  };
  const displayMenuItems = (menuItems) => {
    const displayMenu = menuItems.map((item) => `  <div class="menu-items">
      <img class="img-responsive" src= ${item.img}>
      <div>
      <h6 class="font-weight-bold">${item.title}<span>$${item.price}</span></h6>
      <p class="text-secondary">${item.desc}</p>
      </div>
     </div>`).join('');
    allMenu.innerHTML = displayMenu;
  };
  const displayBtn = () => {
    const categories = Menu.reduce((values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    }, ['All']);
    const categoryBtn = categories.map((category) => `<button class="menu-btns btn btn-outline-danger" data-id=${category}>${category}</button>`).join('');
    menuCategoryBtn.innerHTML = categoryBtn;
    const filterBtns = document.querySelectorAll('.menu-btns');
    // filter Menu
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        const category = event.currentTarget.dataset.id;
        /* eslint-disable */
        const menuCategory = Menu.filter((menuItem) => {
              /* eslint-enable */
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === 'All') {
          displayMenuItems(Menu);
        } else {
          displayMenuItems(menuCategory);
        }
      });
    });
  };

  const onTabClick = (event) => {
    const activeTabs = document.querySelectorAll('.active');

    // deactivate existing active tab and panel
    activeTabs.forEach((tab) => {
      tab.className = tab.className.replace('active', '');
    });
    const menuTitle = document.querySelector('#Menu-head');
    const link = event.target.parentElement.children[0];
    if (link.getAttribute('href') === '#Menu') {
      header.classList.add('display');
      sectionTestimonial.classList.add('display');
      menuTitle.classList.add('menu-height');
      menu.style.display = 'block';
      callAction.style.display = 'none';
    } else if (link.getAttribute('href') === '#Contact') {
      callAction.classList.remove('display');
      header.classList.add('display');
      sectionTestimonial.classList.add('display');
      callAction.style.display = 'block';
      menu.style.display = 'none';
    } else {
      header.classList.remove('display');
      sectionTestimonial.classList.remove('display');
      callAction.classList.remove('display');
      menuTitle.classList.remove('menu-height');
      menu.classList.remove('display');
      callAction.style.display = 'block';
      menu.style.display = 'block';
    }
    event.target.parentElement.className += ' active';
  };

  window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(Menu);
    displayBtn();
    displayTestimonial(Testimonial);
    const element = document.getElementById('nav-tab');
    element.addEventListener('click', onTabClick, false);
  });
})();
