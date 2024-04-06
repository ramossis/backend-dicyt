const express =require('express')
require('dotenv').config()

const app= express()

app.use(express.json())

app.listen(process.env.PORT,()=>{
    console.log('SERVER ON READY PORT',process.env.PORT)
})

app.use('/usuarios',require('./src/routes/Usuario'))
app.get('/',(req,res)=>{
    res.status(200).send('welcome to API')
})
