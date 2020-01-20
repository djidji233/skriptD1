document.getElementById('login_pressed').addEventListener("click", login);

function login(event){
    let e = document.getElementById('email').value;
    let ps = document.getElementById('password').value;
  
    console.log(e+","+ps);
    event.preventDefault();
    const user1 = 'admin@mail.com';
    const pass1 = '1111';
    if (ps===pass1 && e===user1) {
        console.log("email and pass ok");
         location.href = 'index.html';
         return true;
    } else {
        console.log("wrong email/password");
        window.alert("Check email and password");
    }

}