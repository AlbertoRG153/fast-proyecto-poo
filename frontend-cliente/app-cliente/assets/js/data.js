///-----------------------------------------------CATEGORIAS-----------------------------------------------///
var categorias = [
    {
        codigoCategoria: 1,
        nombreCategoria: "Comida",
        imagen: "assets/img/categorias/comida.png",
        empresas: [
            {
                codigoEmpresa: 1,
                nombreEmpresa: "Burger King",
                imagen: "assets/img/empresas/comida/1.png",
                productos: [
                    {
                        codigoProducto: 1,
                        nombreProducto: "Hambuguesa de queso",
                        imagen: "assets/img/productos/comida/burgerking/1.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 150.00
                    },
                    {
                        codigoProducto: 2,
                        nombreProducto: "Hambuguesa de pollo",
                        imagen: "assets/img/productos/comida/burgerking/2.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 120.00
                    }

                ]
            },
            {
                codigoEmpresa: 2,
                nombreEmpresa: "KFC",
                imagen: "assets/img/empresas/comida/3.png",
                productos: [
                    {
                        codigoProducto: 3,
                        nombreProducto: "Cubeta de Pollo",
                        imagen: "assets/img/productos/comida/kfc/1.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 110.00
                    },
                    {
                        codigoProducto: 4,
                        nombreProducto: "Hamburguesa de pollo",
                        imagen: "assets/img/productos/comida/kfc/2.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 70.00
                    }
                ]
            },
            {
                codigoEmpresa: 3,
                nombreEmpresa: "Little Caesars",
                imagen: "assets/img/empresas/comida/4.png",
                productos: [
                    {
                        codigoProducto: 5,
                        nombreProducto: "Calzone",
                        imagen: "assets/img/productos/comida/littleceasars/1.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 75.00
                    },
                    {
                        codigoProducto: 6,
                        nombreProducto: "Pizza Gigante",
                        imagen: "assets/img/productos/comida/littleceasars/2.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 99.00
                    }
                ]
            },
            {
                codigoEmpresa: 4,
                nombreEmpresa: "McDonald's",
                imagen: "assets/img/empresas/comida/5.png",
                productos: [
                    {
                        codigoProducto: 7,
                        nombreProducto: "McNifica",
                        imagen: "assets/img/productos/comida/mcdonalds/1.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 160.00
                    },
                    {
                        codigoProducto: 8,
                        nombreProducto: "Big Mac",
                        imagen: "assets/img/productos/comida/mcdonalds/2.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 130.00
                    }
                ]
            },
            {
                codigoEmpresa: 5,
                nombreEmpresa: "Pizza Hut",
                imagen: "assets/img/empresas/comida/6.png",
                productos: [
                    {
                        codigoProducto: 9,
                        nombreProducto: "Lasagna de Pollo",
                        imagen: "assets/img/productos/comida/pizzahut/1.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 98.00
                    },
                    {
                        codigoProducto: 10,
                        nombreProducto: "Pizza de Pepperoni",
                        imagen: "assets/img/productos/comida/pizzahut/2.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 145.00
                    }
                ]
            }
        ]
    },
    {
        codigoCategoria: 2,
        nombreCategoria: "Farmacias",
        imagen: "assets/img/categorias/farmacia.png",
        empresas: [
            {
                codigoEmpresa: 6,
                nombreEmpresa: "Kielsa",
                imagen: "assets/img/empresas/farmacia/1.png",
                productos: [
                    {
                        codigoProducto: 11,
                        nombreProducto: "Acetaminophen",
                        imagen: "assets/img/productos/farmacia/kielsa/1.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 55.00
                    },
                    {
                        codigoProducto: 12,
                        nombreProducto: "Panadol",
                        imagen: "assets/img/productos/farmacia/kielsa/2.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 10.00
                    }
                ]
            },
            {
                codigoEmpresa: 7,
                nombreEmpresa: "Siman",
                imagen: "assets/img/empresas/farmacia/2.png",
                productos: [
                    {
                        codigoProducto: 13,
                        nombreProducto: "Tabcin",
                        imagen: "assets/img/productos/farmacia/siman/1.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 7.00
                    },
                    {
                        codigoProducto: 14,
                        nombreProducto: "Clonadex",
                        imagen: "assets/img/productos/farmacia/siman/2.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 47.00
                    }
                ]
            }
        ]
    },
    {
        codigoCategoria: 3,
        nombreCategoria: "Ropa y Calzado",
        imagen: "assets/img/categorias/ropa.png",
        empresas: [
            {
                codigoEmpresa: 8,
                nombreEmpresa: "Bershka",
                imagen: "assets/img/empresas/ropa/1.png",
                productos: [
                    {
                        codigoProducto: 15,
                        nombreProducto: "Camisa Azul",
                        imagen: "assets/img/productos/ropa/bershka/1.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 136.00
                    },
                    {
                        codigoProducto: 16,
                        nombreProducto: "Sueter Blanco",
                        imagen: "assets/img/productos/ropa/bershka/2.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 423.00
                    }
                ]
            },
            {
                codigoEmpresa: 9,
                nombreEmpresa: "Pull & Bear",
                imagen: "assets/img/empresas/ropa/2.png",
                productos: [
                    {
                        codigoProducto: 17,
                        nombreProducto: "Sueter Negro",
                        imagen: "assets/img/productos/ropa/pullandbear/1.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 455.00
                    },
                    {
                        codigoProducto: 18,
                        nombreProducto: "Jean Azul",
                        imagen: "assets/img/productos/ropa/pullandbear/2.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 894.00
                    }
                ]
            }
        ]
    },
    {
        codigoCategoria: 4,
        nombreCategoria: "Supermercados",
        imagen: "assets/img/categorias/super.png",
        empresas: [
            {
                codigoEmpresa: 10,
                nombreEmpresa: "La colonia",
                imagen: "assets/img/empresas/super/1.png",
                productos: [
                    {
                        codigoProducto: 19,
                        nombreProducto: "Jugo Leyde",
                        imagen: "assets/img/productos/super/colonia/1.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 23.00
                    },
                    {
                        codigoProducto: 20,
                        nombreProducto: "Te Lipton",
                        imagen: "assets/img/productos/super/colonia/2.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 22.00
                    }
                ]
            },
            {
                codigoEmpresa: 11,
                nombreEmpresa: "Walmart",
                imagen: "assets/img/empresas/super/2.png",
                productos: [
                    {
                        codigoProducto: 21,
                        nombreProducto: "Coca Cola",
                        imagen: "assets/img/productos/super/walmart/1.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 30.00
                    },
                    {
                        codigoProducto: 22,
                        nombreProducto: "Papel Scott",
                        imagen: "assets/img/productos/super/walmart/2.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 78.00
                    }
                ]
            }
        ]
    },
    {
        codigoCategoria: 5,
        nombreCategoria: "Deporte",
        imagen: "assets/img/categorias/deporte.png",
        empresas: [
            {
                codigoEmpresa: 12,
                nombreEmpresa: "Nike",
                imagen: "assets/img/empresas/deporte/1.png",
                productos: [
                    {
                        codigoProducto: 23,
                        nombreProducto: "Nike Jordan",
                        imagen: "assets/img/productos/deporte/nike/1.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 4300.00
                    },
                    {
                        codigoProducto: 24,
                        nombreProducto: "Air Force 1",
                        imagen: "assets/img/productos/deporte/nike/2.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 3382.00
                    }
                ]
            },
            {
                codigoEmpresa: 13,
                nombreEmpresa: "Adidas",
                imagen: "assets/img/empresas/deporte/2.png",
                productos: [
                    {
                        codigoProducto: 25,
                        nombreProducto: "Tenis Negro",
                        imagen: "assets/img/productos/deporte/adidas/1.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 990.00
                    },
                    {
                        codigoProducto: 26,
                        nombreProducto: "Raqueta",
                        imagen: "assets/img/productos/deporte/adidas/2.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 1160.00
                    }
                ]
            }
        ]
    },
    {
        codigoCategoria: 6,
        nombreCategoria: "Tecnologia",
        imagen: "assets/img/categorias/tecnologia.png",
        empresas: [
            {
                codigoEmpresa: 14,
                nombreEmpresa: "PcBuilds",
                imagen: "assets/img/empresas/tecnologia/1.png",
                productos: [
                    {
                        codigoProducto: 27,
                        nombreProducto: "PC Gama Alta",
                        imagen: "assets/img/productos/tecnologia/pcbuilds/1.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 25000.00
                    },
                    {
                        codigoProducto: 28,
                        nombreProducto: "Nvidia RTX 3090",
                        imagen: "assets/img/productos/tecnologia/pcbuilds/2.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 45000.00
                    }
                ]
            },
            {
                codigoEmpresa: 15,
                nombreEmpresa: "Gamestation",
                imagen: "assets/img/empresas/tecnologia/2.png",
                productos: [
                    {
                        codigoProducto: 29,
                        nombreProducto: "The Last of Us",
                        imagen: "assets/img/productos/tecnologia/gamestation/1.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 1500.00
                    },
                    {
                        codigoProducto: 30,
                        nombreProducto: "Mando PS4",
                        imagen: "assets/img/productos/tecnologia/gamestation/2.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 1600.00
                    }
                ]
            }
        ]
    }
];

///-----------------------------------------------USUARIOS-----------------------------------------------///
var clientes = [
    {
        codigoCliente: 1,
        nombre: "Juan",
        apellido: "Perez",
        imagen: "assets/img/usuarios/hombre.png",
        correo: "juanperez@gmail.com",
        fechaNacimiento: "06/11/1992",
        genero: "Masculino",
        contrasena: "asd123",
        telefono: "8888-9999",
        pedido: [
            1,
            2
        ]
    },
    {
        codigoCliente: 2,
        nombre: "Maria",
        apellido: "Acevedo",
        imagen: "assets/img/usuarios/mujer.png",
        correo: "maria@gmail.com",
        fechaNacimiento: "06/11/1992",
        genero: "Femenino",
        contrasena: "asd123",
        telefono: "8888-9999",
        pedido: [
            3,
            4
        ]
    },
    {
        codigoCliente: 3,
        nombre: "Luis",
        apellido: "Lopez",
        imagen: "assets/img/usuarios/hombre.png",
        correo: "luis@gmail.com",
        fechaNacimiento: "06/11/1992",
        genero: "Masculino",
        contrasena: "asd123",
        telefono: "8888-9999",
        pedido: [
            5
        ]
    }
]