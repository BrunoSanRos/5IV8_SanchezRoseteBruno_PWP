const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Public
app.use(express.static(path.join(__dirname, "public")));

// DB Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Perry1022", 
    database: "bitacora_mantenimiento"
});

db.connect(err => {
    if (err) throw err;
    console.log("Conectado a MySQL");
});

// -------------------------------------------------------
// RUTAS CRUD
// -------------------------------------------------------

// 🟦 LISTAR REGISTROS
app.get("/", (req, res) => {
    const sql = "SELECT * FROM bitacora";
    db.query(sql, (err, resultados) => {
        if (err) throw err;
        res.render("index", { datos: resultados });
    });
});

// 🟩 FORMULARIO CREAR
app.get("/crear", (req, res) => {
    res.render("crear");
});

// 🟩 GUARDAR REGISTRO
app.post("/guardar", (req, res) => {
    const data = req.body;
    const sql = "INSERT INTO bitacora SET ?";
    db.query(sql, data, (err) => {
        if (err) throw err;
        res.redirect("/");
    });
});

// 🟧 FORMULARIO EDITAR
app.get("/editar/:id", (req, res) => {
    const sql = "SELECT * FROM bitacora WHERE id = ?";
    db.query(sql, [req.params.id], (err, resultado) => {
        if (err) throw err;
        res.render("editar", { dato: resultado[0] });
    });
});

// 🟧 ACTUALIZAR REGISTRO
app.post("/actualizar/:id", (req, res) => {
    const sql = "UPDATE bitacora SET ? WHERE id = ?";
    db.query(sql, [req.body, req.params.id], (err) => {
        if (err) throw err;
        res.redirect("/");
    });
});

// 🟥 ELIMINAR
app.get("/eliminar/:id", (req, res) => {
    const sql = "DELETE FROM bitacora WHERE id = ?";
    db.query(sql, [req.params.id], (err) => {
        if (err) throw err;
        res.redirect("/");
    });
});

// Servidor
app.listen(3000, () => console.log("Servidor en http://localhost:3000"));
