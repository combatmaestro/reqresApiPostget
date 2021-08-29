
var x = document.getElementById("Login");
var y = document.getElementById("Register");

var z = document.getElementById("btn");
function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}









document.getElementById("register-btn").addEventListener('click', function (e) {
    e.preventDefault()

    
    var email = document.getElementById('Email').value
    var password = document.getElementById('Password').value
 

    fetch("https://reqres.in/api/register", {
        method: 'POST',
       
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            email: email,
            password: password
        })

    })
    .then(res => res.json())
    .then(data => console.log(data))


})


document.getElementById("login-btn").addEventListener('click', function (e) {
    e.preventDefault()

   
    var email = document.getElementById('Email').value
    var password = document.getElementById('Password').value
 

    fetch("https://reqres.in/api/login", {
        method: 'POST',
       
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            email: email,
            password: password
        })

    })
    .then(res => {
        if(res.ok){
            location.href = "userfetch.html";
        }
        else{
            console.log("Not Sucessfull");
        }
    })
    // .then(res => res.json())
    .then(data => console.log(data))


})