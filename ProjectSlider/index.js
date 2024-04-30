let images = [{
  img: 'img/image 1.jpg',
  title: "Rostov-on-Don Admiral",
  city: 'Rostov-on-Don LCD admiral',
  area: '81 m2',
  time: '3.5 months'
}, {
  img: 'img/image 2.jpg',
  title: "Sochi Thieves",
  city: 'Sochi Thieves',
  area: '105 m2',
  time: '4 months'
}, {
  img: 'img/image 3.jpg', 
  title: "Rostov-on-Don Patriotic",
  city: 'Rostov-on-Don LCD admiral',
  area: '93 m2',
  time: '3 months'
}];

function initSlider(options) {
  if (!images || !images.length) return;
  
  options = options || {
    dots: true,
    links: true
  };
  
  let sliderImages = document.querySelector(".slider-images");
  let sliderDots = document.querySelector(".slider__dots");
  let sliderLink = document.querySelector('.header-navigation');
  const city = document.querySelector(".city");
  const time = document.querySelector(".time");
  const area = document.querySelector(".area");

  if (options.titles) {
    initTitles();
  }

  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<img class="image n${index} ${index === 0? "active" : ""}" src="${image.img}" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    });
  }
  
  function initArrows() {
    document.querySelectorAll(".slider__arrows").forEach(arrow => {
      arrow.addEventListener("click", function() {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
        }
        NextText(nextNumber);
        moveSlider(nextNumber);
      });
    });
  }
  
  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    document.querySelectorAll(".slider__dots-item").forEach(dot => {
      dot.addEventListener("click", function() {
        moveSlider(this.dataset.index);
        NextText(this.dataset.index);
      })
    })
  }
  
  function moveSlider(num) {
    console.log(num);
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");
    sliderLink.querySelector(".active").classList.remove("active");
    sliderLink.querySelector(".n" + num).classList.add("active");
    if (options.dots) {
      sliderDots.querySelector(".active").classList.remove("active");
      sliderDots.querySelector(".n" + num).classList.add("active");
    }
  }

  function changeLink() {
      images.forEach((image, index) => {
        let links = `<li class="completed-projects-item n${index} ${index === 0? "active" : ""}" data-index="${index}">${image.title}</li>`;
        sliderLink.innerHTML += links;
      });
      document.querySelectorAll(".completed-projects-item").forEach(link => {
        link.addEventListener("click", function() {
          moveSlider(this.dataset.index);
          NextText(this.dataset.index);
        })
      })
  }

  function NextText(num){
    city.innerText = images[num].city;
    time.innerText = images[num].time;
    area.innerText = images[num].area;
  }

  initImages();

  initArrows();

  initDots();

  changeLink();

  initTitles();

}

let sliderOptions = {
  dots: true,
  links: true,
};

document.addEventListener("DOMContentLoaded", function() {
  initSlider(sliderOptions);
});