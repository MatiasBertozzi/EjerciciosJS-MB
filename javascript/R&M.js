fetch("https://rickandmortyapi.com/api/character")
.then(function (res) {
    return res.json()
})
.then(function (data) {
    console.log(data);
   

let section=document.querySelector(".characterList")
let article=document.querySelector(".cartaPersonaje")
 for (let i = 0; i < data.results.length; i++) {
    section.innerHTML+=
    ` <article class="cartaPersonaje">
    <img src= "${data.results[i].image} " alt=''>
     <p>Name:${data.results[i].name}  </p>
     <p>Status: ${data.results[i].status} </p>
</article>`
}
console.log(article);
section.style.display="flex"
section.style.flexWrap="wrap"
section.style.justifyContent="space-between"



})
.catch(function (err) {
    console.log(err);
})