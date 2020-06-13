import express from 'express';
const app = express();
app.use(express.json())

const user = [
  'Joao',
  'Marcos',
  'Torres'
]

app.get('/users', (req, res) => {
  const search = String(req.query.search)

  const filteredUsers = search ? user.filter(user => user.includes(search)) : user;
  console.log(filteredUsers)

  res.json([
    'Joao',
    'nome'
  ])
})


app.get('/users/:id', (req, res) => {
  const id = Number(req.params.id)
  const users = user[id]
  return res.json(users)
  console.log(users)
})

app.post('/users', (req,res)=>{
  const name = req.body.name
  const email = req.body.email

  const jss = {
    name: req.body.name,
    email: req.body.email
  }

  return res.json(jss)
})

app.listen(3333);