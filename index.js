const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const trailerContainerEl = document.querySelector(".trailer-container");


btnEl.addEventListener("click" , ()=>{
    // console.log("button clicked");
    
    trailerContainerEl.classList.remove("active");
});

closeIconEl.addEventListener("click" ,()=>{
    trailerContainerEl.classList.toggle("active");
});