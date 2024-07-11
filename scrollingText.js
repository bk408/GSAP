
window.addEventListener("wheel", function (element) {
    if (element.deltaY > 0) {
        gsap.to(".box", {
          transform: "translate(-200%)",
          duration: 2.8,
          repeat: -1,
          ease: "none",
        });

        gsap.to(".box img", {
            rotate: 180
        })


    } else {
        gsap.to(".box", {
          transform: "translate(0%)",
          duration: 2.8,
          repeat: -1,
          ease: "none",
        });

        gsap.to(".box img", {
          rotate: 0,
        });
    }

})

