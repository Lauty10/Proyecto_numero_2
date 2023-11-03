const divMap = document.getElementById("prodVista");
const idProd = location.search.split("=")[1];
console.log(idProd);
const ubicationData = JSON.parse(localStorage.getItem("localProducts"));
const filterUbication = ubicationData.filter((fb) => fb.id == Number(idProd));

divMap.innerHTML = filterUbication.map((detalle) => {

  return `
  <div id="product-container" class="d-flex justify-content-center align-items-center flex-column">
  <div class="card" style="width: 18rem;">
  <img src="${detalle.imagen}" class="card-img-top" alt="producto">
  <div class="card-body">
    <h5 class="card-title">${detalle.nombre}</h5>
    <p class="card-text">${detalle.descripcion}</p>
    <a href="#" class="btn btn-primary">Añadir al carrito</a>
  </div>
</div>
</div>
  `;
});
