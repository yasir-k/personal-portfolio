document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed("#element", {
      strings: ["Front-End Web Developer with expertise in React!"],
      typeSpeed: 70,
    });
  });
  



document.addEventListener("DOMContentLoaded", function () {
    var floatingScroll = document.querySelector(".floating-scroll");
    var sections = document.querySelectorAll("section[id]");
  
    window.addEventListener("scroll", function () {
      var scrollY = window.scrollY;
  
      sections.forEach(function (section) {
        var sectionTop = section.offsetTop - 150;
        var sectionBottom = sectionTop + section.offsetHeight;
  
        if (scrollY >= sectionTop && scrollY <= sectionBottom) {
          floatingScroll.querySelector(".active").classList.remove("active");
          floatingScroll.querySelector(
            'a[href="#' + section.id + '"]'
          ).classList.add("active");
        }
      });
    });
  });
  


  

document.addEventListener("DOMContentLoaded", function () {
    // Replace all <hr> elements with sequentially moving colorful discs
    replaceHrWithSequentialMovingColorfulDiscs();
  });

  function replaceHrWithSequentialMovingColorfulDiscs() {
    // Get all <hr> elements
    var hrElements = document.querySelectorAll("hr");

    // Check if any <hr> elements exist
    if (hrElements.length > 0) {
      // Loop through each <hr> element
      hrElements.forEach(function (hrElement) {
        // Create a container div for each <hr>
        var discContainer = document.createElement("div");
        discContainer.classList.add("disc-container");

        // Array of colors to use in the discs
        var colors = ["#fca311", "#0056b3"];

        // Add 12 sequentially moving colorful discs to the container
        for (var i = 0; i < 12; i++) {
          var colorfulDisc = document.createElement("div");
          colorfulDisc.classList.add("colorful-disc");
          colorfulDisc.style.backgroundColor = colors[i % colors.length];
          colorfulDisc.style.transitionDelay = i * 0.1 + "s";
          discContainer.appendChild(colorfulDisc);
        }

        // Replace <hr> with the disc container
        hrElement.replaceWith(discContainer);
      });
    }
  }