const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan =  require('morgan');
const {DB_URL} = require('./config.json');
const studentRouter = require('./routers/studentRouter');
const userRouter = require('./routers/userRouter')
const {checkToken} = require('./middlewares/checkToken')
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'))


app.use('/users', userRouter);
// app.use('/students', studentRouter);
app.use('/students',checkToken, studentRouter);
app.all('*', (req,res, next) => {next(new Error('Route not found'))})

app.use((req, res, next) => {
    res.status(404).send({ error: 'API NOT SUPPORTED' });
});

app.use((err, req, res, next) => {
    res.status(500).send({success:false, data: err.message});
});

mongoose.connect(DB_URL)
.then(()=> app.listen(3000, ()=> console.log("server connected")))
.catch(()=>console.log('DB Error'))