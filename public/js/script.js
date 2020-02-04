const modal = document.querySelector('.modal')
const cards = document.querySelectorAll('.card')
const body = document.querySelector('body')
const hides = document.querySelectorAll('.hide')


for(let card of cards){

  card.addEventListener('click', () =>{
    let imageId = card.getAttribute('id')
    console.log(imageId)
    window.location.href = `/detalhe?id=${imageId}`
  });
}




