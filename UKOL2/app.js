const mysql2 = require('mysql2');;
const express = require('express');
const path = require('path');

const connections = mysql2.createConnection(
    {
        host: '127.0.0.3',
        user: 'root',
        password: 'root',
        port: '3306',
        database: 'moje_db',
    }
);

connections.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Úspěšně přpojeno.");
        const jmeno = "Vaclav"
        const prijmeni = "Sima"

        connections.query(
            `INSERT INTO uzivatele(jmeno, prijmeni) VALUES(${jmeno}, ${prijmeni})`,
            (error, data) => {
                if (error) console.log(error)
            });
        connections.query(
            `SELECT * FROM uzivatele;` , (error, data) => {
                if (error) console.log(error);
                else {
                    console.log(data);
                }
    }
    )
}
});

const app = express();
app.use(express.static(__dirname));
app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(_dirname, `index.html`));
})

app.post("/uloz-uzivatele", (req, res) => {
    console.log(req.body);
    res.redirect("/")
});

app.listen(5500)