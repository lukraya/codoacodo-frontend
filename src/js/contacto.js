let form = document.getElementsByName('fcontacto')[0];
let boton = document.getElementById('boton-contacto');


let validarSubmit = e => {
    //Valido el nombre
    if (form.nombre.value == 0) {
        alert("Por favor, completá tu nombre")
        form.nombre.focus()
        e.preventDefault()
        return 0
    }

    //Valido el apellido
    if (form.apellido.value == 0) {
        alert("Por favor, completá tu apellido")
        form.apellido.focus()
        e.preventDefault()
        return 0
    }

    //Valido el email
    let email = form.email.value
    if (email.length == 0) {
        alert("Por favor, completá tu email")
        form.email.focus()
        e.preventDefault()
        return 0
    } else if (email.indexOf('.com') == -1) { /* Hay más terminaciones válidas en la vida real, pero 
        para los propósitos del TP, lo dejo así */
        alert("Por favor, ingresá una dirección de email válida")
        form.email.focus()
        e.preventDefault()
        return 0
    }

    //Valido el telefono
    let tel = form.telefono.value
    let parsedTel = parseInt(tel)
    if (tel.length == 0) {
        alert("Por favor, completá tu telefono")
        form.telefono.focus()
        e.preventDefault()
        return 0
    } else if (parsedTel) {
        //No hago nada
    } else {
        console.log(parsedTel)
        console.log(typeof(parsedTel))

        alert("Por favor, verificá que tu teléfono no contenga letras")
        form.telefono.focus()
        e.preventDefault()
        return 0
    }

    //Valido el textarea
    if (form.consulta.value == 0) {
        alert("Ups! Olvidaste tu consulta")
        form.consulta.focus()
        e.preventDefault()
        return 0
    }
}

form.addEventListener('submit', validarSubmit)


/* TEST FAKE STORE API */
//electronics, jewelery (4), men's(4, varied), women's (3 t-shirts 3jackets)

/* let getProducts = async () => {
    let response = await fetch("https://fakestoreapi.com/products/category/women's%20clothing")
    let result = await response.json()
    console.log(result)
}
getProducts() */