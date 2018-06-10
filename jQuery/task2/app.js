// $(function () {
//     $(".box").on("click", function () {
//         $('.box').animate({
//             left: "30px",
//             width : "+=500px",
//             height: "+=100px",   

//         }, 500);
//     })
// });

$(function () {
    $(document).ready(function () {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }

        });
    })
});