
@ -0,0 +1,25 @@
// Kiểm tra xem trang đã được tải hoàn toàn (DOM đã sẵn sàng)
document.addEventListener('DOMContentLoaded', function () {
    // Lấy thẻ có class="number-card"
    const numberCardElement = document.querySelector('.number-card');

    // Lấy thẻ có id="heart-click"
    const heartClickElement = document.getElementById('#heart-click');

    // Kiểm tra xem các phần tử đã tìm thấy có tồn tại không trước khi thêm sự kiện
    if (numberCardElement && heartClickElement) {
        // Gắn sự kiện click cho thẻ có id="heart-click"
        heartClickElement.addEventListener('click', () => {
            // Lấy giá trị hiện tại trong thẻ có class="number-card"
            let currentValue = parseInt(numberCardElement.innerText);

            // Tăng giá trị lên 1
            currentValue++;

            // Cập nhật giá trị mới vào thẻ có class="number-card"
            numberCardElement.innerText = currentValue;
        });
    } else {
        console.error('Các phần tử không tồn tại trong DOM.');
    }
});