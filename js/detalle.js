const divMap = document.getElementById("prodVista");
const idProd = location.search.split("=")[1];
console.log(idProd);
const ubicationData = JSON.parse(localStorage.getItem("localProducts"));
const filterUbication = ubicationData.filter((fb) => fb.id == Number(idProd));

divMap.innerHTML = filterUbication.map((detalle) => {
    return `
      <div class="container">
        <div class="product-card">
          <img 
            src="${detalle.imagen}" 
            class="card-img-top class-img" 
            alt="producto" 
            style="width: 50%;"  
          />
          <div class="card-body">
            <h5 class="card-title">${detalle.nombre}</h5>
            <p class="card-text">
              ${detalle.descripcion}
            </p>
          </div>
        </div>
      </div>
    `;
  });
  
  
  