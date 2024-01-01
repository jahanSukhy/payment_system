// proloader part start 


window.addEventListener("load", function () {
    document.querySelector(".preloader-wrapper").classList.add("opacity-0");

    setTimeout(function(){
        document.querySelector(".preloader-wrapper").style.display = "none";
    }, 1000);
})

    // proloader part end 


// mobileClick part start 
const mobileClick = document.querySelector("#moblieMenuClick");

mobileClick.addEventListener("click", function () {
    // this.querySelector("i").classList.toggle("fa-times");
    
    const moblilekWrapeer = document.querySelector(".menu");
    
    moblilekWrapeer.classList.toggle("showMobileMenu");
})
// mobileClick part end 





// Notification part start
const notification = document.querySelector("#notification");

notification.addEventListener("click", function () {
    // this.querySelector("i").classList.toggle("fa-times");
    
    const moblilekWrapeer = document.querySelector(".notification");
    
    moblilekWrapeer.classList.toggle("notification-show");
})
// Notification part end


// search form part start
(function () {
    var searchForm = document.getElementById('search-form')
    document.getElementById('search-btn').addEventListener('click', function () {
        searchForm.classList.toggle('d-inline-block')
        searchForm.classList.toggle('d-none')
    })

})(); 
// search form part end



