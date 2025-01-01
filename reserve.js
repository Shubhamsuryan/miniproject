//book

document.querySelector("#hello").innerHTML="welcome " + name;
document.getElementById("book").addEventListener("click", function(){
    var dayy = "for " + document.getElementById("birthday").value.trim();
    var timee = " at " + document.getElementById("timing").value.trim();
    var tablee = document.getElementById("tab").value.trim();
    if (tablee=="1"||tablee=="2"||tablee=="3"||tablee=="4") {
        alert("hello "+ name + " your " + tablee + " table is scheduled " + dayy + timee);
    } else {
        if (tablee=="0") {
            alert("hello "+ name + " your 1 table is scheduled " + dayy + timee);
        
        }
        else
        {
            alert("!! please select tables between 1 to 4");
        }
    }

});

// document.getElementById("book").addEventListener("click", function(){
//     name = document.getElementById("user").value.trim();
//     var dayy = document.getElementById("birthday").value.trim();
//     var timee = document.getElementById("timing").value.trim();
//     // var tablee = document.getElementById("tab").value.trim();
//     alert("hello "+ name + "your table is scheduled for " + dayy + "at" + timee");
// });