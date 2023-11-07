const arrProducts = JSON.parse(localStorage.getItem("localProducts"));
const imgPrincipal=document.getElementById("imgPrincipal");
const divsCards = document.getElementById("storeProducts");
const idInputSearch = document.getElementById("inputSearch");
divsCards.innerHTML = arrProducts
    .map((products) => {
        const cardId = `card-${products.id}`;
        return `
    <div class="col-sm-12 col-md-6 col-lg-4 mt-3">
        <div class="card mx-auto mt-3 mb-3 " id="${cardId}" style="width: 18rem;">
            <img src="${products.imagen}" class="card-img-top" alt="producto">
            <div class="card-body">
                <h5 class="card-title">${products.nombre}</h5>
                <p class="card-text">${products.descripcion}. El precio es de ${products.individual}</p>
                <a href="../html/detalle.html?id=${products.id}" class="btn btn-warning">Ver producto</a>
            </div>
        </div>
    </div>
    `;
    })
    .join("");


const searchProd = (ev) => {
    const { value} = ev.target;
    const backProd = JSON.parse(localStorage.getItem("localProducts"));
    const prodCards = backProd.filter((prodsArr) =>
        prodsArr.nombre.toLowerCase().includes(value.toLocaleLowerCase())
    );
    divsCards.innerHTML = prodCards
        .map((products) => {
            const cardId = `card-${products.id}`;
            return `
    <div class="col-sm-12 col-md-6 col-lg-4 mt-3">
        <div class="card mx-auto mt-3 mb-3 " id="${cardId}" style="width: 18rem;">
            <img src="${products.imagen}" class="card-img-top" alt="producto">
            <div class="card-body">
                <h5 class="card-title">${products.nombre}</h5>
                <p class="card-text">${products.descripcion}</p>
                <a href="" class="btn btn-warning">Ver producto</a>
            </div>
        </div>
    </div>
    `;
        })
        .join("");
};

const productDs = JSON.parse(localStorage.getItem('productDs')) || [];
imgPrincipal.innerHTML = productDs.map((pdp) => `
  <div id="imgPrincipal" class="divImg" style="position: relative; height: 50%; overflow: hidden;">
    <img src="${pdp.imagen}" alt="producto-destacado" class="class-img-principal" style= " width: 100%; object-fit: cover;">
    <div style="position: absolute; top: 50%; left: 0; right: 0; transform: translateY(-50%); text-align: center; background: rgba(0, 0, 0, 0.5); color: white;">
      <h1 style="font-size: 60px; font-family: 'Agbalumo', sans-serif; color: yellow;">Producto Destacado</h1>
    </div>
  </div>
`)




    






idInputSearch.addEventListener("input", searchProd);
