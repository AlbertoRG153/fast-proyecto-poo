var motoristasInicial = [
    {
        nombre:"Juan",
        apellido:"Sanchez",
        codigoMotorista:001, 
        imagen:"img/",
        genero:"M",
        edad:"25",
        correo:"juanz@gmail.com",
        contrasena:"mm3651",
        telefono:"3244-2296",
        ciudad:"Intibuca",
        numeroLicencia:"18-29443",
        tipoVehiculo:"moto",
        pedido:[10,13], 
        ordenes:[
            {
                nombreProducto:"Pizza de Peperoni",
                descripcion: "",
                cantidad:2,
                precio:0
            },
        ]
    },
    {
        nombre:"Maritza",
        apellido:"Jimenez",
        codigo:115,
        imagen:"img/",
        genero:"F",
        edad:"22",
        correo:"maritza@gmail.com",
        contrasena:"asd234",
        telefono:"9885-9885",
        ciudad:"Santa Barbara",
        numeroLicencia:"21-322245",
        tipoVehiculo:"moto",
        pedido:[10,13], 
        ordenes:[
            {
                nombreProducto:"Pollo Empanizado",
                descripcion: "",
                cantidad:2,
                precio:0
            }
        ]
    },
    {
        nombre:"David",
        apellido:"Herrera",
        codigo:045,
        imagen:"img/",
        genero:"M",
        edad:"31",
        correo:"davidh@gmail.com",
        contrasena:"asd123",
        telefono:"9957-9465",
        ciudad:"Choluteca",
        numeroLicencia:"18-665327",
        tipoVehiculo:"moto",
        pedido:[10,13], 
        ordenes:[
            {
                nombreProducto:"Pollo Asado",
                descripcion: "",
                cantidad:2,
                precio:85.00
            }
        ]
    },
    {
        nombre:"Manuel",
        apellido:"Osorto",
        codigo:279,
        imagen:"img/",
        genero:"M",
        edad:"28",
        correo:"Manuelito@gmail.com",
        contrasena:"asmd7786",
        telefono:"3332-7703",
        ciudad:"Danli",
        numeroLicencia:"18-996534",
        tipoVehiculo:"moto",
        pedido:[10,13], 
        ordenes:[
            {
                nombreProducto:"Pollo Empanizado",
                descripcion: "Pollo ",
                cantidad:2,
                precio:0
            }
        ]
    },
    {
        nombre:"Alexis",
        apellido:"Cruz",
        codigo:221,
        imagen:"img/",
        genero:"M",
        edad:"25",
        correo:"calexis@gmail.com",
        contrasena:"asd225",
        telefono:"9647-3482",
        ciudad:"Tegucigalpa",
        numeroLicencia:"18-774562",
        tipoVehiculo:"moto",
        pedido:[10,13], 
        ordenes:[
            {
                nombreProducto:"Carne Guisada",
                descripcion: "",
                cantidad:2,
                precio:0
            }
        ]
    },
    {
        nombre:"Raul",
        apellido:"Fonseca",
        codigo:074,
        imagen:"img/",
        genero:"M",
        edad:"25",
        correo:"raulf@gmail.com",
        contrasena:"asdmgu4",
        telefono:"3126-9842",
        ciudad:"Comayagua",
        numeroLicencia:"18-836890",
        tipoVehiculo:"moto",
        pedido:[10,13], 
        ordenes:[
            {
                nombreProducto:"Pizza de jamon",
                descripcion: "",
                cantidad:2,
                precio:0
            }
        ]
    }
];



