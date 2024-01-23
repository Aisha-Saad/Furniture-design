let fisrtIndex=1;
function autoSlide(){
  setTimeout(autoSlide,6000);
  let pice;
  const img=document.querySelectorAll(".add");
  for(pice=0; pice<img.length ;pice++){
    img[pice].style.display="none";
  }
  fisrtIndex ++ ;
  if(fisrtIndex >img.length){
    fisrtIndex=1;
  }
  img[fisrtIndex - 1].style.display="block"
}

autoSlide();

let menuIcon = document.querySelector("#menu-icon");

let navbar = document.querySelector(".navbar");

menuIcon.onclick = (eo) => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
    eo.preventDefault()
};