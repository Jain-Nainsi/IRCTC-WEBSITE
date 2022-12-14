var svg=document.getElementById("svg");
svg.onclick=function(){
    svg.setAttribute("href","../HTML/index.html");   
}
function next1(){
    var uname=document.getElementById("username").value;
    var ppass=document.getElementById("password").value;
    var ppass1 = document.getElementById("cpassword").value;
    var ques = document.getElementById("question").value;
    var ans = document.getElementById("answer").value;
    var nerror = document.getElementById("nm");
    var nerror = document.getElementById("nm");
    var perr = document.getElementById("pass");
    var cerr = document.getElementById("pass1");
    var qerr = document.getElementById("ques");
    var a = document.getElementById("ans");
    if(uname.length==0){
        nerror.innerHTML = "Username is required.";
        return false;
    }
    if (ppass.length==0) {
        perr.innerHTML = "Password is required.";
        return false;
    }
    if (ppass1.length==0) {
        cerr.innerHTML = " Confirm Password is required.";
        return false;
    }
    if(ppass1!=ppass){
        cerr.innerHTML="Password not matched.";
        return false;
    }
    if (ques.length==0) {
        qerr.innerHTML = " Choose Security Question.";
        return false;
    }
    if (ans.length==0) {
        a.innerHTML = " Security answer is required.";
        return false;
    }
    form2.style.display="block";
    form1.style.display="none";
    form3.style.display="none";
}
function Basic() {
    form1.style.display = "block";
    form2.style.display = "none";
    form3.style.display = "none";
}
function Personal(){
    form1.style.display = "none";
    form2.style.display = "block";
    form3.style.display = "none";
}
function que(){
    var ques=document.getElementById("question").value;
    var q=document.getElementById("ques");
    if(ques.length>1){
        q.innerHTML="";
    }
}
function occu(){
    var occ=document.getElementById("occ").value;
    var o=document.getElementById("o");
    if(occ.length>1){
        o.innerHTML="";
    }
}
function gend(){
    var gen=document.getElementById("gen").value;
    var g=document.getElementById("g");
    if(gen.length>1){
        g.innerHTML="";
    }
}
function stat(){
    var state=document.getElementById("state").value;
    var st=document.getElementById("st");
    if(state.length>1){
        st.innerHTML="";
    }
}
function cit(){
    var city=document.getElementById("city").value;
    var ct=document.getElementById("ct");
    if(city.length>1){
        ct.innerHTML="";
    }
}
function alpha() {
    var uname = document.getElementById("username").value;
    var nerror = document.getElementById("nm");
    if (uname.length < 1) {
        nerror.innerHTML = "Username is required.";
        return false;
    }
    if (!/^[a-zA-Z0-9]+$/.test(uname)) {
        nerror.innerHTML = "* Enter Alphabets and digits Only";
        return false;
    }
        nerror.innerHTML = "";
}

function pass() {
    var ppass = document.getElementById("password").value;
    var x = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_=+-]).{8,16}$/;
    var c = document.getElementById("pass");
    if (ppass.length < 1) {
        c.innerHTML = "Password is required."
        return false;
    }
    if (!x.test(ppass)) {
        c.innerHTML = " * Enter atleast 8 character with number,symbol,capital and small letters.";
        return false;
    }
        c.innerHTML = "";
}
function pass1() {
    var ppass = document.getElementById("password").value;
    var ppass1 = document.getElementById("cpassword").value;
    var err = document.getElementById("pass1");
    if (ppass1 != ppass) {
        err.innerHTML = "Password not matched."
        return false;
    }
    err.innerHTML = "";
}
function validateans() {
    var ans = document.getElementById("answer").value;
    var aerr = document.getElementById("ans");
    if (ans.length < 1) {
        aerr.innerHTML = "Security answer is required."
        return false;
    }
    aerr.innerHTML = "";
}

function Next21() {
    var fname = document.getElementById("fname").value;
    var ferror = document.getElementById("fn");
    var lname = document.getElementById("lname").value;
    var lerror = document.getElementById("ln");
    var occ = document.getElementById("occ").value;
    var o = document.getElementById("o");
    var mail = document.getElementById("mail").value;
    var m = document.getElementById("m");
    var gen = document.getElementById("gen").value;
    var g = document.getElementById("g");
    var mob = document.getElementById("mob").value;
    var mober = document.getElementById("mb");
    var gen=document.getElementById("gen").value;
    
    var details={
        'url' : window.location.pathname+"?",
        params:{
        "email":mail,
        "num":mob,
        "gender":gen
        }
     };
    
    if (fname.length < 1) {
        ferror.innerHTML = "First name is required.";
        return false;
    }
    if (lname.length < 1) {
        lerror.innerHTML = "last name is required.";
        return false;
    }
    if (occ.length < 1) {
        o.innerHTML = "Choose Occupations. ";
        return false;
    }
    if (mail.length < 1) {
        m.innerHTML = "Email is required. ";
        return false;
    }
    if (gen.length < 1) {
        g.innerHTML = "Choose Gender ";
        return false;
    }
    if (mob.length < 1) {
        mober.innerHTML = "Mobile number is required.";
        return false;
    }
    form1.style.display="none";
    form2.style.display = "none";
    form3.style.display = "block";
    let query = details.url
    for (let d in details.params){
         query += encodeURIComponent(d) + '=' + 
            encodeURIComponent(details.params[d]) + '&'
    }
    console.log("query is "+query.slice(0,-1));
}

