import "./styles/style.scss";
import { navbar } from './js/navbar';
import { header } from './js/header';

const content = document.querySelector('#content');
content.appendChild(navbar);
content.appendChild(header);

const headerTime = (() => {
    let countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
    let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = document.querySelector(".day")
    let hours = document.querySelector(".month")
    let minutes = document.querySelector(".minute")
    let seconds = document.querySelector(".second")
    
    days.textContent = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours.textContent = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes.textContent = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds.textContent = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown-title").innerHTML = "EXPIRED";
      }
    }, 1000);
    })();

 
