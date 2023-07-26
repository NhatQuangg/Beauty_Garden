import data from '../data/feedback.js';

const feedback = document.querySelector(".feedback-body");

// console.log(highlight);

const courses = data.map(
    (item) =>
        `<div class="feedback-item">
            <div class="feedback-img">
                <img src="${item.img}" alt="">
            </div>
            <div class="feedback-content">
                <p>${item.fback}
                    <a href="${item.link}">Xem chi tiết</a>
                </p>
            </div>
            <p class="name-customer">
                <b>${item.name}</b>
            </p>
        </div>`
);

feedback.innerHTML = courses.join("");
