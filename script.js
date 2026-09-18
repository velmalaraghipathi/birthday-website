/* =========================================
   SCREEN ELEMENTS
========================================= */

const startScreen =
    document.getElementById("startScreen");

const memoryOne =
    document.getElementById("memoryOne");

const memoryTwo =
    document.getElementById("memoryTwo");

const messageScreen =
    document.getElementById("messageScreen");

const finalScreen =
    document.getElementById("finalScreen");



/* =========================================
   BUTTONS
========================================= */

const yesButton =
    document.getElementById("yesButton");

const noButton =
    document.getElementById("noButton");

const backButton =
    document.getElementById("backButton");

const nextMemory =
    document.getElementById("nextMemory");

const nextMessage =
    document.getElementById("nextMessage");

const finalButton =
    document.getElementById("finalButton");

const restartButton =
    document.getElementById("restartButton");



/* =========================================
   OVERLAYS
========================================= */

const noOverlay =
    document.getElementById("noOverlay");

const yesOverlay =
    document.getElementById("yesOverlay");



/* =========================================
   TEXT
========================================= */

const reactionText =
    document.getElementById("reactionText");



/* =========================================
   SHOW SCREEN
========================================= */

function showScreen(screen) {

    document
        .querySelectorAll(".screen")
        .forEach(function(item) {

            item.classList.remove("active");

        });


    screen.classList.add("active");

}



/* =========================================
   NO BUTTON
   BIG SERIOUS CAT
========================================= */

noButton.addEventListener(
    "click",
    function() {

        noOverlay.classList.add("show");

        reactionText.textContent =
            "NOOO 😾";

    }
);



/* =========================================
   GO BACK FROM NO
========================================= */

backButton.addEventListener(
    "click",
    function() {

        noOverlay.classList.remove("show");

        reactionText.textContent =
            "Choose carefully 😼";

    }
);



/* =========================================
   YES BUTTON
   BIG LOVE CAT
========================================= */

yesButton.addEventListener(
    "click",
    function() {

        reactionText.textContent =
            "YAAAH! 🎉";

        yesOverlay.classList.add("show");


        setTimeout(
            function() {

                yesOverlay.classList.remove("show");

                showScreen(memoryOne);

            },
            2500
        );

    }
);



/* =========================================
   MEMORY 1
   1 + 3 + 4
========================================= */

nextMemory.addEventListener(
    "click",
    function() {

        showScreen(memoryTwo);

    }
);



/* =========================================
   MEMORY 2
   5 + 7 + 8 + 9
========================================= */

nextMessage.addEventListener(
    "click",
    function() {

        showScreen(messageScreen);

    }
);



/* =========================================
   MESSAGE → FINAL
========================================= */

finalButton.addEventListener(
    "click",
    function() {

        showScreen(finalScreen);

    }
);



/* =========================================
   RESTART
========================================= */

restartButton.addEventListener(
    "click",
    function() {

        noOverlay.classList.remove("show");

        yesOverlay.classList.remove("show");

        reactionText.textContent =
            "Choose carefully 😼";

        showScreen(startScreen);

    }
);



/* =========================================
   PHOTO FILE FALLBACK
=========================================

   If your file is:

   7.jpg
   7.JPG
   7.png
   7.jpeg

   this automatically tries the alternatives.
========================================= */

const photoExtensions = [
    ".jpg",
    ".JPG",
    ".jpeg",
    ".JPEG",
    ".png",
    ".PNG",
    ".webp",
    ".WEBP"
];


document
    .querySelectorAll("img[data-photo]")
    .forEach(function(img) {

        const number =
            img.getAttribute("data-photo");

        let currentIndex = 0;


        img.addEventListener(
            "error",
            function() {

                if (
                    currentIndex <
                    photoExtensions.length
                ) {

                    img.src =
                        number +
                        photoExtensions[currentIndex];

                    currentIndex++;

                }

            }
        );

    });



/* =========================================
   CAT IMAGE FALLBACK
========================================= */

function imageExistsFix(
    imageElement,
    names
) {

    let index = 0;


    imageElement.addEventListener(
        "error",
        function() {

            if (index < names.length) {

                imageElement.src =
                    names[index];

                index++;

            }

        }
    );

}


imageExistsFix(
    document.getElementById("startCat"),
    [
        "6serious-cat.jpg",
        "6serious-cat.JPG",
        "6serious-cat.png",
        "6serious-cat.jpeg"
    ]
);


imageExistsFix(
    document.getElementById("seriousCat"),
    [
        "6serious-cat.jpg",
        "6serious-cat.JPG",
        "6serious-cat.png",
        "6serious-cat.jpeg"
    ]
);


imageExistsFix(
    document.getElementById("loveCat"),
    [
        "2love-cat.jpg",
        "2love-cat.JPG",
        "2love-cat.png",
        "2love-cat.jpeg"
    ]
);



/* =========================================
   START WEBSITE
========================================= */

showScreen(startScreen);