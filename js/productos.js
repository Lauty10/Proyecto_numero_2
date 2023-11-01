const productsStreetStyle = [
    {
      id: 1,
      nombre: "Calzado Nike",
      precio: 30000,
      marca: "Nike",
      descripcion: "Zapatillas nike, estilo urbanas.",
      imagen: "zapatillas.jpeg",
    },
    {
      id: 2,
      nombre: "Camiseta seleccion Argentina",
      precio: 45000,
      marca: "Camiseta seleccion Argentina",
      descripcion: "Camiseta de la selección Argentina",
      imagen: "CamisetaAfa.jpg",
    },
    {
      id: 3,
      nombre: "Short deportivo",
      precio: 20000,
      marca: "Nike",
      descripcion: "Short deportivo para tus entrenamientos.",
      imagen: "short.jpg",
    },
    {
      id: 4,
      nombre: "Medias antideslizantes",
      precio: 8000,
      marca: "Socks",
      descripcion: "Medias para que puedas practicar y entrenar",
      imagen: "medias.jpg",
    },
    {
      id: 5,
      nombre: "Mochila deportiva",
      precio: 28000,
      marca: "Adidas",
      descripcion: "Mochila espaciosa y duradera para llevar tus pertenencias al gimnasio o tus actividades al aire libre.",
      imagen: "mochila.jpg",
    },
    {
      id: 6,
      nombre: "Remera térmica deportiva",
      precio: 18000,
      marca: "Flash",
      descripcion: "Remera térmica para tus actividades al aire libre.",
      imagen: "termico.jpg",
    },
  ];
localStorage.setItem('localProducts',JSON.stringify(productsStreetStyle));