var crsr = document.querySelector("#cursor")
var blurcrsr = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    blurcrsr.style.left = dets.x - 250 + "px"
    blurcrsr.style.top = dets.y - 250 + "px"
})



gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "100px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        marker: true,
        start: "top - 10%",
        end: "top -11%",
        scrub: 1,
    }
})


gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top-25%",
        end: "end -70%",
        scrub: 2,
    }
})