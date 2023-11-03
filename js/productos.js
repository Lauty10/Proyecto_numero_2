const productsStreetStyleArr = [
    {
      id: 1,
      nombre: "Zapatillas Nike Street Style special Edition",
      precio: 30000,
      categoria: "Zapatillas",
      descripcion: "Zapatillas nike, estilo urbanas.",
      imagen: "https://images.pexels.com/photos/1570867/pexels-photo-1570867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      nombre: "Camiseta seleccion Argentina",
      precio: 45000,
      categoria: "Camisetas",
      descripcion: "Camiseta de la selección Argentina",
      imagen: "https://portal.andina.pe/EDPfotografia3/Thumbnail/2022/12/26/000921527W.jpg",
    },
    {
      id: 3,
      nombre: "Short deportivo",
      precio: 20000,
      categoria: "Shorts",
      descripcion: "Short deportivo para tus entrenamientos.",
      imagen: "https://falabella.scene7.com/is/image/FalabellaPE/16741094_1?wid=800&hei=800&qlt=70",
    },
    {
      id: 4,
      nombre: "Medias antideslizantes",
      precio: 8000,
      categoria: "Medias",
      descripcion: "Medias para que puedas practicar y entrenar",
      imagen: "https://dasock.com.uy/wp-content/uploads/2021/06/Futbol-Blanca-1024x1024.jpg",
    },
    {
      id: 5,
      nombre: "Mochila deportiva",
      precio: 28000,
      categoria: "Mochilas",
      descripcion: "Mochila espaciosa y duradera para llevar tus pertenencias al gimnasio o tus actividades al aire libre.",
      imagen: "https://http2.mlstatic.com/mochila-futbol-adidas-stadium-ii-team-gray-hydroshield-ultra-D_NQ_NP_657863-MLM31903040575_082019-F.jpg",
    },
    {
      id: 6,
      nombre: "Remera térmica deportiva",
      precio: 18000,
      categoria: "Termico",
      descripcion: "Remera térmica para tus actividades al aire libre.",
      imagen: "https://th.bing.com/th/id/OIP.gB6xPujFHpcAVdFoaFpw7AHaHa?pid=ImgDet&rs=1",
    },
  ];

  const Products=()=>{
    localStorage.setItem('localProducts',JSON.stringify(productsStreetStyleArr));
  }
  Products();
  