function fn() {
    var fname = document.getElementById("fname").value;
    var nerror = document.getElementById("fn");   
    if (fname.length < 1) {
        nerror.innerHTML = "First name is required.";
        return false;
    }
    if (!/^[a-zA-Z]+$/.test(fname)) {
        nerror.innerHTML = "* Enter Alphabets Only";
        return false;
    }
    nerror.innerHTML = "";
}
function mn() {
    var mname = document.getElementById("mname").value;
    var nerror = document.getElementById("mn");
    if (!/^[a-zA-Z]+$/.test(mname)) {
        nerror.innerHTML = "* Enter Alphabets Only";
        return false;
    }
        nerror.innerHTML = "";
}
function ln() {
    var lname = document.getElementById("lname").value;
    var nerror = document.getElementById("ln");
    if (lname.length < 1) {
        nerror.innerHTML = "Last name is required.";
        return false;
    }
    if (!/^[a-zA-Z]+$/.test(lname)) {
        nerror.innerHTML = "* Enter Alphabets Only";
        return false;
    }
        nerror.innerHTML = "";
}
function em() {
    var mail = document.getElementById("mail").value;
    var merror = document.getElementById("m");
    if (mail.length < 1) {
        merror.innerHTML = "Email is required.";
        return false;
    }
    if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(mail)) {
        merror.innerHTML = "Email is invalid";
        return false;
    }
        merror.innerHTML = "";
}
function vmob() {
    var mob = document.getElementById("mob").value;
    var mober = document.getElementById("mb");
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
function add() {
    var add1 = document.getElementById("add1").value;
    var a1 = document.getElementById("a1");
    if (add1.length < 1) {
        a1.innerHTML = "Address is required."
        return false;
    }
        a1.innerHTML = "";
}
function ad() {
    var add2 = document.getElementById("add2").value;
    var a2 = document.getElementById("a2");
    if (add2.length < 1) {
        a2.innerHTML = "Address is required.";
        return false;
    }
        a2.innerHTML = "";
}
function pinc() {
    var pin = document.getElementById("pin").value;
    var pn = document.getElementById("pn");
    if (pin.length < 1) {
        pn.innerHTML = "Pin is required.";
        return false;
    }
    if (!/^[0-9]+$/.test(pin)) {
        pn.innerHTML = "* Enter Digits Only";
        return false;
    }
    if (!(pin.length == 6)) {
        pn.innerHTML = "* Enter 6 digits only";
        return false;
    }
        pn.innerHTML = "";
}
function validatecount() {
    var count = document.getElementById("count").value;
    var cnt = document.getElementById("cnt");
    if (count.length < 1) {
        cnt.innerHTML = "Country is required.";
        return false;
    }
    if (!/^[a-zA-Z]+$/.test(count)) {
        cnt.innerHTML = "* Enter Alphabets Only";
        return false;
    }
        cnt.innerHTML = "";
}

function register(event) {
    var uname=document.getElementById("username").value;
    var ppass=document.getElementById("password").value;
    var ques = document.getElementById("question").value;
    var ans = document.getElementById("answer").value;
    var fname = document.getElementById("fname").value;
    var mname = document.getElementById("mname").value;
    var lname = document.getElementById("lname").value;
    var mail = document.getElementById("mail").value;
    var mob = document.getElementById("mob").value;
    var dob1=document.getElementById("dob").value;
    var gen=document.getElementById("gen").value;
    var add1 = document.getElementById("add1").value;
    var a1 = document.getElementById("a1");
    var add2 = document.getElementById("add2").value;
    var a2 = document.getElementById("a2");
    var count = document.getElementById("count").value;
    var cnt = document.getElementById("cnt");
    var pin = document.getElementById("pin").value;
    var pn = document.getElementById("pn");
    var state = document.getElementById("state").value;
    var st = document.getElementById("st");
    var city = document.getElementById("city").value;
    var ct = document.getElementById("ct");
    var reg=document.getElementById("reg");
    if (add1.length < 1) {
        a1.innerHTML = "Address is required."
        return false;
    }
    if (add2.length < 1) {
        a2.innerHTML = "Address is required."
        return false;
    }
    if (count.length < 1) {
        cnt.innerHTML = "Country is required.";
        return false;
    }
    if (pin.length < 1) {
        pn.innerHTML = "Pin is required.";
        return false;
    }
    if (state.length < 1) {
        st.innerHTML = "Choose state";
        return false;
    }
    if (city.length < 1) {
        ct.innerHTML = "Choose city";
        return false;
    }
    fetch("http://127.0.0.1:8000/users/?",{
        method:'POST',
        body:JSON.stringify({
            user_id: uname,
            password: ppass,
            security_ques: ques,
            security_ans: ans,
            first_name: fname,
            middle_name: mname,
            last_name: lname,
            gender: gen,
            email: mail,
            mobile_number: mob,
            dob: dob1,
            address: add1,
            country: count,
            pincode: pin,
            state : state
        }),
        headers:{
            "Content-Type":"application/json; charset=UTF-8"
        }
    })
    .then(function(Response){
        return Response.json()
    })
    .then(function(data){
        var reg=document.getElementById("reg");
        if(data.Response!=undefined){
        alert(data.Response);
        localStorage.setItem("sl","0");
        location.href="../HTML/index.html";
    }
        else{
            console.log("same user");
            console.log(data.Response);
            alert(data.user_id);
        }
    })
}



