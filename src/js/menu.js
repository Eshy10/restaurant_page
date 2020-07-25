export const Menu = [
    {
      id: 1,
      title: "Sliced Tomato with pork",
      category: "Dinner",
      price:25.99,
      img: 'https://images.unsplash.com/photo-1548029960-695d127f4543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=6',
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Nostrum odit, aut praesentium optio necessitatibus reprehenderit 
      perspiciatis possimus nemo! Facere, reprehenderit!`
    },
    {
      id: 2,
      title: "Burger with lettuce",
      category: "Lunch",
      price:15.99,
      img: 'https://images.unsplash.com/photo-1550950158-d0d960dff51b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Nostrum odit, aut praesentium optio necessitatibus reprehenderit 
      perspiciatis possimus nemo! Facere, reprehenderit!`
    },
    {
      id: 3,
      title: "Waffle pancakes",
      category: "Breakfast",
      price:25.99,
      img: 'https://images.unsplash.com/photo-1459789034005-ba29c5783491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Nostrum odit, aut praesentium optio necessitatibus reprehenderit 
      perspiciatis possimus nemo! Facere, reprehenderit!`
    },
    {
      id: 4,
      title: "Pasta with banana",
      category: "Dinner",
      price:28.99,
      img: 'https://images.unsplash.com/photo-1548029960-695d127f4543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Nostrum odit, aut praesentium optio necessitatibus reprehenderit 
      perspiciatis possimus nemo! Facere, reprehenderit!`
    },
    {
      id: 5,
      title: "Potatoes and Tomato",
      category: "Breakfast",
      price:32.99,
      img: 'https://images.unsplash.com/photo-1575464362889-408fe193b18f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Nostrum odit, aut praesentium optio necessitatibus reprehenderit 
      perspiciatis possimus nemo! Facere, reprehenderit!`
    },
    {
      id: 6,
      title: "Vegetable Salad",
      category: "Lunch",
      price:25.99,
      img: 'https://images.unsplash.com/photo-1557038684-abb03178899e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Nostrum odit, aut praesentium optio necessitatibus reprehenderit 
      perspiciatis possimus nemo! Facere, reprehenderit!`
    }
  ]

export const menu = (()=> {
const menuSection = document.createElement('section');
menuSection.setAttribute('class', 'my-5');
const menuCtn = document.createElement('div');
menuCtn.setAttribute('class', 'container');
const rowMenu = document.createElement('div');
rowMenu.setAttribute('class', 'row');
const colMenu = document.createElement('div');
colMenu.setAttribute('class', 'col-md-12 mx-auto');
const menuTitle = document.createElement('h3');
menuTitle.setAttribute('class', 'text-center menu');
menuTitle.textContent = 'Menu';
const menuBtn = document.createElement('div');
menuBtn.setAttribute('class', 'menu-btn mt-2');
const menuObj = document.createElement('div');
menuObj.setAttribute('class', 'menu-obj mt-4');
colMenu.appendChild(menuTitle);
colMenu.appendChild(menuBtn);
colMenu.appendChild(menuObj);
rowMenu.appendChild(colMenu);
menuCtn.appendChild(rowMenu);
menuSection.appendChild(menuCtn);
return menuSection;
})();
