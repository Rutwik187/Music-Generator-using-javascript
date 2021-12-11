window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound"); //gets array of sound
  const pads = document.querySelectorAll(".pads div"); //array of pad div
  const visual = document.querySelector(".visuals");
  const colors = [
    "#60d394",
    "#2a1c7c",
    "#a8894e",
    "#b9375e",
    "#82c20b",
    "#278bc5",
  ];

  // Sound generation
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      sounds[index].currentTime = 0; //to run sound from start after clicking even if it had not finished
      sounds[index].play();

      createBubble(index);
    });
  });

  const createBubble = (index) => {
    //Create bubbles
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;

    //remove the bubble one its animation is done
    bubble.addEventListener("animationend", function () {
      visual.removeChild(this);
    });
  };
});
