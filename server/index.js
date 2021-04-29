import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import estoquesRoutes from './routes/estoque.js';
const app = express();

app.use('/estoques', estoquesRoutes);

app.use(bodyParser.json({limit: "20mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended:true}));
app.use(express.json());

app.use(cors());

const CONNECTION_URL = 'mongodb+srv://user-1:password-1@estoque.xx8yx.mongodb.net/Sistema?retryWrites=true&w=majority';

const PORT = process.env.PORT || 3001;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true, useUnifiedTopology:true
}).then(() => app.listen(PORT, () =>
console.log(`Connection is established and running on port: ${PORT}`)
)).catch((err) => console.log(err.message));

mongoose.set('useFindAndModify',false);