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
const passErr=document.getElementById("passErr");
const passErrTwo=document.getElementById("passErrTwo")


errOne.classList.add("d-none")
errTwo.classList.add("d-none")
errThree.classList.add("d-none")
errFor.classList.add("d-none")
errFive.classList.add("d-none")
passErr.classList.add("d-none")
passErrTwo.classList.add("d-none")


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
  passR.value="";
  passRepet.value=""
  passErr.classList.remove("d-none");
  passErrTwo.classList.remove("d-none");
}else{
    passErr.classList.add("d-none");
    passErrTwo.classList.add("d-none");
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
    emailR.value="";
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
        role:"admin",
        login:false,
    }
    user.push(newObjData)
    localStorage.setItem('user',JSON.stringify(user))
    Swal.fire({
        icon: 'success',
        title: 'Genial...',
        text: 'Usted se registro correctamente',
      })
      nameR.value="";
      emailR.value="";
      passR.value="";
      passRepet.value="";
     if (newObjData.role==="user") {
        setTimeout(()=>{
            location.href="../html/Pagina-Principal-Login.html"
        },2000)
     } else{
        setTimeout(()=>{
            location.href="../html/Pag-admin.html"
        },2000)
     }
 
}
}

const sendForm=()=>{
    Email.send({
        SecureToken : "3638cd06-4205-4602-9268-e68a45098c20",
        Host : "smtp.elasticemail.com",
        Username : "lautylbs@hotmail.com",
        Password : "CD0E74F53D4BDE314B2A9B2330A554E11C23",
        To : emailR.value,
        From : "lautylbs@hotmail.com",
        Subject : "Gracias por registrarse",
        Body : "Bienvenido a Street Style, Espero que nuestros productos sean de su agrado"
    })
}


nameR.addEventListener("input",ValueInput)
emailR.addEventListener("input",ValueInputTwo)
passR.addEventListener("input",ValueInputThree)
passRepet.addEventListener("input",ValueInputFor)
buttonInfo.addEventListener("click",ButtonTotal)