var usuariosInicial = [
    {
        nombre:"Luis",
        apellido:"Rodriguez",
        ordenes:[
            {
                nombreProducto:"Pizza de Peperoni",
                descripcion: "",
                cantidad:2,
                precio:0
            }
        ]
    },
    {
        nombre:"Mainor",
        apellido:"Zuniga",
        ordenes:[
            {
                nombreProducto:"Pollo Empanizado",
                descripcion: "",
                cantidad:2,
                precio:0
            }
        ]
    },
    {
        nombre:"Gisella",
        apellido:"Martinez",
        ordenes:[
            {
                nombreProducto:"Pollo Asado",
                descripcion: "",
                cantidad:2,
                precio:0
            },

            {
                nombreProducto:"Pizza de Peperoni",
                descripcion: "",
                cantidad:2,
                precio:90.00
            }
        ]
    }
];


var categoriasInicial = [
    {
        nombreCategoria:"Pizzas",
        descripcion:"",
        empresas:[
            {
                nombreEmpresa: "pizza Hut",
                codigo:001,
                imagen:"img/pizza_hut.png",
                productos:[
                    {
                        nombreProducto: "Pizza de Peperoni",
                        descripcion: "La pizza de peperoni esta compuesta de peperoni, trositos de pollo, queso chedar y acaeitunas",
                        imagen:"img/Pizza_peperoni.jpg",
                        codigo: 00001,
                        precio: 90.00
                    },
                    {
                        nombreProducto: "Pizza de jamon",
                        descripcion: "La pizza de jamon, es esta compuesta con los ingredientes que son, el jamon, queso en sus orillas y aceitunas",
                        imagen:"img/",
                        codigo: 00002,
                        precio: 0
                    },
                    {
                        nombreProducto: "Alitas de pollo",
                        descripcion: "",
                        imagen:"img/",
                        codigo:00003,
                        precio: 120.00
                    }
                ]
            },
            {
                nombreEmpresa: "Little Caesars",
                codigo:001,
                imagen:"img/little_caesars.png",
                productos:[
                    {
                        nombreProducto: "Pizza con doble queso",
                        descripcion: "",
                        imagen:"img/",
                        codigo:00004,
                        precio: 60.00
                    },
                    {
                        nombreProducto: "Pizza con vegetales",
                        descripcion: "",
                        imagen:"img/",
                        codigo:00005,
                        precio: 105.00
                    },
                    {
                        nombreProducto: "Pan de ajo",
                        descripcion: "",
                        imagen:"img/",
                        codigo:00006,
                        precio: 45.00
                    }
                ]
            },
            {
                nombreEmpresa: "Dominos",
                codigo:001,
                imagen:"",
                productos:[
                    {
                        nombreProducto: "Pizza premium",
                        descripcion: "",
                        imagen:"img/",
                        codigo:00007,
                        precio: 200.00
                    },
                    {
                        nombreProducto: "ensalada de Vegetales",
                        descripcion: "",
                        imagen:"img/",
                        codigo: 00010,
                        precio: 85.00
                    },
                    {
                        nombreProducto: "Pizza Suprema",
                        descripcion: "",
                        imagen:"img/",
                        codigo: 00011,
                        precio: 150.00
                    }
                ]
            }
        ]
    },
    {
        nombreCategoria:"Hamburguesas",
        descripcion:"",
        empresas:[
            {
                nombreEmpresa: "Burger king",
                codigo:001,
                imagen:"img/Burger_king.png",
                productos:[
                    {
                        nombreProducto: "Hamburguesa Bacon",
                        descripcion: "La bacon es una hamburguesa frita rebozada en un panecillo, con una rodaja de lechuga, mayonesa y queso",
                        imagen:"img/",
                        codigo:00012,
                        precio: 90.00
                    },
                    {
                        nombreProducto: "Hamburguesa King",
                        descripcion: "",
                        imagen:"img/",
                        codigo:00013,
                        precio: 130.00
                    },
                    {
                        nombreProducto: "Submarino Supremo",
                        descripcion: "",
                        precio: 150.00
                    }
                ]
            },
            {
                nombreEmpresa: "MC Donal's",
                codigo:001,
                imagen:"img/mcDonals.png",
                productos:[
                    {
                        nombreProducto: "Hamburguesa Suprema ",
                        descripcion: "",
                        imagen:"img/",
                        codigo:00014,
                        precio: 105.00
                    },
                    {
                        nombreProducto: "Pepito",
                        descripcion: "",
                        imagen:"img/",
                        codigo:00015,
                        precio: 120.00
                    },
                    {
                        nombreProducto: "Hamburguesa con doble carne",
                        descripcion: "",
                        imagen:"img/",
                        codigo:00016,
                        precio: 150.00
                    }
                ]
            },
            {
                nombreEmpresa: "Wendy's",
                codigo:001,
                imagen:"",
                productos:[
                    {
                        nombreProducto: "Hamburguesa Dave's",
                        descripcion: "",
                        imagen:"img/",
                        codigo:00017,
                        precio: 0
                    },
                    {
                        nombreProducto: "Pan encebollado",
                        descripcion: "",
                        imagen:"img/",
                        codigo:00030,
                        precio: 52.00
                    },
                    {
                        nombreProducto: "Hamburguesa mixta",
                        descripcion: "",
                        imagen:"img/",
                        codigo:00031,
                        precio: 98.00
                    }
                ]
            }
        ]
    },
    {
        nombreCategoria:"Restaurantes Caceros",
        descripcion:"",
        empresas:[
            {
                nombreEmpresa: "Friday's",
                codigo:001,
                imagen:"img/fridays.png",
                productos:[
                    {
                        nombreProducto: "Carne Guisada",
                        descripcion: "Ingredientes carne de res guisada, con ensalada de tomate y avichuelas",
                        imagen:" img/carne_guisada.jpg",
                        codigo: 00020,
                        precio: 50.00
                    },
                    {
                        nombreProducto: "Chuleta de cerdo",
                        descripcion: "Contiene una chuleta de carne de cerdo, con chimichurri, tajaditas de platano y adereso",
                        imagen:"img/",
                        codigo:00021,
                        precio: 145.00
                    },
                    {
                        nombreProducto: "Pollo Asado",
                        descripcion: "Ingresientes este pollo esta hecho a la parrilla,con papas fritas y chile picante",
                        imagen:"img/",
                        codigo:00022,
                        precio: 165.00
                    }
                ]
            },
            {
                nombreEmpresa: "Kentucky",
                codigo:001,
                imagen:"img/kfc.png",
                productos:[
                    {
                        nombreProducto: "Pollo Picante",
                        descripcion: "",
                        imagen:"",
                        codigo:00023,
                        precio: 170.00
                    },
                    {
                        nombreProducto: "Pechuga de Pollo",
                        descripcion: "",
                        imagen:"img/",
                        codigo:00024,
                        precio: 47.00
                    },
                    {
                        nombreProducto: "Deditos de Pollo",
                        descripcion: "",
                        imagen:"img/",
                        codigo:00025,
                        precio: 180.00
                    }
                ]
            },
            {
                nombreEmpresa: "Popeyes",
                codigo:001,
                imagen:"",
                productos:[
                    {
                        nombreProducto: "pollo Empanizado",
                        descripcion: "Sus ingredientes son pechuga de pollo empanizada, ensalada de lechuga, salsa ketchup y papas fritas.",
                        imagen:" img/pollo-emp.jpg",
                        codigo:00026,
                        precio: 65.00
                    },
                    {
                        nombreProducto: "Ensalada de Vegetales",
                        descripcion: "",
                        imagen:"img/",
                        codigo:00027,
                        precio: 80.00
                    },
                    {
                        nombreProducto: "Arroz con frijoles",
                        descripcion: "",
                        imagen:"img/",
                        codigo:00032,
                        precio: 32.00
                    }
                ]
            }
        ]
    }
];


