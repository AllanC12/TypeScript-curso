const express = require("express");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Primeira rota criada com sucesso!" });
});

app.post("/createproduct", (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
   
  if(!name){
    res.status(422).json({message: "O campo nome não foi preenchido"})
    return
  }

  res.status(201).json({message:`O produto ${name} foi criado com sucesso!!!`})
});

app.listen(3000);
