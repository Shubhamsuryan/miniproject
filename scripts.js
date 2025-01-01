//   $(window).load(function() {
//      $("#loading").fadeOut("");
//    });
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('body'),
//     smooth: true
// });

// window.addEventListener("mousemove", function(dets){
//     const x = dets.clientX-45;
//     const y = dets.clientY-45;
//    this.document.querySelector("#circle").style.transform = `translate(${x}px, ${y}px)`;
// });

var crsr = document.querySelector("#circle")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
})

var tm = gsap.timeline();

tm.from(".image",{
    scale:0,
    duration:2.5,
    borderRadius:"100px",
    delay:2
})

tm.from("#box1 h1",{
    y:300,
    duration:1,
    color:"#e3dccd",
    stagger:.1
})

tm.from(".nav a",{
    y:-100,
    duration:.2,
    stagger:.10
})

var loader= document.getElementById("preloader");
window.addEventListener("load",function() {
    this.setTimeout(hello, 2000);
    function hello() {
        loader.style.display="none";
    }
});

function btext2(as) {
    var h1= document.querySelector(as);
    var h1text= h1.textContent;

    var spltdtxt=  h1text.split("");
    var clutter= "";

    spltdtxt.forEach(function (elem) {
        clutter += `<span>${elem}</span>`;
    })

    h1.innerHTML=clutter;
}

// ABOUT OUR RESTAURANT

gsap.from("#box2l h1 span",{
    opacity:0,
    y:50,
    duration:1,
    stagger:.75,
    scrollTrigger:{
       scroller:"body",
       trigger:"#box2",
       start:"top 70%"
    }
})

btext2("#box2r p");

gsap.from("#box2r p span",{
    opacity:0,
    y:100,
    duration:.25,
    stagger:0.003,
    delay:.5,
    scrollTrigger:{
       scroller:"body",
       trigger:"#box2",
       start:"top 70%"
    }
})

// pan cakes image

gsap.from("#box3",{
    duration:1.25,
    width:0,
    scrollTrigger:{
        scroller:"body",
        trigger:"#box3",
        start:"top 70%"
    }
})

// ABOUT OUR VALUES

gsap.from("#box4l h1 span",{
    opacity:0,
    y:50,
    duration:1,
    stagger:.75,
    scrollTrigger:{
       scroller:"body",
       trigger:"#box4",
       
       start:"top 70%"
    }
})

btext2("#box4r p");

gsap.from("#box4r p span",{
    opacity:0,
    y:100,
    duration:.25,
    stagger:0.003,
    delay:.5,
    scrollTrigger:{
       scroller:"body",
       trigger:"#box4",
       start:"top 70%"
    }
})

// box5 2images

gsap.from(".b5image1",{
    duration:1,
    height:0,
    scrollTrigger:{
        scroller:"body",
        trigger:"#box5",
        start:"top 70%"
    }
    
})

gsap.from(".b5image2",{
    duration:1,
    height:0,
    scrollTrigger:{
        scroller:"body",
        trigger:"#box5",
        start:"top 70%"
    } 
})

// change_body_bgcolor

gsap.to("body",{
    backgroundColor:"#e6c7b5",
    scrollTrigger:{
        scroller:"body",
        trigger:"#box5",
        start:"top 70%",
        scrub:true
    },
    duration:5
    
})

gsap.from("#box6",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#box6",
        start:"top 0%",
        end:"top -200%",
        // markers:true,
        pin:true
    }, 
})

gsap.from("#box6 h1",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#box6",
        start:"top 50%",
        end:"top -140%",
        // markers:true,
        toggleActions:"play reverse play reverse"
    }, 
    opacity:0,
    duration:.5,
    y:40
})



gsap.to("body",{
    backgroundColor:"#d9dfe6",
    scrollTrigger:{
        scroller:"body",
        trigger:"#box8",
        start:"top 70%",
        scrub:2,
       
    }, 
})

gsap.from("#box8",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#box8",
        start:"top 0%",
        end:"top -180%",
        // markers:true,
        pin:true
    }, 
})

gsap.from("#box8 h1",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#box8",
        start:"top 50%",
        end:"top -140%",
        // markers:true,
        toggleActions:"play reverse play reverse"
    }, 
    opacity:0,
    duration:.5,
    y:40
})

gsap.to("body",{
    backgroundColor:"#b8aeb1",
    scrollTrigger:{
        scroller:"body",
        trigger:"#box10",
        start:"top 70%",
        scrub:2,
       
    }, 
})

gsap.from("#box10",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#box10",
        start:"top 0%",
        end:"top -160%",
        // markers:true,
        pin:true
    }, 
})

gsap.from("#box10 h1",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#box10",
        start:"top 50%",
        end:"top -125%",
        // markers:true,
        toggleActions:"play reverse play reverse"
    }, 
    opacity:0,
    duration:.5,
    y:40
})

