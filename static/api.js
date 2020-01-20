function postDoc(url, o, cFunction) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            cFunction(this);
        }
    };
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send(JSON.stringify(o));
}