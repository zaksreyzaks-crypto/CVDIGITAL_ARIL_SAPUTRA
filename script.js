window.addEventListener("scroll", function(){
  const nav = document.querySelector(".custom-nav");

  if(window.scrollY > 50){
    nav.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
  } else {
    nav.style.boxShadow = "none";
  }
});
