const express = require("express");

console.log("Hello , This is Poova");

const server = express();  
server.use(express.json())   

var users = [{id : 0, name: "jeni"},{id : 01, name : "keerthi"},{id : 2, name : "gowtham"}];

server.get("/hello",(req,res)=> {
    res.send("Hello welcome!!");
});

//PATH 

server.get("/hello/:name", (req, res) => {
    res.send("Hi there, glad to meet you " + req.params.name);
});

//QUERY 

server.get("/hi", (req, res) => {
    res.send("Hello there, glad to meet you " + req.query.name);
});

//register item

server.post("/register/users", (req, res) => {
    users.push(req.body);
    res.send("user register succesfully")
});

//Adding more users

server.post("/add/users", (req, res) => {
    users.push(req.body);
    res.send("user register succesfully")
});

//update

server.put('/update/users',  (req, res) => {
    
    var id = req.params.id;
    users.forEach(u =>{
        if (u.id == id) {
            name1 = req.body.name;
            res.send(u);
        }
        res.send("updated");
    })
});

//fetch users

server.get("/fetch/user", (req, res) => {
    res.send(users)
});

server.get("/fetch/user/:id", (req, res) => {
    var id = req.params.id;
    users.forEach(u => {
        if (u.id == id) {
            res.send(u);
        }
})
res.send({});
});

//delete

server.delete("/delete/user", (req, res) => {
    for(let user in users){
        if(users[user].name=="keerthi"){
            users.slice(req.body);
        }
    }
    res.send(users);
});

     

//filter

server.get("/filter/user/name",(req,res) =>{
    id=2;
    users = users.filter(item => item.id !== id);
    res.send(users);
})

server.listen(4000, () => {
    console.log("server running on port :4000");
});
