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
    const sql = "INSERT INTO users (`dni`,`nombre`,`email`,`rol`,`pass`) VALUES (?)";
    const values = [
        req.body.dni,
        req.body.nombre,
        req.body.email,
        req.body.rol,
        req.body.pass
    ]
    db.query(sql, [values], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM users WHERE `email` = ? AND `pass` = ?";
    db.query(sql, [req.body.email, req.body.pass], (err, data) => {
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

app.post('/createUser', (req, res) => {
    const sql = "INSERT INTO users (`dni`,`nombre`,`email`,`rol`,`pass`) VALUES (?)";
    const values = [
        req.body.dni,
        req.body.nombre,
        req.body.email,
        req.body.rol,
        req.body.pass
    ]
    db.query(sql, [values], (err, data) => {
        if(err) {
            return res.json(err);
        }
        return res.json("CREATED");
    })
})

app.put('/updateUser/:id', (req, res) => {
    const sql = "UPDATE users set `dni` =?, `nombre` =?, `email` =?, `rol` =?, `pass` =? WHERE id = ?";
    const id = req.params.id;
    const values = [
        req.body.dni,
        req.body.nombre,
        req.body.email,
        req.body.rol,
        req.body.pass
    ]
    db.query(sql, [...values, id], (err, data) => {
        if(err) {
            return res.json(err);
        }
        return res.json("UPDATED");
    })
})

app.delete('/deleteUser/:id', (req, res) => {
    const sql = "DELETE FROM users WHERE id = ?";
    const id = req.params.id;
    
    db.query(sql, [id], (err, data) => {
        if(err) {
            return res.json(err);
        }
        return res.json("DELETED");
    })
})



app.post('/createMuseum', (req, res) => {
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

app.put('/updateMuseum/:id', (req, res) => {
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

app.delete('/deleteMuseum/:id', (req, res) => {
    const sql = "DELETE FROM museos WHERE id = ?";
    const id = req.params.id;
    
    db.query(sql, [id], (err, data) => {
        if(err) {
            return res.json(err);
        }
        return res.json("DELETED");
    })
})


app.get('/superadmin/museum', (req, res) => {
    const sql = "SELECT * FROM museos";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})


app.get('/admin/museum', (req, res) => {
    const sql = "SELECT * FROM museos";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})


app.get('/user/museum', (req, res) => {
    const sql = "SELECT * FROM museos";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})


app.get('/superadmin/users', (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/admin/users', (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8081, ()=> {
    console.log("listening");
})