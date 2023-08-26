var Color = [
    "green",
    "cyan",
    "black",
    "voilet",
    "blue",
    "yellow",
    "purple",
    "orange",
    "lightgreen",
    "lemon",
  ];
  var index = 0 ;
  var div = document.getElementById("box");
  const button = document.getElementById("change_colour");
  button.addEventListener("click", function() {
      if (index === Color.length) {
          index = 0;
    }
          div.style.backgroundColor = Color[index];
          index++;
  })
const shape = document.getElementById("change_shape");

shape.addEventListener("click" , change_theshape)

function change_theshape(){
    if (!isTriangle) {
        var i = document.getElementById("shape")[0];
        i.className = "triangle";
        isTriangle = true;
      }else{
        var i = document.getElementsByClassName("triangle")[0];
        i.className = "shape";
        isTriangle = false;
      }

}

