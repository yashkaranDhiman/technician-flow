function scrolled(){
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    
    pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
scrolled()

function moveString() {
    let endX = window.innerWidth; // Use the current window width
    let initial_path = `M 0 25 Q ${endX/2} 25 ${endX} 25`;
    let final_path = `M 0 25 Q ${endX/2} 25 ${endX} 25`;

    let string = document.querySelectorAll(".string");

    function updatePaths() {
        endX = window.innerWidth;
        initial_path = `M 0 25 Q ${endX/2} 25 ${endX} 25`;
        final_path = `M 0 25 Q ${endX/2} 25 ${endX} 25`;
    }

    window.addEventListener('resize', updatePaths);

    string.forEach(e => {
        e.addEventListener("mousemove", (dets) => {
            let dynamic_path = `M 0 25 Q ${dets.x} ${dets.y} ${endX} 25`;
            gsap.to("svg path", {
                attr: { d: dynamic_path },
                duration: 0.3,
            });
        });

        e.addEventListener("mouseleave", () => {
            gsap.to("svg path", {
                attr: { d: final_path },
                ease: "elastic.out(1, 0.2)",
                duration: 1.5,
            });
        });
    });
}
moveString();

function textAnimations(){
    let services = document.querySelector("#page2-heading h4")
    let navs = document.querySelectorAll("#center-nav a")
    let startbtn1 = document.querySelector("#page1 .start-project");
    
        tl1 = gsap.timeline();
        tl1.from(navs,{
            y:50,
            duration:.5,
            opacity:0,
            ease: "bounce.in",
            stagger:.2
        })

    gsap.from(services,{
        y:100,
        stagger:.2,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#page2-heading h4",
            scroller:"main",
            start:"top 77%",
            end:"top 80%",
            scrub:2
        }
    })
    gsap.from("#page3 h2",{
        y:100,
        stagger:.2,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#page3",
            scroller:"main",
            start:"top 77%",
            end:"top 80%",
            scrub:2,
        }
    })
    gsap.from("#page3 .hrline",{
        stagger:.2,
        duration:3,
        width:"0%",
        scrollTrigger:{
            trigger:"#page3",
            scroller:"main",
            start:"top 70%",
            end:"top 50%",
            scrub:2
        }
    })
    gsap.from("#page3-content",{
        y:100,
        stagger:.2,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#page3 .hrline",
            scroller:"main",
            start:"top 70%",
            end:"top 80%",
            scrub:2
        }
    })


    gsap.from("#page5 h2",{
        y:100,
        stagger:.2,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#page5",
            scroller:"main",
            start:"top 77%",
            end:"top 80%",
            scrub:2
        }
    })
    gsap.from("#page5 .hrline",{
        stagger:.2,
        duration:3,
        width:"0%",
        scrollTrigger:{
            trigger:"#page5",
            scroller:"main",
            start:"top 70%",
            end:"top 50%",
            scrub:2
        }
    })
    gsap.from("#page5-content",{
        y:100,
        stagger:.2,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#page5 .hrline",
            scroller:"main",
            start:"top 70%",
            end:"top 80%",
            scrub:2
        }
    })
    
    
    gsap.from("#page6 h2",{
        y:100,
        stagger:.2,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#page6",
            scroller:"main",
            start:"top 77%",
            end:"top 80%",
            scrub:2
        }
    })
    gsap.from("#page6 .hrline",{
        stagger:.2,
        duration:3,
        width:"0%",
        scrollTrigger:{
            trigger:"#page6",
            scroller:"main",
            start:"top 70%",
            end:"top 50%",
            scrub:2
        }
    })
}
textAnimations()

function moveCursor() {
    let visitCursor = document.getElementById("visit-cursor");
    let page4content = document.getElementById("page4-content"); // Removed the # from the ID selector
    page4content.addEventListener("mouseenter", (dets) => {
        gsap.to(visitCursor, {
            opacity: 1,
            scale: 1,
        });
    });
    page4content.addEventListener("mousemove", (dets) => {
        gsap.to(visitCursor, {
            x: dets.x+50,
            y: dets.y-50,
            duration:.1 ,
        });
    });
    page4content.addEventListener("mouseleave", (dets) => {
        gsap.to(visitCursor, {
            scale: 0,
            opacity: 0,
        });
    });
}
moveCursor();

function navModel(){
    let navmodel = document.getElementById("nav-model");
    let menuBtn = document.getElementById("menu");
    let closeBtn = document.querySelectorAll(".close");
    let allnavs = document.querySelectorAll("#nav-model-content a");
    if(window.innerWidth>600){
        menuBtn.addEventListener("click",()=>{
            tl = gsap.timeline()
            tl.to(navmodel,{
                x:"-40vw",
                duration:.3
            })
            tl.from(allnavs,{
                delay:-1,
                opacity:0,
                x:-40,
                ease: "bounce.out",
                stagger:.2
            })
            tl.from(closeBtn,{
                opacity:0
            })
        })
        closeBtn.forEach(e=>{

        e.addEventListener("click",()=>{
            gsap.to(navmodel,{
                x:"0",
                ease: "sine.in",
            })
        })
    })
    }
    else{
        let navmodel = document.getElementById("nav-model-res");
        
        menuBtn.addEventListener("click",()=>{
            tl = gsap.timeline()
            tl.to(navmodel,{
                x:"-100vw",
                duration:.3
            })
            tl.from(allnavs,{
                opacity:0,
                x:-40,
                ease: "bounce.out",
                stagger:.2
            })
            tl.from(closeBtn,{
                opacity:0,
                delay:-1,
            })
        })
        closeBtn.forEach(e=>{

            e.addEventListener("click",()=>{
                gsap.to(navmodel,{
                    x:"0",
                    ease: "sine.in",
                })
            })
        })
    }
}
navModel()
