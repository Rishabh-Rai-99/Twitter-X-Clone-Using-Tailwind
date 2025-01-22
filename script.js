document.querySelector(".mode-btn").addEventListener("click", () => {
    const mainContainer = document.querySelector(".main-container");
    const currentBackgroundColor = window.getComputedStyle(mainContainer).backgroundColor;
    const white = document.querySelectorAll(".text-white");
    
    if (currentBackgroundColor === "rgb(0, 0, 0)") {
        white.forEach((e)=>{
            e.style.color = "black";
            // e.style.transition = "background-color 0.5s ease, color 0.5s ease";
        })
      mainContainer.style.backgroundColor = "white";
      document.querySelector("body").style.backgroundColor = "white";
      document.querySelector(".grok-img").classList.remove("invert");
      document.querySelector(".main-logo").classList.remove("invert");
      document.querySelector(".post-btn").style.backgroundColor = "black";
      document.querySelector(".post-btn").style.color = "white";
      document.querySelector(".post-btn-2").style.backgroundColor = "black";
      document.querySelector(".post-btn-2").style.color = "white";
      document.querySelector(".subscribe-btn").style.color = "white";
      document.querySelectorAll(".follow-btn").forEach((btn)=>{
          btn.style.backgroundColor = "black";
          btn.style.color = "white";
        })

        document.querySelector(".mode-btn-text").innerText = "Dark Mode";
        document.querySelector(".mode-logo").innerText = "dark_mode";

    } else {

      mainContainer.style.backgroundColor = "black";
      document.querySelector("body").style.backgroundColor = "black";
      document.querySelector(".grok-img").classList.add("invert");
      document.querySelector(".main-logo").classList.add("invert");
      document.querySelector(".post-btn").style.backgroundColor = "white";
      document.querySelector(".post-btn").style.color = "black";
      document.querySelector(".post-btn-2").style.backgroundColor = "white";
      document.querySelector(".post-btn-2").style.color = "black";
      document.querySelector(".subscribe-btn").style.color = "white";
      document.querySelectorAll(".follow-btn").forEach((btn)=>{
        btn.style.backgroundColor = "white";
        btn.style.color = "black";
      })
      document.querySelector(".mode-btn-text").innerText = "Light Mode";
      document.querySelector(".mode-logo").innerText = "light_mode";
        white.forEach((e)=>{
            e.style.color = "white";
            // e.style.transition = "background-color 0.5s ease, color 0.5s ease";

        })

    }
  });
  