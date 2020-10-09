var express =  require("express");
var app = express();
const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.json({msg : "Welcome to the PhoneBook"})
})

app.listen(PORT,()=>{
    console.log(`Server Start at Port ${PORT}`);
})