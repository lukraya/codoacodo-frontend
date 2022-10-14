//https://fakestoreapi.com/
let cardsContainer = document.getElementById('contenedor-cards')
let listWrapper = document.getElementById('list-wrapper')
//console.log(cardsContainer)

async function getProducts () {
    try {
        let response = await fetch("https://fakestoreapi.com/products/category/jewelery")
        let prods = await response.json()
        return prods
    } catch (error) {
        console.log(error)
    }
}

async function renderProducts () {
    try {
        //Traigo y verifico que lleguen los productos
        let products = await getProducts()
        console.log(products)

        /* Agrego un nombre más sencillo en cada producto. Demasiado manual, pero en este caso es poco 
        y el objetivo principal es simplemente mostrar lo que traigo de la api. */
        products[0].name = 'Brazalete Dragón'
        products[1].name = 'Brazalete Petite'
        products[2].name = 'Anillo de Oro Blanco'
        products[3].name = 'Aros de Oro Rosa'

        //CARDSCONTAINER
        /* Preparo un string para agrupar los cards y agregar al contenedor */
        let div = ''
        //Itero el array de productos para crear un div con clase card y concatenarlo a mi string inicial por cada uno
        products.forEach(prod => {
            div += `<div class="card">
                        <img src="`+prod.image+`" alt="`+prod.title+`">
                        <p>`+prod.name+`</p>
                    </div>`
        });
        //Finalmente sumo otro string vacío para cerrar el agrupamiento
        div+=''
        //E inserto el string como innerhtml de mi contenedor
        cardsContainer.innerHTML = div


        //LISTWRAPPER
        let str = ''
        products.forEach(prod=>{
            str += '<li><a href="#">'+prod.name+'</a></li>'
        })
        str+=''
        listWrapper.innerHTML = str

    } catch (error) {
        console.log(error)
    }
}


renderProducts()