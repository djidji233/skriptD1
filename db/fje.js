const mysql = require('mysql');

var connection = mysql.createPool({pool: 100, host: "localhost", user:"root", password:"", database:"db"});

class Funkcije{
    loadOglasi(){
        let query = 'select * from oglasi_table';
        let formatted = mysql.format(query);
        return new Promise(function (resolve,reject) {
            connection.query(formatted, (err,results) => {
                err ? reject(err) : resolve(results);
            });
        });
    }
    deleteOglas(sentID){
        let query = 'DELETE FROM oglasi_table WHERE id= ?';
        let formatted = mysql.format(query, sentID);
        return new Promise(function (resolve, reject) {
            connection.query(formatted, (err, results) => {
                err ? reject(err) : resolve(results);
            });
        });
    }
    addOglas(oglas){
        let o = [
            oglas.id,
            oglas.naziv,
            oglas.cena,
            oglas.kategorija,
            oglas.opis,
            oglas.stanje,
            oglas.slika
        ];
        let query = 'insert into oglasi_table (id, naziv, cena, kategorija, opis, stanje, slika) values (?,?,?,?,?,?,?)';
        let formatted = mysql.format(query, o);
        return new Promise(function (resolve, reject) {
            connection.query(formatted, (err, results) => {
                err ? reject(err) : resolve(results);
            });
        });
    }
}

const functions = new Funkcije();
module.exports = functions;