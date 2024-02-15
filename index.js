const express = require('express')
const app = express()
const port = 3000
const postRoute = require("/home/user-6-c1/Xclonebackend/routes/postRoute/postsRoute.js")

app.use(express.json());
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/post', postRoute);
app.post('/post', postRoute);
app.put('/post/:id', postRoute);
app.delete('/post/:id', postRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