console.log('Motoristas', motoristasInicial);
console.log('Usuarios', usuariosInicial);
console.log('Categorias', categoriasInicial);


function InicioSesion(){
    //Entregadas = document.getElementById('Entregadas').value;
    document.getElementById('ContSesion').innerHTML =
        `<section class="datos">
            <div id="inicio-logo" class="mb-2">
                <img src="img/logo3.png" class="logo-fst" alt="">
            </div>
            <div class="mx-4 py-2">
                <img class="centro-btn py-3" id="food" src="img/food.png" alt="">
                <h1 class="centro-btn">Bienvenido</h1>
                <h4 class="centro-btn">Por favor inicia sesión para continuar</h4>
                <label class="pt-4" for="correo">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Correo Electronico">
                <label class="pt-4" for="correo">Contraseña</label>
                <input type="password" class="form-control" id="contraseña" placeholder="Contraseña">
                <a href="#" id="ayuda">Olvidaste la Contraseña?</a>
                <div class="centro-btn py-4 my-4">
                    <button class="btn btn-3" type="button" onclick="MenuPrincipal()">
                        Ingresar
                    </button>
                </div>
                <div class="info-2">
                <hr>
                <h4>------ O Iniciar sesion con ------</h4>
                <hr>
                </div>
                <div class="centro-btn my-2">
                    <button class="btn btn-2" type="button">
                        <i class="fa-brands fa-apple"></i>
                        Iniciar sesion con Apple    
                    </button>
                </div>
                <div class="centro-btn my-2">
                    <button class="btn btn-2" type="button">
                        <i class="fa-brands fa-google"></i>
                        Iniciar sesion con Google
                    </button>
                </div>
            </div>
        </section>`;
}

