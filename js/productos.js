const productsStreetStyleArr = [
    {
      id: 1,
      nombre: "Zapatillas Nike Street Style special Edition",
      precio: "El precio de las zapatillas es de $33000",
      categoria: "Zapatillas",
      descripcion: "Zapatillas nike, estilo urbanas.",
      imagen: "https://images.pexels.com/photos/1570867/pexels-photo-1570867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      verso:"No te quedes sin demostrar tu mejor version, con la colaboracion de Nike & Street Style tendras las zapatiilas con mas estilo del 2023. ",
      individual:33000,
    },
    {
      id: 2,
      nombre: "Camiseta seleccion Argentina",
      precio: "El precio de la camiseta es de $30000",
      categoria: "Camisetas",
      descripcion: "Camiseta de la selección Argentina",
      imagen: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fwww.camisetasfutbol-replicas.com%2Fimages%2FCopa%2520Mundial%25202022%2FArgentina%2FPrimera_Camiseta_Argentina_2022_%282XL-4XL%29.jpg",
      verso:"No te quedes sin demostrar tu mejor version, con la camiseta de la seleccion campeona del mundo en Qatar 2022",
      individual:30000,
    },
    {
      id: 3,
      nombre: "Short deportivo",
      precio: "El precio del short es de $10000",
      categoria: "Shorts",
      descripcion: "Short deportivo para tus entrenamientos.",
      imagen: "https://falabella.scene7.com/is/image/FalabellaPE/16741094_1?wid=800&hei=800&qlt=70",
      verso:"No te quedes sin demotrar tu mejor version, con el short deportivo para hacer mejor tus entrenamientos",
      individual:10000,    
    },
    {
      id: 4,
      nombre: "Medias antideslizantes",
      precio: "El precio de las medias es de $8000",
      categoria: "Medias",
      descripcion: "Medias para que puedas practicar y entrenar",
      imagen: "https://deporstore.com/wp-content/uploads/2017/11/truNegra-480x480.jpg",
      verso:"No te quedes sin demotrar tu mejor version, con las medias antideslizantes para correr con la mejor proteccion",
      individual:8000,    
    },
    {
      id: 5,
      nombre: "Mochila deportiva",
      precio: "El precio de este producto es de $28000",
      categoria: "Mochilas",
      descripcion: "Mochila espaciosa y duradera para llevar tus pertenencias al gimnasio o tus actividades al aire libre.",
      imagen: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fwww.opensports.com.ar%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F4769e4d9f3516e60f2b4303f8e5014a8%2FF%2FS%2FFS8349_0.jpg",
      verso:"No te quedes sin demotrar tu mejor version, con la mochila deportiva donde podras llevar toda tu indumentaria",
      individual:28000,   
    },
    {
      id: 6,
      nombre: "Remera térmica deportiva",
      precio: "El precio de este producto es de $15000",
      categoria: "Termico",
      descripcion: "Remera térmica para tus actividades al aire libre.",
      imagen: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/921/products/flamrem11-e0b51bf4f8433d821d16001054665965-1024-10241-d934a882209ba5460216194529950435-480-0.jpg",
      verso:"No te quedes sin demotrar tu mejor version, con la remera termica deportiva para cuidarte de los climas extremos",
      individual:15000,    
    },
  ];

  const Products=()=>{
    const productoLs=JSON.parse(localStorage.getItem('localProducts'))||[]
    if (productoLs.length===0) {
      localStorage.setItem('localProducts',JSON.stringify(productsStreetStyleArr));
    }
    
  }
  Products();
  



