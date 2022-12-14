const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;
function x(){
    slidePage.style.marginLeft = "-100%";
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
    page1.style.display = "none";
    page2.style.display = "block";
    page3.style.display = "none"; 
  }
submitBtn.addEventListener("click", function () {
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});

prevBtnSec.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "0%";
    bullet[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
    page1.style.display = "block";
    page2.style.display = "none";
    page3.style.display = "none";
    var content=document.getElementById("content");
    content.innerHTML="";
});
prevBtnThird.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    bullet[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
    page1.style.display = "none";
    page2.style.display = "block";
    page3.style.display = "none";
});

const addbtn = document.querySelector(".add");
const link2 = document.querySelector("#link2");
const input = document.querySelector(".inp-group");
const input1 = document.querySelector(".inp-display");
const link = document.getElementById("link1");
const array=[]
let incre=0;
function removeInput() {
    flag--;
    var dlt=this.parentElement.id;
    this.parentElement.remove();
    link.style.pointerEvents="auto";
    array[incre]=dlt;
    incre++;
    var content=document.getElementById("content");
    content.innerHTML="";
    h--;
}
function removeInput1(){
    f--;
}
var f=0;
var h=0;
link2.onclick= function(){
    var infant=document.getElementById("infant");
    var append=document.getElementById("append");
    const btn = document.createElement("a");
    btn.className = "delete";
    btn.innerHTML = "&times";
    btn.style.display="inline-flex";
    infant.style.display="block";
    if(h==0){
        infant.appendChild(btn);
        h++;
    }
    btn.addEventListener("click",function(){
        f=f-3;
        this.parentElement.style.display="none";
    })
    if(f==1){
        var copy=infant.cloneNode(true);
        append.appendChild(copy);
        append.lastElementChild.lastElementChild.onclick=function(){
            f=1;
            this.parentElement.style.display="none";
        }
    }
    f=f+1;   
}

var mps = document.getElementById("mps");
var nb = document.getElementById("nb");
var ip = document.getElementById("ip");
var pbox1 = document.getElementById("pbox1");
var pbox2 = document.getElementById("pbox2");
var pbox3 = document.getElementById("pbox3");

mps.onclick=function(){
    pbox1.style.display="none";
    pbox2.style.display="none";
    pbox3.style.display="block";
}
nb.onclick=function(){
    pbox1.style.display="block";
    pbox2.style.display="none";
    pbox3.style.display="none";
}
ip.onclick=function(){
    pbox1.style.display="none";
    pbox2.style.display="block";
    pbox3.style.display="none";
}
const dataFrom=localStorage.getItem("dataFrom");
const dataTo=localStorage.getItem("dataTo");
const dateCs=localStorage.getItem("Classes");
const dataDate=localStorage.getItem("dataDate");
const mail=document.querySelectorAll(".mails");
const dmail=localStorage.getItem("EMAIL");
const mob=document.querySelectorAll(".mob");
const dmob=localStorage.getItem("MOB");
window.onload=()=>{ 
   mail.forEach(element => {
    element.innerText=dmail;
   });
   mob.forEach(element => {
    element.innerText=dmob;
   });
}

var flag=0;
var set=0;
var num=0;
function addInput(){
    flag++;
    set++;
    num++;
    console.log("After clicking on add"+ flag);
    if(flag>2){
        link.style.pointerEvents="none";
    }
    
    const flex = document.createElement("div");
    flex.id=set;
    input.appendChild(flex);
    const btn = document.createElement("a");
    btn.className = "delete";
    btn.innerHTML = "&times";

    btn.addEventListener("click", removeInput);
    const f=document.getElementById("form");
    let ce=f.cloneNode(true);
    flex.appendChild(btn);
    flex.appendChild(ce);
    var inp=document.querySelector(".inp-group");
    var selectdiv=inp.lastElementChild.lastElementChild;
    var content=document.getElementById("content");
    content.innerHTML="";
    selectdiv.setAttribute("oninput","store1()");
}
addbtn.addEventListener("click", addInput);