InicioSesion();



function RegistroMotoristas(){
    //Entregadas = document.getElementById('Entregadas').value;
    document.getElementById('ContRegistro').innerHTML =
        `<section class="datos">
            <div id="inicio-logo" class="mb-2">
                <img src="img/logo3.png" class="logo-fst" alt="">
            </div>
            <div class="mx-4 py-2">
                <h1 class="centro-btn">Registrate</h1>
                <h3 class="centro-btn">Por favor ingrese sus datos para poder registrarse</h3>
                <label class="pt-4" for="nombre">Nombre</label>
                <input type="text" class="form-control" id="nombre" placeholder="Nombre Completo">
                <label class="pt-4" for="correo">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Correo Electronico">
                <label class="pt-4" for="contraseña">Contraseña</label>
                <input type="password" class="form-control" id="contraseña" placeholder="Contraseña">
                <label class="pt-4" for="contraseña">Ingrese nuevamente la contraseña</label>
                <input type="password" class="form-control" id="contraseña" placeholder="Contraseña">
                <div class="centro-btn my-4">
                    <button class="btn btn-3" type="button">
                        Registrarse
                    </button>
                </div>
                <div class="info-2">
                <hr>
                <h4>------  O Registrarse con  ------</h4>
                <hr>
                </div>
                <div class="centro-btn my-2">
                    <button class="btn btn-2" type="button">
                        <i class="fa-brands fa-apple"></i>
                        Registrate con Apple
                    </button>
                </div>
                <div class="centro-btn my-2">
                    <button class="btn btn-2" type="button">
                        <i class="fa-brands fa-google"></i>
                        Registrate con Google
                    </button>
                </div>
            </div>
        </section>`;
}

RegistroMotoristas();


