// import data from './products.js';

// const products = document.querySelector(".body-box");
// const products = document.querySelectorAll(".body-box");

// console.log(products);
// const courses = data.map(
//     (item) =>
//         `<div class="product_item">
//             <div class="product_img">
//                 <a href="" class = "a-product">        
//                     <img src="${item.img}" alt="" class="product_img">
//                 </a>
//              </div>
//             <div class="product_content">
//                 <h3>
//                     <a href="">${item.text}</a>    
//                 </h3>
//                 <div class="price-product">
//                     <span class="price-sales">${item.pr_sales}</span>
//                     <span class="price">${item.price}</span>
//                 </div>
//                 <div class="icon-heart">
//                         <i class="fa-regular fa-heart i-heart"></i>
//                 </div>
//             </div>
//         </div>`
// );

// products.innerHTML = courses.join("");

// for (const iterator of products) {
//     iterator.innerHTML = courses.join("");
// }


// --------------------------------------------------------

import data from '../data/products.js';
import {data2} from '../data/products.js';

const products = document.querySelector(".body-box");
const new_products = document.querySelector(".new-body-box");
console.log(new_products);
console.log(products);
    function ham(img, text, pr_sales, price, link) {
       return `<div class="product_item">
            <div class="product_img">
                <a href="${link}" class = "a-product">        
                    <img src="${img}" alt="" class="product_img">
                </a>
            </div>
            <div class="product_content">
                <h3>
                    <a href="${link}">
                        <p>${text}</p>
                    </a>    
                </h3>
                <div class="price-product">
                    <span class="price-sales">${pr_sales}</span>
                    <span class="price">${price}</span>
                </div>
                <div class="icon-heart">
                        <i class="fa-regular fa-heart i-heart"></i>
                </div>
            </div>
            </div>`
    }

const courses = data.map((item) => ham(item.img, item.text, item.pr_sales, item.price, item.link))
products.innerHTML = courses.join("");

const courses2 = data2.map((item) => ham(item.img, item.text, item.pr_sales, item.price, item.link))
new_products.innerHTML = courses2.join("");

// console.log(courses2);

