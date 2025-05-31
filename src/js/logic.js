let logic = () => {
  let slides = [...document.querySelectorAll(".slide")];
  let nextbtn = document.querySelector("#nextbtn");
  let prevbtn = document.querySelector("#prevbtn");
  let AutoPlaybtn = document.querySelector("#AutoPlaybtn");
  let slider = document.querySelector("#slider");
  let pagination = document.querySelector("#pagination");

  let counter = 0;
  let generateSlider = (c) => {
    slides.forEach((elem, index) => {
      elem.style.transform = `translateX(${(index - counter) * 100}%)`;
    });
    activeAdder();
  };

  generateSlider(counter);

  let next = () => {
    if (counter === slides.length - 1) {
      counter = 0;
      generateSlider(counter);
    } else {
      counter++;
      generateSlider(counter);
    }
  };

  let prev = () => {
    if (counter === 0) {
      counter = slides.length - 1;
      generateSlider(counter);
    } else {
      counter--;
      generateSlider(counter);
    }
  };
  nextbtn.addEventListener("click", () => {
    next();
  });

  prevbtn.addEventListener("click", () => {
    prev();
  });

  let autoslider = setInterval(() => {
    next();
  }, 3000);

  let intervalStatus = true;

  AutoPlaybtn.addEventListener("click", () => {
    if (intervalStatus === true) {
      clearInterval(autoslider);
      AutoPlaybtn.innerHTML = `<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" part="icon"><path d="M7.768 5.489A.5.5 0 0 0 7 5.911v12.178a.5.5 0 0 0 .768.422l9.57-6.09a.5.5 0 0 0 0-.843L7.767 5.49Z"></path></svg>`;
      intervalStatus = false;
    } else {
      autoslider = setInterval(() => {
        next();
      }, 3000);
      AutoPlaybtn.innerHTML = ` <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" part="icon"><path d="M10 18.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5zm4.5.5a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5z"></path></svg>`;
      intervalStatus = true;
    }
  });

  slider.addEventListener("keyup", (e) => {
    if (e.key === "ArrowRight") {
      next();
    } else if (e.key === "ArrowLeft") {
      prev();
    }
  });

  let bullets = slides.map((elem, index) => {
    return `<div class="bullet w-[30px] h-1.5 bg-[#d5d7dd] rounded-sm duration-300" data-id=${index}></div>`;
  });

  pagination.insertAdjacentHTML("beforeend", bullets.join(""));
  activeAdder();
  document.querySelectorAll(".bullet").forEach((e) => {
    e.addEventListener("click", (e) => {
      counter = +e.target.dataset.id;
      generateSlider(counter);
    });
  });
  let tsx = 0;
  let tex = 0;
  let swipeHandler = () => {
    if (tsx < tex) {
      prev();
    } else if (tsx > tex) {
      next();
    }
    tsx = 0;
    tex = 0;
  };

  slider.addEventListener("touchstart", (e) => {
    tsx = e.changedTouches[0].screenX;
  });

  slider.addEventListener("touchend", (e) => {
    tex = e.changedTouches[0].screenX;
    swipeHandler();
  });

  function activeAdder() {
    let bullets = [...document.querySelectorAll(".bullet")];
    bullets.forEach((elem, index) => {
      elem.classList.remove("active");
      if (index === counter) {
        elem.classList.add("active");
      }
    });
  }

};

export default logic;