function OrdenesEntregadas() {
    //Entregadas = document.getElementById('Entregadas').value;
    document.getElementById('ContEntregadas').innerHTML =
        `<section class="ordenes">
            <div id="inicio-logo">
                        <img src="img/Logo3.png" class="logo-fst" alt="">                
                </div>
                <div>
                    <h2 class="pt-4 mx-2">
                        Ordenes Entregadas
                        <i class="fa-solid fa-magnifying-glass px-4"></i>
                    </h2>   
                </div>
                <h5 class="mx-4">El mejor servicio de entregas</h5>
                <div class="pb-2 centro-btn">
                    <button class="btn btn-2 mx-1" type="button"><i class="fa-solid fa-house"></i></button>
                    <button class="btn btn-2 mx-1" type="button"><i class="fa-solid fa-heart"></i></button>  
                </div>
                <div class="container">
                    <div class="row" id="categorias">       
                    </div>
            </div>    
            <footer class="centro-btn py-4">
                <button class="btn btn-3 mx-2" type="button">4 Ordenes Lps. 250.00</button>              
            </footer>
        </section>`;

    categoriasInicial.forEach(function(categoria, contador){
        document.getElementById('categorias').innerHTML += 
            `<div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 my-3">
                <div class="card tarjeta">
                    <div class="card-body">
                        <img src="${categoria.imagen}" class="card-img-top img-orden pb-2" alt="">
                        <p class="card-tittle text-center">${categoria.nombreEmpresa}</p>
                        <p class="card-text text-center">${categoria.precio}</p>
                    </div>
                </div>
            </div>`;
    });
}

OrdenesEntregadas();


function MenuPrincipal() {
    //Entregadas = document.getElementById('Entregadas').value;
    document.getElementById('Home').innerHTML =
        `<section class="datos">
            <div id="inicio-logo" class="mb-4">
                <img src="img/logo3.png" class="logo-fst" alt="">
            </div>
            <h3 class="py-3">Otras Opciones</h3>
            <h1>Entrega de Productos</h1>
            <div class="centro-btn">
                <img class="py-4" id="inicioHam" src="img/inicioham.png" alt="">
            </div>
            <div class="tam-boton">
                <button class="btn btn-outline-success mx-2" type="button">Ordenes Disponibles</button>
                <button class="btn btn-outline-success mx-2 " type="button">Ordenes Tomadas</button>
                <button class="btn btn-outline-success mx-2" type="button">Ordenes Entregadas</button>
            </div>
            <div class="centro-btn py-3">
                <button class="btn btn-4" type="button">Salir</button>
            </div>       
        </section>`;
}
MenuPrincipal();



function OrdenesDisponibles(){
    document.getElementById('ContDisponibles').innerHTML =
    `<section class="ordenes">
            <div id="inicio-logo">
                <img src="img/Logo3.png" class="logo-fst" alt="">
            </div>
            <div>
                <h2 class="pt-4 mx-2">
                    Ordenes Disponibles
                    <i class="fa-solid fa-magnifying-glass px-4"></i>
                </h2>   
            </div>
            <h5 class="mx-4">El mejor servicio de entregas</h5>
            <div class="pb-2 centro-btn">
                <button class="btn btn-2 mx-1" type="button"><i class="fa-solid fa-house"></i></button>
                <button class="btn btn-2 mx-1" type="button"><i class="fa-solid fa-heart"></i></button>  
            </div>
            <div class="container">
                <div class="row" id="disponible">
                </div>
            </div>
            <footer class="centro-btn py-4">
                <button class="btn btn-3 mx-2" type="button">4 Ordenes Lps. 250.00</button>              
            </footer>
        </section>`;

        categoriasInicial.forEach(function(categoria, contador){
            document.getElementById('disponible').innerHTML +=
            `<div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 my-3">
                <div class="card tarjeta">
                    <div class="card-body">
                        <img src="img/hamburguesa.png" class="card-img-top img-orden pb-2" alt="">
                        <p class="card-tittle text-center">Hamburguesa Bacon</p>
                        <p class="card-text text-center">Lps. 90.00</p>
                    </div>
                </div>
            </div>`;
    });        
}

OrdenesDisponibles();


