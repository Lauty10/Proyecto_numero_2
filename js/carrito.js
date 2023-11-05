const prodsCarr = JSON.parse(localStorage.getItem('arrCart'))
const bodyTable = document.getElementById('body-table')
bodyTable.innerHTML = prodsCarr.map((carrLs)=>`
<tr>
<th scope="row" class="user-id">${carrLs.id}</th>
<td>${carrLs.nombre}</td>
<td>${carrLs.descripcion}</td>
<td>${carrLs.pu}</td>
<td> 
<input type="number" id="${carrLs.id}"> 
</td>
<td>
<button class="btn btn-warning" onclick="prodDelete(${carrLs.id})">Eliminar</button>

</tr>
`)



