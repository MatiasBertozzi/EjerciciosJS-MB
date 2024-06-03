console.log(localStorage);
let storageRecuoperado=JSON.parse(localStorage.getItem("favoritos"))

console.log(storageRecuoperado);

let container=document.querySelector(".container")
let titulo=document.querySelector(".titulo")
let boton=document.querySelector(".boton")

if (storageRecuoperado==null) {
    titulo.innerHTML=`<h1></h1>`
    container.innerHTML= `<h1> No hay personajes favoritos seleccionados aun</h1>
    <a href="RyM.html">Menu principal</a>`
}



fetch("https://rickandmortyapi.com/api/character")
.then(function (res) {
    return res.json()
})
.then(function (data) {
    console.log(data);

    for (let i = 0; i < storageRecuoperado.length; i++) {
        container.innerHTML+=`
        <h1> ${data.results[storageRecuoperado[i]-1].name}</h1>
        <img src='${data.results[storageRecuoperado[i]-1].image}' />
        <h3>Especie:${data.results[storageRecuoperado[i]-1].species}</h3>`
        console.log(data.results[storageRecuoperado[i]-1]);
    }

    boton.addEventListener("click",function () {
        localStorage.clear()
        location.reload()
    })
})

.catch(function(err){
    console.log(err);
})
