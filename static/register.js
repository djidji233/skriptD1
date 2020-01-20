document.getElementById('register_pressed').addEventListener("click", get_data);

function get_data(event) {
    let n = document.getElementById('name').value;
    let e = document.getElementById('email').value;
    let ph = document.getElementById('phone').value;
    let ps = document.getElementById('password').value;
    let psc = document.getElementById('confirm_password').value;
    
    // Data which will write in a file. 
    let data = n+","+e+","+ph+","+ps;
    console.log(data); 
    event.preventDefault();

    if(checkforblank(n,e,ph,ps,psc)) //sprecava prazne fieldove
    {
      if(ps === psc){
        window.alert('Uspesno ste se registrovali!');
        /*  za upis u txt fajl pri registraciji -> ne radi
        const fs = require('fs');
        fs.writeFile('Korisnici.txt', data, (err) => { 
        // In case of a error throw err. 
        if (err) throw err; 
        }) */
        location.href = 'index.html';
      } else {
        window.alert('Lozinke se ne poklapaju :(');
      }
      
    }
  } 
    
// fja koja sprecava prazne fieldove
function checkforblank(name,email,phone,password,confirmedpass){
    if(name == "" || name == null){
    window.alert('Please fill in your name!');
    return false;
    } else if(email == "" || email == null){
    window.alert('Please fill in your email!');
    return false;
    }else if(phone == "" || phone == null){
    window.alert('Please fill in your phone number!');
    return false;
    }else if(password == "" || password == null){
    window.alert('Please fill in your password!');
    return false;
    }else if(confirmedpass == "" || confirmedpass == null){
    window.alert('Please confirm your password!');
    return false;
    } else {
    return true;
    }
}