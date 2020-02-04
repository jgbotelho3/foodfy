const express = require('express')
const nunjucks = require('nunjucks')
const recipe = require('./recipe')
const data = require('./data')

const port = 3000
const app = express()

nunjucks.configure('views', {
  express: app,
  autoescape: false,
  noCache: true
})

app.use(express.static('public/assets/'))
app.use(express.static('public/css/'))
app.use(express.static('public/js/'))

app.set('view engine', 'njk')

app.listen(port,()=>{
  console.log('Server is running!!!')
})

app.get('/', (req, res)=>{
  return res.render('home', {items: data})
})

app.get('/sobre', (req, res)=>{
  return res.render('sobre')
})

app.get('/receitas', (req, res)=>{
  
  return res.render('receitas', {items: data})
})

app.get('/detalhe', (req, res)=>{

const id = req.query.id

const recipeData = recipe.find((recipe)=>{

  return recipe.id == id
})

if(!recipeData){
  return res.send('Receita não encontrada!')
}
 
  return res.render('detalhe', {items: recipeData})
})
  

