gsap.to(".circle1",{
   x:1000,
   duration:1,
   yoyo:true,
   repeat:-1
});
gsap.to(".circle2",{
    x:-1000,
    duration:1,
    yoyo:true,
    repeat:-1
 });
 gsap.to(".circle3",{
    x:1000,
    delay:.5,
    duration:1,
    yoyo:true,
    repeat:-1
 });
 gsap.to(".circle4",{
     x:-1000,
     delay:.5,
     duration:1,
     yoyo:true,
     repeat:-1
  });

//login
document.getElementById("go").addEventListener("click", function(){
   
    name = document.getElementById("user").value.trim();
    alert("hello "+ name +", you are successfully logged in");
});

