const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
})

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`name`,`email`,`password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        if(data.length > 0) {
            return res.json("Success");
        } else {
            return res.json("Fail");
        }
    })
})

app.get('/', (req, res) => {
    const sql = "SELECT * FROM museos";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.post('/create', (req, res) => {
    const sql = "INSERT INTO museos (`nombre`,`municipio`,`direccion`,`telefono`) VALUES (?)";
    const values = [
        req.body.nombre,
        req.body.municipio,
        req.body.direccion,
        req.body.telefono
    ]
    db.query(sql, [values], (err, data) => {
        if(err) {
            return res.json(err);
        }
        return res.json("CREATED");
    })
})

app.put('/update/:id', (req, res) => {
    const sql = "UPDATE museos set `nombre` =?, `municipio` =?, `direccion` =?, `telefono` =? WHERE id = ?";
    const id = req.params.id;
    const values = [
        req.body.nombre,
        req.body.municipio,
        req.body.direccion,
        req.body.telefono
    ]
    db.query(sql, [...values, id], (err, data) => {
        if(err) {
            return res.json(err);
        }
        return res.json("UPDATED");
    })
})

app.delete('/delete/:id', (req, res) => {
    const sql = "DELETE FROM museos WHERE id = ?";
    const id = req.params.id;
    
    db.query(sql, [id], (err, data) => {
        if(err) {
            return res.json(err);
        }
        return res.json("DELETED");
    })
})

app.listen(8081, ()=> {
    console.log("listening");
})