gsap.to("body",{
    backgroundColor:"white",
    scrollTrigger:{
        scroller:"body",
        trigger:"#box12",
        start:"top 70%",
        scrub:2,
       
    }, 
})


gsap.to("#box13 #bgi",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#box13",
        start:"top 0%",
        end:"top -170%",
        // markers:true,
        scrub:2,
        pin:true
    },
    
    scale:9
})

// menu

document.querySelectorAll(".food").forEach(function(food){
    var rotate = 0;
    var diffrot = 0;

    food.addEventListener("mouseleave", function(dets){
        gsap.to(food.querySelector("img"),{
            opacity: 0,
            ease: Power3,
        });
    });

    food.addEventListener("mousemove", function(dets){
        var diff =dets.clientY - food.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(food.querySelector("img"),{
            opacity: 1,
            ease: Power1,
            top: diff - 20,
            left: dets.clientX - 260,
            rotate: gsap.utils.clamp(-20,20, diffrot*0.6),
        });
    });
});

// menu-routines

function button1(){
    var bt1 = document.getElementsByClassName('button1');
    var bt2 = document.getElementsByClassName('button2');
    var bt3 = document.getElementsByClassName('button3');
    var bt4 = document.getElementsByClassName('button4');
    bt1[0].style.backgroundColor='black';
    bt1[0].style.color='white'
    bt2[0].style.backgroundColor='transparent';
    bt2[0].style.color='black'
    bt3[0].style.backgroundColor='transparent';
    bt3[0].style.color='black'
    bt4[0].style.backgroundColor='transparent';
    bt4[0].style.color='black'
    var bf1 = document.getElementById('food1');
    var bf2 = document.getElementById('food2');
    var bf3 = document.getElementById('food3');
    var bf4 = document.getElementById('food4');
    var bh1 = document.getElementById('ha');
    var bh2 = document.getElementById('hb');
    var bh3 = document.getElementById('hc');
    var bh4 = document.getElementById('hd');
    bh1.innerHTML='family of teas';
    bh2.innerHTML='family of pizza';
    bh3.innerHTML='items of bakery';
    bh4.innerHTML='light food items';
    bf1.src='images/f2.avif';
    bf2.src='images/f1.avif';
    bf3.src='images/f3.avif';
    bf4.src='images/f4.avif';
  };

function button2(){
    var bt1 = document.getElementsByClassName('button1');
    var bt2 = document.getElementsByClassName('button2');
    var bt3 = document.getElementsByClassName('button3');
    var bt4 = document.getElementsByClassName('button4');
    bt2[0].style.backgroundColor='black';
    bt2[0].style.color='white'
    bt1[0].style.backgroundColor='transparent';
    bt1[0].style.color='black'
    bt3[0].style.backgroundColor='transparent';
    bt3[0].style.color='black'
    bt4[0].style.backgroundColor='transparent';
    bt4[0].style.color='black'
  var bf1 = document.getElementById('food1');
  var bf2 = document.getElementById('food2');
  var bf3 = document.getElementById('food3');
  var bf4 = document.getElementById('food4');
  var bh1 = document.getElementById('ha');
  var bh2 = document.getElementById('hb');
  var bh3 = document.getElementById('hc');
  var bh4 = document.getElementById('hd');
  bh1.innerHTML='Parothe';
  bh2.innerHTML='Biryani';
  bh3.innerHTML='Burgers & fries';
  bh4.innerHTML='Pancakes';
  bf1.src='images/l1.avif';
  bf2.src='images/l2.avif';
  bf3.src='images/l3.avif';
  bf4.src='images/l4.avif';
};

