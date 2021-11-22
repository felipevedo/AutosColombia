const express = require('express');
const db = require('./dbHelper');
// const { query } = db.init();


const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(express.static("public"))
app.set('views', 'views');
app.set('view engine', 'hbs');


app.get('/', async (req, res) => {
    // const result = await query("SELECT * FROM customers");
    // console.log('result', Object.keys(result));
    res.render("index",  { title: 'Autos colombia' });
});

app.post('/', async (req, res) => {
    console.log('[/customer] req.body', req.body);
    res.sendStatus(200);
});

app.listen(3000, () => console.log('server running'));