function OrdenesTomadas(){
    document.getElementById('ContTomadas').innerHTML =
    `<section class="ordenes">
            <div id="inicio-logo">
                <img src="img/Logo3.png" class="logo-fst" alt="">
            </div>
            <div>
                <h2 class="pt-4 mx-2">
                    Ordenes Tomadas
                    <i class="fa-solid fa-magnifying-glass px-4"></i>
                </h2>   
            </div>
            <h5 class="mx-4">El mejor servicio de entregas</h5>
            <div class="pb-2 centro-btn">
                <button class="btn btn-2 mx-1" type="button"><i class="fa-solid fa-house"></i></button>
                <button class="btn btn-2 mx-1" type="button"><i class="fa-solid fa-heart"></i></button>  
            </div>
            <div class="container">
                <div class="row" id="tomada">
                </div>
            </div>
            <footer class="centro-btn py-4">
                <button class="btn btn-3 mx-2" type="button">4 Ordenes Lps. 250.00</button>              
            </footer>
        </section>`;

        categoriasInicial.forEach(function(categoria, contador){
            document.getElementById('tomada').innerHTML +=
            `<div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 my-3">
                <div class="card tarjeta">
                    <div class="card-body">
                        <img src="img/hamburguesa.png" class="card-img-top img-orden pb-2" alt="">
                        <p class="card-tittle text-center">Hamburguesa Bacon</p>
                        <p class="card-text text-center">Lps. 90.00</p>
                    </div>
                </div>
            </div>`;
    });        
}

OrdenesTomadas();



function DetalleOrden() {
    document.getElementById('DetOrden').innerHTML =
        `<section class="ordenes">
            <img src="img/carne_guisada.jpg" class="detalles-img" alt="">
            <div class="mx-3 py-4">
                <h2>Carne Guisada</h2>
                <h2>Lps. 50.00</h2>
                <p class="py-2">Carne de res guisada con ensalada de tomate y avichuelas</p>
                <div class="info py-2">
                    <div class="icon">
                    <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <h4 class="px-2">Col. Hato de en medio</h4>
                </div>
                <div class="info py-2">
                    <div class="icon">
                        <i class="fa-solid fa-utensils"></i>
                    </div>
                    <h4 class="px-2">20 minutos</h4>
                </div>
                <div class="info py-2">
                    <div class="icon">
                        <i class="fa-solid fa-kitchen-set"></i>
                    </div>
                    <h4 class="px-2">Kentucky</h4>
                </div>
                <div class="centro-btn">
                    <button class="btn btn-3 my-4" type="button">Tomar orden lps. 90.00</button>
                </div>
            </div>
        </section>`;
}

DetalleOrden();



function OpcionesEntregas() {
    document.getElementById('DetEntregas').innerHTML =
        `<section class="ordenes">
            <img src="img/carne_guisada.jpg" class="detalles-img" alt="">
            <div class="mx-3 py-2">
                <h2>Carne Guisada</h2>
                <h2>Lps. 50.00</h2>
                <p>Carne de res guisada con ensalada de tomate ya avichuelas</p>
                <div class="info">
                    <div class="icon">
                    <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <h4 class="px-2">Col. Hato de en medio</h4>
                </div>
                <div class="info">
                    <div class="icon">
                        <i class="fa-solid fa-utensils"></i>
                    </div>
                    <h4 class="px-2">20 minutos</h4>
                </div>
                <div class="info">
                    <div class="icon">
                        <i class="fa-solid fa-kitchen-set"></i>
                    </div>
                    <h4 class="px-2">Kentucky</h4>
                </div>
                <button class="btn btn-4 mx-2 my-2" type="button">Tomada</button>
                <button class="btn btn-4 mx-2 my-2" type="button">En Camino</button>
                <button class="btn btn-4 mx-2 my-2" type="button">En el Origen</button>
                <button class="btn btn-4 mx-2 my-2" type="button">En Destino</button>
                <div class="centro-btn">
                    <button class="btn btn-3 my-2" type="button">Entregar Orden</button>
                </div>
            </div>
        </section>`;
}

OpcionesEntregas();


/*
*/

































































































































































































































































































