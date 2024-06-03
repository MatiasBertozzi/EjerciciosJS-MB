let results=document.querySelector(".search-results")

let queryString=location.search /* me va a dar la query string de la URL */
let queryDetalle=new URLSearchParams(queryString) /* traduzco el queryString para poder usarlo en el js */
let queryPersonaje= queryDetalle.get("q")/* consigo y guardo en una variable el valor de la clave q */
console.log(queryPersonaje);

fetch(`https://rickandmortyapi.com/api/character/?name=${queryPersonaje}`)
.then(function(res){
    return res.json()
})
.then(function (data) {
    console.log(data);
    for (let i = 0; i < data.results.length; i++) {
        results.innerHTML+=`<article>
        <img src= ${data.results[i].image} alt='' />
        <p>Name:${data.results[i].name} </p>
        <p>Status:${data.results[i].status} </p>
         </article>
   `}
   
})

.catch(function (err) {
    console.log(err);
})
