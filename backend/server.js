const express = require ("express");
const cors = require ("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const users = [
    { id: 1, name: "Katie", age: 22, city: "Lublin", photo: "https://randomuser.me/api/portraits/women/1.jpg" },
    { id: 2, name: "Jacob", age: 23, city: "Chelm", photo: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: 3, name: "Eva", age: 23, city: "Tiruriru", photo: "https://randomuser.me/api/portraits/women/2.jpg" }
];

app.get("/users",(req,res)=>{
    res.json(users);
})

app.listen(PORT, ()=>{
    console.log("server is runing")
})