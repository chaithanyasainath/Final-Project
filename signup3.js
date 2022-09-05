const express = require("express");
const path = require("path");

const bodyParser = require("body-parser");
const alert = require("alert");

const app = express();




app.use(express.static(path.join(__dirname, "server")));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = 3001;

const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/new', { useNewUrlParser: true, useUnifiedTopology: true });


var db = mongoose.connection;


db.on('error', () => console.log('Error in database connection'));
db.once('open', () => console.log('Connected to database'))



//register page schema

var registerschema = new mongoose.Schema({
  Firstname: {
    type: String,
    required: true,
  },
  Lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: Number,
    required: true,
  },

})

var registers = mongoose.model('registers', registerschema);
app.post("/registers", (req, res) => {
  var data=new registers(req.body);
  data.save();
  let alert6 = require('alert'); 
  alert6("Registered Successfully")
  res.redirect('http://localhost:3000/');
})


app.post('/Register',(req, res)=>{
    var Firstname = req.body.Firstname;
    var Lastname = req.body.Lastname;
    var email = req.body.email;
    var phone = req.body.phone;
    var address = req.body.address;
    var date = req.body.date;
    var gender = req.body.gender;
    
    var data = {
        'Firstname': Firstname,
        'Lastname': Lastname, 
        'phone': phone, 
        'address':address,
        'city' : email,
        'street' : date,
        
    }
    db.collection('users').insertOne(data,(err,collection)=>{
        if(err) throw err;
        console.log('successfully data inserted');
    });
    return res.redirect('http://localhost:3000/paymenttab')//redirect to success page
})

// db.collection('users').insertOne(data,(err,collection)=>{
//     if(err) throw err;
//     console.log('successfully data inserted');
// });
// return res.sendFile(__dirname+'/server/final.html')//redirect to success page
// })

app.get("/", function (req, res) {
	return res.sendFile(__dirname + '/server/Login.html')
});

app.get("/registers", function (req, res) {
	return res.sendFile(__dirname + '/server/signup.html')
});



app.post("/login",async(req,res)=>{
 
  try{
    const email = req.body.email;
    const password = req.body.password;
    console.log(password)
    console.log(email)
    const useremail =  await registers.findOne({email:email});
    // console.log(`server running on port useremail')
    console.log(useremail)
  
    if(useremail.password === password){
      // res.status(201).redirect("/");
      let alert4 = require('alert'); 
      alert4("Login Sucessful")
      return res.redirect('http://localhost:3000/')
  }else{

    let alert3 = require('alert'); 
  alert3("Invalid login details")
    
    //res.send("invalid login Details")
    
  }
} catch(error){
  let alert = require('alert'); 
  alert("invalid login")
  res.redirect('Login.html');
}

})


app.get('http://localhost:3001/reg.html',(req,res)=>{
  res.set({
      "Allow-access-Allow-Origin":'*'  
  })
  return res.sendFile(__dirname+'/reg.html');
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


