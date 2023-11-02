const usLs = JSON.parse(localStorage.getItem('user')) || [];
const bodyTable = document.getElementById("body-table");
const modalErrOne=document.getElementById("modalErrOne");
const modalErrTwo=document.getElementById("modalErrTwo");
const modalErrThree=document.getElementById("modalErrThree");
const modalErrFor=document.getElementById("modalErrFor");
const modalErrFive=document.getElementById("modalErrFive");
const modalErrSix=document.getElementById("modalErrSix");
const modalErrEigth=document.getElementById("modalErrEigth");
const modalErrNine=document.getElementById("modalErrNine");
const modalErrTen=document.getElementById("modalErrTen");
const validRole=document.getElementById("validRole")
const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));

modalErrOne.classList.add("d-none");
modalErrTwo.classList.add("d-none");
modalErrThree.classList.add("d-none");
modalErrFor.classList.add("d-none");
modalErrFive.classList.add("d-none");
modalErrSix.classList.add("d-none");
modalErrEigth.classList.add("d-none");
modalErrNine.classList.add("d-none");
modalErrTen.classList.add("d-none");



bodyTable.innerHTML = usLs.map((usuario) => `
  <tr>
    <th scope="row" class="user-id">${usuario.id}</th>
    <td>${usuario.nombre}</td>
    <td>${usuario.correo}</td>
    <td>${usuario.role}</td>
    <td class="col">
      <div class="row">
        <div class="col">
          <button class="btn btn-outline-danger  my-1 mt-1" onclick="deleteUser(${usuario.id})">Eliminar</button>
        </div>
        <div class="col">
          <button class="btn btn-outline-warning my-1 mt-1" data-bs-toggle="modal" data-bs-target="#exampleModal-${usuario.id}">Editar</button>
        </div>
      </div>
      <div class="modal fade" id="exampleModal-${usuario.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Editar Usuario</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="nameInputEdit" class="form-label">Nombre</label>
                  <input type="text" class="form-control" id="nameInputEdit-${usuario.id}" aria-describedby="emailHelp" name="nombre">
                </div>
                <div class="mb-3">
                  <label for="emailInputEdit" class="form-label">Email</label>
                  <input type="text" class="form-control" id="emailInputEdit-${usuario.id}">
                </div>
                <div class="mb-3">
                  <label for="roleNameIEdit" class="form-label">Role</label>
                  <input type="text" class="form-control" id="roleNameIEdit-${usuario.id}">
                  <div class="text-danger text-center d-none" id="validRole-${usuario.id}">El role ingresado no es correcto</div>
                </div>
                <button type="button" class="btn btn-primary" onclick="upDateUser(${usuario.id})">Modificar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </td>
  </tr>
`).join('');

const deleteUser = (usEventDelet) => {
  const userIndex = usLs.findIndex((usIdx) => usIdx.id === usEventDelet);
  console.log(userIndex);
  if (userIndex !== -1) {
    if (usLs[userIndex].role!=="admin") {
      const filterArr = usLs.filter((usLsFilter) => usLsFilter.id !== usEventDelet);
      localStorage.setItem('user', JSON.stringify(filterArr));
      window.location.reload();
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Los administradores no pueden ser eliminados',
      })
    }
  } else {
    alert("No se encontró el usuario");
  }
}

const upDateUser = (usId) => {
  const actualizacion = usLs.map((user) => {
    if (user.id === usId) {
      const nameInputEdit = document.getElementById(`nameInputEdit-${usId}`).value;
      const emailInputEdit = document.getElementById(`emailInputEdit-${usId}`).value;
      const roleNameIEdit = document.getElementById(`roleNameIEdit-${usId}`).value;
      const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const validRoles = ["admin", "user"];
      if (!validEmail.test(emailInputEdit)) {
        alert("El correo electrónico no es válido. Debe tener un formato de email válido.");
        return
      }
      if (!validRoles.includes(roleNameIEdit)) {
        alert("El rol ingresado no es válido. Debe ser 'admin' o 'user'.");
        return
      }
      if (nameInputEdit==="") {
        alert("asigne un nombre")
        return
      }
      if (nameInputEdit) {
        user.nombre = nameInputEdit;
      }
      if (emailInputEdit) {
        user.correo = emailInputEdit;
      }
      if (roleNameIEdit) {
        user.role = roleNameIEdit;
      }
    }
    return user;
  });
  const usersWithValidData = actualizacion.filter((user) => user.nombre && user.correo && user.role);
  localStorage.setItem('user', JSON.stringify(usersWithValidData));
  window.location.reload();
};


const createNewUserAd=()=>{
  const createNewName=document.getElementById("createNewName").value
  const createNewEmail=document.getElementById("createNewEmail").value
  const createNewRole=document.getElementById("createNewRole").value
  const createNewPass=document.getElementById("createNewPass").value
  const createNewPassRepet=document.getElementById("createNewPassRepet").value
  const user=JSON.parse(localStorage.getItem("user"))||[]
  const id= user.length>0 ? user[user.length-1].id + 1 : 1;
  const objetNewAdmin={
    id,
    contrasenia:createNewPass,
    nombre:createNewName,
    role:createNewRole,
    correo:createNewEmail,
    login:false
  }
  const validEmail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const Email=createNewEmail

if (!validEmail.test(Email)) {
  modalErrNine.classList.remove("d-none");
  createNewEmail.value=""
}
  if (createNewName==="") {
    modalErrOne.classList.remove("d-none");
  }
  if (createNewPass==="") {
    modalErrThree.classList.remove("d-none");
  }

  if (createNewEmail==="") {
    modalErrTwo.classList.remove("d-none");
  }

  if (createNewRole==="") {
    modalErrFive.classList.remove("d-none");

  }

  if (createNewPassRepet==="") {
    modalErrFor.classList.remove("d-none");
  }

  if (createNewRole!=="admin") {
    modalErrTen.classList.remove("d-none")
  }

  if (createNewPassRepet!==createNewPass) {
    modalErrEigth.classList.remove("d-none");
    modalErrSix.classList.remove("d-none");
    createNewPassRepet.value=""
    createNewPass.value=""
  }



  if (createNewName!=="" && createNewPassRepet===createNewPass && validEmail.test(Email) && createNewRole==="admin") {
    usLs.push(objetNewAdmin);
    localStorage.setItem('user',JSON.stringify(usLs))
    window.location.reload()
  }
}

