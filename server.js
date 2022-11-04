const express = require("express");

const app = express();
require("dotenv").config({ path: "./.env" });
const connectDB = require("./config/connectDB");

const Person = require("./model/Person");
// const newPerson=new Person({name:"Mohamed",age:18,favoriteFoods: ["pasta","chikken"]});
// newPerson
//     .save()
//     .then((Person)=>console.log(Person))
//     .catch((err)=>console.log(err));
// const newP=new Person();
//     newP.insertMany([{name:"salem",age:23,favoriteFoods: ["pasta","chikken"]},
//         {name:"nour",age:5,favoriteFoods: ["pasta","chikken"]}])
//     .then((newP)=>console.log(newP))
//         .catch((err)=>console.log(err));

//Person.find().then((Person)=>console.log(Person)).catch((err)=>console.log(err));
//Person.findOne({name:"ahmed"}).then((Person)=>console.log(Person)).catch((err)=>console.log(err));
//Person.findById({_id:"5ff070520635840cf47a455e"}).then((Person)=>console.log(Person)).catch((err)=>console.log(err));
// Person.findById({_id:"5ff070520635840cf47a455e"},function (err,Person){
//         Person.name="amir"
//         Person.save(function (err,Person) {
//             if(err){
//                 console.log(err)
//             }
//             console.log(Person)
//         })
// });
//Person.findOneAndUpdate({id:"5ff070520635840cf47a455e"},{$set:{age:20}},{new:true, useFindAndModify: false}).then(Person=>console.log(Person)).catch(err=>console.log(err));
Person.findByIdAndRemove({ _id: "5ff070520635840cf47a455e" })
  .then((Person) => console.log(Person))
  .catch((err) => console.log(err));
Person.find()
  .then((Person) => console.log(Person))
  .catch((err) => console.log(err));
app.listen(process.env.Port, () => {
  console.log(`The Server is Running ${process.env.Port}....`);
});
