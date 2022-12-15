const selectFrom = document.querySelector("#from");
const selectTo = document.querySelector("#to");
const selectClass = document.querySelector("#class");
const general = document.querySelector("#general");
const searchButton = document.querySelector("#searchButton");
const inputdate = document.querySelector("#inputdate");
const dataFrom = document.querySelector("#dataFrom");
const dataTo = document.querySelector("#dataTo");
const dataClass = document.querySelector("#dataClass");
let allFieldsFilled = false;

//Fields Validation starts 

searchButton.addEventListener("click", (e) => {
  let details = {
    "From": selectFrom.value,
    "TO": selectTo.value,
    "DOJ": inputdate.value,
  };
  url = "../HTML/table.html?"
  const sparams = new URLSearchParams(details);
  const q = sparams.toString();
  if (selectFrom.value != "" && selectTo.value != "" && selectClass.value != "" && inputdate.value != "" && general.value != "") {
    allFieldsFilled = true;
  }
  else
    alert("Please fill in all the required fields");

  if (selectFrom.value == selectTo.value && allFieldsFilled == true) {
    alert("Departure and arrival place cannot be the same");
    selectFrom.value = "";
    selectTo.value = "";
    allFieldsFilled = false;
  }
  else if (allFieldsFilled == true) {
    localStorage.setItem("dataFrom", selectFrom.value);
    localStorage.setItem("dataTo", selectTo.value);
    localStorage.setItem("dataDate", inputdate.value);
    localStorage.setItem("dataClass", selectClass.value);
  }
  url = "../HTML/table.html?"
  if (localStorage.getItem("sl") == "1" && allFieldsFilled == true) {
    window.location.href = url + q;
  }
  if (localStorage.getItem("sl") == "0") {
    alert("Kindly Login");
    window.location.href = "../HTML/login.html";
    sl = "1";
  }

  /*
  else{
    const sl = "0";
    if (sl == "0") {
      alert("Kindly Login");
      window.location.href = "../HTML/login.html";
      sl = "1";
    }
  }*/
});
//Fields validation ends

document.querySelector(".upcoming").addEventListener("click", function () {
  document.getElementById("journey").style.display = "block";
  var tjourney = document.querySelector(".tjourney");
  var sjourney = document.querySelector(".sjourney");
  var n = localStorage.getItem("user");
  if (n == "") {
    tjourney.style.display = "none";
  }
  let finalURL = 'http://127.0.0.1:8000/journey_details?user_id=' + n;
  fetch(finalURL).then((Response) => Response.json())
    .then((data) => {

      if (localStorage.getItem("sl") == "1") {
        if (data.result.length > 0) {
          console.log(data);
          for (let i = 0; i < data.result.length; i++) {
            if (data.result[i].train_details.length > 0) {
              var tfirst = document.querySelector(".tfirst");
              var row = document.createElement("tr");
              var html = '<td>' + data.result[i].train_details[0].train_name + '</td>' +
                '<td>' + data.result[i].train_details[0].source + '</td>' +
                '<td>' + data.result[i].train_details[0].destination + '</td>' +
                '<td>' + data.result[i].date + '</td>' +
                '<td>' + data.result[i].train_details[0].source_departure_time + '</td>' +
                '<td>' + data.result[i].train_details[0].destination_arrival_time + '</td>';
              tfirst.appendChild(row);
              row.innerHTML = html;
            }
            if (data.result[i].train_details.length ==0 ) {
              tjourney.style.display = "block";
              var tfirst = document.querySelector(".tfirst");
              var row = document.createElement("tr");
              var html ="<td colspan='6'>"+"NO DATA AVAILABLE"+"</td>"
            }
          }
          tfirst.appendChild(row);
          row.innerHTML = html;
          tjourney.style.display = "block";
        
        }
        else {
          tjourney.style.display = "block";
          var tfirst = document.querySelector(".tfirst");
          var row = document.createElement("tr");
          var html = "<td colspan='6'>" + " No Data Available" + "</td>";
          tfirst.appendChild(row);
          row.innerHTML = html;
        }
      }

    });
});

// Logout and Profile


if (localStorage.getItem("sl") == "0") {
  localStorage.setItem("user", "");
}
var login = document.querySelector(".login");
if (localStorage.getItem("sl") == "1") {
  login.innerHTML = "LOGOUT";
  var log = document.querySelector("#log");
  var i = document.createElement("i");
  var p = document.createElement("p");
  i.className = "fas";
  i.innerHTML = "&#xf2bd;"
  i.style.cssText = "padding:20px;color:darkblue;cursor:pointer;";
  log.appendChild(i);
  p.innerHTML = "Hi " + localStorage.getItem('user').toUpperCase();
  p.style.cssText = "color:blue;margin-top:-10px;font-weight:bolder";
  document.querySelector(".upcoming").style.marginLeft = "-90px";
  log.appendChild(p);
  localStorage.setItem("table", "1");
}

window.onunload = function () {
  localStorage.setItem("sl", "0");
  login.innerHTML = "LOGIN";
}
if (login.innerHTML == "LOGOUT") {
  login.setAttribute("href", "../HTML/index.html");
}
var block = document.querySelector(".block");
i.onclick = function () {
  var n = localStorage.getItem("user");
  block.style.display = "block";
  let finalURL = 'http://127.0.0.1:8000/users?user_id=' + n;
  fetch(finalURL).then((Response) => Response.json())
    .then((data) => {
      document.querySelector(".username").innerHTML = data.result[0].first_name + " " + data.result[0].middle_name + " " + data.result[0].last_name;
      document.querySelector(".usermail").innerHTML = data.result[0].email;
      document.querySelector(".usergender").innerHTML = data.result[0].gender;
      document.querySelector(".usernum").innerHTML = data.result[0].mobile_number;


    });
}
document.querySelector("#pcross").onclick = function () {
  block.style.display = "none";
}

