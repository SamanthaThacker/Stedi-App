const express =require('express');
const app = express();

app.get('/', (req,res) => {
    res.send("Hello Browser")
});

app.get('/samantha', (req,res) => {
    res.send("Hello Samantha")
});

app.listen(3000, ()=>{

    console.log("Listening")
});

