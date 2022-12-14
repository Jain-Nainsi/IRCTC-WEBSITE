
const selectFrom= document.querySelectorAll(".From");
const selectTo= document.querySelectorAll(".To");
const inputdates= document.querySelectorAll(".Date");
const dataFrom=localStorage.getItem("dataFrom");
const dataTo=localStorage.getItem("dataTo");
const selectclass= document.querySelectorAll(".dclass");
const dateCs=localStorage.getItem("Classes");
const dataDate=localStorage.getItem("dataDate");
const mail=document.querySelectorAll(".mails");
const dmail=localStorage.getItem("EMAIL");
const mob=document.querySelectorAll(".mob");
const dmob=localStorage.getItem("MOB");
const numb=document.querySelectorAll(".num");
const dnum=localStorage.getItem("H");
var n=document.querySelector(".p_detail");

window.onload=()=>{ 
   inputdates.forEach(element => {
       element.innerText=dataDate;
   });
   selectFrom.forEach(element => {
       element.innerText=dataFrom;
   });
   selectTo.forEach(element => {
       element.innerText=dataTo;
   });
   selectclass.forEach(element => {
    element.innerText=dateCs;
    });
   mail.forEach(element => {
    element.innerText=dmail;
   });
   mob.forEach(element => {
    element.innerText=dmob;
   });
   numb.forEach(element => {
    element.innerText=dnum;
   });
   n.innerHTML=localStorage.getItem("p_detail");
}

let finalURL = 'http://127.0.0.1:8000/trains?source=' + dataFrom + '&destination=' + dataTo + '&doj=' + dataDate;
console.log(finalURL);
fetch(finalURL).then((Response) => Response.json())
  .then((data) => {
    const dict=data.result[0].class_cost[0];
    const classes=localStorage.getItem("dataClass");
    for(var class_name in dict){
        if(classes===class_name)
        {
            var cost=dict[class_name];
            console.log(cost);
        }
    }
  
    console.log(data);
    console.log(data.result[0].date);
    document.querySelectorAll(".trainName").forEach((element) =>{element.innerText = data.result[0].train_name;});
    document.querySelectorAll(".From").forEach((element) =>{element.innerText= data.result[0].source;});
    document.querySelectorAll(".To").forEach((element) =>{element.innerText = data.result[0].destination;});
    document.querySelectorAll(".depart_time").forEach((element) =>{element.innerText= data.result[0].source_departure_time;});
    document.querySelectorAll(".arrival_time").forEach((element) =>{element.innerText = data.result[0].destination_arrival_time;});
    document.querySelectorAll(".dclass").forEach((element)=>{element.innerText=classes});
    document.querySelectorAll(".cost").forEach((element) =>{element.innerText=localStorage.getItem("ticket_fare");});
    document.querySelectorAll(".food").forEach((element) =>{element.innerText=localStorage.getItem("food_cost");});
    document.querySelectorAll(".total_fare").forEach((element) =>{element.innerText='\u20B9'+localStorage.getItem("total_fare");});
});