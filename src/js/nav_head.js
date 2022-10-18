cad=``
cad+=`
<header class="header">
<nav>
    <!-- Barra de menu las tres lineas -->
    <input type="checkbox" id="check">
    <label for="check" class="bar-btn">
        <i class="fa-solid fa-bars"></i>
    </label>
    <ul class="nav-menu">
        <li><a class="active" href="index.html">Home</a></li>
        <li><a href="remeras.html">Remeras</a></li>
        <li><a href="pantalones.html">Pantalones</a></li>
        <li><a href="faldas.html">Faldas</a></li>
        <li><a href="accesorios.html">Accesorios</a></li>
        <li><a href="guiat.html">Guía de talles</a></li>
        <li><a href="contacto.html">Contacto</a></li>
    </ul>

    <!-- Barra de busqueda -->
    <div class="buscar">
        <input type="search" placeholder="¿Qué queres buscar?" required>
        <div class="busca-btn">
            <i class="fa-solid fa-magnifying-glass icon"></i>
        </div>
    </div>

    <!-- carrito -->
    <div>
        <a href="#" class="carrito">
            <div class="carrito-btn">
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
        </a>
    </div>

    <!-- Logo -->
    <div>
        <a href="index.html"><img src="img/OtroLogo.png" alt="" class="logo"></a>
    </div>
</nav>
</header>
`

document.getElementById('cuerpo').innerHTML=cad