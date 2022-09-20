const listOfImages = ["Images/desktop-image-hero-1.jpg", "Images/desktop-image-hero-2.jpg","Images/desktop-image-hero-3.jpg"];
const listOfTitles = ["Discover innovative ways to decorate", "We are available all across the globe", "Manufactured with the best materials"];
const listOfParagraphs = ["We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your style with our collection and make your property a reflection of you and what you know.", "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.", "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to eensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."]

let currentSlide = 0;

document.getElementById("left").addEventListener("click", () => {
    if(currentSlide <= 2 && currentSlide >= 1){
        currentSlide--;
        changeContentOfSlider(currentSlide);
    }
})

document.getElementById("right").addEventListener("click", () => {
    if(currentSlide <= 1 && currentSlide >= 0){
        currentSlide++;
        changeContentOfSlider(currentSlide);
    }
})

const changeContentOfSlider = (currentSlide) => {
    document.getElementById("image").src = listOfImages[currentSlide];
    document.getElementById("title").textContent = listOfTitles[currentSlide];
    document.getElementById("paragraph").textContent = listOfParagraphs[currentSlide];
}

const changePositionOfSlider = () => {
    let part1_2_2 = document.querySelector(".part1_2_2");
    let temp = document.querySelector(".temp");

    [...part1_2_2.children].forEach(element => {
        temp.insertAdjacentElement('beforeEnd', element);
      });
}

const reversechangePositionOfSlider = () => {
    let part1_2_2 = document.querySelector(".part1_2_2");
    let temp = document.querySelector(".temp");

    [...temp.children].forEach(element => {
        part1_2_2.insertAdjacentElement('beforeEnd', element);
      });
}

document.getElementById("close").addEventListener("click", () => {
    document.getElementById("nav2").style.display = "none";
})

document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("nav2").style.display = "flex";
})

document.getElementById("part1_2_1_1").addEventListener("mouseover", () => {
    document.getElementById("arrow").style.fill = "#A1A1A1";
    document.querySelector("#part1_2_1_1 p").style.color = "#A1A1A1";
})

document.getElementById("part1_2_1_1").addEventListener("mouseout", () => {
    document.getElementById("arrow").style.fill = "#000";
    document.querySelector("#part1_2_1_1 p").style.color = "#000";
})

let jmediaquery = window.matchMedia( "(min-width: 499px)" );

const changeNavDisplay = setInterval(()=> {
    if (jmediaquery.matches) {
        document.getElementById("nav2").style.display = "none";
    }
}, 1)

let jMediaQuery = window.matchMedia( "(max-width: 749px)" );

const loop = () => {
    if (jMediaQuery.matches) {
        changePositionOfSlider();
        reverseloop();
    } else if (!jMediaQuery.matches) {
        const repeatChangePositionOfSlider = setInterval(() => {
            loop();
            clearInterval(repeatChangePositionOfSlider);
        }, 1)
    }
}

const reverseloop = () => {
    if (!jMediaQuery.matches) {
        reversechangePositionOfSlider();
        loop();
    } else if (jMediaQuery.matches) {
        const repeatChangePositionOfSlider = setInterval(() => {
            reverseloop();
            clearInterval(repeatChangePositionOfSlider);
        }, 1)
    }
}

loop();








