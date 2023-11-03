const divMap = document.getElementById("prodVista");
const idProd = location.search.split("=")[1];
console.log(idProd);
const ubicationData = JSON.parse(localStorage.getItem("localProducts"));
const filterUbication = ubicationData.filter((fb) => fb.id == Number(idProd));

divMap.innerHTML = filterUbication.map((detalle) => {
  return `
  <div class="d-flex">
  <img 
      src="${detalle.imagen}"
      class="card-img-top class-img"
      alt="..."
      />
      <div class="card-body">
      <h5 class="card-title">${detalle.nombre}</h5>
      <p class="card-text">
      ${detalle.descripcion}
      </p>
      <button class='btn btn-warning' onclick="addCart(${detalle.id})">Agregar al carrito</button>
      </div>
      </div>

  `;
});
