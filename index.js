let flag = JSON.parse(localStorage.getItem("flag_value"));

if(flag === true){
    document.querySelector("#signIn_index").innerText = "";
    let a = document.createElement("a");
    a.setAttribute("href","account.html")
    a.innerText = "Account"
    document.querySelector("#signIn_index").append(a);
}


let imgslider = document.querySelector('.offerContainer');
console.log(imgslider.scrollWidth);
let total = imgslider.scrollWidth - imgslider.clientWidth; // Use clientWidth instead of a fixed value like 400
let count = 0;

document.getElementById('btn').addEventListener('click', function () {
    count += 400;
    if (count >= total) {
        count = 0;
    }
    imgslider.scrollTo({
        top: 0,
        left: count,
        behavior: 'smooth'
    });
});

document.getElementById('btn2').addEventListener('click', function () {
    count -= 400; // Use negative value to go backward
    if (count < 0) {
        count = total;
    }
    imgslider.scrollTo({
        top: 0,
        left: count,
        behavior: 'smooth'
    });
});


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}