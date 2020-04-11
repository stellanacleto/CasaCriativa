//express usado para criar e configurar servidor
const express = require("express")
const server = express()

// configurar arquivos estaticos (css, scripts, imagens)
server.use(express.static("public"))

//configuração do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true,
})
// criei uma rota e 
//capturei o pedido do cliente para responder
server.get("/" , function(req, res) {
    return res.render("index.html")
})

server.get("/ideias" , function(req, res) {
    return res.render("ideias.html")
})
//liguei meu servidor na port 3000
server.listen(3000)