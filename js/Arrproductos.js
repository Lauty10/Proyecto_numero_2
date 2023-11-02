let usLsProduct = JSON.parse(localStorage.getItem('localProducts'))||[];
const bodyTableProducts=document.getElementById("body-table-products");
const productErrOne=document.getElementById("productErrOne");
const productErrTwo=document.getElementById("productErrTwo");
const productErrThree=document.getElementById("productErrThree");
productErrOne.classList.add("d-none");
productErrThree.classList.add("d-none");
productErrTwo.classList.add("d-none");
bodyTableProducts.innerHTML = usLsProduct.map((product) => `
  <tr>
    <th scope="row" class="user-id">${product.id}</th>
    <td>${product.nombre}</td>
    <td>${product.precio}</td>
    <td>${product.categoria}</td>
    <td class="col">
        <div class="row">
            <div class="col">
                <button class="btn btn-outline-danger my-1 mt-1" onclick="deleteProduct(${product.id})">Eliminar</button>
            </div>
            <div class="col">
                <button class="btn btn-outline-warning my-1  mt-1" data-bs-toggle="modal" data-bs-target="#product-modal-${product.id}">Editar</button>
            </div>
            <div class="col">
                <button class="btn btn-outline-success my-1  mt-1" onclick="DestacarProduct(${product.id})">Destacar</button>
            </div>
        </div>
        <div class="modal fade" id="product-modal-${product.id}" tabindex="-1" aria-labelledby="productLabel-${product.id}" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="productLabel-${product.id}">Editar producto</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="nameProductInputEdit" class="form-label">Nombre</label>
                            <input type="text" class="form-control" id="nameProductInputEdit-${product.id}" aria-describedby="emailHelp" name="nombre">
                        </div>
                        <div class="mb-3">
                            <label for="precioInputEdit" class="form-label">Precio</label>
                            <input type="text" class="form-control" id="precioInputEdit-${product.id}">
                        </div>
                        <div class="mb-3">
                            <label for="marcaNameIEdit" class="form-label">Marca</label>
                            <input type="text" class="form-control" id="marcaNameIEdit-${product.id}">
                        </div>
                        <button type="button" class="btn btn-primary" onclick="upDateProduct(${product.id})">Modificar</button>
                    </div>
                </div>
            </div>
        </div>
    </td>
  </tr>
`).join('');


const deleteProduct = (productId) => {
  const productIndex = usLsProduct.findIndex((product) => product.id === productId);
  if (productIndex !== -1) {
    const productName = usLsProduct[productIndex].nombre;
    const confirmDelete = window.confirm(`¿Estás seguro de que deseas eliminar el producto "${productName}"?`);
    if (confirmDelete) {
      const filteredProducts = usLsProduct.filter((product) => product.id !== productId);
      localStorage.setItem('localProducts', JSON.stringify(filteredProducts));
      usLsProduct = filteredProducts; 
      window.location.reload();
    }
  } else {
    alert("Producto no encontrado");
  }
}


const upDateProduct = (ev) => {
  const actulization = usLsProduct.map((productEdit) => {
    if (productEdit.id === ev) {
      const nameProductInputEdit = document.getElementById(`nameProductInputEdit-${ev}`).value;
      const precioInputEdit = document.getElementById(`precioInputEdit-${ev}`).value;
      const marcaNameIEdit = document.getElementById(`marcaNameIEdit-${ev}`).value;

      if (nameProductInputEdit) {
        productEdit.nombre = nameProductInputEdit;
      }

      if (precioInputEdit) {
        productEdit.precio = precioInputEdit;
      }

      if (marcaNameIEdit) {
        productEdit.marca = marcaNameIEdit;
      }

      if (!nameProductInputEdit) {
        alert("Ingrese un nombre de producto");
        return;
      }

      if (!precioInputEdit) {
        alert("Ingrese un precio de producto");
        return;
      }

      if (!marcaNameIEdit) {
        alert("Ingrese una marca de producto");
        return;
      }
    }
    return productEdit;
  });

  const validDate = actulization.filter((dt) => dt.nombre && dt.marca && dt.precio);
  localStorage.setItem('localProducts', JSON.stringify(validDate));
  window.location.reload();

  const DestacarProduct= (ds)=>{
    const productosDestacados = JSON.parse(localStorage.getItem("productDs")) || []
    const productDsFilter = usLsProduct.filter((dss)=> dss.id ===Number(ds) )
    if (productosDestacados.length>0){
      const confirmCambio = confirm("esta seguro que desea cambiar el producto destacado?")
      if (confirmCambio) {
      localStorage.setItem("productDs",JSON.stringify(productDsFilter))
      }
    }else{
      localStorage.setItem("productDs",JSON.stringify(productDsFilter))
    }
  }

createNewProductDate=()=>{
  const nameProduct=document.getElementById("nameProduct").value;
  const priceProduct=document.getElementById("priceProduct").value;
  const marcaProduct=document.getElementById("marcaProduct").value;
  const products=JSON.parse(localStorage.getItem("localProducts"))||[]
  const id= products.length>0 ? products[products.length-1].id + 1 : 1;
  const objetNewProduct={
    id,
    nombre:nameProduct,
    precio:priceProduct,
    marca:marcaProduct,
  }

  if (!nameProduct) {
    productErrOne.classList.remove("d-none");
  }

  if (!priceProduct) {
    productErrTwo.classList.remove("d-none");
  }

  if (!marcaProduct) {
    productErrThree.classList.remove("d-none");
  }

  if (nameProduct && priceProduct && marcaProduct) {
    usLsProduct.push(objetNewProduct);
    localStorage.setItem('localProducts',JSON.stringify(usLsProduct));
    window.location.reload()
  }

}

const productModal = new bootstrap.Modal(document.getElementById('exampleModal'));

productModal._element.addEventListener('hidden.bs.modal', function () {
  document.getElementById("nameProduct").value = "";
  document.getElementById("priceProduct").value = "";
  document.getElementById("marcaProduct").value = "";

  const errorElements = document.querySelectorAll(".text-danger");
  errorElements.forEach((element) => {
    element.classList.add("d-none");
  });
});
}

