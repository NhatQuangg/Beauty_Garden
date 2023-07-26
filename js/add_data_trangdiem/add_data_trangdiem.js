
import data from '../add_data_trangdiem/trangdiem.js';
function gendata (data) {
    const products = document.querySelector(".content-grid");
    
    console.log(products);
    const courses = data.map(
        (item) =>
            `<div class="make-up-item">
                <div class="product_img">
                    <a href="" class="a-product">
                        <img src="${item.img}" alt="">
                    </a>
                </div>
                <div class="product_content">
                    <h3>
                        <a href="">
                            <p>${item.text}</p>
                        </a>
                    </h3>
                    <div class="price-product">
                        <span class="price-sales">${item.pr_sales}</span>
                        <span class="price">${item.price}</span>
                    </div>
                    <div class="icon-heart">
                        <i class="fa-regular fa-heart i-heart"></i>
                    </div>
                </div>
            </div>`
    );
    
    products.innerHTML = courses.join("");

}

gendata(data);

function phantrang(data){
    let thisPage = 1;
    let limit = 24;
    let list = document.querySelectorAll('.content-grid .make-up-item');
    
    console.log(list)
    
    function loadItem(){
        let beginGet = limit * (thisPage - 1);
        let endGet = limit * thisPage - 1;
        // item là từng item bên trong 
        // key là vị trí của item đó
        list.forEach((item, key) => {
            if(key >= beginGet && key <= endGet){
                // trỏ tới class item để thay đổi thuộc tính display: block
                item.style.display = 'block';
            }
            else{
                item.style.display = 'none';
            }
        })
        listPage();
    }
    loadItem();
    
    function listPage(){
        // tìm tổng số trang: tổng số item / số item trên 1 trang
        // dùng math.ceil để làm tròn
        let count = Math.ceil(list.length / limit);   
        document.querySelector('.listPage').innerHTML = '';
        
        if(thisPage != 1){
            let start = document.createElement('li');
            start.innerText = '««';
            start.addEventListener('click', () => {
                changePage(1);
            });
            // start.setAttribute('onclick', "changePage(" + 1 + ")");
            document.querySelector('.listPage').appendChild(start);
        }
        
        if(thisPage != 1){
            let prev = document.createElement('li');
            prev.innerText = '«';
            prev.addEventListener('click', () => {
                changePage(thisPage-1);
            });
            // prev.setAttribute('onclick', "changePage(" + (thisPage-1) + ")");
            document.querySelector('.listPage').appendChild(prev);
        }
    
    
        for(let i = 1; i <= count; i++) {
            let newPage = document.createElement('li');
            newPage.innerText = i;
            if(i == thisPage){
                newPage.classList.add('active');
            }
            newPage.addEventListener('click', () => {
                changePage(i);
            });
            // newPage.setAttribute('onclick', "changePage(" + i + ")");
            document.querySelector('.listPage').appendChild(newPage);
        }
        if(thisPage != count){
            let next = document.createElement('li');
            next.innerText = '»';
            next.addEventListener('click', () => {
                changePage(thisPage+1);
            });
            // next.setAttribute('onclick', "changePage(" + (thisPage+1) + ")");
            document.querySelector('.listPage').appendChild(next);
        }
    
        if(thisPage != count){
            let end = document.createElement('li');
            end.innerText = '»»';
            end.addEventListener('click', () => {
                changePage(count);
            });
            // end.setAttribute('onclick', "changePage(" + count + ")");
            document.querySelector('.listPage').appendChild(end);
        }
    }
    
    function changePage(i){
        thisPage = i;
        loadItem();
    }
}

phantrang(data);


let orderBy = document.querySelector(".sort-btn-right");
let arraytemp = [...data]
orderBy.addEventListener("change", () => {
    if (orderBy.value === "az") {
        arraytemp = sortAsc(arraytemp);
    } else if (orderBy.value === "za") {
        arraytemp = sortDesc(arraytemp);
    } else if(orderBy.value === "0") {
        arraytemp = [...data];
    }
    console.log(arraytemp);
    gendata(arraytemp);
    // pagination when sort
    phantrang(arraytemp);
});

function sortAsc(data) {
    return data.sort((a, b) => {
        return parseInt(a.pr_sales) - parseInt(b.pr_sales);
    });
    // return data;
}

function sortDesc(data) {
    return data.sort((a, b) => {
        return parseInt(b.pr_sales) - parseInt(a.pr_sales);
    });
    // return data;
}