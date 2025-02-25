const express = require ("express");
const cors = require ("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const users = [
    { id: 1, name: "Anna", age: 25, city: "Warszawa", photo: "https://randomuser.me/api/portraits/women/1.jpg" },
    { id: 2, name: "Tomek", age: 28, city: "Kraków", photo: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: 3, name: "Ewa", age: 23, city: "Gdańsk", photo: "https://randomuser.me/api/portraits/women/2.jpg" }
];

app.get("/users",(req,res)=>{
    res.json(users);
})

app.listen(PORT, ()=>{
    console.log("server runing")
})