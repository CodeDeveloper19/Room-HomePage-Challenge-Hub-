const listOfImages = ["Images/desktop-image-hero-1.jpg", "Images/desktop-image-hero-2.jpg","Images/desktop-image-hero-3.jpg"];
const listOfTitles = ["Discover innovative ways to decorate", "We are available all across the globe", "Manufactured with the best materials"];
const listOfParagraphs = ["We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your style with our collection and make your property a reflection of you and what you know.", "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.", "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to eensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."]

let currentSlide = 0;


document.getElementById("left").addEventListener("click", () => {
    if(currentSlide <= 2 && currentSlide >= 1){
        currentSlide--;
    }
    document.getElementById("image").src = listOfImages[currentSlide];
    document.getElementById("title").textContent = listOfTitles[currentSlide];
    document.getElementById("paragraph").textContent = listOfParagraphs[currentSlide];
})

document.getElementById("right").addEventListener("click", () => {
    if(currentSlide <= 1 && currentSlide >= 0){
        currentSlide++;
    }
    document.getElementById("image").src = listOfImages[currentSlide];
    document.getElementById("title").textContent = listOfTitles[currentSlide];
    document.getElementById("paragraph").textContent = listOfParagraphs[currentSlide];
})

document.getElementById("close").addEventListener("click", () => {
    document.getElementById("nav2").style.display = "none";
})

document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("nav2").style.display = "flex";
})

let jmediaquery = window.matchMedia( "(min-width: 499px)" );

setInterval(()=> {
    if (jmediaquery.matches) {
        document.getElementById("nav2").style.display = "none";
    }
}, 1)


