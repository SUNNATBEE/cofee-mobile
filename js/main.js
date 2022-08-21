var ElOpenBtn = document.querySelector(".js-open");

ElOpenBtn.addEventListener("click" , function(){
    ElOpenBtn.closest(".site-header").classList.toggle("sitenav-open");
})

// Start Modal Window

let formBtn = document.querySelector(".accardion-part__btn")
let modal = document.querySelector(".modal")
let closeModalBtn = document.querySelector(".modal-part__desktop-link")
let ElbodyOwerflow = document.querySelector("body")

formBtn.addEventListener("click", ()=>{
    modal.classList.add("modal-on")
    ElbodyOwerflow.classList.add("hidden");
})

closeModalBtn.addEventListener("click", ()=> {
    modal.classList.remove("modal-on")
    ElbodyOwerflow.classList.removegi("hidden");
})
// End of Modal Window