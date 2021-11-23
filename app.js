const express = require('express');
const useRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"))
app.set('views', 'views');
app.set('view engine', 'hbs');
app.listen(3000, () => console.log('server running'));

app.get('/', (req, res) => res.render('index', { date: new Date().toLocaleString() }))

app.use('/usuario', useRoutes);
