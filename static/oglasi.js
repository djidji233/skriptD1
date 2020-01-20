// ----- pocetni podaci -----


// ------ inicijalizacija pocetne stranice ------
var lastId=9;
//initHomePage();
initHome();

function initHomePage() {
    let container = document.getElementById('oglasi');
    container.innerHTML = '';
    for (let i = 0; i < oglasiArray.length; i++) {
        container.innerHTML += createOglas(oglasiArray[i]);
    }

    document.getElementById("idLbl").value = lastID+1;
    document.getElementById("addNaziv").value = '';
    document.getElementById("addCena").value = '';
    document.getElementById("addKategorija").value = '';
    document.getElementById("addOpis").value='';
    document.getElementById("addStanje").value='';
    document.getElementById("addSlika").value = '';
}

function createOglas(item){
    return `<div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
            <a href="#"><img class="card-img-top" src="${item.slika}" alt=""></a>
                <div class="card-body">
                    <h4 class="card-title">
                        <a href="#">${item.naziv}</a>
                    </h4>
                    <h4>${item.cena} €</h4>
                    <p class="card-text">${item.opis}</p>
                </div>
                <div class="card-footer">
                    <h5>${item.kategorija}</h5> 
                    <button type="submit" class="btn btn-secondary btn-block"     onclick="deleteOgl(${item.id});">Delete</button>
                    <button  type="submit" class="btn btn-secondary btn-block" onclick="fillInfo(${item.id});">Edit</button>
                </div>
        </div>
    </div>`;
}

function initHomePageWithArray(array) {
    let container = document.getElementById('oglasi');
    container.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        container.innerHTML += createOglas(array[i]);
    }
    document.getElementById("addNaziv").value = '';
    document.getElementById("addCena").value = '';
    document.getElementById("addKategorija").value = '';
    document.getElementById("addOpis").value='';
    document.getElementById("addStanje").value='';
    document.getElementById("addSlika").value='';
}

// ------ funkcije ------
function deleteOglas(sentId){
    let f = [];
    for(let i=0; i<oglasiArray.length; i++){
        
        if(oglasiArray[i].id == sentId){
            oglasiArray.splice(i,1);
        } 
    } 
    initHomePage(); 
}

function chooseKategorija(kat){
    let k = [];
    for(let i=0; i<oglasiArray.length; i++){
        if(oglasiArray[i].kategorija.valueOf() === kat.valueOf()){
            console.log('Nasao odgovarajucu kategoriju: '+oglasiArray[i].naziv);
            k.push(oglasiArray[i]);
        } else {
            console.log('Ne pripada izabranoj kategoriji, obrisao: '+oglasiArray[i].naziv);
        }
    }
    initHomePageWithArray(k);
}

function sortCenaRastuce(){
    let cene = [];
    for(i=0; i<oglasiArray.length; i++){
        cene.push(oglasiArray[i].cena);
    }
    cene.sort(function(a, b){return a - b});

    let array = [];
    for(i=0; i<cene.length; i++){
        for(j=0; j<oglasiArray.length; j++){
            if(cene[i] === oglasiArray[j].cena){
                array.push(oglasiArray[j]);
            }
        }
    }

    initHomePageWithArray(array);
}

function sortCenaOpadajuce(){
    let cene = [];
    for(i=0; i<oglasiArray.length; i++){
        cene.push(oglasiArray[i].cena);
    }
    cene.sort(function(a, b){return b - a});
    
    let array = [];
    for(i=0; i<cene.length; i++){
        for(j=0; j<oglasiArray.length; j++){
            if(cene[i] === oglasiArray[j].cena){
                array.push(oglasiArray[j]);
            }
        }
    }

    initHomePageWithArray(array);
}

