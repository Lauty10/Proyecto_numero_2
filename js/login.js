const emailLogin=document.getElementById("emailLogin");
const PassLogin=document.getElementById("PassLogin");
const errSix=document.getElementById("errSix");
const errSeven=document.getElementById("errSeven");
const buttonLogin=document.getElementById("buttonLogin");
const errOcho=document.getElementById("errOcho")
const errNuv=document.getElementById("errNuv")

errSix.classList.add("d-none");
errSeven.classList.add("d-none");
errOcho.classList.add("d-none")
errNuv.classList.add("d-none")

const ValidDate={
   emailInput:"",
   passInput:""
}

const ValidEmail=(ev)=>{
const {name,value}=ev.target
ValidDate[name]=value
const{emailInput}=ValidDate
if (emailInput==="") {
    errSix.classList.remove("d-none")
}else{
    errSix.classList.add("d-none")
}

if (emailLogin.value==="") {
    emailLogin.classList.add("input-error")
}else{
    emailLogin.classList.remove("input-error")
}
}

const ValidPass=(ev)=>{ 
const {name,value}=ev.target
ValidDate[name]=value
const{passInput}=ValidDate
if (passInput==="") {
    errSeven.classList.remove("d-none")
}else{
    errSeven.classList.add("d-none")
}

if (PassLogin.value==="") {
    PassLogin.classList.add("input-error")
}else{
    PassLogin.classList.remove("input-error")
}
 }
    
 const ValidButtonLogin = () => {
    const {emailInput,passInput } = ValidDate;
    const individual = {
        correo: emailInput,
        login: true,
    };
    localStorage.setItem("individualUser",JSON.stringify(individual));
    const datosUser = JSON.parse(localStorage.getItem('user'));
    const FilterEmail = datosUser.find((user) => user.correo === emailInput);
    const filterPosition=datosUser.findIndex((positionLs)=>positionLs.correo === emailInput);
    if (FilterEmail &&FilterEmail.contrasenia === passInput) {
        Swal.fire({
            icon: 'success',
            title: 'Genial...',
            text: 'Iniciado Sesión',
        });

        PassLogin.value = "";
        emailLogin.value = "";

        setTimeout(() => {
            datosUser[filterPosition].login=true
            localStorage.setItem('user',JSON.stringify(datosUser));
            if (FilterEmail.role === "admin") {
                location.href = "../html/Pag-admin.html";
            } else {
                datosUser[filterPosition].login=true
                localStorage.setItem('user',JSON.stringify(datosUser));
                location.href = "../html/Pagina-Principal-Login.html";
            }
        }, 2000);
    } else {
        errNuv.classList.remove("d-none");
        errOcho.classList.remove("d-none");
        PassLogin.value = "";
    }
}


emailLogin.addEventListener('input',ValidEmail);
PassLogin.addEventListener('input',ValidPass);
buttonLogin.addEventListener('click',ValidButtonLogin)


