var ElOpenBtn = document.querySelector(".js-open");

ElOpenBtn.addEventListener("click" , function(){
    ElOpenBtn.closest(".site-header").classList.toggle("sitenav-open");
})