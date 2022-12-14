const availableButtons = document.querySelectorAll(".availableButton");
const refresh = document.querySelectorAll(".refresh");
const booknowbutton = document.querySelector("#booknowbutton");
const dataFrom = localStorage.getItem("dataFrom");
const dataTo = localStorage.getItem("dataTo");
const dataDate = localStorage.getItem("dataDate");
var bn = document.getElementById("bn");
var bn1 = document.getElementById("bn1");

availableButtons.forEach((e1) => {
  e1.addEventListener("click", (e2) => {
    if (e2.target == e1.lastElementChild.lastElementChild) {
      e2.stopPropagation();
      location.reload();
    }
    else {
      booknowbutton.setAttribute("style", "background-color:orangered;");
      bn.setAttribute("style", "color:white;text-decoration:none;")
      bn.setAttribute("href", "../HTML/my.html");
      e1.setAttribute("style", "background-color: rgb(238, 215, 169)");
      availableButtons.forEach((elem) => {
        if (elem != e1) {
          elem.removeAttribute("style");
        }
      })
    }
  })
})
document.getElementById("button1Pressed").onclick = function () {
  localStorage.setItem("dataClass","AC CHAIR");
  localStorage.setItem("Classes", "ac_chair");
}
document.getElementById("button2Pressed").onclick = function () {
  localStorage.setItem("dataClass","AC (1AC)");
  localStorage.setItem("Classes", "ac_1ac_field");
}
document.getElementById("button3Pressed").onclick = function () {
  localStorage.setItem("dataClass","AC (2AC)");
  localStorage.setItem("Classes", "ac_2ac_field");
}
document.getElementById("button4Pressed").onclick = function () {
  localStorage.setItem("dataClass","AC (3AC)");
  localStorage.setItem("Classes", "ac_3ac_field");
}
document.getElementById("button5Pressed").onclick = function () {
  localStorage.setItem("dataClass","SL");
  localStorage.setItem("Classes", "sl");
}
document.getElementById("button6Pressed").onclick = function () {
  localStorage.setItem("dataClass","SECOND CLASS");
  localStorage.setItem("Classes", "second_class");
}

document.querySelectorAll(".Date").forEach((element) => {
  element.innerText = dataDate;
});
let finalURL = 'http://127.0.0.1:8000/trains?source=' + dataFrom + '&destination=' + dataTo + '&doj=' + dataDate;
console.log(finalURL);
fetch(finalURL).then((Response) => Response.json())
  .then((data) => {
    if(data.result.length>0){
    console.log(data);
    document.querySelector(".table1").style.display="none";
    document.querySelector("#trainName").innerHTML = data.result[0].train_name;
    document.querySelector(".From").innerHTML = data.result[0].source;
    document.querySelector(".To").innerHTML = data.result[0].destination;
    document.querySelector(".depart_time").innerHTML = data.result[0].source_departure_time;
    document.querySelector(".arrival_time").innerHTML = data.result[0].destination_arrival_time;
    document.querySelector(".ac").innerHTML = data.result[0].ac_chair;
    document.querySelector(".ac1").innerHTML = data.result[0].ac_1ac_field;;
    document.querySelector(".ac2").innerHTML = data.result[0].ac_2ac_field;
    document.querySelector(".ac3").innerHTML = data.result[0].ac_3ac_field;
    document.querySelector(".sl").innerHTML = data.result[0].sl;
    document.querySelector(".SS").innerHTML = data.result[0].second_class;
    document.querySelector(".p_ac").innerHTML = '\u20B9' + data.result[0].class_cost[0].ac_chair;
    document.querySelector(".p_ac1").innerHTML = '\u20B9' + data.result[0].class_cost[0].ac_1ac_field;;
    document.querySelector(".p_ac2").innerHTML = '\u20B9' + data.result[0].class_cost[0].ac_2ac_field;
    document.querySelector(".p_ac3").innerHTML = '\u20B9' + data.result[0].class_cost[0].ac_3ac_field;
    document.querySelector(".p_sl").innerHTML = '\u20B9' + data.result[0].class_cost[0].sl;
    document.querySelector(".p_SS").innerHTML = '\u20B9' + data.result[0].class_cost[0].second_class;
    //document.querySelector("#runOn1").innerHTML = data.result[0].source_departure_time - data.result[0].destination_arrival_time;
    localStorage.setItem("train_num",data.result[0].train_num);
    var x="Runs On: ";
    for(let i in data.result[0].days[0]){
        if(data.result[0].days[0][i]=="1"){
          p=i.slice(0,3).toUpperCase();
          x=x+" "+p;
        }
    }
    document.querySelector("#runOn").textContent=x;
  }
    else{
      document.querySelector(".table1").style.display="block";
      document.querySelector(".table2").style.display="none";
    }
});