function button3(){
    var bt1 = document.getElementsByClassName('button1');
    var bt2 = document.getElementsByClassName('button2');
    var bt3 = document.getElementsByClassName('button3');
    var bt4 = document.getElementsByClassName('button4');
    bt3[0].style.backgroundColor='black';
    bt3[0].style.color='white'
    bt2[0].style.backgroundColor='transparent';
    bt2[0].style.color='black'
    bt1[0].style.backgroundColor='transparent';
    bt1[0].style.color='black'
    bt4[0].style.backgroundColor='transparent';
    bt4[0].style.color='black'
    var bf1 = document.getElementById('food1');
    var bf2 = document.getElementById('food2');
    var bf3 = document.getElementById('food3');
    var bf4 = document.getElementById('food4');
    var bh1 = document.getElementById('ha');
    var bh2 = document.getElementById('hb');
    var bh3 = document.getElementById('hc');
    var bh4 = document.getElementById('hd');
    bh1.innerHTML='Paneer & Bread';
    bh2.innerHTML='Rissole';
    bh3.innerHTML='Special cholle';
    bh4.innerHTML='Soyabeen and Paneer Curry';
    bf1.src='images/d1.webp';
    bf2.src='images/d2.avif';
    bf3.src='images/d3.webp';
    bf4.src='images/d4.png';
  };

  function button4(){
    var bt1 = document.getElementsByClassName('button1');
    var bt2 = document.getElementsByClassName('button2');
    var bt3 = document.getElementsByClassName('button3');
    var bt4 = document.getElementsByClassName('button4');
    bt4[0].style.backgroundColor='black';
    bt4[0].style.color='white'
    bt2[0].style.backgroundColor='transparent';
    bt2[0].style.color='black'
    bt3[0].style.backgroundColor='transparent';
    bt3[0].style.color='black'
    bt1[0].style.backgroundColor='transparent';
    bt1[0].style.color='black'
    var bf1 = document.getElementById('food1');
    var bf2 = document.getElementById('food2');
    var bf3 = document.getElementById('food3');
    var bf4 = document.getElementById('food4');
    var bh1 = document.getElementById('ha');
    var bh2 = document.getElementById('hb');
    var bh3 = document.getElementById('hc');
    var bh4 = document.getElementById('hd');
    bh1.innerHTML='Cola';
    bh2.innerHTML='Cherry drink';
    bh3.innerHTML='Bear';
    bh4.innerHTML='Cold Coffie';
    bf1.src='images/dr1.avif';
    bf2.src='images/dr2.avif';
    bf3.src='images/dr3.avif';
    bf4.src='images/dr4.webp';
  };

//  slidingdrinks
var ch=0;
function m5a() 
   {
    var m5aa = document.getElementById('m5a');
    var m5bb = document.getElementById('m5b');
        let a=ch;
        if (a==0) {
            ch=1;
            a=ch;
            gsap.to("#m5b",{
                x:1000,
                duration:.5
            });
            gsap.from(".abh2",{
                opacity:0,
                y:50,
                duration:1,
                delay:.25
            });
            gsap.from(".aba2 p",{
                opacity:0,
                y:50,
                duration:1,
                delay:.50
            });
            gsap.from(".aba2 .m5links",{
                opacity:0,
                y:50,
                duration:1,
                delay:.75
            });
            gsap.from(".aba2 hr",{
                opacity:0,
                y:50,
                duration:1,
                delay:1
            });
            gsap.from(".aba2 .but",{
                opacity:0,
                y:50,
                duration:1,
                delay:1
            });
        }
        else{
            ch=0;
            a=ch;
            gsap.to("#m5b",{
                x:0,
                duration:2
            })    
        }
    }
function m5b() 
    {
     var m5aa = document.getElementById('m5a');
     var m5bb = document.getElementById('m5b');
         let a=ch;
         if (a==0) {
             ch=1;
             a=ch;
             gsap.to("#m5a",{
                 x:-1000,
                 duration:.5
             });
             gsap.from(".abh1",{
                opacity:0,
                y:50,
                duration:1,
                delay:.25
            });
            gsap.from(".aba1 p",{
                opacity:0,
                y:50,
                duration:1,
                delay:.50
            });
            gsap.from(".aba1 .m5links",{
                opacity:0,
                y:50,
                duration:1,
                delay:.75
            });
            gsap.from(".aba1 hr",{
                opacity:0,
                y:50,
                duration:1,
                delay:1
            });
            gsap.from(".aba1 .but",{
                opacity:0,
                y:50,
                duration:1,
                delay:1
            }); 
         }
         else{
             ch=0;
             a=ch;
             gsap.to("#m5a",{
                 x:0,
                 duration:2
             })    
         }
     };

gsap.to(".main6ab img",{
    duration:2,
    rotate:135,
    scrollTrigger:{
        scroller:"body",
        trigger:"#main6",
        scrub:2
    },
});

//reserve
function reserve(){
    gsap.to("#reserving h1",{
        duration:.5,
        scale:0.8,
        color:"gray",
        rotate:-10,
    });
    gsap.to(".soon",{
        duration:.5,
        height:"75px",
        width:"270px",
        borderRadius:"0px",
    });
    gsap.to(".soon a",{
        delay:.5,
        opacity:1,
    }); 
};
function resleave(){
    gsap.to("#reserving h1",{
        scale:1,
        duration:.5,
        color:"black",
        rotate:0,
       
    });
    gsap.to(".soon",{
        duration:.5,
        height:"0px",
        width:"0px",
        borderRadius:"50px"
    });
    gsap.to(".soon a",{
        duration:0.25,
        opacity:0,
    }); 
    
};
//last image

gsap.from("#img7",{
    duration:1.25,
    width:0,
    scrollTrigger:{
        scroller:"body",
        trigger:"#main7",
        start:"top 70%",
    }
});