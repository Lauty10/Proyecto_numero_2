const nameR=document.getElementById("nameRegister");
const emailR=document.getElementById("emailRegister");
const passR=document.getElementById("passRegister");
const passRepet=document.getElementById("passRepetRegister");
const errOne=document.getElementById("errOne");
const errTwo=document.getElementById("errTwo");
const errThree=document.getElementById("errThree");
const errFor=document.getElementById("errFor");
const buttonInfo=document.getElementById("buttonInfo");
const errFive=document.getElementById("errFive");


errOne.classList.add("d-none")
errTwo.classList.add("d-none")
errThree.classList.add("d-none")
errFor.classList.add("d-none")
errFive.classList.add("d-none")


const dataInfo={
    name:"",
    email:"",
    pass:"",
    repet:""
}

const ValueInput=(ev)=>{
const {name,value}=ev.target
dataInfo[name]=value
if (dataInfo.name==="") {
    errOne.classList.remove("d-none")
    nameR.classList.add("input-error")
}
if (dataInfo.name!=="") {
    errOne.classList.add("d-none")
    nameR.classList.remove("input-error")
}
}

const ValueInputTwo=(ev)=>{
    const {name,value}=ev.target
    dataInfo[name]=value
    if (dataInfo.email==="") {
        errTwo.classList.remove("d-none")
        emailR.classList.add("input-error")

    }

    if (dataInfo.email!=="") {
        errTwo.classList.add("d-none")
        emailR.classList.remove("input-error")
    }
    }


const ValueInputThree=(ev)=>{
 const {name,value}=ev.target
 dataInfo[name]=value
 if (dataInfo.pass==="") {
    errThree.classList.remove("d-none")
    passR.classList.add("input-error")

}

if (dataInfo.pass!=="") {
    errThree.classList.add("d-none")
    passR.classList.remove("input-error")
}
  }

const ValueInputFor=(ev)=>{
const {name,value}=ev.target
  dataInfo[name]=value
  if (dataInfo.repet==="") {
    errFor.classList.remove("d-none")
    passRepet.classList.add("input-error")
}

if (dataInfo.repet!=="") {
    errFor.classList.add("d-none")
    passRepet.classList.remove("input-error")
}
  }


const ButtonTotal=()=>{
const{name,pass,repet,email}=dataInfo
if (pass!==repet) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Las contraseñias no coinciden',
      })
      nameR.value="";
      emailR.value="";
      passR.value="";
      passRepet.value="";
}
if (!name){
    errOne.classList.remove("d-none")
    nameR.classList.add("input-error")
}

if (!email) {
    errTwo.classList.remove("d-none")
    emailR.classList.add("input-error")
}

if (!pass) {
    errThree.classList.remove("d-none")
    passR.classList.add("input-error")
}

if (!repet) {
    errFor.classList.remove("d-none")
    passRepet.classList.add("input-error")
}

const valid=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const Email=emailR.value
if (!valid.test(Email)) {
    errFive.classList.remove("d-none")
    nameR.value="";
    emailR.value="";
    passR.value="";
    passRepet.value="";
}else{
    errFive.classList.add("d-none")
}
if (name && pass===repet && valid.test(Email)) {
    const user=JSON.parse(localStorage.getItem("user"))||[]
    const id= user.length>0 ? user[user.length-1].id + 1 : 1;
    const newObjData={
        id,
        nombre:dataInfo.name,
        contrasenia:dataInfo.pass,
        correo:dataInfo.email,
        role:"user"
    }
    user.push(newObjData)
    localStorage.setItem('user',JSON.stringify(user))
    Swal.fire({
        icon: 'success',
        title: 'Genial...',
        text: 'Iniciando Sesion',
      })
      nameR.value="";
      emailR.value="";
      passR.value="";
      passRepet.value="";
  setTimeout(()=>{
  location.href="../html/login.html"
   },3000)
}
}


nameR.addEventListener("input",ValueInput)
emailR.addEventListener("input",ValueInputTwo)
passR.addEventListener("input",ValueInputThree)
passRepet.addEventListener("input",ValueInputFor)
buttonInfo.addEventListener("click",ButtonTotal)
