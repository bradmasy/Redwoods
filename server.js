const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors');
const ejs = require('ejs');
app.set('view engine', 'ejs');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const PORT = 5000;

app.use(cors());
// app.use(express.static(__dirname + "/public"));
app.use(express.static(path.join(__dirname, '/build')));


app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);

});


// main route
app.get("/", (req, res) => {
    console.log("main route")
    res.sendFile(path.join(__dirname, "/build/index.html"));

});

app.get("/about", (req, res) => {
    console.log("about route")
    res.render(path.join(__dirname, "/build/index.html"));
});

