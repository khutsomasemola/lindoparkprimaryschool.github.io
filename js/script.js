/* =========================================================
   LINDOPARK WEBSITE
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   IMAGE PATHS
========================================================= */

const IMAGE_PATHS = {
    logo: "assets/images/logo.png",

    hero: {
        one: "assets/images/hero/hero-4.jpg",
        two: "assets/images/hero/hero-2.jpg",
        three: "assets/images/hero/hero-1.jpg"
    },

    gallery: {
        one: "assets/images/gallery/gallery-1.jpg",
        two: "assets/images/gallery/gallery-2.jpg",
        three: "assets/images/gallery/gallery-3.jpg",
        four:"assets/images/gallery/gallery-4.jpg",
        five:"assets/images/gallery/gallery-5.jpg"
        
    },

    news: {
        one: "assets/images/news/news-1.jpg",
        two: "assets/images/news/news-2.jpg",
        three: "assets/images/news/news-3.jpg"
    }
};


/* =========================================================
   MOBILE SIDEBAR
========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const mobileSidebar =
    document.getElementById("mobileSidebar");

const sidebarClose =
    document.getElementById("sidebarClose");

const mobileOverlay =
    document.getElementById("mobileOverlay");


function openSidebar() {

    if (!mobileSidebar) return;

    mobileSidebar.classList.add("active");

    if (mobileOverlay) {
        mobileOverlay.classList.add("active");
    }

    if (menuToggle) {

        menuToggle.classList.add("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );

    }

    mobileSidebar.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "menu-open"
    );
}


function closeSidebar() {

    if (!mobileSidebar) return;

    mobileSidebar.classList.remove("active");

    if (mobileOverlay) {
        mobileOverlay.classList.remove("active");
    }

    if (menuToggle) {

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

    mobileSidebar.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "menu-open"
    );
}


/* Open menu */

if (menuToggle) {

    menuToggle.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            if (
                mobileSidebar &&
                mobileSidebar.classList.contains("active")
            ) {

                closeSidebar();

            } else {

                openSidebar();

            }

        }
    );

}


/* Close button */

if (sidebarClose) {

    sidebarClose.addEventListener(
        "click",
        function () {

            closeSidebar();

        }
    );

}


/* Close overlay */

if (mobileOverlay) {

    mobileOverlay.addEventListener(
        "click",
        function () {

            closeSidebar();

        }
    );

}


/* Close when clicking a mobile link */

document
    .querySelectorAll(".sidebar-links a")
    .forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                closeSidebar();

            }
        );

    });


/* Escape key */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeSidebar();

        }

    }
);


/* =========================================================
   HERO SLIDER
========================================================= */

const heroSlides =
    document.querySelectorAll(
        ".hero-slide"
    );

const heroIndicators =
    document.querySelectorAll(
        "#heroIndicators button"
    );

const heroNext =
    document.getElementById(
        "heroNext"
    );

const heroPrevious =
    document.getElementById(
        "heroPrevious"
    );


let heroIndex = 0;

let heroTimer = null;


/* Hero images */

const heroImages = [

    IMAGE_PATHS.hero.one,

    IMAGE_PATHS.hero.two,

    IMAGE_PATHS.hero.three

];


/* Apply hero images */

heroSlides.forEach(
    function (slide, index) {

        if (heroImages[index]) {

            slide.style.backgroundImage =
                `url("${heroImages[index]}")`;

        }

    }
);


/* Show hero slide */

function showHeroSlide(index) {

    if (!heroSlides.length) return;


    if (index >= heroSlides.length) {

        index = 0;

    }


    if (index < 0) {

        index =
            heroSlides.length - 1;

    }


    heroSlides.forEach(
        function (slide) {

            slide.classList.remove(
                "active"
            );

        }
    );


    heroIndicators.forEach(
        function (indicator) {

            indicator.classList.remove(
                "active"
            );

        }
    );


    heroSlides[index]
        .classList.add("active");


    if (heroIndicators[index]) {

        heroIndicators[index]
            .classList.add("active");

    }


    heroIndex = index;

}


/* Next hero */

function nextHeroSlide() {

    showHeroSlide(
        heroIndex + 1
    );

}


/* Previous hero */

function previousHeroSlide() {

    showHeroSlide(
        heroIndex - 1
    );

}


/* Restart autoplay */

function restartHeroTimer() {

    if (heroTimer) {

        clearInterval(heroTimer);

    }


    if (heroSlides.length > 1) {

        heroTimer =
            setInterval(
                nextHeroSlide,
                6000
            );

    }

}


/* Next button */

if (heroNext) {

    heroNext.addEventListener(
        "click",
        function () {

            nextHeroSlide();

            restartHeroTimer();

        }
    );

}


/* Previous button */

if (heroPrevious) {

    heroPrevious.addEventListener(
        "click",
        function () {

            previousHeroSlide();

            restartHeroTimer();

        }
    );

}


