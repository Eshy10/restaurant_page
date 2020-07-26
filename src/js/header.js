import videoHead from './Sizzling.mp4';

export const header = (()=> {
const head = document.createElement('header');
head.setAttribute('id', 'header');
const overlay = document.createElement('div');
overlay.setAttribute('class', 'overlay');
const video = document.createElement('video');
video.setAttribute('playsinline', 'playsinline');
video.setAttribute('autoplay', 'autoplay');
video.setAttribute('muted', 'muted');
video.setAttribute('loop', 'loop');
video.innerHTML = `<source src=${videoHead} type="video/mp4">`
const mainContainer = document.createElement('div');
mainContainer.setAttribute('class', 'container h-100')
const videoContainer = document.createElement('div');
videoContainer.setAttribute('class', 'container h-100');
const itemContainer = document.createElement('div');
itemContainer.setAttribute('class', 'd-flex h-100 text-center align-items-center');
const itemHolder = document.createElement('div');
itemHolder.setAttribute('class', 'w-100 text-white');
const countdown = document.createElement('div');
countdown.setAttribute('class', 'countdown');
countdown.setAttribute('id', 'countdown');
const countdownTitle = document.createElement('h1');
countdownTitle.setAttribute('id', 'countdown-title');
countdownTitle.innerHTML = `Special Offer! Order online now...<i class="fas fa-smile-wink"></i>`
const timeList = document.createElement('ul');
timeList.innerHTML = `
<li><span class="day"></span>Days</li>
<li><span class="month"></span>Hours</li>
<li><span class="minute"></span>Minutes</li>
<li><span class="second"></span>Seconds</li>
`
countdown.appendChild(countdownTitle);
countdown.appendChild(timeList);
itemHolder.appendChild(countdown);
itemContainer.appendChild(itemHolder);
mainContainer.appendChild(itemContainer);
head.appendChild(overlay);
head.appendChild(video);
head.appendChild(mainContainer);

return head;
})();
