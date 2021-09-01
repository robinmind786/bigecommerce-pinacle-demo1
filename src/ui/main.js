import { getElement } from '../utils.js';


// Currency Dropdown
const curr = getElement('.sub-menu');
const dropdownMenu = getElement('.dropdown');

curr.addEventListener('click', function(){
	dropdownMenu.classList.toggle('displayDropdown')
});


// Category Show
const catBurger = getElement('#cat');
const category = getElement('.category');
const cateName = getElement('.category-name');

catBurger.addEventListener('click', function(e){
	const targetElement = e.target;
	if(targetElement.classList.contains('fa-bars') || targetElement.classList.contains('category-name') || targetElement.classList.contains('burger')) {
		category.classList.toggle('showCat');
		if(category.classList.contains('showCat')) {
			cateName.style.color = '#cb0039';
		} else {
			cateName.style.color = null;
		}
	}
});

// Sidenav
const sideBar = getElement('#sidenav')
const navLinks = getElement('.nav-links');
const close = getElement('.fa-times');

sideBar.addEventListener('click', function(){
	if(window.innerWidth < 600) {
		navLinks.style.width = "100%"
	} else {
		navLinks.style.width = "50%"
	}
});

close.addEventListener('click', function(){
	navLinks.style.width = "0"
});


// Topnav Dropdwon 

// const dropdownItem = document.querySelectorAll('.dropdown-item');
// const dropdownMenus = document.querySelectorAll('.dropdown-menu');


// dropdownItem.forEach(function(hasCollapsible) {
// 	hasCollapsible.addEventListener('click', function(){
// 		for(let i = 0; i < dropdownMenus.length; i++) {
// 			dropdownMenus[i].classList.toggle('showDropdwon')
// 		}

// 	});
// });


const hasCollapsible = document.querySelectorAll(".dropdownItem");

hasCollapsible.forEach(function (collapsible) {
  collapsible.addEventListener("click", function () {
    collapsible.classList.toggle("active");

    hasCollapsible.forEach(function (otherCollapsible) {
      if (otherCollapsible !== collapsible) {
        otherCollapsible.classList.remove("active");
      }
    });
  });
});


// Slider
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  // var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "block";  
  // dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000);
}