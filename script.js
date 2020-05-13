document.addEventListener(`DOMContentLoaded`,function () {
    document.getElementById("menubutton").addEventListener("click", function() {
        this.classList.toggle("active");
        document.getElementById("m-nav").classList.toggle("active");
    }) 
});


document.getElementById("modalopen").addEventListener("click",function() {
    document.getElementById("moda").classList.add("active");
    document.getElementById("mask").classList.add("active");
})
document.getElementById("modalclose").addEventListener("click",function() {
    document.getElementById("moda").classList.remove("active");
    document.getElementById("mask").classList.remove("active");
})
document.getElementById("w-moda").addEventListener("click",function() {
    document.getElementById("moda").classList.remove("active");
    document.getElementById("mask").classList.remove("active");
})
document.getElementById("mask").addEventListener("click",function() {
    document.getElementById("moda").classList.remove("active");
    document.getElementById("mask").classList.remove("active");
})
document.getElementById("modalopen2").addEventListener("click",function() {
    document.getElementById("moda2").classList.add("active");
    document.getElementById("mask2").classList.add("active");
})
document.getElementById("modalclose2").addEventListener("click",function() {
    document.getElementById("moda2").classList.remove("active");
    document.getElementById("mask2").classList.remove("active");
})
document.getElementById("w-moda2").addEventListener("click",function() {
    document.getElementById("moda2").classList.remove("active");
    document.getElementById("mask2").classList.remove("active");
})
document.getElementById("mask2").addEventListener("click",function() {
    document.getElementById("moda2").classList.remove("active");
    document.getElementById("mask2").classList.remove("active");
})