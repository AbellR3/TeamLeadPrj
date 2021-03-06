const buttons = document.querySelectorAll('.button_js');
const sendButton = document.querySelector('.sendButton_js');




const swiper = new Swiper('.swiper-container', {

    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});


(function () {
    buttons.forEach(function (elem,i, buttons) {
        elem.addEventListener('click',function () {
            sendButton.scrollIntoView({block:'center', behavior:'smooth'});
        })

    })
})();