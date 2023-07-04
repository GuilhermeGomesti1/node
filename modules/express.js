const express = require('express')
const UserModel = require ('../src/database/models/user.model')


const app = express();

app.use(express.json());



app.get('/users', async (req, res) => {
    try {
        const users = await UserModel.find({});

        res.status(200).json(users)
    } catch(error){
        return res.status(500).send(error.message)

    }
});



app.get('/users/:id', async (req, res) => {
    try {
       const id = req.paramns.id

        
    } catch(error){
        return res.status(500).send(error.message)

    }
});


app.post('/users', async (req, res) => {
    try {
        res.setHeader("Content-Type", "application/json");
        const user = await UserModel.create(req.body, { timeout: 15000 });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});
const port = 8080;

app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`));