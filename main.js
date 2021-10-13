console.log("Hola Celi")


const unicoDiv = document.getElementById("unico-div")


// Crea tres objetos usuario1, usuario2, usuario3 que tengan las propiedades nombreUsuario y contrasenia como strings.


let usuario1 = {
    nombreUsuario: "user1",
    constrasenia: "passUser1"
}

let usuario2 = {
    nombreUsuario: "usuer2",
    constrasenia: "passUser2"
}

let usuario3 = {
    nombreUsuario: "user3",
    constrasenia: "passUser3"
}


// Definí una función saludar que reciba como parámetro un objeto y que modifique el HTML de tu página para que aparezca un h1 que diga "Hola, {nombreUsuario}".

const saludar = (objeto) => {
    let titulo = document.createElement('h1');
    titulo.innerHTML = `<h1>Hola ${objeto.nombreUsuario}`;
    unicoDiv.appendChild(titulo)
    return titulo
}

//Probá tu función con los tres objetos definidos antes.

console.log(saludar(usuario1))
console.log(saludar(usuario2))
console.log(saludar(usuario3))


// Definí una función modificarNombreDeUsuario que reciba dos parametros: un objeto usuario y un string nuevoNombre. La función debe retornar el objeto 
// con la propiedad nombreUsuario modificada para tener el valor de nuevoNombre.


let modificarNombreUsuario = (usuario, nuevoNombre) => {
     usuario.nombreUsuario = nuevoNombre;
     return usuario
}

// Probá tu función con los tres objetos definidos antes.

console.log(modificarNombreUsuario(usuario1, "Bugs Bunny"))
console.log(modificarNombreUsuario(usuario2, "Elmer J. Fudd"))
console.log(modificarNombreUsuario(usuario3, "Honey Bunny"))



// Definí una función modificarContrasenia que reciba dos parametros: un objeto usuario y un string nuevaContrasenia. La función debe retornar el
//  objeto con la propiedad contrasenia modificada para tener el valor de nuevaContrasenia.

const modificarContrasenia = (usuario, nuevaContrasenia) => {
    usuario.constrasenia = nuevaContrasenia;
    return usuario;
}


// Probá tu función con los tres objetos definidos antes.


console.log(modificarContrasenia(usuario1, "Karroten"))
console.log(modificarContrasenia(usuario2, "Schrotflinte"))
console.log(modificarContrasenia(usuario3, "Möhre"))


// Crea la función convertirAJSON. La función debe recibir un objeto usuario como parámetro y retornar el objeto convertido a JSON.

const convertirAJSON = (objeto) => {
     let objetoConvertido = JSON.stringify(objeto);
     return objetoConvertido
}

console.log(convertirAJSON(usuario1))
console.log(convertirAJSON(usuario2))
console.log(convertirAJSON(usuario3))

// Crea la función convertirDesdeJSON. La función debe recibir una cadena JSON objetoJSON y retornar la cadena convertida a un objeto de Javascript.

const convertirDesdeJSON = (objetoJSON) => {
    let JSONConvertido = JSON.parse(objetoJSON)
    return JSONConvertido
}

// Probá tus funciones con los tres objetos definidos antes.

console.log(convertirDesdeJSON(convertirAJSON(usuario1)))
console.log(convertirDesdeJSON(convertirAJSON(usuario2)))
console.log(convertirDesdeJSON(convertirAJSON(usuario3)))


// Definí la función guardarEnLocalStorage que reciba como parámetro un objeto de Javascript y un string, 
// y guarde en localStorage la cadena con el string como nombre de la clave (Recordá que antes de guardar un objeto en localStorage 
// hay que convertirlo a JSON: usá la función convertirAJSON que declaraste antes)

const guardarEnLocalStorage = (objeto, clave) => {
    let archivoEnLocalStorage = localStorage.setItem(clave, convertirAJSON(objeto))
    return archivoEnLocalStorage
}

// Definí la función leerDesdeLocalStorage que reciba como parámetro un string clave y retorne un objeto de Javascript 
// con los datos guardados bajo esa clave en localStorage. (Utilizá la función convertirDesdeJSON!)


const leerDesdeLocalStorage = (clave) => {
    return convertirAJSON(clave)
}



