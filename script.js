// Active header
let sections = document.querySelectorAll('list');
let nav_links = document.querySelectorAll('header nav_links a');

window.onscroll = () => {
  sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height) {
        nav_links.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav_links a[href*=' + id + ']').classList.add('active');
        });
      };
   });
  };


//  Portfolio Collection images swiper
const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });
 

