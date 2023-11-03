const divMap = document.getElementById('prodVista')
const idProd = location.search.split('=')[1]
console.log(idProd);
const ubicationData = JSON.parse(localStorage.getItem('localProducts'))
const filterUbication = ubicationData.filter((fb)=> fb.id==Number(idProd))


divMap.innerHTML = filterUbication

    .map((detalle) => {
        const cardId = `card-${detalle.id}`;
        return `
            <div class="d-flex">
            <img 
            src="${detalle.imagen}" 
            class="card-img-top class-img" 
            alt="producto" 
            />
            <div class="card-body">
            <h5 class="card-title">${detalle.nombre}</h5>
            <p class="card-text">
                ${detalle.descripcion}
                </p>
                </div>
                </div>
    `;
    })
    