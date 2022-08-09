
var Motoristas = [
    {
        nombre:"Juan",
        apellido:"Sanchez",
        codigo:001,
        imagen:"img/",
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
        ordenes:[

            {
                nombreProducto:"Pollo Empanizado",
                descripcion: "",
                cantidad:2,
                precio:0
            },
        ]
    },
    {
        nombre:"David",
        apellido:"Herrera",
        codigo:045,
        imagen:"img/",
        ordenes:[
            {
                nombreProducto:"Pollo Asado",
                descripcion: "",
                cantidad:2,
                precio:85.00
            },
        ]
    },
    {
        nombre:"Manuel",
        apellido:"Osorto",
        codigo:279,
        imagen:"img/",
        ordenes:[
            {
                nombreProducto:"Pollo Empanizado",
                descripcion: "Pollo ",
                cantidad:2,
                precio:0
            },
        ]
    },
    {
        nombre:"Alexis",
        apellido:"Cruz",
        codigo:221,
        imagen:"img/",
        ordenes:[

            {
                nombreProducto:"Carne Guisada",
                descripcion: "",
                cantidad:2,
                precio:0
            },
        ]
    },
    {
        nombre:"Raul",
        apellido:"Fonseca",
        codigo:074,
        imagen:"img/",
        ordenes:[

            {
                nombreProducto:"Pizza de jamon",
                descripcion: "",
                cantidad:2,
                precio:0
            },
        ]
    },
];



var usuarios = [
    {
        nombre:"Luis",
        apellido:"Rodriguez",
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


var categorias = [
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
    },
];


