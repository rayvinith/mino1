const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var videocon = document.querySelector("#video-container")
var playbtn = document.querySelector("#play")
videocon.addEventListener("mouseenter",function(){
    playbtn.style.opacity=1
    playbtn.style.scale=1
})
videocon.addEventListener("mouseleave",function(){
    playbtn.style.opacity=0
    playbtn.style.scale=0
})
videocon.addEventListener("mousemove",function(dets){
   gsap.to(playbtn,{
    left:dets.x-20,
    top:dets.y-30
   })
})


//cursor making code 

// var cursor1 = document.querySelector("#cursor")

// cursor1.addEventListener("mouseenter",function(dets){
//    gsap.to(cursor1,{
//     left:dets.x,
//     top:dets.y
//    })
// })
 

 function loadinganimation(){

    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.3
    })
    gsap.from(" #video-container",{
       scale:0.9,
        opacity:0,
        delay:1.3,
        duration:0.5,
        
    })

 }


loadinganimation()

// yaha prblem aara hain boss

document.addEventListener("mousemove", function(dets){
gsap.to("#cursor",{
    left:dets.x,
    top:dets.y
})
}) 




document.querySelectorAll(".rectangle").addEventListener("mousemove",function(){
    gsap.to("#cursor",{
       backgroundColor: "black",
       scale:1,
       zIndex:-9
    })
    })