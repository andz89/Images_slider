let slides = document.querySelector(".slider").children
let nextSlide=document.querySelector(".right-slide");
let prevSlide=document.querySelector(".left-slide");
let img = document.querySelectorAll("img")
let button = document.querySelector(".button-slider")
let totalSlides=slides.length;
let index=0;


Array.from(img).forEach((image)=>{

  image.addEventListener("mouseover", ()=>{
    button.style.display = "block"
  })

})


Array.from(img).forEach((image)=>{

  image.addEventListener("mouseleave", ()=>{
    button.style.display = "none"
  })

})

button.addEventListener("mouseover", ()=>{
  button.style.display = "block"
})




nextSlide.onclick=function () {
  next("next");
  // resetTimer();
}
prevSlide.onclick=function () {
  prev("prev");
  // resetTimer();
}

function next(direction){

  if(direction=="next"){
     index++;
      if(index==totalSlides){
       //return to first slide
         index=0;
      }
  } 


//remove active class in each slide
Array.from(slides).forEach((slide)=>{
    slide.classList.remove('active')
})

 slides[index].classList.add("active");     

}

function prev(direction){

  if(direction=="prev"){
       
       if(index == 0){
            index=totalSlides-1;
       }else{
            index--;
       }
  }

//remove active class in each slide
Array.from(slides).forEach((slide)=>{
    slide.classList.remove('active')
})

 slides[index].classList.add("active");     

}
// function resetTimer(){
//   // stop timer after clicked next & prev Button
//   clearInterval(timer);
//   // then start again timer
//   timer = setInterval(autoPlay,5000);
//  }
 
//  function autoPlay(){
//   next('next');
//  }

 
  // var timer = setInterval(autoPlay,5000);