function cont() {  
    var add1 = document.querySelector(".pname").value;
    var a1 = document.getElementById("a1");
    var add2 = document.getElementById("age").value;
    var count = document.getElementById("gender").value;
    var pin = document.getElementById("nation").value;
    var state = document.getElementById("prefer").value;
    var city = document.getElementById("food").value;
    var btn = document.getElementsByClassName("firstNext");
    a1.style.color="red";
    var d=document.getElementById("content");
    if (add1.length < 1) {
        a1.innerHTML = "Passenger is required.";
        return false;
    }
    if (add2.length < 1) {
        a1.innerHTML = "Age is required."
        return false;
    }
    if (count=="Gender") {
        a1.innerHTML = "Gender is required.";
        return false;
    }
    if (pin.length <1) {
        a1.innerHTML = "Nationality is required.";
        return false;
    }
    if (state=="No Preference") {
        a1.innerHTML = "Preference is required";
        return false;
    }
    if (city=="Food Choice") {
        a1.innerHTML = "Food choice required";
        return false;
    }
a1.innerHTML="";

x();
localStorage.setItem("PNAME0",add1);
localStorage.setItem("AGE0",add2);
localStorage.setItem("GENDER0",count);
localStorage.setItem("FOOD CHOICE0",city);
localStorage.setItem("PREFERNCES0",state);
localStorage.setItem("NATIONALITY0",pin);
var content1=document.getElementById("content1");
content1.style.paddingLeft="10px";
content1.innerHTML="1. "+localStorage.getItem("PNAME0")+" | "+localStorage.getItem("AGE0")+"years | "+localStorage.getItem("GENDER0")+" | "+localStorage.getItem("NATIONALITY0")+" | "+localStorage.getItem("PREFERNCES0")+" | "+localStorage.getItem("FOOD CHOICE0")+" ";

var h=2;
console.log("set is ",set);
var content=document.getElementById("content1");
for (let ele= 1;ele<=set;ele++){
    var pele=document.createElement("p");
    if(!(array.includes(ele.toString()))){
        pele.style.textAlign="Left";
        pele.innerHTML=h+".  "+localStorage.getItem("PNAME"+ele)+" | "+localStorage.getItem("AGE"+ele)+"years | "+localStorage.getItem("GENDER"+ele)+" | "+localStorage.getItem("NATIONALITY"+ele)+" | "+localStorage.getItem("PREFERNCES"+ele)+" | "+localStorage.getItem("FOOD CHOICE"+ele)+" ";
        h++;
    }
    content.appendChild(pele); 
}
localStorage.setItem("H",h-1);
const numb=document.querySelectorAll(".num");
const dnum=localStorage.getItem("H");
numb.forEach(element => {
    element.innerText=dnum;
   });
localStorage.setItem("sl","0");
var p_details=document.querySelector(".div8 :nth-child(2)").innerHTML;
localStorage.setItem("p_detail",p_details);
var Non_Veg=(p_details.match(/Non-Veg/g) || []).length;
localStorage.setItem("Non_Veg",Non_Veg);
if(localStorage.getItem("Non_Veg")>0){
    alert("hi");
    localStorage.setItem("VEGETRIAN",(localStorage.getItem("H")-localStorage.getItem("Non_Veg")));
}
else{
    localStorage.setItem("VEGETRIAN",(localStorage.getItem("H")));
}
let finalURL = 'http://127.0.0.1:8000/trains?source=' + dataFrom + '&destination=' + dataTo + '&doj=' + dataDate;
console.log(finalURL);
fetch(finalURL).then((Response) => Response.json())
  .then((data) => {
    const dict=data.result[0].class_cost[0];
    const veg_cost=data.result[0].food_cost[0].veg;
    const non_veg_cost=data.result[0].food_cost[0].non_veg;
    total_fost_cost=(localStorage.getItem("VEGETRIAN")*veg_cost)+(localStorage.getItem("Non_Veg")*non_veg_cost);
    const classes=localStorage.getItem("Classes");
    for(var class_name in dict){
        if(classes===class_name)
        {
            var cost=dict[class_name];
            console.log(cost);
        }
    }
    total_class_cost=(localStorage.getItem("H")*cost);
    total_fare=total_class_cost+35+total_fost_cost;
    localStorage.setItem("ticket_fare",total_class_cost);
    localStorage.setItem("food_cost",total_fost_cost);
    localStorage.setItem("total_fare",total_fare);
    document.querySelectorAll(".cost1").forEach((element) =>{element.innerText=total_class_cost});
    document.querySelectorAll(".food_cost").forEach((element) =>{element.innerText=total_fost_cost});
    document.querySelectorAll(".total_fare").forEach((element) =>{element.innerText='\u20B9'+total_fare});

  });
}
function store1(){
    var content=document.getElementById("content");
    content.innerHTML="";
    var inp=document.querySelector(".inp-group");
    var selectdiv=inp.lastElementChild.lastElementChild;
    localStorage.setItem('PNAME'+set,selectdiv[0].value);
    localStorage.setItem('AGE'+set,selectdiv[1].value);
    localStorage.setItem('GENDER'+set,selectdiv[2].value);
    localStorage.setItem("NATIONALITY"+set,selectdiv[3].value);
    localStorage.setItem("PREFERNCES"+set,selectdiv[4].value);
    localStorage.setItem("FOOD CHOICE"+set,selectdiv[5].value);
}

nextBtnSec.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-150%";
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "block";
});




document.querySelectorAll(".Date").forEach((element) => {
    element.innerText = dataDate;
  });
let finalURL = 'http://127.0.0.1:8000/trains?source=' + dataFrom + '&destination=' + dataTo + '&doj=' + dataDate;
console.log(finalURL);
fetch(finalURL).then((Response) => Response.json())
  .then((data) => {
    const dict=data.result[0].class_cost[0];
    const classes=localStorage.getItem("Classes");
    for(var class_name in dict){
        if(classes===class_name)
        {
            var cost=dict[class_name];
            console.log(cost);
        }
    }
  
    console.log(data);
    console.log(data.result[0].date);
    document.querySelectorAll(".train_id").forEach((element) => { element.innerText=data.result[0].train_num;})
    document.querySelectorAll(".trainName").forEach((element) =>{element.innerText = data.result[0].train_name;});
    document.querySelectorAll(".From").forEach((element) =>{element.innerText= data.result[0].source;});
    document.querySelectorAll(".To").forEach((element) =>{element.innerText = data.result[0].destination;});
    document.querySelectorAll(".depart_time").forEach((element) =>{element.innerText= data.result[0].source_departure_time;});
    document.querySelectorAll(".arrival_time").forEach((element) =>{element.innerText = data.result[0].destination_arrival_time;});
    document.querySelectorAll(".dclass").forEach((element)=>{element.innerText=localStorage.getItem("dataClass")});
    document.querySelectorAll(".cost").forEach((element) =>{element.innerText=cost});
});

