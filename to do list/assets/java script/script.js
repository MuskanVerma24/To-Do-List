var work = document.querySelectorAll(".input-task")[0];
var list = document.querySelectorAll(".box2")[0];

document.querySelector("#add_work").addEventListener("click", function () {
  if (work.value === "") {
    document.querySelectorAll(".box1")[0].children[2].style.visibility ="visible";
  }
    else {
      document.querySelectorAll(".box1")[0].children[2].style.visibility = "hidden";
    var li = document.createElement("li");
    li.innerHTML = work.value;
    document.querySelectorAll(".box2")[0].appendChild(li);

    var span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  save();
  work.value = "";
});

list.addEventListener("click",function(x){
    if(x.target.tagName === 'LI'){
        x.target.classList.toggle("change");
        save();
    }
    else if(x.target.tagName === 'SPAN'){
        x.target.parentElement.remove();
    }
    save();
},false);

function save(){
    localStorage.setItem("data",list.innerHTML);
}
   list.innerHTML = localStorage.getItem("data");
