function breakTheText() {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;

  var splittedText = h1Text.split("");

  var halfValue = Math.floor(splittedText.length / 2);

  var clutter = "";

  splittedText.forEach(function (e, index) {
    if (index < halfValue) {
      clutter += `<span class="a" > ${e} </span>`;
    } else {
      clutter += `<span class="b" > ${e} </span>`;
    }
  });

  h1.innerHTML = clutter;
}

breakTheText();

gsap.from("h1 .a", {
  y: 60,
  opacity: 0,
  duration: 1,
  delay: 0.6,
  stagger: 0.15,
});

gsap.from("h1 .b", {
  x: 60,
  opacity: 0,
  duration: 1,
  delay: 0.6,
  stagger: -0.15,
});
