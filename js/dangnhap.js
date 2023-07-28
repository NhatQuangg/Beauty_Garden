
const signBtn = document.querySelector('.js__signin')
const modal = document.querySelector('.js__modal__dn')
const modalContainer = document.querySelector('.js__modal__container__dn')
const modalClose = document.querySelector('.js__modal__close__dn')

// hàm hiển thị form modal Đăng ký (thêm class open vào modal)
function showSignUp() {
    modal.classList.add('open')
}

// nghe hành vi click vào nút button Đăng kí
signBtn.addEventListener('click', showSignUp)

// hàm ẩn form modal Đăng ký (xóa class open trong modal)
function closeSignUp() {
    modal.classList.remove('open')
}

// nghe hành vi click vào nút button Close
modalClose.addEventListener('click',closeSignUp )

modal.addEventListener('click', closeSignUp)

// kích vào thẻ con của modal thì k bị close form signup
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})
