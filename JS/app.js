let myCalc = document.getElementById('grid');

myCalc.style.height = "450px";
myCalc.style.width = "400px";
myCalc.style.border = "solid black 5px";
myCalc.style.display = "grid";
myCalc.style.gridTemplateColumns = "1fr 1fr 1fr";
myCalc.style.justifyContent = "center";
myCalc.style.alignItems = "center";
myCalc.style.backgroundColor = "lightgreen";
myCalc.style.borderRadius = "25px";
myCalc.style.margin = "auto";



let myBtn = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "+/-"]
for(let x = 0;x<myBtn.length;x++){
  myCalc.innerHTML += '<div><button class="buttons">'+ myBtn[x] +'</button></div>';

    document.getElementsByClassName("buttons")[x].style.color = "white";
    document.getElementsByClassName("buttons")[x].style.border = "solid green 2px";
    document.getElementsByClassName("buttons")[x].style.width = "85px";
    document.getElementsByClassName("buttons")[x].style.height = "75px";
    document.getElementsByClassName("buttons")[x].style.borderRadius = "25%";
    document.getElementsByClassName("buttons")[x].style.textAlign = "center";
    document.getElementsByClassName("buttons")[x].style.backgroundColor = "black";
    document.getElementsByClassName("buttons")[x].style.margin = "auto";
    document.getElementsByClassName("buttons")[x].style.display = "flex";
    document.getElementsByClassName("buttons")[x].style.justifyContent = "center";
    document.getElementsByClassName("buttons")[x].style.alignItems = "center";
    document.getElementsByClassName("buttons")[x].style.fontSize = "45px";
  
}