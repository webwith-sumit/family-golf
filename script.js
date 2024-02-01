gsap.to("#navbar", {
    backgroundColor: "black",
    height: "9vw",
    scrollTrigger: {
        scroller: "body",
        trigger: "#page1",
        scrub: 1,
        start: "top -5%",
        end: "top -20%",
        // markers : true
    }
})
var tm =gsap.timeline();
tm
.from("#navbar",{
    y : -50,
    opacity: 0,
    duration : .8,
})
.from("#page1 h1, #page1 h3, #page1 p",{
    y : 80,
    opacity: 0,
    duration : .8,
    stagger: .2,
})

gsap.to("#main", {
    backgroundColor: "rgb(0, 0, 0, 0.95)",
    scrollTrigger: {
        scroller: "body",
        trigger: "#page1",
        scrub: 2,
        start: "top -20%",
        end: "top -60%",
        // markers : true
    }
})
gsap.from("#page2 h1, #page2 p, #page2 h5",{
    y : 80,
    opacity : 0,
    stagger : .2,
    scrollTrigger:{
        scroller: "body",
        trigger : "#page2",
        scrub : 2,
        start : "top 45%",
        end: "top 20%",
        // markers : true
    }
})
gsap.from("#page2 #img2",{
    y : 180,
    opacity : 0,
    stagger : .2,
    scrollTrigger:{
        scroller: "body",
        trigger : "#page2",
        scrub : 1,
        start : "top 50%",
        end: "top 20%",
        // markers : true
    }
})
gsap.from("#page2 #img1",{
    y : 180,
    opacity : 0,
    stagger : .2,
    scrollTrigger:{
        scroller: "body",
        trigger : "#page2",
        scrub : 1,
        start : "top 40%",
        end: "top 20%",
        // markers : true
    }
})
gsap.from("#page3 .course0, #page3>img",{
    y : 200,
    opacity : 0,
    stagger : .1,
    scrollTrigger:{
        scroller: "body",
        trigger : ".course0",
        scrub : 3,
        start : "top 75%",
        end: "top 65%",
        // markers : true
    }
})
gsap.from("#page3 .courses1, #page3>img",{
    y : 200,
    opacity : 0,
    stagger : .1,
    scrollTrigger:{
        scroller: "body",
        trigger : ".courses1",
        scrub : 3,
        start : "top 75%",
        end: "top 65%",
        // markers : true
    }
})
gsap.from("#page3 .courses2, #page3>img",{
    y : 200,
    opacity : 0,
    stagger : .1,
    scrollTrigger:{
        scroller: "body",
        trigger : ".courses2",
        scrub : 3,
        start : "top 75%",
        end: "top 65%",
        // markers : true
    }
})

var swiper = new Swiper(".mySwiper", {
    // spaceBetween: 30,
    effect : "fade",
    loop : true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
gsap.from(".swiper",{
    y : 80,
    opacity : 0,
    stagger : .2,
    scrollTrigger:{
        scroller: "body",
        trigger : ".swiper",
        scrub : 1,
        start : "top 75%",
        end: "top 60%",
        // markers : true
    }
})
gsap.from("#page4 h1, #page4 p, #page4 button",{
    y : 80,
    opacity : 0,
    stagger : .2,
    scrollTrigger:{
        scroller: "body",
        trigger : "#page4",
        scrub : 2,
        start : "top 55%",
        end: "top 30%",
        // markers : true
    }
})
gsap.to("#page5 .scroller-part1",{
    transform : "translate(-100%)",
    duration : 30,
    ease : "linear",
    repeat : -1,
})
gsap.from("#comma1",{
    x : -50,
    y : -50,
    scrollTrigger:{
        scroller:"body",
        trigger:"#comma1",
        start:"top 70%",
        end:"top 30%",
        // markers: true,
        scrub: 2,
    }
})
gsap.from("#comma2",{
    x : 50,
    y : 50,
    scrollTrigger:{
        scroller:"body",
        trigger:"#comma1",
        start:"top 60%",
        end:"top 20%",
        // markers: true,
        scrub: 2 ,
    }
})
gsap.from("#page5 .textbox h1",{
    scale : 0.9,
    scrollTrigger:{
        scroller:"body",
        trigger:"#comma1",
        start:"top 70%",
        end:"top 50%",
        // markers: true,
        scrub: 2,
    }
})

gsap.from(".lessons-div>h1",{
    y : 50,
    // opacity : 0,
    scrollTrigger:{
        scroller:"body",
        trigger:".lessons-div>h1",
        start:"top 85%",
        end:"top 60%",
        // markers: true,
        scrub: 2,
    }
})

var cursor = document.querySelector(".cursor")
document.addEventListener("mousemove", function (dets) {
    // console.log(dets);
    gsap.to(cursor, {
        left: dets.clientX - cursor.clientWidth/2,
        top: dets.clientY - cursor.clientHeight/2,
    })
    // cursor.style.left = dets.clientX - cursor.clientWidth/2 +"px";
    // cursor.style.top = dets.clientY - cursor.clientHeight/2+ "px";
})
document.querySelector("#navbar, #footer").addEventListener("mouseenter", function(){
    cursor.style.boxShadow = "none"
})
document.querySelector("#navbar, #footer").addEventListener("mouseleave", function(){
    cursor.style.boxShadow = "0px 0px 200px 100px #96c11e6a"
})
var headlink = document.querySelectorAll(".courses, .lessons-div ,#page5 .imgbox,#page4 button,#page5 h2, #page5 i")
headlink.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        // cursor.style.scale = "4"
        cursor.style.height = "80px"
        cursor.style.border = "1.5px solid white"
        cursor.style.backgroundColor = "transparent"
        cursor.style.boxShadow = "none"
    })
    elem.addEventListener("mouseleave", function () {
        // cursor.style.scale = "1"
        cursor.style.height = "20px",
        cursor.style.border = "0"
        cursor.style.backgroundColor = "#95C11E"
        cursor.style.boxShadow = "0px 0px 200px 100px #96c11e6a"

    })
})
document.querySelector("#footer").addEventListener("mouseenter", function(){
        cursor.style.height = "0px"
        cursor.style.border = "1.5px solid white"
        cursor.style.backgroundColor = "transparent"
        cursor.style.boxShadow = "none"
})
document.querySelector("#footer").addEventListener("mouseleave", function(){
        cursor.style.height = "20px",
        cursor.style.border = "0"
        cursor.style.backgroundColor = "#95C11E"
        cursor.style.boxShadow = "0px 0px 200px 100px #96c11e6a"
})
var headlink = document.querySelectorAll("#navbar h4, #navbar button")
headlink.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        // cursor.style.scale = "4"
        cursor.style.height = "80px"
        cursor.style.border = "1.5px solid white"
        cursor.style.backgroundColor = "transparent"
        // cursor.style.boxShadow = "none"
    })
    elem.addEventListener("mouseleave", function () {
        // cursor.style.scale = "1"
        cursor.style.height = "20px",
        cursor.style.border = "0"
        cursor.style.backgroundColor = "#95C11E"
        // cursor.style.boxShadow = "0px 0px 200px 100px #96c11e6a"

    })
})