/* Indicators */

heroIndicators.forEach(
    function (indicator, index) {

        indicator.addEventListener(
            "click",
            function () {

                showHeroSlide(index);

                restartHeroTimer();

            }
        );

    }
);


/* Start hero */

if (heroSlides.length) {

    showHeroSlide(0);

    restartHeroTimer();

}


/* =========================================================
   NEWS
========================================================= */

const news = [

    {
        category: "SCHOOL NEWS",

        date: "Latest Update",

        title:
            "News from Laerskool LindoPark",

        excerpt:
            "Keep up with the latest announcements, activities and important news from our school community.",

        image:
            IMAGE_PATHS.news.one,

        featured: true
    },


    {
        category: "EVENTS",

        date: "School Events",

        title:
            "What's happening at Lindopark",

        excerpt:
            "Discover upcoming events and activities taking place throughout the school.",

        image:
            IMAGE_PATHS.news.two,

        featured: false
    },


    {
        category: "COMMUNITY",

        date: "Lindopark Life",

        title:
            "Celebrating our school community",

        excerpt:
            "Discover the people, moments and activities that make Lindopark special.",

        image:
            IMAGE_PATHS.news.three,

        featured: false
    }

];


const newsGrid =
    document.getElementById(
        "newsGrid"
    );


function renderNews() {

    if (!newsGrid) return;


    newsGrid.innerHTML = "";


    news.forEach(
        function (item) {

            const article =
                document.createElement(
                    "article"
                );


            article.className =
                "news-card" +
                (
                    item.featured
                        ? " featured"
                        : ""
                );


            article.innerHTML = `

                <div class="news-image">

                    <img
                        src="${item.image}"
                        alt="${item.title}"
                        loading="lazy"
                    >

                    <span class="news-category">
                        ${item.category}
                    </span>

                </div>


                <div class="news-body">

                    <span class="news-date">
                        ${item.date}
                    </span>

                    <h3>
                        ${item.title}
                    </h3>

                    <p>
                        ${item.excerpt}
                    </p>

                    <a
                        href="news.html"
                        class="news-read"
                    >
                        Read more →
                    </a>

                </div>

            `;


            newsGrid.appendChild(
                article
            );

        }
    );

}


renderNews();


/* =========================================================
   SCHOOL LIFE GALLERY
========================================================= */

const lifeTrack =
    document.getElementById(
        "lifeTrack"
    );

const lifeSlides =
    document.querySelectorAll(
        ".life-slide"
    );

const lifeNext =
    document.getElementById(
        "lifeNext"
    );

const lifePrevious =
    document.getElementById(
        "lifePrevious"
    );


let lifeIndex = 0;


/* Gallery images */

const galleryImages = [

    IMAGE_PATHS.gallery.one,

    IMAGE_PATHS.gallery.two,

    IMAGE_PATHS.gallery.three

];


/* Apply gallery images */

lifeSlides.forEach(
    function (slide, index) {

        const image =
            slide.querySelector("img");


        if (
            image &&
            galleryImages[index]
        ) {

            image.src =
                galleryImages[index];

        }

    }
);


/* Move gallery */

function moveLifeSlider() {

    if (
        !lifeTrack ||
        !lifeSlides.length
    ) {

        return;

    }


    const slideWidth =
        lifeSlides[0]
            .getBoundingClientRect()
            .width;


    const gap = 20;


    lifeTrack.style.transform =
        `translateX(-${
            lifeIndex *
            (slideWidth + gap)
        }px)`;

}


/* Gallery next */

if (lifeNext) {

    lifeNext.addEventListener(
        "click",
        function () {

            lifeIndex++;


            if (
                lifeIndex >=
                lifeSlides.length
            ) {

                lifeIndex = 0;

            }


            moveLifeSlider();

        }
    );

}


/* Gallery previous */

if (lifePrevious) {

    lifePrevious.addEventListener(
        "click",
        function () {

            lifeIndex--;


            if (lifeIndex < 0) {

                lifeIndex =
                    lifeSlides.length - 1;

            }


            moveLifeSlider();

        }
    );

}


/* =========================================================
   WINDOW RESIZE
========================================================= */

window.addEventListener(
    "resize",
    function () {

        moveLifeSlider();

    }
);


/* =========================================================
   IMAGE ERROR HANDLING
========================================================= */

document.addEventListener(
    "error",
    function (event) {

        if (
            event.target.tagName === "IMG"
        ) {

            console.warn(
                "Image could not be loaded:",
                event.target.src
            );

        }

    },
    true
);


/* =========================================================
   PAGE LOADED
========================================================= */

console.log(
    "Lindopark website loaded successfully."
);

console.log(
    "Image directory:",
    "assets/images/"
);

document.addEventListener("DOMContentLoaded", function () {

    const backToTop = document.getElementById("backToTop");

    if (!backToTop) return;

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});