const sideNav = document.querySelector(".side-nav")
const toggleButton = document.querySelector(".toggle-button")
const btnCloseSideNav = document.querySelector(".btn-close-side-nav")
const productsContainer = document.querySelector(".products")
const productsToggleLink = document.querySelector(".products-header a")
const sectionTestimonials = document.querySelector(".section-testimonials")
const navBar = document.querySelector("nav")

console.log(sectionTestimonials);

toggleButton.addEventListener("click", () => {
    sideNav.classList.add("show-side-nav")
})

btnCloseSideNav.addEventListener("click", () => {
    sideNav.classList.remove("show-side-nav")
})

productsToggleLink.addEventListener("click", () => {
    productsContainer.classList.toggle("show-products-list")
})