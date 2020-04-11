//express usado para criar e configurar servidor
const express = require("express")
const server = express()

const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de Programação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minus repellendus distinctio dolore consequuntur a velit",
        url: "https://rockeatseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercícios",
        category: "Saúde",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minus repellendus distinctio dolore consequuntur a velit",
        url: "https://rockeatseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Mentalidade",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minus repellendus distinctio dolore consequuntur a velit",
        url: "https://rockeatseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title: "Karaokê",
        category: "Família",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minus repellendus distinctio dolore consequuntur a velit",
        url: "https://rockeatseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729038.svg",
        title: "Pintura",
        category: "Criatividade",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minus repellendus distinctio dolore consequuntur a velit",
        url: "https://rockeatseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729048.svg",
        title: "Recortes",
        category: "Criatividade",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minus repellendus distinctio dolore consequuntur a velit",
        url: "https://rockeatseat.com.br"
    }
]

/* configurar arquivos estaticos (css, scripts, imagens)
   considerar tudo que está na pasta public como estando
   no diretório raiz */
server.use(express.static("public"))

//configuração do nunjucks
// permite que use variáveis no HTML
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    // o objeto nunjucks diz que a pasta view possui os HTMLs
    // e através da variavel server (criada no server.js) fará um link com o express
    express: server, 
    noCache: true,   
})
// criei uma rota e 
//capturei o pedido do cliente para responder
server.get("/" , function(req, res) {
    // Extraindo todo conteudo de ideas e colocando em reversedIdeas
    const reversedIdeas = [...ideas].reverse()

    let lastIdeas = []
    //Para objeto idea "fora" de ideas
    //Para atribuir objetos de uma coleção para outra (lastIdeas que está vazia)
    for (let idea of reversedIdeas) {
        if(lastIdeas.length < 2) {
            lastIdeas.push(idea)

        }
    }

    return res.render("index.html", { ideas: lastIdeas })
})

server.get("/ideias" , function(req, res) {
    const reversedIdeas = [...ideas].reverse()

    return res.render("ideias.html", { ideas: reversedIdeas})
})
//liguei meu servidor na port 3000
server.listen(3000)

/* 
    const h1 = "Oi do Backend"
    server.get("/" , function(req, res) {
    return res.render("index.html" {title: h1})

    // Criou-se uma variavel h1 no server.js que será 
    // chamada pela variavel title em qualquer área do HTML
    // através da estrutura {{title}}
})
*/