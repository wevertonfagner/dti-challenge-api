const express = require("express")

const port = process.env.PORT || 8080

const app = express();

app.use(express.json())

function validaEmprestimo(body){
    if(body.emprestimo > 50000 || body.emprestimo > body.divida/2){
        return {emprestimoAprovado: false}
    }
    return {emprestimoAprovado: true}
}

app.post('/emprestimo', (req, res) =>{
    res.status(200).send(validaEmprestimo(req.body))
})


app.listen(port, () => {
    
console.log('Funcionando...')
})