// Slider đầu
$(document).ready(function () {
    $(".img-slider").slick({
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        // làm mất 2 mũi tên trái phải
        // arrows: false,
        prevArrow:"<button type='button' class='slick-prev-slider slick-arrow-slider'><i class='fa-solid fa-angle-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next-slider slick-arrow-slider'><i class='fa-solid fa-angle-right'></i></button>",
    });
});

// Slider sản phẩm nổi bật
$(document).ready(function(){
    $(".body-box").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: false,
        speed: 400,
        // autoplay: true,
        // autoplaySpeed: 1500,
        prevArrow:"<button type='button' class='slick-prev-product slick-arrow-product'><i class='fa-solid fa-angle-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next-product slick-arrow-product'><i class='fa-solid fa-angle-right'></i></button>",
    });
  });

// Slider sản phẩm mới về
$(document).ready(function(){
    $(".new-body-box").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: false,
        speed: 400,
        // autoplay: true,
        // autoplaySpeed: 1500,
        prevArrow:"<button type='button' class='slick-prev-product slick-arrow-product'><i class='fa-solid fa-angle-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next-product slick-arrow-product'><i class='fa-solid fa-angle-right'></i></button>",
    });
  });


$(document).ready(function(){
    $(".scroll-box").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 1500,
        prevArrow:"<button type='button' class='slick-prev-brand slick-arrow-brand'><i class='fa-solid fa-angle-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next-brand slick-arrow-brand'><i class='fa-solid fa-angle-right'></i></button>",
    });
});

// Thông tin nổi bật
$(document).ready(function(){
    $(".highlight-body").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        speed: 500,
        // autoplay: true,
        // autoplaySpeed: 1500,
        prevArrow:"<button type='button' class='slick-prev-highlight slick-arrow-highlight'><i class='fa-solid fa-angle-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next-highlight slick-arrow-highlight'><i class='fa-solid fa-angle-right'></i></button>",
    });
});

// Đánh giá khách hàng
$(document).ready(function(){
    $(".feedback-body").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        speed: 500,
        // autoplay: true,
        // autoplaySpeed: 1500,
        prevArrow:"<button type='button' class='slick-prev-feedback slick-arrow-feedback'><i class='fa-solid fa-angle-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next-feedback slick-arrow-feedback'><i class='fa-solid fa-angle-right'></i></button>",
    });
});

// Hệ thống cửa hàng
$(document).ready(function(){
    $(".stores-body").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        speed: 200,
        // autoplay: true,
        // autoplaySpeed: 1500,
        prevArrow:"<button type='button' class='slick-prev-stores slick-arrow-stores'><i class='fa-solid fa-angle-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next-stores slick-arrow-stores'><i class='fa-solid fa-angle-right'></i></button>",
    });
});

// chi tiết sản phẩm
// $(document).ready(function(){
//     $(".box-thumnail-detail").slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         infinite: false,
//         speed: 200,
//         // autoplay: true,
//         // autoplaySpeed: 1500,
//         prevArrow:"<button type='button' class='slick-prev-stores slick-arrow-stores'><i class='fa-solid fa-angle-left'></i></button>",
//         nextArrow:"<button type='button' class='slick-next-stores slick-arrow-stores'><i class='fa-solid fa-angle-right'></i></button>",
//     });
// });

// chi tiết sản phẩm 
    // sản phẩm cùng xem
$(document).ready(function(){
    $(".body-box-detail").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        speed: 400,
        // autoplay: true,
        // autoplaySpeed: 1500,
        prevArrow:"<button type='button' class='slick-prev-product slick-arrow-product'><i class='fa-solid fa-angle-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next-product slick-arrow-product'><i class='fa-solid fa-angle-right'></i></button>",
    });
  });

    // sản phẩm MUA CÙNG

  $(document).ready(function(){
    $(".body-box-detail-2").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        speed: 400,
        // autoplay: true,
        // autoplaySpeed: 1500,
        prevArrow:"<button type='button' class='slick-prev-product slick-arrow-product'><i class='fa-solid fa-angle-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next-product slick-arrow-product'><i class='fa-solid fa-angle-right'></i></button>",
    });
  });
    // sản phẩm cùng loại
  $(document).ready(function(){
    $(".body-box-detail-3").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        speed: 400,
        // autoplay: true,
        // autoplaySpeed: 1500,
        prevArrow:"<button type='button' class='slick-prev-product slick-arrow-product'><i class='fa-solid fa-angle-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next-product slick-arrow-product'><i class='fa-solid fa-angle-right'></i></button>",
    });
  });  