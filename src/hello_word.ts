import * as express from 'express';  

const app = express ();
const port = 3000;

app.get('/', (resquest, response) =>{
    response.send ('Helo Word!');

});

app.get('/bsms', (resquest, response) =>{
    response.json({

        "Bsm 1": "Persistência",
        "Bsm 2": "Responsabilidade Pessoal",
        "BSM 3": "Orientação Ao Futuro",
        "BSM 4": "Mentalidade De Crescimento",
        "Bsm 5": "Trabalho Em Equipe",
        "Bsm 6": "Atenção Aos Detalhes",
        "BSM 7": "Proatividade",
        "BSM 8": "Comunicação"

    })
})


app.get('/Objetivos', (resquest, response) =>{
    response.send ('Objetivos desta semana é buscar um pouco mas de conhecimento e ter foco total no projeto!')

})




app.listen(port, () => {
    console.log(`O servidor estar rodando na porta ${port} e tudo ok!`)

})