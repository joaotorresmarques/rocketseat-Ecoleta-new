import express from 'express';
import routes from './routes';
import cors from 'cors';
import path from 'path';
const app = express();

app.use(express.json())
app.use(cors()) //ENDEREÇOS EXTERNOS PODEM TER ACESSO A ESTA API
app.get('/users', (req, res) => {})
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes)

app.listen(3333);