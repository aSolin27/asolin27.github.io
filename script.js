$(document).ready(function () {
    // Слайдер для палеток
    $('.product-gallery').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true, // Показывать стрелки
        dots: true, // Показывать точки навигации
        autoplay: true, // Автоматическая прокрутка
        autoplaySpeed: 3000, // Скорость прокрутки
        centerMode: true // Центрировать активный слайд
    });
});
