const express =  require("express");
const app = express();
const connectDB = require("./config/db");
const path = require('path');

// app.get('/',(req,res)=>{
//     res.json({msg : "Welcome to the PhoneBook"})
// })

//Connect DB
connectDB();



//init middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))



//render regsiter form
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'register.html'))
})

//Define Routes
app.use('/api/users',require('./routes/users'));
app.use('/api/auth',require('./routes/auth'));
app.use('/api/contacts',require('./routes/contacts'));



const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server Start at Port ${PORT}`);
})