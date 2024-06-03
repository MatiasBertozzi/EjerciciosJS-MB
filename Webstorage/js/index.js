let miNombre="Matias"

/* localstrorage: sirve para guardar info del lado del cliente, no tiene tiempo de expiracion,metodos (setItem:guarda la info en un objeto literal con la combinacion clave=valor,
getItem: llamas a la clave y te devuelve el valor que guarda esa clave,
removeItem: elimina la propiedad dentro del localStorage apartir de la clave que que queremos borrar,
clear: borra el contenido del localStorage)  */

localStorage.setItem("userName",miNombre)

console.log(localStorage);


let recuperoStorage=localStorage.getItem("userName")

console.log(recuperoStorage);

localStorage.clear()

console.log(localStorage);

let peliculasFavoritas=["Duro de matar",
"Mision imposible",
"Terminator"]

localStorage.setItem("peliculaFavorita",peliculasFavoritas[1])

console.log(localStorage);

let recupero_Storage=localStorage.getItem("peliculaFavorita")

console.log(recupero_Storage);

localStorage.clear()

let peliculasJson=JSON.stringify(peliculasFavoritas)

localStorage.setItem("favoritos",peliculasJson)

console.log(localStorage);

let recuperoStorage_=localStorage.getItem("favoritos")

let peliculasFav=JSON.parse(recuperoStorage_)

peliculasFav.push("Rapidos y furiosos")
console.log(peliculasFav);

JSON.stringify(peliculasFav)

localStorage.setItem("favoritos", peliculasFav)

console.log(localStorage);

localStorage.clear()

let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
];

let WinterIsComing=[]

for (let i = 0; i < got.length; i++) {
    if (got[i].ciudad=="Winterfell") {
        WinterIsComing.push(got[i])
    }
}

console.log(WinterIsComing);


localStorage.setItem("winterfell",JSON.stringify(WinterIsComing))

console.log(localStorage);

