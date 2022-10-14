//https://fakestoreapi.com/
let cardsContainer = document.getElementById('contenedor-cards')
console.log(cardsContainer)

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

        /* Preparo un string que contiene la etiqueta inicial del elemento que voy a agregar después al contenedor de
        cards */
        let div = '<div class="wrapper-cards">'
        //Itero el array de productos para crear un div con clase card y concatenarlo a mi string inicial por cada uno
        products.forEach(prod => {
            div += `<div class="card">
                        <img src="`+prod.image+`" alt="`+prod.title+`">
                        <p>`+prod.name+`</p>
                    </div>`
        });
        //Finalmente sumo al string la etiqueta que cierra
        div+='</div>'
        //E inserto el string como innerhtml de mi contenedor
        cardsContainer.innerHTML = div
        /*     `<div class="card">
                <img src="`+products[0].image+`" alt="`+products[0].title+`">
                <p>`+products[0].name+`</p>
            </div>` */
    } catch (error) {
        console.log(error)
    }
}

{/* `<p>{products[0].title}</p>`
<div class="card">
                <img src="" alt="imagen de item1">
                <p>Item 1</p>
            </div> */}

renderProducts()