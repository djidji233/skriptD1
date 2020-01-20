let path = require("path");
let express = require("express");
const router = require('./ruteri/ruter.js');  

let app = express();

app.use(express.json());
app.use('',router);
//router.initialize(app);

app.use(express.static(path.join(__dirname, 'static')));

app.listen(process.env.PORT || 5000);
module.exports = app;