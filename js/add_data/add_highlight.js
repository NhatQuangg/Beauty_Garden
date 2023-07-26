import data from '../data/highlights.js';

const highlight = document.querySelector(".highlight-body");

// console.log(highlight);

const courses = data.map(
    (item) =>
        `<div class="highlight-item">
            <div class="highlight-img">
                <a href="" class="a-highlight">
                    <img src="${item.img}" alt="">
                </a>
            </div>
            <div class="highlight-content">
                    <a href="" >
                        <p class="p-content">${item.text}</p>
                    </a>
                <div class="highlight-info">
                    <p>${item.infor}</p>
                </div>
            </div>
        </div>` 
);

highlight.innerHTML = courses.join("");

// console.log(courses);