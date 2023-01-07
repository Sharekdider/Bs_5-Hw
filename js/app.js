$(function () {
$('.banner_slider').slick({
    arrows: false,
    dots: true,
    dotsClass:'banner_slider_dots'
});

$('.new_arrival_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow:'<i class="fa-solid fa-chevron-left new_arrival_arrow"></i>',
    nextArrow:'<i class="fa-solid fa-chevron-right new_arrival_arrow"></i>',
    responsive: [
       {
          breakpoint: 992,
          settings: {
             slidesToShow: 3,
          }
       },
       {
          breakpoint: 768,
          settings: {
             slidesToShow: 2,
          }
       },
       {
          breakpoint: 576,
          settings: {
             slidesToShow: 1,
          }
       },
    ]
 })
})

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
     