const prevBg = document.getElementById("header-prev");
const nextBg = document.getElementById("header-next");
console.log(prevBg, nextBg);

const anchors = document.querySelectorAll(`a[href*="#"]`)

for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockId = anchor.getAttribute("href");
        document.querySelector("" + blockId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

const swiper = new Swiper('.mySwiper', {
    speed: 400,
    spaceBetween: 100,
    slidesPerView: 3,
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 30
        },
      }

});

const nextBtn = document.querySelector(".swiper-button-next");
const prevBtn = document.querySelector(".swiper-button-prev");

nextBtn.addEventListener("click", function(){
    swiper.slideNext();
})
prevBtn.addEventListener("click", function(){
    swiper.slidePrev();
});


const arrProductsElemets =  document.querySelectorAll(".category-card");

for (let i = 0; i < arrProductsElemets.length; i++) {
    const element = arrProductsElemets[i];
    element.addEventListener("click", function(){
        for (let i = 0; i < arrProductsElemets.length; i++) {
            const elementAnother = arrProductsElemets[i];
            if (elementAnother.classList.contains("category-card_active")) {
                elementAnother.classList.remove("category-card_active");
            }
        }
        element.classList.add("category-card_active");
    })
    if (i === 1) {
        element.classList.add("category-card_active");
    }

}


