
window.sortingPrice = function() {
    let valueSelect = document.querySelector(".sort-btn-right").value;

    currentArray.sort((a, b) => {
        const collator = new Intl.Collator("vi-VN", {numeric: true});
        if (valueSelect === "az") {
            return collator.compare(a.pr_sales, b.pr_sales);
        } else if (valueSelect === "za") {
            return collator.compare(b.pr_sales, a.pr_sales);
        } else {
            return;
        }
    });
    const co = currentArray.map((item) => ham(item.img, item.text, item.pr_sales, item.price));
    products.innerHTML = co.join("");
}