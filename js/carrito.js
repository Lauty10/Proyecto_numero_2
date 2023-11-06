const prodsCarr = JSON.parse(localStorage.getItem('arrCart'))
const bodyTable = document.getElementById('body-table')
bodyTable.innerHTML = prodsCarr.map((carrLs)=>`
<tr>

<td>${carrLs.nombre}</td>
<td>${carrLs.descripcion}</td>
<td>${carrLs.individual}</td>
<td> 
<input type="number" id="${carrLs.id}" class="form-control w-50" value="1"> 
</td>
<td id-prod=${carrLs.id}>
${carrLs.individual}
</td>
<td>
<button class="btn btn-warning" onclick="prodDelete(${carrLs.id})">Eliminar</button>
</tr>
`).join('');


const inputCount=document.querySelectorAll("input")

 const changeValue=(ev)=>{
 const {id,value}=ev.target
 const price= parseFloat(
    document.querySelector(`[id-prod="${id}"]`).textContent
 );


const res = price * value 
const total= document.querySelector(`[id-prod="${id}"]`);
total.innerHTML=res
 }  





inputCount.forEach((input) => {
    input.addEventListener("input",changeValue)
});  

const prodDelete=(ev)=>{
const prodsCarr=JSON.parse(localStorage.getItem("arrCart"));
const arrCartFilter=prodsCarr.filter((arrCartLs)=>arrCartLs.id!==ev);
if (arrCartFilter) {
    const deleteConfirm=confirm("Seguro deseas borrar este producto?");
    if (deleteConfirm) {
        localStorage.setItem('arrCart',JSON.stringify(arrCartFilter));
        window.location.reload()
    }
}else{
    alert("No se encontro el producto");
}
}