function sortNazivRastuce(){ 
    let imena = [];
    for(i=0; i<oglasiArray.length; i++){
        imena.push(oglasiArray[i].naziv);
    }
    imena.sort(function (a, b) {return a.toLowerCase().localeCompare(b.toLowerCase());});

    let array = [];
    for(i=0; i<imena.length; i++){
        for(j=0; j<oglasiArray.length; j++){
            if(imena[i] === oglasiArray[j].naziv){
                array.push(oglasiArray[j]);
            }
        }
    }

    initHomePageWithArray(array);
}

function sortNazivOpadajuce(){
    let imena = [];
    for(i=0; i<oglasiArray.length; i++){
        imena.push(oglasiArray[i].naziv);
    }
    imena.sort(function (a, b) {return b.toLowerCase().localeCompare(a.toLowerCase());});

    let array = [];
    for(i=0; i<imena.length; i++){
        for(j=0; j<oglasiArray.length; j++){
            if(imena[i] === oglasiArray[j].naziv){
                array.push(oglasiArray[j]);
            }
        }
    }

    initHomePageWithArray(array);
}

function addOglas(naziv, cena, kategorija, opis, stanje,slika){
    oglasiArray.push(
        {
            id: ++lastID,
            naziv: naziv,
            cena: cena,
            kategorija: kategorija,
            opis: opis,
            stanje: stanje,
            slika: slika
        }
    );
    initHomePage();
}

function editOglas(id,naziv, cena, kategorija, opis,stanje, slika){ 
    for (let i = 0; i < oglasiArray.length; i++) {
        if(oglasiArray[i].id == id){
            oglasiArray[i].naziv=naziv;
            oglasiArray[i].cena=cena;
            oglasiArray[i].kategorija=kategorija;
            oglasiArray[i].opis=opis;
            oglasiArray[i].stanje=stanje;
            oglasiArray[i].slika=slika;
        }
    }
    initHomePage();
}

function fillInfo(id){
    for (let i = 0; i < oglasiArray.length; i++) {
        if(oglasiArray[i].id == id){
            document.getElementById("idLbl").value = oglasiArray[i].id;
            document.getElementById("addNaziv").value = oglasiArray[i].naziv;
            document.getElementById("addCena").value = oglasiArray[i].cena;
            document.getElementById("addKategorija").value = oglasiArray[i].kategorija;
            document.getElementById("addOpis").value = oglasiArray[i].opis;
            document.getElementById("addStanje").value = oglasiArray[i].stanje;
            document.getElementById("addSlika").value = oglasiArray[i].slika;
            return true;
        }
    }
    return false;
}

/*
function getOglasById(id){ // TODO
    for (let i = 0; i < oglasiArray.length; i++) {
        if(oglasiArray[i].id == id){
            return oglasiArray[i];
        }
    }
    return null;
} */


// DRUGI DEO DOMACEG - ADAPTACIJA POSTOJECIH FUNKCIJA

function initHome(){
    postDoc('/oglasi/load/',{}, handleResponse);
}

function deleteOgl(sentId){
    postDoc('/oglasi/delete/',{id: sentId},initHome);
    //initHome();
}

function addOgl(){
    let oglasId = ++lastId;
    let oglasNaziv = document.getElementById("addNaziv").value;
    let oglasCena = document.getElementById("addCena").value;
    let oglasKategorija = document.getElementById('addKategorija').value;
    let oglasOpis = document.getElementById('addOpis').value;
    let oglasStanje = document.getElementById('addStanje').value;
    let oglasSlika = document.getElementById('addSlika').value;
    let o = {
        id: oglasId,
        naziv: oglasNaziv,
        cena: oglasCena,
        kategorija: oglasKategorija,
        opis: oglasOpis,
        stanje: oglasStanje,
        slika: oglasSlika
    };
    postDoc('/oglasi/add/', o, handleResponse);
    initHome();
}

function handleResponse(xhttp){
    var response = JSON.parse(xhttp.responseText);
    if(response.status == 200){
        initHomePageWithArray(response.data);
    }
}