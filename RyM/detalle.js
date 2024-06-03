let queryDetalle=location.search;
let queryStringDetalle =new URLSearchParams(queryDetalle)
let id=queryStringDetalle.get('id')
console.log(id)

let contenedor=document.querySelector(".contenedor-detalle")
let tituloDinamico=document.querySelector(".titulo")




fetch(`https://rickandmortyapi.com/api/character/${id}`)
.then(function(resp){
    return resp.json()
})

.then(function(data){

    console.log(data);
    tituloDinamico.innerHTML = `
    <h1>Detalle de personaje: ${data.name}</h1>`
    
    contenedor.innerHTML = `
        <h1> ${data.name}</h1>
        <img src='${data.image}' />
        <h3>Especie:${data.species}</h3>
        <a href="#" class="fav">agregar favoritos</a>
    `
    console.log(localStorage);
if (localStorage.length==0) {
    favoritos=[]
console.log(favoritos);

let favoritosJson=JSON.stringify(favoritos)
console.log(favoritosJson);

localStorage.setItem("favoritos", favoritosJson)
console.log(localStorage); 
}
    let fav= document.querySelector(".fav")

    fav.addEventListener("click",function() {
        let recuperoStorage= localStorage.getItem("favoritos")
       let favoritosRecuperado= JSON.parse(recuperoStorage)
        favoritosRecuperado.push(id)
        console.log(favoritosRecuperado);
        localStorage.setItem("favoritos",JSON.stringify(favoritosRecuperado))
        
    })
    console.log(localStorage);
}) 
.catch(function(err){
    console.log(err)
})


