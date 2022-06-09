const express = require('express')
const app = express()
const db = require('./connect-db')

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Hello World123')
})

app.get('/product-info', async (req, res) => {
    const sql = 'SELECT * FROM products';
    const [rs, fields] = await db.query(sql)
    res.json(rs)
})

app.get('/view/products', async (req, res) => {
    res.sendFile('/view/10.clothes.html', { root: __dirname })
})


app.listen(3000)
console.log('server start at: http://localhost:3000')