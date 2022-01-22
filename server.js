const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlroutes = require('./routes/htmlRoutes');



const app = express();
const PORT= process.env.PORT || 3000;

//parsing data, static, route middleware

app.search(express.json());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlroutes);


app.listen(PORT, () => console.log(`Listening on Port ${PORT}`))