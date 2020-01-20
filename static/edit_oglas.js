document.getElementById('edit_pressed').addEventListener("click", get_data);

function get_data(event) {
    let n = document.getElementById('addNaziv').value;
    let c = document.getElementById('addCena').value;
    let k = document.getElementById('addKategorija').value;
    let o = document.getElementById('addOpis').value;
    let s = document.getElementById('addStanje').value;
    let p = document.getElementById('addSlika').value;
    
    event.preventDefault();

    if(checkforblank(n,c,k,o,s,p)) //sprecava prazne fieldove
    {
      //funkcionalnost
      let sentId = document.getElementById("idLbl").value;
      let sentNaziv = document.getElementById("addNaziv").value;
      let sentCena = document.getElementById("addCena").value;
      let sentKategorija = document.getElementById("addKategorija").value;
      let sentOpis = document.getElementById("addOpis").value;
      let sentStanje = document.getElementById("addStanje").value;
      let sentSlika = document.getElementById("addSlika").value;
      editOglas(sentId,sentNaziv,sentCena,sentKategorija,sentOpis,sentStanje,sentSlika);
      //restartuje polja
      document.getElementById("idLbl").value = '';
      document.getElementById("addNaziv").value = '';
      document.getElementById("addCena").value = '';
      document.getElementById("addKategorija").value = '';
      document.getElementById("addOpis").value='';
      document.getElementById("addStanje").value='';
      document.getElementById("addSlika").value = '';
    }
  } 
    
// fja koja sprecava prazne fieldove
function checkforblank(naziv,cena,kategorija,opis,stanje,slika){
    if(naziv == "" || naziv == null){
    window.alert('Please fill in your naziv!');
    return false;
    } else if(cena == "" || cena == null){
    window.alert('Please fill in your cena!');
    return false;
    }else if(kategorija == "" || kategorija == null){
    window.alert('Please fill in your kategorija!');
    return false;
    }else if(opis == "" || opis == null){
    window.alert('Please fill in your opis!');
    return false;
    }else if(stanje == "" || stanje == null){
    window.alert('Please confirm your stanje!');
    return false;
    } else if(slika == "" || slika == null){
    window.alert('Please confirm your slika!');
    return false;
    } else {
    return true;
    }
}