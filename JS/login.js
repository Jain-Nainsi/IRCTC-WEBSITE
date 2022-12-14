var svg = document.getElementById("svg");
svg.onclick = function () {
    localStorage.setItem("sl","0");
    svg.setAttribute("href", "../HTML/index.html");

}
var err = document.getElementById("error");
function validateform(event) {
    var n = document.getElementById("username").value;
    var p = document.getElementById("password").value;
    localStorage.setItem("user", n);
    if (n.length < 1) {
        err.innerHTML = "Please Enter Valid Username";
        return false;
    }
    if (p.length < 1) {
        err.innerHTML = "Please Enter Valid password";
        return false;
    }

    err.innerHTML = "";
    fetch("http://127.0.0.1:8000/login/", {
        method: 'POST',
        body: JSON.stringify({
            user_id: n,
            password: p
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
        .then(function (Response) {
            return Response.json()
        })
        .then(function (data) {
            if (data.Response == "Successfully logged in.") {
                alert(data.Response);
                window.history.back();
            }
            else {
                alert(data.Response);
            }
        });
    localStorage.setItem("sl", "1");
    localStorage.setItem("hl", "1");
    localStorage.setItem("user", n);
    localStorage.setItem("username", n);
}
function validatename() {
    var n = document.getElementById("username").value;
    if (n.length < 1) {
        err.innerHTML = "Please Enter Valid Username";
        return false;
    }
    err.innerHTML = "";
    var n = document.getElementById("username").value;
    fetch("http://127.0.0.1:8000/users?user_id=" + n)
        .then((Response) => Response.json())
        .then((data) => {
            localStorage.setItem("MOB", data.result[0].mobile_number);
            localStorage.setItem("EMAIL", data.result[0].email);
        });
}
function validatepass() {
    var p = document.getElementById("password").value;
    if (p.length < 1) {
        err.innerHTML = "Please Enter Valid Password";
        return false;
    }
    err.innerHTML = "";
}


