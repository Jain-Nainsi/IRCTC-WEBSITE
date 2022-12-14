var mob = document.getElementById("mob").value;
var mober = document.getElementById("mb");
    
function vmob() {
  var mob = document.getElementById("mob").value;
  var mober = document.getElementById("mb");
  mober.style.color = "red";
  if (mob.length < 1) {
      mober.innerHTML = "Mobile number is required.";
      return false;
  }
  if (!/^[0-9]+$/.test(mob)) {
      mober.innerHTML = "* Enter Digits Only";
      return false;
  }
  if (!(mob.length == 10)) {
      mober.innerHTML = "* Enter 10 digits";
      return false;

  }
      mober.innerHTML = "";
}
function vmob1(){
    var mob = document.getElementById("mob").value;
    var mober = document.getElementById("mb");
    mober.style.color = "red";
    if (mob.length < 1) {
        mober.innerHTML = "Mobile number is required.";
        return false;
    }
    if (!/^[0-9]+$/.test(mob)) {
        mober.innerHTML = "* Enter Digits Only";
        return false;
    }
    if (!(mob.length == 10)) {
        mober.innerHTML = "* Enter 10 digits";
        return false;
    }
    mober.innerHTML="";
      fetch("http://127.0.0.1:8000/passenger_record/",{
        method:'POST',
        body:JSON.stringify({
           user_id:localStorage.getItem("user"),
           date:localStorage.getItem("dataDate"),
           train_num:localStorage.getItem("train_num"),
           p_count:localStorage.getItem("H"),
           veg:localStorage.getItem("VEGETRIAN"),
           non_veg:localStorage.getItem("Non_Veg"),
           classes:localStorage.getItem("Classes"),
           total_amount:localStorage.getItem("total_fare")
        }),
        headers:{
            "Content-Type":"application/json; charset=UTF-8"
        }
    })
    .then(function(Response){
        return Response.json()
    })
    .then(function(data){
        console.log(data);
        alert(data.Response);
        location.href="../HTML/book.html";
    })
}

document.querySelector(".fare").innerHTML="RS."+localStorage.getItem("total_fare");

 //check.setAttribute("href","../HTML/book.html");
     // return true;