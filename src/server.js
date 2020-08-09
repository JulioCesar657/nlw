//Servidor
const express = require('express')
const server = express()
const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')
const nunjucks = require('nunjucks')
    //Configurando o nunjucks
nunjucks.configure('src/views', {
        express: server,
        noCache: true,
    })
    //configurando arquivos estáticos (css, scripts, imagens)
server
    .use(express.urlencoded({ extended: true }))
    .use(express.static("public"))
    //Rotas de sua aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)
    .listen(5500)