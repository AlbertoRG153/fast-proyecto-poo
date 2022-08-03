
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
                precio:0
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
                descripcion: "",
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
                precio:0
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
                        precio: 90.00
                    },
                    {
                        nombreProducto: "Pizza de jamon",
                        descripcion: "La pizza de jamon, es esta compuesta con los ingredientes que son, el jamon, queso en sus orillas y aceitunas",
                        imagen:"img/",
                        precio: 0
                    },
                    {
                        nombreProducto: "Alistas de pollo",
                        descripcion: "",
                        precio: 0
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
                        precio: 60.00
                    },
                    {
                        nombreProducto: "Pizza con vegetales",
                        descripcion: "",
                        precio: 0
                    },
                    {
                        nombreProducto: "Pan de ajo",
                        descripcion: "",
                        precio: 0
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
                        precio: 0
                    },
                    {
                        nombreProducto: "ensalada de Vegetales",
                        descripcion: "",
                        precio: 0
                    },
                    {
                        nombreProducto: "Pizza Suprema",
                        descripcion: "",
                        precio: 0
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
                        precio: 90.00
                    },
                    {
                        nombreProducto: "hamburguesa king",
                        descripcion: "",
                        precio: 0
                    },
                    {
                        nombreProducto: "Submarino Supremo",
                        descripcion: "",
                        precio: 0
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
                        precio: 0
                    },
                    {
                        nombreProducto: "Pepito",
                        descripcion: "",
                        precio: 0
                    },
                    {
                        nombreProducto: "Hamburguesa con doble carne",
                        descripcion: "",
                        precio: 0
                    }
                ]
            },
            {
                nombreEmpresa: "Wendy's",
                codigo:001,
                imagen:"",
                productos:[
                    {
                        nombreProducto: "PHamburguesa King",
                        descripcion: "",
                        precio: 0
                    },
                    {
                        nombreProducto: "Pan encebollado",
                        descripcion: "",
                        precio: 0
                    },
                    {
                        nombreProducto: "Hamburguesa mixta",
                        descripcion: "",
                        precio: 0
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
                        precio: 50.00
                    },
                    {
                        nombreProducto: "Chuleta de cerdo",
                        descripcion: "",
                        precio: 0
                    },
                    {
                        nombreProducto: "Pollo Asado",
                        descripcion: "Ingresientes este pollo esta hecho a la parrilla,con papas fritas y chile picante",
                        precio: 0
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
                        precio: 0
                    },
                    {
                        nombreProducto: "Pechuga de Pollo",
                        descripcion: "",
                        precio: 0
                    },
                    {
                        nombreProducto: "Deditos de Pollo",
                        descripcion: "",
                        precio: 0
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
                        precio: 50.00
                    },
                    {
                        nombreProducto: "Ensalada de Vegetales",
                        descripcion: "",
                        precio: 0
                    },
                    {
                        nombreProducto: "Arroz con frijoles",
                        descripcion: "",
                        precio: 0
                    }
                ]
            }
        ]
    },
];


