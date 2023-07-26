import data from '../data/selling_products.js';
import {data3} from '../data/selling_products.js';

const products = document.querySelector(".body-selling");
const new_products = document.querySelector(".body-make-up");
// console.log(new_products);
// console.log(products);
    function ham(img, text, pr_sales, price) {
       return `<div class="product_selling_item">
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
                        <div class="icon-heart">
                                <i class="fa-regular fa-heart i-heart"></i>
                        </div>
                    </div>
                </div>`
    }

const courses = data.map((item) => ham(item.img, item.text, item.pr_sales, item.price))
products.innerHTML = courses.join("");

const courses2 = data3.map((item) => ham(item.img, item.text, item.pr_sales, item.price))
new_products.innerHTML = courses2.join("");

// console.log(courses2);