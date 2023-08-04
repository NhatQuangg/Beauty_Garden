
import data from './add_data_detail/products_detail.js';
import {data2} from './add_data_detail/products_detail.js';
import {data3} from './add_data_detail/products_detail.js';

const products1 = document.querySelector(".body-box-detail");
const products2 = document.querySelector(".body-box-detail-2");
const products3 = document.querySelector(".body-box-detail-3");

// console.log(new_products);
console.log(products1);

    function ham(img, text, pr_sales, price) {
       return `<div class="product_item">
            <div class="product_img">
                <a href="" class = "a-product">        
                    <img src="${img}" alt="" class="product_img">
                </a>
            </div>
            <div class="product_content">
                <h3>
                    <a href="">
                        <p>${text}</p>
                    </a>    
                </h3>
                <div class="price-product">
                    <span class="price-sales">${pr_sales}</span>
                    <span class="price">${price}</span>
                </div>
                <div class="icon-heart" id="heart-click">
                        <i class="fa-regular fa-heart i-heart"></i>
                </div>
            </div>
            </div>`
    }

const courses = data.map((item) => ham(item.img, item.text, item.pr_sales, item.price))
products1.innerHTML = courses.join("");

const courses2 = data2.map((item) => ham(item.img, item.text, item.pr_sales, item.price))
products2.innerHTML = courses2.join("");

const courses3 = data3.map((item) => ham(item.img, item.text, item.pr_sales, item.price))
products3.innerHTML = courses3.join("");

// new_products.innerHTML = courses2.join("");