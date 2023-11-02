const arrProducts = JSON.parse(localStorage.getItem("localProducts"));
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
                <p class="card-text">${products.descripcion}</p>
                <a href="" class="btn btn-warning">Ver producto</a>
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



    

idInputSearch.addEventListener("input", searchProd);
