const divMap = document.getElementById("prodVista");
const idProd = location.search.split("=")[1];
console.log(idProd);
const ubicationData = JSON.parse(localStorage.getItem("localProducts"));
const filterUbication = ubicationData.filter((fb) => fb.id == Number(idProd));
divMap.innerHTML = `
  <div class="d-flex flex-column">
    <h1 style="color: yellow; font-family: 'Kenia', sans-serif; font-size: 80px;box-shadow: 10px 10px 10px rgba(255, 255, 255, 0.9); " class="mt-5 mb-4 align-self-center">Tienda Street Style Argentina</h1>
    ${filterUbication.map((detalle) => `
      <div class="card-body">
        <h5 class="card-title mt-3 mb-3" style="color: white; font-family: 'Kenia', sans-serif; font-size: 50px; ">${detalle.nombre}</h5>
        <p class="card-text mt-5 mb-4" style="color: white; font-family: 'Kenia', sans-serif; font-size: 25px;">
          ${detalle.verso}
        </p>
        <button class='btn btn-warning mt-5 mb-5 me-5 w-20' onclick="addCart(${detalle.id})">Agregar al carrito</button>
        <img src="${detalle.imagen}" alt="Descripción de la imagen" class="imagen-tienda"  style="box-shadow: 10px 10px 10px rgba(255, 255, 0, 0.7); border: 10px solid rgba(255, 255, 0, 0,9);width: 200px; height: 200px;"">
      </div>
      <p class="card-text mt-5" style="color: white; font-family: 'Kenia', sans-serif; font-size: 45px;">
      ${detalle.descripcion}
    </p>
    </div>`
  ).join('')}
`;
